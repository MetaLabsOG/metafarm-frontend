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
} from './styled';
import { NFTCard, NFTCardInfo, Nft } from '../common/styled';
import { setLevelAndValue } from './utils';
import { BigNumber } from 'ethers';

export const Fomo = () => {
    const { reach, account } = useContext(AppContext) as Context;
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
    const [timeReductionLevel, setTimeReductionLevel] = useState<number>(0);
    const [timeReductionPrices, setTimeReductionPrices] = useState<BigNumber[]>([]);
    const [timeReductionSecs, setTimeReductionSecs] = useState<BigNumber[]>([]);
    const [timeReductionSecAndPrice, setTimeReductionSecAndPrice] = useState<LevelInfo>({
        price: 0,
        value: 0,
        nextLvlValue: 10,
    });

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

            const [fomoInfoStatus, fomoInfo] = await ctc.views.Fomo.info();

            if (fomoInfoStatus === 'None') {
                console.log('fomoInfoStatus None');
                return;
            }

            if (!token && reach) {
                const { timeReductionLevel, discountLevel } = await ctc.apis.Api.getParticipantStats();
                setTimeReductionLevel(reach.bigNumberToNumber(timeReductionLevel));

                setDiscountLevel(reach.bigNumberToNumber(discountLevel));

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

                if (!tokenOwnedByUsers) {
                    setTokenOwnedByUsers(reach.bigNumberToNumber(fomoInfo.tokenOwnedByUsers));
                }

                getBalance(reach.bigNumberToNumber(fomoInfo.token));

                setCurrentPrice(Number.parseFloat(reach.formatCurrency(fomoInfo.currentPrice, 4)));

                const paidToFunder = Number.parseFloat(reach.formatCurrency(fomoInfo.paidToFunder, 4));
                const currentTotal = Number.parseFloat(reach.formatCurrency(fomoInfo.currentTotal, 3)) - paidToFunder;
                setCurrentTotal(currentTotal);

                const winnerPrice = await ctc.views.Fomo.prevPrice(fomoInfo.currentPrice);

                setWinnerPrice(currentTotal > 0 ? Number.parseFloat(reach.formatCurrency(winnerPrice[1], 4)) : 0);

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
        [isFinish, token, reach, account, nftPrize, isAcceptedFomo, isAcceptedNFT, tokenOwnedByUsers, getBalance]
    );

    const deployed = () => {};

    const showPurchase = useCallback(
        async (winnerAddress, winnerPriceHex, newPriceHex, currentPrice) => {
            if (reach) {
                const winnerPrice = Number.parseFloat(reach.formatCurrency(winnerPriceHex, 4));
                if (winnerPrice < currentPrice) {
                    return;
                }

                console.log('NEW WINNER', reach.formatAddress(winnerAddress), winnerPrice);
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

    const connectToContract = useCallback(
        async (account) => {
            const ctc = account.contract(fomo, FOMO_APP_ID);
            console.log('Connecting to', FOMO_APP_ID);
            setCtc(ctc);
            await updateFomoInfo(ctc);

            await fomo.Buyer(ctc, { showOutcome, showPurchase, deployed }).catch((e) => {
                console.log('[ERROR]', e);
                if (e.message.includes('no application found')) {
                    setIsFinish(true);
                }
            });
        },
        [showOutcome, showPurchase, updateFomoInfo]
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

        try {
            //@ts-ignore
            const { discountLevel } = await ctc.apis.Api.buyDiscount();
            if (reach) {
                console.log('DISCOUNT_LVL', reach.bigNumberToNumber(discountLevel));
                setDiscountLevel(reach.bigNumberToNumber(discountLevel));
                const discountTimePercentAndPrice = setLevelAndValue(
                    discountPrices,
                    discountPercents,
                    discountLevel,
                    reach
                );

                setDiscountTimePercentAndPrice(discountTimePercentAndPrice);
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

    const buyTimeReduction = async () => {
        if (!ctc) {
            alert('Please, connect the wallet.');
            return;
        }

        if (!isBoostAviable(timeReductionSecAndPrice.price)) {
            return;
        }

        setIsLoading(true);
        try {
            //@ts-ignore
            const { timeReductionLevel } = await ctc.apis.Api.buyTimeReduction();

            if (reach) {
                setTimeReductionLevel(reach.bigNumberToNumber(timeReductionLevel));
                const timeReductionSecAndPrice = setLevelAndValue(
                    timeReductionPrices,
                    timeReductionSecs,
                    timeReductionLevel,
                    reach
                );

                setTimeReductionSecAndPrice(timeReductionSecAndPrice);

                await updateFomoInfo(ctc);
            }
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
            <h1 style={{ fontSize: '20px', color: '#197303' }}>
                THE ONLY WAY YOU LOSE IN THIS GAME IS IF YOU STOP PLAYING
            </h1>
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
                            {`prize: NFT + ${currentTotal.toPrecision(3)}`} <AlgoIcon fill="#5cfc3c" width="17px" />
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
                            <LabelLevel>bid discount</LabelLevel>
                            <LevelValue>
                                level {discountLevel} ({discountTimePercentAndPrice.value}%)
                            </LevelValue>
                        </Level>
                        <BoostButtonConteiner onClick={buyDiscount}>
                            {discountPrices.length >= discountLevel + 1 ? (
                                <>
                                    <BoostButton disabled={!isBoostAviable(discountTimePercentAndPrice.price)}>
                                        boost!
                                    </BoostButton>
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
                            <LabelLevel>reduce time</LabelLevel>
                            <LevelValue>
                                level {timeReductionLevel} (-{timeReductionSecAndPrice.value} sec)
                            </LevelValue>
                        </Level>

                        <BoostButtonConteiner onClick={buyTimeReduction}>
                            {timeReductionPrices.length >= timeReductionLevel + 1 ? (
                                <>
                                    <BoostButton disabled={!isBoostAviable(timeReductionSecAndPrice.price)}>
                                        boost!
                                    </BoostButton>
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
