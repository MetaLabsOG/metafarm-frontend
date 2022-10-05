import { Buffer } from 'buffer';
import { ChangeEvent, useEffect, useState } from 'react';
import { SelectedOptionValue } from 'react-select-search';
import { Account } from '@reach-sh/stdlib/ALGO';
import { useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { getSuggestedParams, mkTxParams, MyAlgoWalletSession, testnetURL } from '@algo-builder/web';
import { mkTransaction } from '@algo-builder/web/build/lib/txn';
import {
    AlgoTransferParam,
    AppCallsParam,
    AppDefinitionFromFile,
    AppDefinitionFromSourceCompiled,
    AppOptionalFlags,
    DeployAppParam,
    ExecParams,
    MetaType,
    SignType,
    StorageConfig,
    TransactionType,
} from '@algo-builder/web/build/types';
import {
    Algodv2,
    assignGroupID,
    getApplicationAddress,
    makeApplicationCreateTxn,
    makePaymentTxn,
    makePaymentTxnWithSuggestedParams,
    OnApplicationComplete,
    Transaction,
} from 'algosdk';
import { zip } from 'ramda';
import { getTokens } from '../Swap/Swap';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { Select, SelectType, TOKEN_OPTION } from '../Components/Select/Select';
import { TokenOptionType } from '../Components/Select/types';
import { SelectInputGroup } from '../Components/SelectInputGroup/SelectInputGroup';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { $account, $balances, $meanRoundDuration, $networkTime, AppId, AssetId } from '../common/store';
import { Heading2, ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { notify } from '../Components/Notification';
import { algod, FARM_FLAT_ALGO_CREATION_FEE, reach } from '../AppContext';
import { logEvent, LogName } from '../logEvent';
import { DexProvider } from '../dexes';
import { DexSwitch } from '../Zap/Zap';
import { AddFarmRow, DateInput } from '../Farm/styled';
import { calculateTimeByBlock, daysToBlocks } from '../Farm/AddFarm';
import { approvalProgram } from './vault_approval_source';
import { clearProgram } from './vault_clear_source';
import { makeSetupTxs, SetupParams } from './vault-tx-params';
import * as VaultTx from './vault-tx-params';
import * as CommonTx from './common-tx-params';
import {
    instantiatePactTemplate,
    makeAddLiquidityTxs,
    makeCreateLiquidityTokenTx,
    makeDeployPactDefinition,
    makeOptInTx,
} from './pact-tx-params';

const MIN_ALLOWED_ALGO_BALANCE = 5;

const checkLaaSParams = (
    stakeToken: TokenOptionType,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardAmount: number,
    algoToken: TokenOptionType,
    extraAlgoRewardAmount: number
) => {
    if (!stakeToken.id) {
        notify('Please, choose LP pool.', 'warning');
        return false;
    }
    if (Number.isNaN(rewardToken.id)) {
        notify('Please, choose reward token.', 'warning');
        return false;
    }

    if (Number.isNaN(beginBlock) || beginBlock >= endBlock) {
        notify('Please, choose start time and farm duration.', 'warning');
        return false;
    }
    if (Number.isNaN(rewardAmount) || rewardAmount === 0) {
        notify('Please, enter reward amount.', 'warning');
        return false;
    }

    if (!Number.isNaN(rewardToken.balance) && rewardToken.balance < rewardAmount) {
        notify('Reward tokens amount is less than the wallet balance.', 'warning');
        return false;
    }

    const minAlgoBalance = Number(FARM_FLAT_ALGO_CREATION_FEE) + extraAlgoRewardAmount + MIN_ALLOWED_ALGO_BALANCE;
    if (!Number.isNaN(algoToken.balance) && algoToken.balance < minAlgoBalance) {
        const needAlgo = minAlgoBalance - algoToken.balance;
        notify(
            `Not enough ALGO. Please deposit at least ${Math.round(needAlgo)} ALGO to proceed.
            Some ALGOs are reserved by Algorand Network. 
            Creation fee is ${FARM_FLAT_ALGO_CREATION_FEE} ALGO. 
            So minimum balance to create the pool is ${minAlgoBalance}.`,
            'warning'
        );
        return false;
    }

    return true;
};

// Helper function to compile program source
export async function compileProgram(client: Algodv2, programSource: string): Promise<Uint8Array> {
    const encoder = new TextEncoder();
    const programBytes = encoder.encode(programSource);
    const compileResponse = await client.compile(programBytes).do();
    return new Uint8Array(Buffer.from(compileResponse.result, 'base64'));
}

export const sendAlgodTxsViaReachWallet = async (txs: ExecParams[]) => {
    const sp = await getSuggestedParams(algod);
    const txParams = await Promise.all(txs.map(async (param) => mkTxParams(algod, param.payFlags, sp)));
    const txsWithParams = zip(txs, txParams);

    const algodTxs = [];

    for (const [param, algodParam] of txsWithParams) {
        const tx = mkTransaction(param, algodParam);
        algodTxs.push(tx);
    }

    assignGroupID(algodTxs);

    const reachTxs = algodTxs.map((tx) => ({ txn: Buffer.from(tx.toByte()).toString('base64') }));

    const p = await reach.getProvider();

    return p.signAndPostTxns(reachTxs);
};

export function makeVaultDefinition(
    approvalProgramBytes: Uint8Array,
    clearProgramBytes: Uint8Array,
    foreignAssets: AssetId[],
    liquidityPoolApp: AppId
): AppDefinitionFromSourceCompiled {
    // TODO check if it's right
    const appStorageConfig: StorageConfig = {
        appName: 'laasVault',
        localInts: 0,
        localBytes: 0,
        globalInts: 16,
        globalBytes: 8,
        extraPages: 3,
    };

    const appOptionalFlags: AppOptionalFlags = {
        appArgs: [],
        accounts: [],
        foreignApps: [liquidityPoolApp], // TODO
        foreignAssets,
        // Note?: Uint8Array;
        // lease?: Uint8Array;
    };

    // TODO use makeApplicationCreate?
    return {
        metaType: MetaType.BYTES as const,
        approvalProgramBytes,
        clearProgramBytes,
        // TODO I guess i don't need it here right now?
        ...appOptionalFlags,
        ...appStorageConfig,
    };
}

async function deployVault(ammAppId: AppId, aToken: AssetId, bToken: AssetId, lpToken: AssetId) {
    const tokens = [aToken, bToken, lpToken];

    // TODO: TEAL 6 one, need to try with TEAL 5

    const approvalProgramBytes = await compileProgram(algod, approvalProgram);
    const clearProgramBytes = await compileProgram(algod, clearProgram);

    // Console.log('Approval program bytes:', approvalProgramBytes);
    // console.log('Clear program bytes:', clearProgramBytes);
    console.log('Deploying vault...');
    const appDef = makeVaultDefinition(approvalProgramBytes, clearProgramBytes, tokens, ammAppId);

    const acc = await reach.getDefaultAccount();
    const execParam: DeployAppParam = {
        type: TransactionType.DeployApp,
        sign: SignType.SecretKey,
        fromAccount: { addr: acc.networkAccount.addr, sk: new Uint8Array(0) },
        appDefinition: appDef,
        payFlags: { totalFee: 5000 }, // TODO 5000 is arbitrary
    };

    await sendAlgodTxsViaReachWallet([execParam]);
}

async function deployPactPool(aToken: AssetId, bToken: AssetId) {
    const tokens = [aToken, bToken];

    const { approvalCode, clearCode } = instantiatePactTemplate(
        aToken,
        bToken,
        30,
        30,
        'G5WRMSA3AGJRBI6WXUZOM64STKWGBHKPVCWGMCSK4ZJEZXRCVPRNCGN5YI'
    );

    const approvalProgramBytes = await compileProgram(algod, approvalCode);
    const clearProgramBytes = await compileProgram(algod, clearCode);

    const appDef = makeDeployPactDefinition(approvalProgramBytes, clearProgramBytes, aToken, bToken);
    const acc = await reach.getDefaultAccount();
    const execParam: DeployAppParam = {
        type: TransactionType.DeployApp,
        sign: SignType.SecretKey,
        fromAccount: { addr: acc.networkAccount.addr, sk: new Uint8Array(0) },
        appDefinition: appDef,
        payFlags: { totalFee: 5000 }, // TODO 5000 is arbitrary
    };

    await sendAlgodTxsViaReachWallet([execParam]);
}

async function fundApp(vaultAppId: AppId) {
    // TODO it shall happen right after creation, we just need to get appId somehow
    console.log('Funding AMM with ALGO for fees...');
    const vaultAddress = getApplicationAddress(vaultAppId);
    console.log('Deployed vault:', { id: vaultAppId, address: vaultAddress });
    // TODO can we do it in init via payFlags? Would be a bit simpler for consumers
    const acc = await reach.getDefaultAccount();
    const fundAppParam = CommonTx.makeFundAppTx({ addr: acc.networkAccount.addr, sk: new Uint8Array(0) }, vaultAddress);

    await sendAlgodTxsViaReachWallet([fundAppParam]);

    console.log('Vault is ready (but needs setup)!');
}

async function setupVault(vaultAppId: AppId, ammAppId: AppId, aToken: AssetId, bToken: AssetId, lpToken: AssetId) {
    console.log('Setting up vault app and funding with A...');
    const vaultAddress = getApplicationAddress(vaultAppId);
    const setupParams: SetupParams = {
        vaultRunBlocks: 1_000_000,
        liquidityPoolApp: ammAppId,
    };

    const acc = await reach.getDefaultAccount();
    const typedAcc = { addr: acc.networkAccount.addr, sk: new Uint8Array(0) };

    const initialAmountA = 1000;

    const setupTxs = makeSetupTxs(
        typedAcc,
        vaultAppId,
        vaultAddress,
        setupParams,
        initialAmountA,
        aToken,
        bToken,
        lpToken
    );

    await sendAlgodTxsViaReachWallet(setupTxs);
}

async function pactCreateLiquidityTokenTx(appId: AppId, a: AssetId, b: AssetId) {
    const acc = await reach.getDefaultAccount();
    const typedAcc = { addr: acc.networkAccount.addr, sk: new Uint8Array(0) };
    const appCallTx: AppCallsParam = makeCreateLiquidityTokenTx(typedAcc, appId, a, b);
    await sendAlgodTxsViaReachWallet([appCallTx]);
}

async function pactOptIn(appId: AppId, a: AssetId, b: AssetId) {
    const acc = await reach.getDefaultAccount();
    const typedAcc = { addr: acc.networkAccount.addr, sk: new Uint8Array(0) };
    const appCallTx: AppCallsParam = makeOptInTx(typedAcc, appId, a, b);
    await sendAlgodTxsViaReachWallet([appCallTx]);
}

async function pactAddLiq(appId: AppId, a: AssetId, b: AssetId, lp: AssetId) {
    const initialLiquidity = 10001; // Minimum
    const acc = await reach.getDefaultAccount();
    const typedAcc = { addr: acc.networkAccount.addr, sk: new Uint8Array(0) };
    const addInitialLiqTxs = makeAddLiquidityTxs(
        typedAcc,
        appId,
        getApplicationAddress(appId),
        lp,
        a,
        b,
        initialLiquidity,
        initialLiquidity
    );
    await sendAlgodTxsViaReachWallet(addInitialLiqTxs);
}

const createVault = async (
    account: Account,
    stakeToken: TokenOptionType,
    rewardToken: TokenOptionType,
    beginBlock: number,
    endBlock: number,
    rewardAmount: number,
    algoToken: TokenOptionType,
    extraAlgoRewardAmount: number
) => {
    // TODO validation is needed
    /* if (
        !checkLaaSParams(stakeToken, rewardToken, beginBlock, endBlock, rewardAmount, algoToken, extraAlgoRewardAmount)
    ) {
        return false;
    } */

    try {
        // TODO TestNet or MainNet
        const walletURL = {
            token: '',
            server: testnetURL,
            port: '',
        };
        const wcSession = new MyAlgoWalletSession(walletURL);
        await wcSession.connectToMyAlgo();

        const acc = await reach.getDefaultAccount();

        console.log('Default account is', acc.networkAccount.addr);

        const sp = await getSuggestedParams(algod);

        const USDC_ID = 10458941;
        const ALGF_ID = 70283957;
        const PLP_ID = 114635758;

        // MY CUSTOM POOL! USDC-ALGF
        const PACT_POOL_APP_ID = 114634485;

        // await deployPactPool(USDC_ID, ALGF_ID);
        // await fundApp(PACT_POOL_APP_ID);
        // await pactCreateLiquidityTokenTx(PACT_POOL_APP_ID, USDC_ID, ALGF_ID);
        // await pactOptIn(PACT_POOL_APP_ID, USDC_ID, ALGF_ID);
        // await pactAddLiq(PACT_POOL_APP_ID, USDC_ID, ALGF_ID, PLP_ID);

        // Order matters (in terms of id)
        // await deployVault(PACT_POOL_APP_ID, USDC_ID, ALGF_ID, PLP_ID);

        // TODO: how to get created app id?
        const vaultAppId = 114637307;
        const vaultAppAddr = getApplicationAddress(vaultAppId);

        await fundApp(vaultAppId);
        await setupVault(vaultAppId, PACT_POOL_APP_ID, USDC_ID, ALGF_ID, PLP_ID);

        // This.tokens.slp = Number(this.runtime.getGlobalState(this.vaultAppId, 'slp_token'));

        // console.log(`Opting in into Vault SLP tokens... (id=${this.tokens.slp})`);
        // this.runtime.optInToASA(this.tokens.slp, this.vaultLiquidityProvider.address, {});

        console.log('OMG CANT BELIVE IT WORKS!');
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        console.log(error);
        if (error_message.includes('cancelled') || error_message.includes('The User has rejected')) {
            notify('Operation is cancelled.', 'warning');
        } else if (error_message.includes('popup')) {
            notify('Popups are blocked. Please, allow popups in your browser.', 'error');
        } else if (error_message.includes('below min')) {
            notify('Not enough ALGOs in the wallet.', 'error');
        } else {
            notify(`Something went wrong, please contact us on twitter or discord!`, 'error');
        }
        logEvent(
            account.networkAccount.addr,
            {
                status: '[LAAS ERROR]',
                error: String(error),
            },
            LogName.ADDFARM
        );
        return false;
    }

    return true;
};

function LaaSInfo({
    stakingAsset,
    currentBlock,
    beginBlock,
    endBlock,
    rewardAmount,
    rewardToken,
    meanRoundDuration,
    algoTokenRewards,
}: {
    stakingAsset: TokenOptionType;
    currentBlock: number;
    beginBlock: number;
    endBlock: number;
    rewardAmount: number;
    rewardToken: TokenOptionType;
    meanRoundDuration: number;
    algoTokenRewards: number;
}) {
    const laasCreationFee = 0;
    const startTime = calculateTimeByBlock(currentBlock, beginBlock, meanRoundDuration);
    const endTime = calculateTimeByBlock(currentBlock, endBlock, meanRoundDuration);

    return (
        <InfoPanel isLoading={false}>
            <InfoRow title="Expected user APR" value="10%" />
            <InfoRow title="Expected Impermanent Loss" value="5%" />
            <InfoRow title="Subscription period" value="10 days" />
            <InfoRow title="Vault start" value={startTime} />
            <InfoRow title="Vault end" value={endTime} />
            <InfoRow title="Auction duration" value="2 days" />
            <InfoRow
                title="Total reward"
                value={rewardAmount + ' ' + rewardToken.unitName}
                valueLink={'https://algoscan.app/asset/' + rewardToken.id}
            />
            {algoTokenRewards > 0 && <InfoRow title="Extra rewards" value={algoTokenRewards + ' ALGO'} />}
            <InfoRow title="Vault creation fee" value={(FARM_FLAT_ALGO_CREATION_FEE ?? 0) + ' ALGO'} />
        </InfoPanel>
    );
}

export function AddLaaS() {
    const account = useUnit($account);
    const balances = useUnit($balances);
    const currentBlock = useUnit($networkTime);
    const meanRoundDuration = useUnit($meanRoundDuration);

    const [selectedDex, setSelectedDex] = useState<DexProvider>('T2');
    const [tokensOptions, setTokensOptions] = useState<TokenOptionType[]>([]);

    const [selectedProjectToken, setSelectedProjectToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [projectTokenAmount, setProjectTokenAmount] = useState<string>('');
    const [selectedUserToken, setSelectedUserToken] = useState<TokenOptionType>(TOKEN_OPTION);

    const [rewardToken, setRewardToken] = useState<TokenOptionType>(TOKEN_OPTION);
    const [rewardTokenAmount, setRewardTokenAmount] = useState<string>('');

    const [daysDuration, setDaysDuration] = useState<string>('');

    const [AddLaaSModal, openAddLaaSModal, closeAddLaaSModal] = useModal('root', { preventScroll: true });

    const endBlock: number = currentBlock + daysToBlocks(Number(daysDuration), meanRoundDuration);

    useEffect(() => {
        getTokens(account, balances).then((res) => {
            setTokensOptions(res);
            setSelectedUserToken(res[0]);
            setSelectedProjectToken(res[1]);
            setRewardToken(res[1]);
        });
    }, [account, balances]);

    const selectDexOnChange = (dex: DexProvider) => {
        setSelectedDex(dex);
    };

    const selectTokenOnChange = (value: SelectedOptionValue, option: TokenOptionType) => {
        setSelectedUserToken(option);
    };

    const selectRewardTokenOnChange = (value: SelectedOptionValue, option: TokenOptionType) => {
        setSelectedProjectToken(option);
    };

    const durationInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDaysDuration(e.target.value);
    };

    return (
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center' }}>ADD LAAS VAULT</ModalTitle>
            <DexSwitch dexProvider={selectedDex} dexOnChange={selectDexOnChange} />
            <Heading2>PROJECT TOKEN</Heading2>
            <SelectInputGroup
                options={tokensOptions}
                selectedOption={selectedProjectToken}
                inputData={projectTokenAmount}
                setInputData={setProjectTokenAmount}
                selectOnChange={selectRewardTokenOnChange}
            />
            <Heading2>USER TOKEN</Heading2>
            <Select
                selectType={SelectType.tokenSelect}
                options={tokensOptions}
                selectedOption={selectedUserToken}
                selectOnChange={selectTokenOnChange}
            />
            <Heading2>REWARDS [OPTIONAL]</Heading2>
            <SelectInputGroup
                options={tokensOptions}
                selectedOption={rewardToken}
                inputData={rewardTokenAmount}
                setInputData={setRewardTokenAmount}
                selectOnChange={() => {}}
            />
            <AddFarmRow>
                <Heading2 style={{ minWidth: '130px' }}>DURATION</Heading2>
                <DateInput
                    style={{ width: '80px', textAlign: 'center', marginRight: '10px', marginLeft: '10px' }}
                    placeholder="1-999"
                    value={daysDuration}
                    onChange={durationInputOnChange}
                />
                <Heading2>DAYS</Heading2>
            </AddFarmRow>
            {!account ? (
                <ConnectWallet buttonClassName="swap_button" />
            ) : (
                <PacmanButton
                    buttonText="VERIFY DETAILS"
                    buttonStyle="swap_button"
                    onClickAction={async () => {
                        /* If (
                            checkLaaSParams(
                                selectedUserToken,
                                selectedProjectToken,
                                currentBlock,
                                endBlock,
                                Number(projectTokenAmount),
                                rewardToken,
                                Number(rewardTokenAmount)
                            )
                        ) { */
                        openAddLaaSModal();
                        //   }
                    }}
                />
            )}
            <AddLaaSModal>
                <ModalContainer>
                    <ModalSubtitle style={{ fontSize: '16px' }}>
                        Please, carefully verify the LaaS creation parameters.
                    </ModalSubtitle>
                    <LaaSInfo
                        stakingAsset={selectedUserToken}
                        currentBlock={currentBlock}
                        beginBlock={currentBlock}
                        endBlock={endBlock}
                        rewardAmount={Number(projectTokenAmount)}
                        rewardToken={selectedProjectToken}
                        meanRoundDuration={meanRoundDuration}
                        algoTokenRewards={Number(rewardTokenAmount)}
                    />
                    {account && (
                        <PacmanButton
                            buttonText="CREATE LAAS VAULT"
                            buttonStyle="swap_button"
                            onClickAction={async () => {
                                const res = await createVault(
                                    account,
                                    selectedUserToken,
                                    selectedProjectToken,
                                    currentBlock,
                                    endBlock,
                                    Number(projectTokenAmount),
                                    rewardToken,
                                    Number(rewardTokenAmount)
                                );
                                res && closeAddLaaSModal();
                            }}
                        />
                    )}
                </ModalContainer>
            </AddLaaSModal>
        </ModalContainer>
    );
}
