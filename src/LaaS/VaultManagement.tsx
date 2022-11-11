import React, { useState } from 'react';
import { Asset, Contract, Priced } from '../common/store';
import { DexProvider } from '../dexes';
import { ModalContainer } from '../common/styled';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { Input } from '../Components/TokenInput/styled';
import { fromSmallestUnits } from '../common/lib';
import { notify } from '../Components/Notification';
import { LaaSHeader } from './LaaSHeader';
import { LaaSStage } from './LaaSCard';

export const VaultManagement = ({
    vault,
    laasStage,
    asset1,
    asset2,
    dex,
}: {
    vault: Contract<'laas'>;
    laasStage: LaaSStage;
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
    dex: DexProvider;
}) => {
    if (!vault.state) {
        return null;
    }

    const amountLockedMicro = vault.state.global.totalALiqProvided;
    const amountLocked = fromSmallestUnits(asset1, amountLockedMicro);
    const availableAmountMicro =
        laasStage === LaaSStage.withdraw
            ? vault.state.global.lsAAccumulator
            : vault.state.initial.initialABalance - amountLockedMicro;
    const availableAmount = fromSmallestUnits(asset1, availableAmountMicro);
    const availableAsset2Amount = fromSmallestUnits(asset2, vault.state.global.lsBAccumulator);
    const priorityAddress = vault.state.global.priorityAddress;
    const [newPriorityAddress, setNewPriorityAddress] = useState('');

    return (
        <ModalContainer style={{ gap: 15 }}>
            <LaaSHeader asset1={asset1} asset2={asset2} dex={dex} isVerified={false} />
            <div style={{ width: '100%' }}>
                <InfoRow title={`Liquidity provided`} value={`${numberRound(amountLocked)} ${asset1.unitName}`} />
                <InfoRow title={`Available ${asset1.unitName}`} value={numberRound(availableAmount)} />
                <InfoRow title={`Available ${asset2.unitName}`} value={numberRound(availableAsset2Amount)} />
            </div>
            <PacmanButton
                buttonText={`WITHDRAW`}
                buttonStyle="swap_button"
                style={{ width: '215px', height: '42px', fontSize: '13px' }}
                onClickAction={async () => {
                    try {
                        if (laasStage === LaaSStage.withdraw) {
                            await vault.ctc.apis.ls_withdraw();
                        } else {
                            await vault.ctc.apis.withdraw_excessive_a();
                        }
                        notify('Done!', 'success');
                    } catch (error) {
                        notify('Error.', 'error');
                    }
                }}
            />
            <InfoRow
                title={`Priority address`}
                value={priorityAddress}
                style={{ flexDirection: 'column', width: 254, marginTop: 20 }}
                valueStyle={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
            />
            <Input
                placeholder="Enter new priority address"
                value={newPriorityAddress}
                isActive={true}
                style={{ fontSize: 14 }}
                onChange={(e) => setNewPriorityAddress(e.currentTarget.value)}
            />
            <PacmanButton
                buttonText="CHANGE ADDRESS"
                buttonStyle="swap_button"
                style={{ width: '215px', height: '42px', fontSize: '13px' }}
                onClickAction={async () => {
                    try {
                        await vault.ctc.apis.change_priority(newPriorityAddress);
                        notify('Done!', 'success');
                    } catch (error) {
                        notify('Error.', 'error');
                    }
                }}
            />
        </ModalContainer>
    );
};
