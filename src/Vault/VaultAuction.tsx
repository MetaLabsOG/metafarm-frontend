import React, { useState } from 'react';
import { theme } from '../theme';
import { ModalTitle } from '../common/styled';
import { Asset, Contract, Priced } from '../common/store';
import { ProgressBar } from '../Components/ProgressBar/ProgressBar';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { TokenInput } from '../Components/TokenInput/TokenInput';
import { Button, ButtonType } from '../Components/Button/Button';
import { VaultAuctionContainer, VaultAuctionResult } from './styled';

export const VaultAuction = ({
    vault,
    asset1,
    asset2,
}: {
    vault: Contract<'vault'>;
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
}) => {
    const [tokenInput, setTokenInput] = useState<string>('');
    const tokenMicroBalance = BigInt(1000000); // TODO

    return (
        <VaultAuctionContainer>
            <ModalTitle style={{ textAlign: 'center', marginBottom: 5 }}>{asset1.unitName} AUCTION</ModalTitle>
            <ProgressBar title="55%" value={`5,345 / 10,000 ALGO`} progress={0.54} color={theme.lightGray} />
            <InfoRow title={'Left to sell'} value={`53,000 META`} />
            <InfoRow title={'Current price'} value={`1.5 ALGO per META`} />
            <InfoRow title={'Market price'} value={`1 ALGO per META`} />
            <InfoRow title={'Reach market price '} value={`in 13 hours`} />
            <TokenInput
                token={asset2}
                tokenMicroBalance={tokenMicroBalance}
                tokenInput={tokenInput}
                setTokenInput={setTokenInput}
            />
            <VaultAuctionResult>
                <InfoRow
                    title="Minimum received"
                    value={`345 ${asset1.unitName}`}
                    style={{
                        color: theme.green,
                        marginBottom: 0,
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '22px',
                    }}
                />
            </VaultAuctionResult>
            <Button
                buttonText={`BUY ${asset1.unitName}`}
                type={ButtonType.primary}
                style={{ width: '250px', height: '50px', fontSize: '18px' }}
                onClick={() => {}}
            />
        </VaultAuctionContainer>
    );
};
