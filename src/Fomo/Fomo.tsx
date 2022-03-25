import React, { useState, useContext, useEffect, useCallback } from 'react';
import { LevelInfo } from './types';
import '../css/fomo.css';
import * as fomo from '../fomo_interface/index.main.mjs';
import { RulesModal } from './RulesModal';
import { AppContext, FOMO_APP_ID, Context } from '../AppContext';
import { Timer } from '../Timer';
import { batchOptIn } from '../batchOptIn.mjs';
import { getAssetInfo } from '../providers/contractProvider';
import { logEvent } from '../logEvent';
import { AlgoIcon } from '../imgs/algo';
import { Status } from '../Status';
import {
    FomoContainer,
    Info,
    Actions,
    Prize,
    FomoSupply,
    Update,
    Winner,
    Balance,
    Amount,
    Amounts,
    BoostButton,
    BoostInfo,
    BoostButtonConteiner,
    WinnerBid,
    BID,
    Level,
    MaxedOut,
    LabelLevel,
    LevelValue,
    FomoRulesTitle,
} from './styled';
import { NFTCard, NFTCardInfo, Nft } from '../common/styled';
import { setLevelAndValue } from './utils';
import { BigNumber } from 'ethers';

export const Fomo = () => {
    const { reach, account } = useContext(AppContext) as Context;
    const [isAccountConnected, setIsAccountConnected] = useState<boolean>(false);
    const [isFomoSet, setIsFomoSet] = useState<boolean>(false);
    const [isInializateValue, setInutalizateValue] = useState(false);
    const [isFinish, setIsFinish] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fomoDuration, setFomoDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(0);
    const [nftPrize, setNftPrize] = useState<number | null>(null);
    const [balance, setBalance] = useState<string>('0');
    const [nftLink, setnftLink] = useState<string>('');
    const [currentPrice, setCurrentPrice] = useState<number>(0);
    const [currentTotal, setCurrentTotal] = useState<number>(0);
    const [currentWinner, setCurrentWinner] = useState<string>('');
    const [winnerPrice, setWinnerPrice] = useState<number>(0);
    const [ctc, setCtc] = useState<null>(null);
    const [token, setToken] = useState<number | null>(null);

    const [discountLevel, setDiscountLevel] = useState<number>(0);
    const [discountPrices, setDiscountPrices] = useState<BigNumber[]>([]);
    const [discountPercents, setDiscountPercents] = useState<BigNumber[]>([]);
    const [discountTimePercentAndPrice, setDiscountTimePercentAndPrice] = useState<LevelInfo>({
        price: 0,
        value: 0,
        nextLvlValue: 3,
    });
    const [isLoadingBoostDiscount, setIsLoadingBoostDiscount] = useState<boolean>(false);

    const [timeReductionLevel, setTimeReductionLevel] = useState<number>(0);
    const [timeReductionPrices, setTimeReductionPrices] = useState<BigNumber[]>([]);
    const [timeReductionSecs, setTimeReductionSecs] = useState<BigNumber[]>([]);
    const [timeReductionSecAndPrice, setTimeReductionSecAndPrice] = useState<LevelInfo>({
        price: 0,
        value: 0,
        nextLvlValue: 10,
    });
    const [isLoadingBoostTimeReduction, setIsLoadingTimeReduction] = useState<boolean>(false);

    const [fomoTokensOnAccount, setFomoTokensOnAccount] = useState<string>('0');
    const [tokenOwnedByUsers, setTokenOwnedByUsers] = useState<number | null>(null);

    const [isAcceptedNFT, setIsAccceptedNFT] = useState<boolean>(false);
    const [isAcceptedFomo, setIsAcceptedFomo] = useState<boolean>(false);

    const isBoostAviable = (boostPrice: number) => Number(fomoTokensOnAccount) >= boostPrice;

    const getBalance = useCallback(
        async (token) => {
            if (reach && account) {
                const balance = await reach.balanceOf(account);
                setBalance(reach.formatCurrency(balance, 0));

                if (token) {
                    const balanceFomo = await reach.balanceOf(account, token);
                    const fomoTokensBalance = reach.bigNumberToNumber(balanceFomo);
                    setFomoTokensOnAccount(fomoTokensBalance.toString());
                }
            }
        },
        [account, reach]
    );

    const updateFomoInfo = useCallback(
        async (ctc) => {
            if (!ctc || isFinish) {
                console.log('No ctc or fomo is finished');
                return;
            }

            console.log('Getting info');

            const [fomoInfoStatus, fomoInfo] = await ctc.views.Fomo.info();

            if (fomoInfoStatus === 'None') {
                console.log('fomoInfoStatus None');
                return;
            }

            if (!discountPrices.length && !timeReductionPrices.length) {
                setDiscountPrices(fomoInfo.discountPrices);
                setDiscountPercents(fomoInfo.discountPercents);

                const discountTimePercentAndPrice = setLevelAndValue(
                    fomoInfo.discountPrices,
                    fomoInfo.discountPercents,
                    discountLevel,
                    reach
                );

                setDiscountTimePercentAndPrice(discountTimePercentAndPrice);

                setTimeReductionPrices(fomoInfo.timeReductionPrices);
                setTimeReductionSecs(fomoInfo.timeReductionSecs);

                const timeReductionSecAndPrice = setLevelAndValue(
                    fomoInfo.timeReductionPrices,
                    fomoInfo.timeReductionSecs,
                    timeReductionLevel,
                    reach
                );

                setTimeReductionSecAndPrice(timeReductionSecAndPrice);
            }

            if (reach && account) {
                if (!nftPrize) {
                    const { nftPrize } = fomoInfo;
                    setNftPrize(reach.bigNumberToNumber(nftPrize));
                    const nftLink = await getAssetInfo(reach.bigNumberToNumber(nftPrize));
                    setnftLink(nftLink);
                }

                if (!token) {
                    setToken(reach.bigNumberToNumber(fomoInfo.token));
                }

                if (!isAcceptedFomo) {
                    const isAcceptedFomo = await account.tokenAccepted(fomoInfo.token);
                    setIsAcceptedFomo(isAcceptedFomo);
                }
                if (!isAcceptedNFT) {
                    const isAcceptedNFT = await account.tokenAccepted(fomoInfo.nftPrize);
                    setIsAccceptedNFT(isAcceptedNFT);
                }

                setTokenOwnedByUsers(reach.bigNumberToNumber(fomoInfo.tokenOwnedByUsers));
                const paidToFunder = Number.parseFloat(reach.formatCurrency(fomoInfo.paidToFunder, 4));
                const currentTotal = Number.parseFloat(reach.formatCurrency(fomoInfo.currentTotal, 3)) - paidToFunder;
                setCurrentTotal(currentTotal);

                getBalance(reach.bigNumberToNumber(fomoInfo.token));

                const winnerPrice = await ctc.views.Fomo.prevPrice(fomoInfo.currentPrice);

                setWinnerPrice(currentTotal > 0 ? Number.parseFloat(reach.formatCurrency(winnerPrice[1], 4)) : 0);
                setCurrentPrice(Number.parseFloat(reach.formatCurrency(fomoInfo.currentPrice, 2)));

                const now = await reach.getNetworkSecs();
                const currentTime = reach.bigNumberToNumber(now);
                const endTime = reach.bigNumberToNumber(fomoInfo.endTimestamp);
                if (currentTime > endTime) {
                    console.log('fomo is finished');
                    setIsFinish(true);
                    return;
                }

                setCurrentWinner(reach.formatAddress(fomoInfo.currentWinner));
                setFomoDuration(reach.bigNumberToNumber(fomoInfo.deadline));
                setCurrentTime(currentTime);
                setEndTime(endTime);
                setIsFomoSet(true);
                setIsLoading(false);
            }
        },
        [
            isFinish,
            discountPrices.length,
            timeReductionPrices.length,
            reach,
            account,
            discountLevel,
            timeReductionLevel,
            nftPrize,
            token,
            isAcceptedFomo,
            isAcceptedNFT,
            getBalance,
        ]
    );

    const deployed = () => {};

    const showPurchase = useCallback(
        (winnerAddress, winnerPriceHex, newPriceHex, currentPrice) => {
            if (reach) {
                const winnerPrice = Number.parseFloat(reach.formatCurrency(winnerPriceHex, 2));
                if (winnerPrice < currentPrice) {
                    return;
                }
                setCurrentWinner(reach.formatAddress(winnerAddress));
                setWinnerPrice(winnerPrice);
                setCurrentPrice(Number.parseFloat(reach.formatCurrency(newPriceHex, 2)));
                console.log('newWinner', reach.formatAddress(winnerAddress), 'Price', winnerPrice);
            }
        },
        [reach]
    );

    const showOutcome = useCallback(
        (address) => {
            if (reach) {
                const winnerAddress = reach.formatAddress(address);
                console.log('WINNER!!!', winnerAddress);
                setIsFinish(true);
                setCurrentWinner(winnerAddress);
            }
        },
        [reach]
    );

    useEffect(() => {
        const timeReductionSecAndPrice = setLevelAndValue(
            timeReductionPrices,
            timeReductionSecs,
            timeReductionLevel,
            reach
        );

        setTimeReductionSecAndPrice(timeReductionSecAndPrice);
        setIsLoadingTimeReduction(false);
    }, [reach, timeReductionLevel, timeReductionPrices, timeReductionSecs]);

    useEffect(() => {
        const discountTimePercentAndPrice = setLevelAndValue(discountPrices, discountPercents, discountLevel, reach);
        setDiscountTimePercentAndPrice(discountTimePercentAndPrice);
        setIsLoadingBoostDiscount(false);
    }, [discountLevel, discountPercents, discountPrices, reach]);

    const updateTimeReductionLevel = useCallback(
        (address, timeReductionLevel: BigNumber) => {
            if (reach && account) {
                if (address === account?.getAddress()) {
                    setTimeReductionLevel(reach.bigNumberToNumber(timeReductionLevel));
                }
            }
        },
        [account, reach]
    );

    const updateDiscountLevel = useCallback(
        (address, discountLevel: BigNumber) => {
            if (reach && account) {
                if (address === account?.getAddress()) {
                    setDiscountLevel(reach.bigNumberToNumber(discountLevel));
                }
            }
        },
        [account, reach]
    );

    const connectToContract = useCallback(
        async (account) => {
            const ctc = account.contract(fomo, FOMO_APP_ID);
            console.log('Connecting to', FOMO_APP_ID);
            setCtc(ctc);

            await updateFomoInfo(ctc);

            console.log('INFO_FINISH');

            await fomo
                .Buyer(ctc, {
                    showOutcome,
                    showPurchase,
                    updateDiscountLevel,
                    updateTimeReductionLevel,
                    deployed,
                })
                .catch((e) => {
                    console.log('[ERROR]', e);
                    if (e.message.includes('no application found')) {
                        setIsFinish(true);
                    }
                });

            setInutalizateValue(true);
        },
        [showOutcome, showPurchase, updateDiscountLevel, updateFomoInfo, updateTimeReductionLevel]
    );

    // // REACH BUYER INTERFACE
    const buyDiscount = async () => {
        if (!ctc) {
            alert('Please, connect the wallet.');
            return;
        }

        if (!isBoostAviable(discountTimePercentAndPrice.price)) {
            return;
        }

        setIsLoading(true);
        setIsLoadingBoostDiscount(true);

        try {
            //@ts-ignore
            const { discountLevel } = await ctc.apis.Api.buyDiscount();

            updateDiscountLevel(account?.getAddress(), discountLevel);

            await updateFomoInfo(ctc);
        } catch (e: any) {
            console.log('[ERROR]', e);
            if (e.message.includes('logic eval error')) {
                alert('Sorry, someone beat you');
            }
            setIsLoading(false);
        }
    };

    const buyTimeReduction = async () => {
        if (!ctc) {
            alert('Please, connect the wallet.');
            return;
        }

        if (!isBoostAviable(timeReductionSecAndPrice.price)) {
            return;
        }

        setIsLoadingTimeReduction(true);
        setIsLoading(true);
        try {
            //@ts-ignore
            const { timeReductionLevel } = await ctc.apis.Api.buyTimeReduction();
            updateTimeReductionLevel(account?.getAddress(), timeReductionLevel);
            await updateFomoInfo(ctc);
        } catch (e: any) {
            console.log('[ERROR]', e);
            if (e.message.includes('logic eval error')) {
                alert('Sorry, someone beat you');
            }
            setIsLoading(false);
        }
    };

    const buyTicket = async () => {
        if (!ctc) {
            alert('Please, connect the wallet.');
            return;
        }

        setIsLoading(true);

        if (account && !isAcceptedFomo && !isAcceptedNFT) {
            await batchOptIn(reach, account.networkAccount.addr, [nftPrize, token], false);
            logEvent(account.networkAccount.addr, 'FOMO ' + currentPrice);
        }

        try {
            //@ts-ignore
            const { discountLevel, timeReductionLevel } = await ctc.apis.Api.buyTicket();
            if (reach) {
                setDiscountLevel(reach.bigNumberToNumber(discountLevel));
                setTimeReductionLevel(reach.bigNumberToNumber(timeReductionLevel));
            }
            await updateFomoInfo(ctc);
        } catch (e: any) {
            console.log('[ERROR]', e);
            if (e.message.includes('logic eval error')) {
                alert('Sorry, someone beat you');
            }
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (account && !isAccountConnected && !ctc) {
            const connect = async () => {
                await connectToContract(account);
                setIsAccountConnected(true);
            };
            connect();
        }
    }, [account, connectToContract, ctc, isAccountConnected]);

    if (!account) {
        return (
            <div className="fomo">
                <h1 style={{ fontSize: '20px', marginTop: '20px' }}>PLEASE, CONNECT THE WALLET.</h1>
            </div>
        );
    }

    if (isFinish) {
        return (
            <div className="fomo">
                <h1 style={{ fontSize: '20px', marginTop: '20px' }}>THE FOMO IS FINISHED.</h1>
                {currentWinner ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2 className="fomo_info">winner: </h2>
                        <a className="fomo_info" href={'https://algoexplorer.io/address/' + currentWinner}>
                            {currentWinner}
                        </a>
                    </div>
                ) : (
                    <br />
                )}
            </div>
        );
    }

    if (!isFomoSet) {
        return <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />;
    }

    return (
        <FomoContainer>
            <FomoRulesTitle>THE ONLY WAY YOU LOSE IN THIS GAME IS IF YOU STOP PLAYING</FomoRulesTitle>
            <button className="fomo_rules" onClick={() => setIsModalOpen(true)}>
                game rules
            </button>
            <RulesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Actions>
                <NFTCard>
                    <a href={`https://www.nftexplorer.app/asset/${nftPrize}`}>
                        <Nft url={nftLink} />
                    </a>
                    <NFTCardInfo>
                        <Prize>
                            {`prize: NFT + ${currentTotal.toPrecision(2)}`} <AlgoIcon fill="#5cfc3c" width="17px" />
                        </Prize>
                        <Winner>
                            <h2 className="fomo_info">
                                winner: &nbsp;
                                <a className="fomo_info" href={'https://algoexplorer.io/address/' + currentWinner}>
                                    {currentWinner}
                                </a>
                            </h2>
                        </Winner>
                        <WinnerBid>
                            winner bid: {winnerPrice} <AlgoIcon fill="#197303" width="11px" />
                        </WinnerBid>
                    </NFTCardInfo>
                </NFTCard>
                <Info>
                    <Timer totalSec={fomoDuration} leftSec={endTime - currentTime} />

                    <FomoSupply>FOMO supply: {tokenOwnedByUsers} </FomoSupply>
                    <Balance>
                        Balance:
                        <Amounts>
                            <Amount>{fomoTokensOnAccount} FOMO</Amount>
                            <Amount>
                                {balance} <AlgoIcon fill="#5cfc3c" width="17px" />
                            </Amount>
                        </Amounts>
                    </Balance>
                    <Update>
                        <Level>
                            <LabelLevel>bid discount: {discountTimePercentAndPrice.value}% </LabelLevel>
                            <LevelValue>level {discountLevel}</LevelValue>
                        </Level>
                        <BoostButtonConteiner onClick={buyDiscount}>
                            {discountPrices.length >= discountLevel + 1 ? (
                                <>
                                    <BoostButton
                                        isLoading={isLoadingBoostDiscount}
                                        disabled={!isBoostAviable(discountTimePercentAndPrice.price)}
                                    />
                                    <BoostInfo>
                                        boost to {discountTimePercentAndPrice.nextLvlValue}% (-
                                        {discountTimePercentAndPrice.price} FOMO)
                                    </BoostInfo>
                                </>
                            ) : (
                                <MaxedOut>Maxed out</MaxedOut>
                            )}
                        </BoostButtonConteiner>
                    </Update>

                    <Update>
                        <Level>
                            <LabelLevel>reduce time: -{timeReductionSecAndPrice.value}sec</LabelLevel>
                            <LevelValue>level {timeReductionLevel}</LevelValue>
                        </Level>

                        <BoostButtonConteiner onClick={buyTimeReduction}>
                            {timeReductionPrices.length >= timeReductionLevel + 1 ? (
                                <>
                                    <BoostButton
                                        isLoading={isLoadingBoostTimeReduction}
                                        disabled={!isBoostAviable(timeReductionSecAndPrice.price)}
                                    />
                                    <BoostInfo>
                                        boost to -{timeReductionSecAndPrice.nextLvlValue} sec (-
                                        {timeReductionSecAndPrice.price} FOMO)
                                    </BoostInfo>
                                </>
                            ) : (
                                <MaxedOut>Maxed out</MaxedOut>
                            )}
                        </BoostButtonConteiner>
                    </Update>

                    {/*<button className="fomo_button" onClick={this.buyTicket}>FOMO!!!</button>*/}

                    <BID>
                        BID {currentPrice} <AlgoIcon fill="#5cfc3c" width="19px" />
                    </BID>
                    <button
                        className={!isLoading ? 'fomo_button' : 'fomo_button_loading'}
                        onClick={!isLoading ? buyTicket : undefined}
                    >
                        FOMO!!!
                        {isLoading ? (
                            <span className="fomo_loading">
                                <img
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    alt="loader"
                                    src={require('../imgs/loader.gif').default}
                                />
                            </span>
                        ) : (
                            <br />
                        )}
                    </button>
                </Info>
            </Actions>
        </FomoContainer>
    );
};
