import { encodeAddress, getApplicationAddress } from 'algosdk';
import {
    AppDefinitionFromSourceCompiled,
    AppOptionalFlags,
    DeployAppParam,
    ExecParams,
    MetaType,
    SignType,
    StorageConfig,
    TransactionType,
} from '@algo-builder/web/build/types';

import { Address, Account } from '../types';
import { Amount, AppId, AssetId, LaasGlobalInfo, LaasInitialInfo, LaasLocalInfo } from '../common/store/types';
import { TealBackend, TealConnector, TealCtcWrapper } from '../common/store/contracts';
import {
    makeProvideLiquidityTxs,
    makeLiquiditySeekerWithdrawExcessTx,
    makeEndVaultTx,
    makeWithdrawLsTx,
    makeLiquidityProviderWithdrawTxs,
    makeAuctionBuyTxs,
    makeChangePriorityTx,
    SetupParams,
    makeSetupTxs,
} from './vault-tx-params';
import { fundApp, getCreatedAppId, sendAlgobTxs } from './utils';
import { approvalProgram } from './vault_approval_source';
import { clearProgram } from './vault_clear_source';

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
        globalInts: 19,
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

async function deployVault(
    ammAppId: AppId,
    aToken: AssetId,
    bToken: AssetId,
    lpToken: AssetId,
    acc: Account,
    connector: TealConnector
): Promise<AppId> {
    const tokens = [aToken, bToken, lpToken];

    // TODO: TEAL 6 one, need to try with TEAL 5

    const approvalProgramBytes = await connector.compile(approvalProgram);
    const clearProgramBytes = await connector.compile(clearProgram);

    // Console.log('Approval program bytes:', approvalProgramBytes);
    // console.log('Clear program bytes:', clearProgramBytes);
    console.log('Deploying vault...');
    const appDef = makeVaultDefinition(approvalProgramBytes, clearProgramBytes, tokens, ammAppId);

    const execParam: DeployAppParam = {
        type: TransactionType.DeployApp,
        sign: SignType.SecretKey,
        fromAccount: { addr: acc.networkAccount.addr, sk: new Uint8Array(0) },
        appDefinition: appDef,
        payFlags: { totalFee: 5000 }, // TODO 5000 is arbitrary
    };

    const txIds = await sendAlgobTxs([execParam], [], [], connector);
    console.log('VAULT DEPLOYED', txIds);
    return getCreatedAppId(txIds[0], connector);
}

async function setupVault(
    vaultAppId: AppId,
    ammAppId: AppId,
    aToken: AssetId,
    bToken: AssetId,
    lpToken: AssetId,
    vaultRunBlocks: number,
    initialAmountA: Amount,
    acc: Account,
    connector: TealConnector
) {
    console.log('Setting up vault app and funding with A...');
    const vaultAddress = getApplicationAddress(vaultAppId);
    const setupParams: SetupParams = {
        vaultRunBlocks,
        liquidityPoolApp: ammAppId,
    };

    const typedAcc = { addr: acc.networkAccount.addr, sk: new Uint8Array(0) };

    const setupTxs = makeSetupTxs(
        typedAcc,
        vaultAppId,
        vaultAddress,
        setupParams,
        Number(initialAmountA), // TODO: unsafe, can we do better?
        aToken,
        bToken,
        lpToken
    );

    await sendAlgobTxs(setupTxs, [], [aToken, bToken, lpToken], connector);
}

export async function deployVaultFull(
    ammAppId: AppId,
    aToken: AssetId,
    bToken: AssetId,
    lpToken: AssetId,
    vaultRunBlocks: number,
    initialAmountA: Amount,
    acc: Account,
    connector: TealConnector
): Promise<AppId> {
    const vaultId = await deployVault(ammAppId, aToken, bToken, lpToken, acc, connector);
    console.log('VAULT ID', vaultId);
    await fundApp(vaultId, acc, connector, false);
    await setupVault(vaultId, ammAppId, aToken, bToken, lpToken, vaultRunBlocks, initialAmountA, acc, connector);
    return vaultId;
}

