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
import { logEvent, LogName } from '../logEvent';
import { LaaSHeader } from './LaaSHeader';
import { LaaSStage } from './LaaSCard';

export const VaultManagement = ({
    address,
    vault,
    laasStage,
    asset1,
    asset2,
    dex,
}: {
    address: string;
    vault: Contract<'laas'>;
    laasStage: LaaSStage;
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
    dex: DexProvider;
}) => {
    if (!vault.state) {
        return null;
    }

    const liquidityProvided = fromSmallestUnits(asset1, vault.state.global.totalALiqProvided);
    const initialBalance = fromSmallestUnits(asset1, vault.state.initial.initialABalance);
    const availableAmount =
        laasStage === LaaSStage.withdraw
            ? fromSmallestUnits(asset1, vault.state.global.lsAAccumulator)
            : laasStage !== LaaSStage.subscription
            ? initialBalance - liquidityProvided
            : 0;
    const availableAsset2Amount = fromSmallestUnits(asset2, vault.state.global.lsBAccumulator);

    const priorityAddress = vault.state.global.priorityAddress;
    const [newPriorityAddress, setNewPriorityAddress] = useState('');

    return (
        <ModalContainer style={{ gap: 15 }}>
            <LaaSHeader asset1={asset1} asset2={asset2} dex={dex} isVerified={false} />
            <div style={{ width: '100%' }}>
                <InfoRow title={`Initial balance`} value={`${numberRound(initialBalance)} ${asset1.unitName}`} />
                <InfoRow title={`Liquidity provided`} value={`${numberRound(liquidityProvided)} ${asset1.unitName}`} />
                <InfoRow title={`Current balance`} value={`${numberRound(availableAmount)} ${asset1.unitName}`} />
                <InfoRow
                    title={`Available to withdraw`}
                    value={`${numberRound(availableAmount)} ${asset1.unitName} + ${numberRound(
                        availableAsset2Amount
                    )} ${asset2.unitName}`}
                    style={{ flexDirection: 'column', textAlign: 'center' }}
                />
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
                        logEvent(
                            address,
                            {
                                message: '[LS WITHDRAW OK]',
                                vault_id: vault.id,
                                vault_name: `${asset1?.unitName}/${asset2?.unitName}`,
                                amount: Number(availableAmount),
                            },
                            LogName.LAAS
                        );
                    } catch (error) {
                        const error_message = error instanceof Error ? error.message : String(error);
                        notify(error_message, 'error');
                        console.log('[LS WITHDRAW ERROR]', error_message);
                        logEvent(
                            address,
                            {
                                message: '[LS WITHDRAW ERROR]',
                                vault_id: vault.id,
                                vault_name: `${asset1.unitName}/${asset2.unitName}`,
                                amount: Number(availableAmount),
                                error: error_message,
                            },
                            LogName.LAAS
                        );
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
                        console.log('NEW PRIORITY', newPriorityAddress);
                        await vault.ctc.apis.change_priority(newPriorityAddress);
                        notify('Done!', 'success');
                        logEvent(
                            address,
                            {
                                message: '[CHANGE PRIORITY OK]',
                                vault_id: vault.id,
                                vault_name: `${asset1?.unitName}/${asset2?.unitName}`,
                                new_address: newPriorityAddress,
                            },
                            LogName.LAAS
                        );
                    } catch (error) {
                        const error_message = error instanceof Error ? error.message : String(error);
                        notify(error_message, 'error');
                        console.log('[CHANGE PRIORITY ERROR]', error_message);
                        logEvent(
                            address,
                            {
                                message: '[CHANGE PRIORITY ERROR]',
                                vault_id: vault.id,
                                vault_name: `${asset1.unitName}/${asset2.unitName}`,
                                error: error_message,
                                new_address: newPriorityAddress,
                            },
                            LogName.LAAS
                        );
                    }
                }}
            />
        </ModalContainer>
    );
};
