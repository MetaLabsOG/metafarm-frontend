import { Buffer } from 'buffer';
import { encodeAddress, getApplicationAddress } from 'algosdk';
import { createEffect, createEvent, createStore, sample, Store } from 'effector';
import { createComponent } from 'effector-react';
import { algod, META_TOKEN_ID, reach } from '../AppContext';
import { laasCtcMockAuction, laasCtcMockRunning, laasCtcMockSubscription, laasCtcMockWithdraw } from '../common/mocks';
import { AppId, Contract, ContractState } from '../common/store';
import { LaaSCard } from './LaaSCard';
import { LaaSContainer } from './styled';
import {
    makeAuctionBuyTxs,
    makeChangePriorityTx,
    makeEndVaultTx,
    makeLiquidityProviderWithdrawTxs,
    makeLiquiditySeekerWithdrawExcessTx,
    makeProvideLiquidityTxs,
    makeWithdrawLsTx,
} from './vault-tx-params';
import { sendAlgodTxsViaReachWallet } from './AddLaaS';

const laasTestnetIds = [114434272];

async function getContractState(vaultId: AppId): Promise<ContractState<'laas'>> {
    const accountInfo = await algod.getApplicationByID(vaultId).do();

    const globalStateRaw = accountInfo.params['global-state'];

    const globalState: Record<string, string | number> = {};
    for (const { key, value } of globalStateRaw) {
        const decodedKey = Buffer.from(key, 'base64').toString();
        if (value.type === 2) {
            globalState[decodedKey] = value.uint;
        } else {
            const addressString = encodeAddress(new Uint8Array(Buffer.from(value.bytes, 'base64')));
            globalState[decodedKey] = addressString;
        }
    }

    console.log(globalState);

    // TODO use zod?
    return {
        initial: {
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
        },
        global: {
            totalALiqProvided: BigInt(globalState.total_a_liq_provided ?? 0),
            totalBLiqProvided: BigInt(globalState.total_b_liq_provided ?? 0),
            isFullySubscribed: false, // TODO

            lsAAccumulator: BigInt(globalState.ls_a_accumulator ?? 0),
            lsBAccumulator: BigInt(globalState.ls_b_accumulator ?? 0),
            priorityAddress: globalState.priority_address as string,

            totalBToWithdraw: BigInt(globalState.total_b_to_withdraw ?? 0),

            // TODO
            auctionToRaiseInitital: BigInt(1000), // TODO
            auctionInitMarketPriceMult: BigInt(2), // TODO
            auctionStartBlock: (globalState.auction_start_block as number | undefined) ?? null,
            auctionLeftToRaise: globalState.auction_left_to_raise ? BigInt(globalState.auction_left_to_raise) : null,

            // TODO just read balances
            aBalance: BigInt(1000),
            bBalance: BigInt(1000),
            lpBalance: BigInt(1000),
            currentBlock: 10, // TODO maybe we don't need it?
        },
        local: {},
    };
}

const $laasPools: Store<Array<Contract<'laas'>>> = createStore([
    laasCtcMockSubscription,
    // LaasCtcMockRunning,
    // laasCtcMockAuction,
    // laasCtcMockWithdraw,
]);

const addMyStoreFx = createEffect(async (id: AppId): Promise<Contract<'laas'>> => {
    const vaultAddress = getApplicationAddress(id);

    const contractState = await getContractState(id);
    const initialState = contractState.initial;

    const acc = await reach.getDefaultAccount();
    const typedAcc = { addr: acc.networkAccount.addr, sk: new Uint8Array(0) };

    const rv: Contract<'laas'> = {
        id,
        info: {
            type: 'laas',
            id,
            version: '0.0.1',
            deployed_timestamp: 12,
            description: 'laas testnet subscription contract',
            metadata: {
                cache: undefined,
                verified: true,
            },
        },
        ctc: {
            apis: {
                async provide_b(amount: number) {
                    console.log(typedAcc, id, vaultAddress, amount, initialState);
                    const txs = makeProvideLiquidityTxs(
                        typedAcc,
                        id,
                        vaultAddress,
                        1,
                        initialState.aToken,
                        initialState.bToken,
                        initialState.lpToken,
                        initialState.slpToken,
                        initialState.liquidityPoolApp,
                        initialState.liquidityPoolAddr
                    );

                    await sendAlgodTxsViaReachWallet(txs);
                },
                async withdraw_excessive_a() {
                    const tx = makeLiquiditySeekerWithdrawExcessTx(typedAcc, id, initialState.aToken);
                    await sendAlgodTxsViaReachWallet([tx]);
                },
                async end_vault() {
                    const tx = makeEndVaultTx(
                        typedAcc,
                        id,
                        initialState.liquidityPoolApp,
                        initialState.liquidityPoolAddr,
                        [initialState.aToken, initialState.bToken, initialState.lpToken]
                    );
                    await sendAlgodTxsViaReachWallet([tx]);
                },
                // Seeker достает свои деньги скорее всего после аукциона
                async ls_withdraw() {
                    const tx = makeWithdrawLsTx(typedAcc, id, initialState.aToken, initialState.bToken);
                    await sendAlgodTxsViaReachWallet([tx]);
                },
                async withdraw_b(amount: number) {
                    const txs = makeLiquidityProviderWithdrawTxs(
                        typedAcc,
                        id,
                        vaultAddress,
                        initialState.bToken,
                        initialState.slpToken,
                        amount
                    );
                    await sendAlgodTxsViaReachWallet(txs);
                },
                async auction_buy(bAmount: number, aToBuyDesired: number) {
                    const txs = makeAuctionBuyTxs(
                        typedAcc,
                        id,
                        vaultAddress,
                        initialState.aToken,
                        initialState.bToken,
                        bAmount,
                        aToBuyDesired,
                        '' // TODO ls address
                    );
                    await sendAlgodTxsViaReachWallet(txs);
                },
                async change_priority(new_priority_addr: string) {
                    const tx = makeChangePriorityTx(typedAcc, vaultAddress, id);
                    await sendAlgodTxsViaReachWallet([tx]);
                },
            },
        },
        state: contractState,
    };

    console.log('fetched:', rv);

    return rv;
});

const addStoreById = createEvent<AppId>();

sample({
    clock: addStoreById,
    target: addMyStoreFx,
});

$laasPools.on(addMyStoreFx.done, (state, { params, result }) => [...state, result]);

const vaultAppId = 114637307;
addStoreById(vaultAppId);

export const LaaS = createComponent($laasPools, (_props, state) => (
    <LaaSContainer style={{ marginTop: 40 }}>
        {state.map((vault, idx) => (
            <LaaSCard key={idx} vault={vault} />
        ))}
    </LaaSContainer>
));
