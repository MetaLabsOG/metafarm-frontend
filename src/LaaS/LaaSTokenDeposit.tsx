import React, { useState } from 'react';
import { theme } from '../theme';
import { ModalContainer, ModalSubtitle, ModalTitle } from '../common/styled';
import { Asset, Contract, Priced } from '../common/store';
import { InfoPanel } from '../Components/InfoPanel/InfoPanel';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { Button, ButtonType } from '../Components/Button/Button';
import { TokenInput } from '../Components/TokenInput/TokenInput';
import { ButtonSubtitle } from './styled';

const DepositInfo = () => {
    return (
        <InfoPanel isLoading={false}>
            <InfoRow title={'You receive'} value={'500,000 cALGO (123,000$)'} style={{ color: theme.green }} />
            <InfoRow title={'Vault'} value={'ALGO/XUSD on tinyman'} valueLink={'TODO'} />
            <InfoRow title={'Estimated APR'} value={'8.60%'} />
            <InfoRow title={'Withdrawal date'} value={'03/12/2022 12:00 UTC'} />
            <InfoRow title={'Remaining Capacity'} value={'398,000 ALGO'} />
            <InfoRow title={'Vault duration'} value={'35 days'} />
            <InfoRow title={'Vault contract'} value={'algoexplorer'} valueLink={'TODO'} style={{ marginBottom: 0 }} />
        </InfoPanel>
    );
};

export const LaaSTokenDeposit = ({
    asset2,
    vault,
    buttonSubtitle,
}: {
    vault: Contract<'laas'>;
    asset2: Priced<Asset>;
    buttonSubtitle: string;
}) => {
    const [tokenInput, setTokenInput] = useState<string>('');
    const tokenMicroBalance = BigInt(1000000); // TODO

    return (
        <ModalContainer>
            <ModalTitle style={{ textAlign: 'center', marginBottom: 5 }}>DEPOSIT {asset2.unitName}</ModalTitle>
            <ModalSubtitle style={{ marginBottom: 30 }}>2x boosted rewards with downside IL protection</ModalSubtitle>
            <TokenInput
                token={asset2}
                tokenMicroBalance={tokenMicroBalance}
                tokenInput={tokenInput}
                setTokenInput={setTokenInput}
            />
            <DepositInfo />
            <ModalSubtitle style={{ marginTop: 20, width: 350 }}>
                ⚠️ You can withdraw {asset2.unitName} <br /> only after the withdrawal date
            </ModalSubtitle>
            <Button
                buttonText={`DEPOSIT ${asset2.unitName}`}
                type={ButtonType.primary}
                style={{ width: '350px', height: '50px', fontSize: '18px' }}
                onClick={() => {
                    return vault.ctc.apis.provide_b([tokenMicroBalance]);
                }}
            />
            <ButtonSubtitle>{buttonSubtitle}</ButtonSubtitle>
        </ModalContainer>
    );
};
