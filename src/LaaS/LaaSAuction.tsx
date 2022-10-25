import React, { useState } from 'react';
import { useUnit } from 'effector-react';
import { theme } from '../theme';
import { ModalTitle } from '../common/styled';
import { $balances, $meanRoundDuration, $networkTime, Asset, Contract, Priced } from '../common/store';
import { ProgressBar } from '../Components/ProgressBar/ProgressBar';
import { InfoRow } from '../Components/InfoRow/InfoRow';
import { TokenInput } from '../Components/TokenInput/TokenInput';
import { fromSmallestUnits, getSmallestUnits } from '../common/lib';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { notify } from '../Components/Notification';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { DexPool } from '../dexes';
import { blocksToText } from '../Farm/PoolList/Pool/PoolInfo';
import { LaaSAuctionContainer, LaaSAuctionResult } from './styled';

const calculateMarketPrice = (
    initMarketPrice: number,
    currentBlock: number,
    auctionStartBlock: number | null,
    auctionLength: number
) => {
    if (!auctionStartBlock) {
        return 0;
    }
    const timePassed = currentBlock - auctionStartBlock;
    return (initMarketPrice * (auctionLength - timePassed)) / 2 / timePassed;
};

const calculateReachMarketPrice = (initMarketPrice: number, auctionLength: number, marketPrice: number) => {
    return (initMarketPrice * auctionLength) / (2 * marketPrice + initMarketPrice);
};

export const LaaSAuction = ({
    vault,
    asset1,
    asset2,
    closeModal,
    pool,
}: {
    vault: Contract<'laas'>;
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
    closeModal: () => void;
    pool: DexPool | null;
}) => {
    if (!vault.state || !pool) {
        return null;
    }
    const balances = useUnit($balances);
    const currentBlock = useUnit($networkTime);
    const meanRoundDuration = useUnit($meanRoundDuration);
    const [tokenInput, setTokenInput] = useState<string>('');
    const tokenMicroBalance = balances[asset2.id];

    const leftToRaise = fromSmallestUnits(asset2, vault.state.global.auctionLeftToRaise);
    const leftToRaiseInitial = fromSmallestUnits(asset2, vault.state.global.auctionLeftToRaiseInitial);
    const leftToRaisePercent = (leftToRaiseInitial - leftToRaise) / leftToRaiseInitial;

    const marketPrice =
        asset1.id === pool.asset1
            ? fromSmallestUnits(asset2, pool.asset2Reserve) / fromSmallestUnits(asset1, pool.asset1Reserve)
            : fromSmallestUnits(asset2, pool.asset1Reserve) / fromSmallestUnits(asset1, pool.asset2Reserve);

    // b cost. A per B
    const MULT = 1000; // TODO
    const initMarketPrice =
        1 /
        ((Number(vault.state.global.auctionInitMarketPrice) * Number(getSmallestUnits(asset2, 1))) /
            Number(getSmallestUnits(asset1, 1)) /
            MULT);
    const currentPrice = calculateMarketPrice(
        initMarketPrice,
        currentBlock,
        vault.state.global.auctionStartBlock,
        vault.state.initial.auctionLength
    );

    const reachMarketPrice = calculateReachMarketPrice(initMarketPrice, vault.state.initial.auctionLength, marketPrice);
    const reachMarketPriceText = blocksToText(reachMarketPrice, meanRoundDuration);

    const leftToSell = leftToRaise * currentPrice;

    return (
        <LaaSAuctionContainer>
            <ModalTitle style={{ textAlign: 'center', marginBottom: 5 }}>{asset1.unitName} AUCTION</ModalTitle>
            <ProgressBar
                title={`${numberRound(leftToRaisePercent, 0)}%`}
                value={`${numberRound(leftToRaiseInitial - leftToRaise)} / ${numberRound(leftToRaiseInitial)} ${
                    asset2.unitName
                }`}
                progress={leftToRaisePercent}
                color={theme.lightGray}
            />
            <InfoRow title={'Available'} value={`${numberRound(leftToSell)} ${asset1.unitName}`} />
            <InfoRow
                title={'Current price'}
                value={`${numberRound(currentPrice)} ${asset2.unitName} per ${asset1.unitName}`}
            />
            <InfoRow
                title={'Market price'}
                value={`${numberRound(marketPrice)} ${asset2.unitName} per ${asset1.unitName}`}
            />
            <InfoRow title={'Reach market price '} value={`in ${reachMarketPriceText}`} />
            <TokenInput
                token={asset2}
                tokenMicroBalance={tokenMicroBalance}
                tokenInput={tokenInput}
                setTokenInput={setTokenInput}
            />
            <LaaSAuctionResult>
                <InfoRow
                    title="Minimum received"
                    value={`${numberRound(Number(tokenInput) / currentPrice)} ${asset1.unitName}`}
                    style={{
                        color: theme.green,
                        marginBottom: 0,
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '22px',
                    }}
                />
            </LaaSAuctionResult>
            <PacmanButton
                buttonText={`BUY ${asset1.unitName}`}
                buttonStyle="swap_button"
                style={{ width: '250px', height: '50px', fontSize: '18px' }}
                onClickAction={async () => {
                    const bAmount = getSmallestUnits(asset2, Number(tokenInput));
                    console.log('AUCTION', bAmount);
                    await vault.ctc.apis.auction_buy([bAmount]);
                    notify('Done!', 'success');
                    closeModal();
                }}
            />
        </LaaSAuctionContainer>
    );
};
