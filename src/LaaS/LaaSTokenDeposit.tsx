import React, { useState } from 'react';
import { useUnit } from 'effector-react';
import { theme } from '../theme';
import { ModalContainer, ModalSubtitle, ModalTitle } from '../common/styled';
import { $balances, $meanRoundDuration, $networkTime, Asset, Contract, Priced } from '../common/store';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { TokenInput } from '../Components/TokenInput/TokenInput';
import { algoexplorerLink, getSmallestUnits } from '../common/lib';
import { notify } from '../Components/Notification';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { calculateTimeByBlock } from '../Farm/AddFarm';
import { DexProvider } from '../dexes';
import { getDexName } from '../Farm/utils';
import { blocksToText } from '../Farm/PoolList/Pool/PoolInfo';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { ButtonSubtitle } from './styled';
import { getCapacityLeft } from './LaaSCard';

const DepositInfo = ({
    vault,
    dex,
    asset1,
    asset2,
    poolAPR,
    tokenAmount,
}: {
    vault: Contract<'laas'>;
    dex: DexProvider;
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
    poolAPR: number;
    tokenAmount: number;
}) => {
    if (!vault.state) {
        return <div>hz</div>;
    }
    const meanRoundDuration = useUnit($meanRoundDuration);
    const currentBlock = useUnit($networkTime);
    const withdrawalDate = calculateTimeByBlock(
        currentBlock,
        vault.state.initial.startBlock + vault.state.initial.vaultRunBlocks,
        meanRoundDuration
    );
    const vaultDurationText = blocksToText(meanRoundDuration, vault.state.initial.vaultRunBlocks);
    const vaultName = `${asset1.unitName}/${asset2.unitName} on ${getDexName(dex)}`;
    const remainingCapacity = getCapacityLeft(asset1, asset2, vault.state);
    const receiveUsdAmount = tokenAmount * asset2.price;

    return (
        <InfoPanel isLoading={false}>
            <InfoRow
                title={'You receive'}
                value={`${numberRound(tokenAmount)} c${asset2.unitName} (${numberRound(receiveUsdAmount)}$)`}
                style={{ color: theme.green }}
            />
            <InfoRow
                title={'Vault'}
                value={vaultName}
                valueLink={algoexplorerLink('application', vault.state.initial.liquidityPoolApp)}
            />
            <InfoRow title={'Estimated APR'} value={`${poolAPR * 100}%`} />
            <InfoRow title={'Withdrawal date'} value={withdrawalDate} />
            <InfoRow title={'Remaining Capacity'} value={`${numberRound(remainingCapacity)} ${asset2.unitName}`} />
            <InfoRow title={'Vault duration'} value={vaultDurationText} />
            <InfoRow
                title={'Vault contract'}
                value={'algoexplorer'}
                valueLink={algoexplorerLink('application', vault.id)}
                style={{ marginBottom: 0 }}
            />
        </InfoPanel>
    );
};

export const LaaSTokenDeposit = ({
    vault,
    dex,
    asset1,
    asset2,
    poolAPR,
    buttonSubtitle,
    closeModal,
}: {
    vault: Contract<'laas'>;
    dex: DexProvider;
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
    poolAPR: number;
    buttonSubtitle: string;
    closeModal: () => void;
}) => {
    const balances = useUnit($balances);
    const [tokenAmount, setTokenAmount] = useState<string>('');
    const tokenMicroBalance = balances[asset2.id];

    return (
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center', marginBottom: 5 }}>DEPOSIT {asset2.unitName}</ModalTitle>
            <ModalSubtitle style={{ marginBottom: 30 }}>2x boosted rewards with downside IL protection</ModalSubtitle>
            <TokenInput
                token={asset2}
                tokenMicroBalance={tokenMicroBalance}
                tokenInput={tokenAmount}
                setTokenInput={setTokenAmount}
            />
            <DepositInfo
                vault={vault}
                dex={dex}
                asset1={asset1}
                asset2={asset2}
                poolAPR={poolAPR}
                tokenAmount={Number(tokenAmount)}
            />
            <ModalSubtitle style={{ marginTop: 20, marginBottom: 10, width: 350 }}>
                ⚠️ You can withdraw {asset2.unitName} only after the withdrawal date
            </ModalSubtitle>
            <PacmanButton
                buttonText={`DEPOSIT ${asset2.unitName}`}
                buttonStyle="swap_button"
                style={{ width: '350px', height: '50px', fontSize: '18px' }}
                onClickAction={async () => {
                    // TODO: ограничить сверху сколько чел может предоставить
                    try {
                        await vault.ctc.apis.provide_b([getSmallestUnits(asset2, Number(tokenAmount))]);
                        notify('Done!', 'success');
                        closeModal();
                    } catch (error) {
                        const error_message = error instanceof Error ? error.message : String(error);
                        console.log('[DEPOSIT ERROR]', error_message);
                        notify('Fail!', 'error');
                    }
                }}
            />
            <ButtonSubtitle>{buttonSubtitle}</ButtonSubtitle>
        </ModalContainer>
    );
};
