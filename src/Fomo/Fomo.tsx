import React, { useState, useContext, useEffect, useCallback } from 'react';
import { LevelInfo } from './types';
import '../css/fomo.css';
import * as fomo from '../fomo_interface/index.main.mjs';
import { RulesModal } from './RulesModal';
import { AppContext, FOMO_APP_ID, Context } from '../AppContext';
import { Timer } from './Timer';
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
    const [ctc, setCtc] = useState<null>(null);
    const [isAccountConnected, setIsAccountConnected] = useState<boolean>(false);
    const [isFomoSet, setIsFomoSet] = useState<boolean>(false);
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

    const [token, setToken] = useState<number | null>(null);

    const [discountLevel, setDiscountLevel] = useState<number>(0);
    const [timeReductionLevel, setTimeReductionLevel] = useState<number>(0);

    const [discountPrices, setDiscountPrices] = useState<BigNumber[]>([]);
    const [discountPercents, setDiscountPercents] = useState<BigNumber[]>([]);
    const [discountTimePercentAndPrice, setDiscountTimePercentAndPrice] = useState<LevelInfo>({
        price: 0,
        value: 0,
        nextLvlValue: 3,
    });
    const [isLoadingBoostDiscount, setIsLoadingBoostDiscount] = useState<boolean>(false);

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
    const [showPurchaseOutput, setShowPurschaseOutput] = useState<{
        currentWinner: string;
        winnerPrice: number;
        currentPrice: number;
    }>({ currentWinner: '', winnerPrice: 0, currentPrice: 0 });

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
                setDiscountTimePercentAndPrice(discountTimePercentAndPrice);

                setTimeReductionPrices(fomoInfo.timeReductionPrices);
                setTimeReductionSecs(fomoInfo.timeReductionSecs);
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

                const [status, { discountLevel, timeReductionLevel }] = await ctc.views.Fomo.participantInfo(
                    account?.getAddress()
                );

                setTimeReductionLevel(reach.bigNumberToNumber(timeReductionLevel));
                setDiscountLevel(reach.bigNumberToNumber(discountLevel));

                const paidToFunder = Number.parseFloat(reach.formatCurrency(fomoInfo.paidToFunder, 4));
                const currentTotal = Number.parseFloat(reach.formatCurrency(fomoInfo.currentTotal, 3)) - paidToFunder;

                getBalance(reach.bigNumberToNumber(fomoInfo.token));

                const endTime = reach.bigNumberToNumber(fomoInfo.endTimestamp);

                const now = await reach.getNetworkSecs();

                const currentTime = reach.bigNumberToNumber(now);

                if (currentTime > endTime) {
                    console.log('fomo is finished');
                    setIsFinish(true);
                    return;
                }

                setCurrentTime(currentTime);

                setCurrentTotal(currentTotal);
                setTokenOwnedByUsers(reach.bigNumberToNumber(fomoInfo.tokenOwnedByUsers));
                setFomoDuration(reach.bigNumberToNumber(fomoInfo.deadline));
                setEndTime(endTime);
                setIsFomoSet(true);
            }
        },
        [
            isFinish,
            discountPrices,
            timeReductionPrices,
            reach,
            account,
            discountTimePercentAndPrice,
            timeReductionSecAndPrice,
            nftPrize,
            token,
            isAcceptedFomo,
            isAcceptedNFT,
            getBalance,
            currentTime,
        ]
    );

    useEffect(() => {
        updateFomoInfo(ctc);
    }, [ctc, currentWinner, updateFomoInfo, discountLevel, timeReductionLevel]);

    const showPurchase = useCallback(
        ([winnerAddress, winnerPriceHex, newPriceHex]) => {
            if (reach) {
                const winnerPrice = Number.parseFloat(reach.formatCurrency(winnerPriceHex, 2));

                setShowPurschaseOutput({
                    currentWinner: reach.formatAddress(winnerAddress),
                    winnerPrice,
                    currentPrice: Number.parseFloat(reach.formatCurrency(newPriceHex, 2)),
                });
            }
        },
        [reach]
    );

    useEffect(() => {
        if (showPurchaseOutput.currentPrice < currentPrice) {
            return;
        }
        if (reach) {
            console.log('WINNER', showPurchaseOutput.currentWinner, 'PRICE', showPurchaseOutput.winnerPrice);
        }
        Promise.all([
            setCurrentPrice(showPurchaseOutput.currentPrice),
            setCurrentWinner(showPurchaseOutput.currentWinner),
            setWinnerPrice(showPurchaseOutput.winnerPrice),
        ]);
    }, [ctc, currentPrice, reach, showPurchase, showPurchaseOutput]);

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
    }, [reach, timeReductionLevel, timeReductionPrices, timeReductionSecs]);

    useEffect(() => {
        const discountTimePercentAndPrice = setLevelAndValue(discountPrices, discountPercents, discountLevel, reach);
        setDiscountTimePercentAndPrice(discountTimePercentAndPrice);
    }, [discountLevel, discountPercents, discountPrices, reach]);

    const connectToContract = useCallback(
        async (account) => {
            const ctc = account.contract(fomo, FOMO_APP_ID);
            console.log('Connecting to', FOMO_APP_ID);
            setCtc(ctc);
            setIsAccountConnected(true);

            const events = ctc.events;

            await updateFomoInfo(ctc);

            fomo.Buyer(ctc, {
                showOutcome,
                deployed: () => {},
            }).catch((e) => {
                console.log('[ERROR]', e);
                if (e.message.includes('no application found')) {
                    setIsFinish(true);
                }
            });

            await events.showPurchase.monitor(({ when, what }: { when: BigNumber; what: BigNumber[] }) => {
                showPurchase(what);
            });
        },
        [showOutcome, showPurchase, updateFomoInfo]
    );

    // // REACH BUYER INTERFACE
    const buyDiscount = async () => {
        if (!isBoostAviable(discountTimePercentAndPrice.price)) {
            return;
        }

        setIsLoadingBoostDiscount(true);

        //@ts-ignore
        ctc.apis.Api.buyDiscount()
            .then(() => {
                setIsLoadingBoostDiscount(false);
            })
            .catch((e: any) => {
                setIsLoadingBoostDiscount(false);
                console.log('[ERROR]', e);
                if (e.message.includes('logic eval error')) {
                    alert('Sorry, someone beat you');
                }
            });
    };

    const buyTimeReduction = async () => {
        if (!isBoostAviable(timeReductionSecAndPrice.price)) {
            return;
        }
        setIsLoadingTimeReduction(true);

        //@ts-ignore
        ctc.apis.Api.buyTimeReduction()
            .then(() => updateFomoInfo(ctc))
            .then(() => {
                setIsLoadingTimeReduction(false);
            })
            .catch((e: Error) => {
                console.log(e);
                setIsLoadingTimeReduction(false);
                if (e.message.includes('logic eval error')) {
                    alert('Sorry, someone beat you');
                }
            });
    };

    const buyTicket = useCallback(async () => {
        setIsLoading(true);

        if (account && (!isAcceptedFomo || !isAcceptedNFT)) {
            await batchOptIn(reach, account.networkAccount.addr, [nftPrize, token], false);
            logEvent(account.networkAccount.addr, 'FOMO ' + currentPrice);
        }

        //@ts-ignore
        ctc.apis.Api.buyTicket()
            .then(() => updateFomoInfo(ctc))
            .then(() => setIsLoading(false))
            .catch((e: Error) => {
                console.log(e.message);
                updateFomoInfo(ctc);
                setIsLoading(false);
                if (e.message.includes('logic eval error')) {
                    alert('Sorry, someone beat you');
                }
                if (e.message.includes('below min')) {
                    alert('Not enough Algo');
                }
            });
    }, [account, ctc, currentPrice, isAcceptedFomo, isAcceptedNFT, nftPrize, reach, token, updateFomoInfo]);

    useEffect(() => {
        if (account && !isAccountConnected && !ctc) {
            const connect = async () => {
                await connectToContract(account);
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
                                    >
                                        {isLoadingBoostDiscount ? '' : 'boost!'}
                                    </BoostButton>
                                    <BoostInfo>
                                        boost to {discountTimePercentAndPrice.nextLvlValue}% (-
                                        {discountTimePercentAndPrice.price} FOMO)
                                    </BoostInfo>
                                </>
                            ) : (
                                <MaxedOut>maxed out</MaxedOut>
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
                                    >
                                        {isLoadingBoostTimeReduction ? '' : 'boost!'}
                                    </BoostButton>
                                    <BoostInfo>
                                        boost to -{timeReductionSecAndPrice.nextLvlValue} sec (-
                                        {timeReductionSecAndPrice.price} FOMO)
                                    </BoostInfo>
                                </>
                            ) : (
                                <MaxedOut>maxed out</MaxedOut>
                            )}
                        </BoostButtonConteiner>
                    </Update>
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