type LaasInitParams = {
    ammAppId: AppId;
    aToken: AssetId;
    bToken: AssetId;
    lpToken: AssetId;
    vaultRunBlocks: number;
    initialAmountA: Amount;
};

type LaasCreatorInteract = {
    getParams: () => LaasInitParams;
    deployed: () => void;
};

type LaasViews = {
    initial: () => Promise<['Some', LaasInitialInfo]>;
    global: () => Promise<['Some', LaasGlobalInfo]>;
    local: (addr: Address) => Promise<['Some', LaasLocalInfo]>;
};

function parseLaasGlobalState(globalStateRaw: any): Record<string, string | number> {
    const globalState: Record<string, string | number> = {};
    // console.log('RAW', globalStateRaw);
    for (const { key, value } of globalStateRaw) {
        const decodedKey = Buffer.from(key, 'base64').toString();
        if (value.type === 2) {
            globalState[decodedKey] = value.uint;
        } else {
            const addressString = encodeAddress(new Uint8Array(Buffer.from(value.bytes, 'base64')));
            globalState[decodedKey] = addressString;
        }
    }

    return globalState;
}

function makeLaasReachWrapper(account: Account, connector: TealConnector, appId?: AppId): TealCtcWrapper {
    // console.log('LAAS API PREPARATION', appId);

    const fetchGlobalState = async () => {
        if (appId === undefined) {
            throw new Error('LaaS vault is not deployed yet!');
        }

        const appInfo = await connector.getAppInfo(appId);
        return parseLaasGlobalState(appInfo.params['global-state']);
    };

    const getInfo = async () => {
        if (appId === undefined) {
            throw new Error('LaaS vault is not deployed yet!');
        }
        return appId;
    };

    // Contract creation
    async function laasCreator(interact: LaasCreatorInteract): Promise<void> {
        const { ammAppId, aToken, bToken, lpToken, vaultRunBlocks, initialAmountA } = interact.getParams();
        // console.log('LaaS creator params: ', params);

        appId = await deployVaultFull(
            ammAppId,
            aToken,
            bToken,
            lpToken,
            vaultRunBlocks,
            initialAmountA,
            account,
            connector
        );

        interact.deployed();

        // mimic reach behavior (hang); is it needed?
        await new Promise<void>((resolve) => null);
    }

    // Contract views (all fail) if appId is not set
    const laasViews: LaasViews = {
        async initial() {
            const globalState = await fetchGlobalState();
            return [
                'Some',
                {
                    startBlock: globalState.start_block as number,
                    vaultRunBlocks: globalState.vault_run_blocks as number,
                    subscriptionBlock: (globalState.vault_run_blocks as number) / 5,
                    initialABalance: BigInt(globalState.initial_a_balance),
                    aToken: globalState.a_token as number,
                    bToken: globalState.b_token as number,
                    lpToken: globalState.lp_token as number,
                    slpToken: globalState.slp_token as number,
                    liquidityPoolApp: globalState.liquidity_pool_app as number,
                    creator: globalState.creator as string,
                    liquidityPoolAddr: globalState.liquidity_pool_address as string,
                    auctionLength: globalState.auction_length as number,
                },
            ];
        },

        async global() {
            const globalState = await fetchGlobalState();
            // console.log('GLOBAL', globalState);
            return [
                'Some',
                {
                    totalALiqProvided: BigInt(globalState.total_a_liq_provided ?? 0),
                    totalBLiqProvided: BigInt(globalState.total_b_liq_provided ?? 0),
                    isFullySubscribed: false, // TODO

                    lsAAccumulator: BigInt(globalState.ls_a_accumulator ?? 0),
                    lsBAccumulator: BigInt(globalState.ls_b_accumulator ?? 0),
                    priorityAddress: globalState.priority_address as string,

                    totalBToWithdraw: globalState.total_b_to_withdraw ? BigInt(globalState.total_b_to_withdraw) : null,

                    auctionInitMarketPrice: BigInt(globalState.auction_init_market_price ?? 0),
                    auctionStartBlock: (globalState.auction_start_block as number | undefined) ?? null,
                    auctionLeftToRaise: globalState.auction_left_to_raise
                        ? BigInt(globalState.auction_left_to_raise)
                        : null,
                    auctionLeftToRaiseInitial: BigInt(globalState.auction_initial_left_to_raise ?? 0),

                    // TODO just read balances
                    aBalance: BigInt(1000),
                    bBalance: BigInt(1000),
                    lpBalance: BigInt(1000),
                    currentBlock: 10, // TODO maybe we don't need it?
                },
            ];
        },

        async local(addr) {
            return ['Some', {}];
        },
    };

    const typedAcc = { addr: account.networkAccount.addr, sk: new Uint8Array(0) };

    const allTokens = (initialState: LaasInitialInfo): AssetId[] => {
        return [initialState.aToken, initialState.bToken, initialState.lpToken, initialState.slpToken];
    };

    const laasApis = {
        async provide_b(amount: number) {
            const initialState = await laasViews.initial().then((m) => m[1]);
            const vaultAddress = getApplicationAddress(appId!);

            console.log(typedAcc, appId, vaultAddress, amount, initialState);
            const txs = makeProvideLiquidityTxs(
                typedAcc,
                appId!,
                vaultAddress,
                amount,
                initialState.aToken,
                initialState.bToken,
                initialState.lpToken,
                initialState.slpToken,
                initialState.liquidityPoolApp,
                initialState.liquidityPoolAddr
            );

            await sendAlgobTxs(txs, [], allTokens(initialState), connector);
        },
        async withdraw_excessive_a() {
            const initialState = await laasViews.initial().then((m) => m[1]);
            const tx = makeLiquiditySeekerWithdrawExcessTx(typedAcc, appId!, initialState.aToken);
            await sendAlgobTxs([tx], [], [], connector);
        },
        async end_vault() {
            const initialState = await laasViews.initial().then((m) => m[1]);

            const tx = makeEndVaultTx(typedAcc, appId!, initialState.liquidityPoolApp, initialState.liquidityPoolAddr, [
                initialState.aToken,
                initialState.bToken,
                initialState.lpToken,
            ]);
            await sendAlgobTxs([tx], [], allTokens(initialState), connector);
        },
        // Seeker достает свои деньги скорее всего после аукциона
        async ls_withdraw() {
            const initialState = await laasViews.initial().then((m) => m[1]);

            const tx = makeWithdrawLsTx(typedAcc, appId!, initialState.aToken, initialState.bToken);
            await sendAlgobTxs([tx], [], allTokens(initialState), connector);
        },
        async withdraw_b(amount: number) {
            const initialState = await laasViews.initial().then((m) => m[1]);
            const vaultAddress = getApplicationAddress(appId!);

            const txs = makeLiquidityProviderWithdrawTxs(
                typedAcc,
                appId!,
                vaultAddress,
                initialState.bToken,
                initialState.slpToken,
                amount
            );
            await sendAlgobTxs(txs, [], allTokens(initialState), connector);
        },
        async auction_buy(bAmount: number) {
            const initialState = await laasViews.initial().then((m) => m[1]);
            const vaultAddress = getApplicationAddress(appId!);

            const txs = makeAuctionBuyTxs(
                typedAcc,
                appId!,
                vaultAddress,
                initialState.aToken,
                initialState.bToken,
                bAmount,
                'XNF7S2PP3IWGJVBFHKZ5QTV6ZSSTDA3WGZCDILQ44EF7PAEFA3XK2NMQME' // TODO ls address
            );
            await sendAlgobTxs(txs, [], allTokens(initialState), connector);
        },
        async change_priority(new_priority_addr: string) {
            const tx = makeChangePriorityTx(typedAcc, new_priority_addr, appId!);
            await sendAlgobTxs([tx], [], [], connector);
        },
    };

    const participants = {
        Creator: laasCreator,
    };

    return {
        participants,
        p: participants,
        views: laasViews,
        v: laasViews,
        apis: laasApis,
        a: laasApis,
        getInfo,
    };
}

export const backend: TealBackend = {
    makeCtc: makeLaasReachWrapper,
};
