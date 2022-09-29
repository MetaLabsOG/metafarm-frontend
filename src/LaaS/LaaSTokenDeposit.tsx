import React, { useState } from 'react';
import { useStoreMap, useUnit } from 'effector-react';
import { theme } from '../theme';
import { ModalContainer, ModalSubtitle, ModalTitle } from '../common/styled';
import { $balances, $meanRoundDuration, $networkTime, Asset, Contract, Priced } from '../common/store';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { Button, ButtonType } from '../Components/Button/Button';
import { TokenInput } from '../Components/TokenInput/TokenInput';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { calculateTimeByBlock } from '../Farm/AddFarm';
import { blocksToText } from '../Farm/PoolList/Pool/PoolInfo';
import { algoexplorerAssetLink, algoexplorerContractLink } from '../common/lib';
import { ButtonSubtitle } from './styled';

const DepositInfo = ({
    vault,
    asset,
    assetAmount,
    vaultName,
    expectedAPR,
    capacityLeft,
}: {
    vault: Contract<'laas'>;
    asset: Priced<Asset>;
    assetAmount: number;
    vaultName: string;
    expectedAPR: number;
    capacityLeft: number;
}) => {
    if (!vault.state) {
        return <></>;
    }

    const meanRoundDuration = useUnit($meanRoundDuration);
    const currentBlock = useUnit($networkTime);
    const vaultDuration = blocksToText(meanRoundDuration, vault.state.initial.vaultRunBlocks);
    const withdrawalDate = calculateTimeByBlock(currentBlock, vault.state.initial.vaultRunBlocks, meanRoundDuration);

    const usdAssetAmount = assetAmount * asset.price;

    return (
        <InfoPanel isLoading={false}>
            <InfoRow
                title={'You receive'}
                value={`${numberRound(assetAmount)} c${asset.unitName} (${numberRound(usdAssetAmount)}$)`}
                style={{ color: theme.green }}
            />
            <InfoRow title={'Vault'} value={vaultName} valueLink={algoexplorerAssetLink(vault.state.initial.lpToken)} />
            <InfoRow title={'Estimated APR'} value={`${numberRound(expectedAPR * 100)}%`} />
            <InfoRow title={'Withdrawal date'} value={withdrawalDate} />
            <InfoRow title={'Remaining Capacity'} value={`${numberRound(capacityLeft)} ${asset.unitName}`} />
            <InfoRow title={'Vault duration'} value={vaultDuration} />
            <InfoRow
                title={'Vault contract'}
                value={`algoexplorer`}
                valueLink={algoexplorerContractLink(vault.id)}
                style={{ marginBottom: 0 }}
            />
        </InfoPanel>
    );
};

export const LaaSTokenDeposit = ({
    vault,
    asset,
    buttonSubtitle,
    vaultName,
    expectedAPR,
    capacityLeft,
}: {
    vault: Contract<'laas'>;
    asset: Priced<Asset>;
    buttonSubtitle: string;
    vaultName: string;
    expectedAPR: number;
    capacityLeft: number;
}) => {
    const [tokenInput, setTokenInput] = useState<string>('');
    const tokenMicroBalance = useStoreMap($balances, (bs) => bs[asset.id] || BigInt(0));

    return (
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center', marginBottom: 5 }}>DEPOSIT {asset.unitName}</ModalTitle>
            <ModalSubtitle style={{ marginBottom: 30 }}>2x boosted rewards with downside IL protection</ModalSubtitle>
            <TokenInput
                token={asset}
                tokenMicroBalance={tokenMicroBalance}
                tokenInput={tokenInput}
                setTokenInput={setTokenInput}
            />
            <DepositInfo
                vault={vault}
                asset={asset}
                assetAmount={Number(tokenInput)}
                vaultName={vaultName}
                expectedAPR={expectedAPR}
                capacityLeft={capacityLeft}
            />
            <ModalSubtitle style={{ marginTop: 20, width: 350 }}>
                ⚠️ You can withdraw {asset.unitName} <br /> only after the withdrawal date
            </ModalSubtitle>
            <Button
                buttonText={`DEPOSIT ${asset.unitName}`}
                type={ButtonType.primary}
                style={{ width: '350px', height: '50px', fontSize: '18px' }}
                onClick={() => {}}
            />
            <ButtonSubtitle>{buttonSubtitle}</ButtonSubtitle>
        </ModalContainer>
    );
};
