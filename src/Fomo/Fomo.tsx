import { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { useQuery } from 'react-query';
import '../css/fomo.css';
import { backend as fomo } from '@metalabsog/metafomo';
import { RulesModal } from './RulesModal';
import { AppContext, reach, Context, IS_MOBILE } from '../AppContext';
import { Timer } from './Timer';
import { Status } from '../Status';
import { batchOptIn } from '../batchOptIn.mjs';
import { getPools } from '../providers/apiProvider';
import { getAssetInfo } from '../providers/algoExploerProvider';
import { logEvent } from '../logEvent';
import { AlgoIcon } from '../imgs/algo';
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
    AvailableBalance,
} from './styled';
import { NFTCard, NFTCardInfo, Nft, InfoHeader } from '../common/styled';
import { BigNumber } from 'ethers';

const USER_BEATEN_MESSAGE = 'Sorry, someone beat you';

export const Fomo = () => {
    //const { data } = useQuery(['pools', 'fomo'], () => getPools('fomo'));
    const id = 89413294; //data && data.length ? data[0].id : undefined;
    const { account } = useContext(AppContext) as Context;
    const [ctc, setCtc] = useState<any>(null);
    const [isAccountConnected, setIsAccountConnected] = useState<boolean>(false);
    const [isFomoSet, setIsFomoReady] = useState<boolean>(false);
    const [isFinish, setIsFinish] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fomoDuration, setFomoDuration] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [nftPrize, setNftPrize] = useState<null | number>(null);
    const [balance, setBalance] = useState<string>('0');
    const [avableBalance, setAviableBalance] = useState('0');
    const [nftLink, setnftLink] = useState<string>('');
    const [currentPrice, setCurrentPrice] = useState('0');
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTotal, setCurrentTotal] = useState<number>(0);
    const [currentWinner, setCurrentWinner] = useState<string>('');
    const [endTime, setEndTime] = useState(0);
    const [winnerPrice, setWinnerPrice] = useState('0');

    const [token, setToken] = useState<number | null>(null);

    const [discountLevel, setDiscountLevel] = useState<number>(0);
    const [timeReductionLevel, setTimeReductionLevel] = useState<number>(0);

    const [discountPrices, setDiscountPrices] = useState<number[]>([]);
    const [discountPercents, setDiscountPercents] = useState<number[]>([]);
    const [isLoadingBoostDiscount, setIsLoadingBoostDiscount] = useState<boolean>(false);

    const [timeReductionPrices, setTimeReductionPrices] = useState<number[]>([]);
    const [timeReductionSecs, setTimeReductionSecs] = useState<number[]>([]);
    const [isLoadingBoostTimeReduction, setIsLoadingTimeReduction] = useState<boolean>(false);

    const [fomoTokensOnAccount, setFomoTokensOnAccount] = useState<string>('0');
    const [tokenOwnedByUsers, setTokenOwnedByUsers] = useState<number | null>(null);

    const [showPurchaseOutput, setShowPurschaseOutput] = useState<{
        currentWinner: string;
        winnerPrice: string;
        currentPrice: string;
    }>({ currentWinner: '', winnerPrice: '0', currentPrice: '0' });

    const isBoostAviable = (boostPrice: number) => Number(fomoTokensOnAccount) >= boostPrice;

    const getNextDiscountPrice = () => (discountLevel === discountPrices.length ? 0 : discountPrices[discountLevel]);
    const getNextTimeReductionPrice = () =>
        timeReductionLevel === timeReductionPrices.length ? 0 : timeReductionPrices[timeReductionLevel];

    const updateBalance = useCallback(
        async () => {
            if (account) {
                try {
                    const balance = await reach.balanceOf(account);
                    const reservedAmount = await reach.minimumBalanceOf(account);
                    const availableBalance = reach.sub(balance, reservedAmount);
                    const availableBalanceFormatted = reach.formatCurrency(availableBalance, 0);
                    setBalance(reach.formatCurrency(balance, 0));
                    setAviableBalance(availableBalanceFormatted);
                } catch (error) {
                    logEvent(account.networkAccount.addr, { message: 'GET BALANCE FAIL' }, 'errors');
                }

                if (token) {
                    try {
                        const balanceFomo = await reach.balanceOf(account, token);
                        const fomoTokensBalance = reach.bigNumberToNumber(balanceFomo);
                        setFomoTokensOnAccount(fomoTokensBalance.toString());
                    } catch (error) {
                        logEvent(account.networkAccount.addr, { message: 'GET FOMO BALANCE FAIL' }, 'errors');
                    }
                }
            }
        },
        [account, token]
    );

    const updateFomoInfo = useCallback(
        async (ctc) => {
            console.log('update fomo info');
            if (!ctc || isFinish) {
                return;
            }

            console.log('Getting info');

            const [infoStatus, info] = await ctc.views.Fomo.info();

            console.log(info);

            if (infoStatus === 'None') {
                logEvent(account.networkAccount.addr, { message: 'GET INFO FAIL' }, 'errors');
                return;
            }

            updateBalance();

            const endTimeCurrent = reach.bigNumberToNumber(info.endTimestamp);

            if (endTime !== endTimeCurrent) {
                const now = await reach.getNetworkSecs();
                const currentTime = reach.bigNumberToNumber(now);

                setTimeLeft(endTimeCurrent - currentTime);
                console.log('BUY_TICKET', 'END_TIME', endTime, 'CT', currentTime);
            }

            // TODO we should not do it but just wait for showOutcome from smart contract
            // but for some reason it wasn't working so this is a hack.
            if (currentTime > endTimeCurrent) {
                console.log('fomo is finished');
                setIsFinish(true);
                return;
            }

            setEndTime(reach.bigNumberToNumber(info.endTimestamp));
            const paidToFunder = Number.parseFloat(reach.formatCurrency(info.paidToFunder, 4));
            const currentTotal = Number.parseFloat(reach.formatCurrency(info.currentTotal, 3)) - paidToFunder;
            setCurrentTotal(currentTotal);
            setTokenOwnedByUsers(info.tokenOwnedByUsers.toNumber());
            setFomoDuration(info.deadline.toNumber());
            setIsLoading(false);
        },
        [isFinish, account, updateBalance, endTime, currentTime]
    );

    const showPurchase = useCallback(([winnerAddress, winnerPriceHex, newPriceHex]) => {
        const winnerPrice = reach.formatCurrency(winnerPriceHex, 2);

        setShowPurschaseOutput({
            currentWinner: reach.formatAddress(winnerAddress),
            winnerPrice,
            currentPrice: newPriceHex,
        });
    }, []);

    useEffect(() => {
        console.log('WINNER', showPurchaseOutput.currentWinner, 'PRICE', showPurchaseOutput.winnerPrice);

        //@ts-ignore
        setCurrentPrice(reach.formatCurrency(showPurchaseOutput.currentPrice, 2));
        setCurrentWinner(showPurchaseOutput.currentWinner);
        setWinnerPrice(showPurchaseOutput.winnerPrice);
    }, [ctc, currentPrice, showPurchase, showPurchaseOutput]);

    const showOutcome = useCallback((address) => {
        const winnerAddress = reach.formatAddress(address);
        console.log('WINNER!!!', winnerAddress);
        setIsFinish(true);
        setCurrentWinner(winnerAddress);
    }, []);

    useEffect(() => {
        // TODO BUG: when we start from app/fomo page and connect wallet, account is undefined despite
        // it was set in wallet connections code
        if (account && !isAccountConnected) {
            const connect = () => {
                console.log('connect to contract');
                // TODO should not be this exact promise
                const ctc = account.contract(fomo, Promise.resolve(id));
                setCtc(ctc);
                setIsAccountConnected(true);

                fomo.Buyer(ctc, {
                    // TODO remove
                    showOutcome,
                    deployed: () => {},
                }).catch((e: any) => {
                    console.log('[ERROR]', e);
                    logEvent(account.networkAccount.addr, { message: e }, 'errors');
                });

                return ctc
            };

            const initCurrentTime = async () => {
                const now = await reach.getNetworkSecs();
                const currentTime = now.toNumber();
                setCurrentTime(currentTime);
            }

            const initPrices = (info: any) => {
                const bnArrayToNumberArray = (arr: BigNumber[]) => arr.map((x) => x.toNumber());

                setDiscountPrices(bnArrayToNumberArray(info.discountPrices));
                setDiscountPercents(bnArrayToNumberArray(info.discountPercents));

                setTimeReductionPrices(bnArrayToNumberArray(info.timeReductionPrices));
                setTimeReductionSecs(bnArrayToNumberArray(info.timeReductionSecs));
            };

            const setInitialTimeReductionLevel = async () => {
                const [status, participantInfo] = await ctc.views.Fomo.participantInfo(account?.getAddress());
                if (status === 'None') {
                    logEvent(account.networkAccount.addr, { message: 'GET PARTICIPANT INFO FAIL' }, 'errors');
                    return;
                }
                const { discountLevel, timeReductionLevel } = participantInfo;
                setTimeReductionLevel(reach.bigNumberToNumber(timeReductionLevel));
                setDiscountLevel(reach.bigNumberToNumber(discountLevel));
            };

            const initNftPrize = async (info: any) => {
                const { nftPrize } = info;
                setNftPrize(nftPrize.toNumber());
                const nftLink = (await getAssetInfo(reach.bigNumberToNumber(nftPrize))).params.url;
                if (nftLink === '') {
                    logEvent(account.networkAccount.addr, { message: 'GET NFT LINK FAIL' }, 'errors');
                }
                setnftLink(nftLink);
            };

            const ctc = connect();

            console.log(ctc)

            ctc.views.Fomo.info().then((res: any) => {
                const [status, info] = res;
                // TODO sometimes it happens and I have no idea why
                if (status === 'None') {
                    console.log("was not able to get info")
                    logEvent(account.networkAccount.addr, { message: 'GET INFO FAIL' }, 'errors');
                }
                initPrices(info);
                initNftPrize(info);
                setToken(info.token.toNumber());
            });

            setInitialTimeReductionLevel();
            initCurrentTime();

            setIsFomoReady(true);
        }
        // TODO ctc shouldn't be here actually but async is kinda painful...
    }, [account, ctc, isAccountConnected, id, showOutcome, updateFomoInfo]);

    // set up monitors
    useEffect(() => {
        if (ctc !== null) {
            const events = ctc.events;
            events.showPurchase.monitor(({ when, what }: { when: BigNumber; what: BigNumber[] }) => {
                showPurchase(what);
            });
        }
        // TODO destroy
    }, [ctc, showPurchase]);

    // // REACH BUYER INTERFACE
    const buyDiscount = async () => {
        if (!isBoostAviable(discountPrices[discountLevel])) {
            return;
        }

        setIsLoadingBoostDiscount(true);

        //@ts-ignore
        ctc.apis.Api.buyDiscount()
            .then(({ _discountLevel }: { _discountLevel: BigNumber }) => {
                setDiscountLevel(reach.bigNumberToNumber(_discountLevel));
                if (account) {
                    logEvent(
                        account?.networkAccount.addr,
                        {
                            action: 'boost discount',
                            status: `BOOST ${discountPrices[discountLevel]} FOMO`,
                            timeReductionSecs: timeReductionSecs[timeReductionLevel],
                            discountPercent: discountPercents[discountLevel],
                            bid: currentPrice,
                            prize: Number(currentTotal).toFixed(2),
                            accBalance: balance,
                            fomoBalance: fomoTokensOnAccount,
                            totalFomoBalance: tokenOwnedByUsers,
                            timeLeft: timeLeft,
                        },
                        'fomo'
                    );
                }
                setIsLoadingBoostDiscount(false);
            })
            .catch((e: any) => {
                setIsLoadingBoostDiscount(false);
                console.log('[ERROR]', e);
                if (account) {
                    logEvent(account.networkAccount.addr, { message: e }, 'errors');
                }
                if (e.message.includes('logic eval error')) {
                    alert(USER_BEATEN_MESSAGE);
                }
            });
    };

    const buyTimeReduction = async () => {
        if (!isBoostAviable(discountPrices[discountLevel])) {
            return;
        }
        setIsLoadingTimeReduction(true);

        //@ts-ignore
        ctc.apis.Api.buyTimeReduction()
            .then(({ _timeReductionLevel }: { _timeReductionLevel: BigNumber }) => {
                setTimeReductionLevel(reach.bigNumberToNumber(_timeReductionLevel));
                if (account) {
                    logEvent(
                        account?.networkAccount.addr,
                        {
                            action: 'boost time reduction',
                            status: `BOOST ${timeReductionPrices[timeReductionLevel]} FOMO`,
                            timeReductionSecs: timeReductionSecs[timeReductionLevel],
                            discountPercent: discountPercents[discountLevel],
                            bid: currentPrice,
                            prize: Number(currentTotal).toFixed(2),
                            accBalance: balance,
                            fomoBalance: fomoTokensOnAccount,
                            totalFomoBalance: tokenOwnedByUsers,
                            timeLeft: timeLeft,
                        },
                        'fomo'
                    );
                }
            })
            .then(() => {
                setIsLoadingTimeReduction(false);
            })
            .catch((e: Error) => {
                setIsLoadingTimeReduction(false);
                console.log('[ERROR]', e);
                if (account) {
                    logEvent(account.networkAccount.addr, { message: e }, 'errors');
                }
                if (e.message.includes('logic eval error')) {
                    alert(USER_BEATEN_MESSAGE);
                }
            });
    };

    const buyTicket = useCallback(async () => {
        setIsLoading(true);

        const isAcceptedFomo = await account.tokenAccepted(token);
        const isAcceptedNFT = await account.tokenAccepted(nftPrize);

        if (account && (!isAcceptedFomo || !isAcceptedNFT)) {
            await batchOptIn(reach, account.networkAccount.addr, [nftPrize, token], false);
        }

        //@ts-ignore
        ctc.apis.Api.buyTicket()
            .then(() => {
                updateFomoInfo(ctc);
                logEvent(
                    account?.networkAccount.addr,
                    {
                        action: 'fomo',
                        status: `BID ${currentPrice} ALGO`,
                        bid: currentPrice,
                        prize: Number(currentTotal).toFixed(2),
                        accBalance: balance,
                        fomoBalance: fomoTokensOnAccount,
                        totalFomoBalance: tokenOwnedByUsers,
                        timeLeft: timeLeft,
                        timeReductionSecs: timeReductionSecs[timeReductionLevel],
                        discountPercent: discountPercents[discountLevel],
                    },
                    'fomo'
                );
            })
            .catch((e: Error) => {
                setIsLoading(false);
                console.log('[ERROR]', e);
                if (account) {
                    logEvent(account.networkAccount.addr, { message: e }, 'errors');
                }

                if (e.message.includes('logic eval error')) {
                    alert('Sorry, someone beat you');
                } else if (e.message.includes('below min')) {
                    alert('Not enough Algo');
                }
            });
    }, [
        account,
        balance,
        ctc,
        currentPrice,
        currentTotal,
        fomoTokensOnAccount,
        nftPrize,
        timeLeft,
        token,
        tokenOwnedByUsers,
        discountLevel,
        discountPercents,
        timeReductionLevel,
        timeReductionSecs,
        updateFomoInfo,
    ]);

    if (id === undefined) {
        <InfoHeader>GAME NOT FOUND</InfoHeader>;
    }

    if (!account) {
        return <InfoHeader>PLEASE, CONNECT THE WALLET.</InfoHeader>;
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
                        {!IS_MOBILE && (
                            <>
                                {' '}
                                <Prize>
                                    {`prize: NFT + ${Number(currentTotal).toFixed(2)}`}{' '}
                                    <AlgoIcon fill="#5cfc3c" width="17px" />
                                </Prize>
                                <Winner>
                                    <h2 className="fomo_info">
                                        winner: &nbsp;
                                        <a
                                            className="fomo_info"
                                            href={'https://algoexplorer.io/address/' + currentWinner}
                                        >
                                            {currentWinner}
                                        </a>
                                    </h2>
                                </Winner>
                                <WinnerBid>
                                    winner bid: {winnerPrice} <AlgoIcon fill="#197303" width="11px" />
                                </WinnerBid>{' '}
                            </>
                        )}
                    </NFTCardInfo>
                </NFTCard>
                {IS_MOBILE && (
                    <>
                        <WinnerBid>
                            winner bid: {winnerPrice} <AlgoIcon fill="#197303" width="11px" />
                        </WinnerBid>
                        <Winner>
                            <h2 className="fomo_info">
                                winner: &nbsp;
                                <a className="fomo_info" href={'https://algoexplorer.io/address/' + currentWinner}>
                                    {currentWinner}
                                </a>
                            </h2>
                        </Winner>

                        <Prize>
                            {`prize: NFT + ${Number(currentTotal).toFixed(2)}`} <AlgoIcon fill="#5cfc3c" width="17px" />
                        </Prize>
                    </>
                )}
                <Info>
                    <Timer totalSec={fomoDuration} leftSec={timeLeft} />

                    <FomoSupply>FOMO supply: {tokenOwnedByUsers} </FomoSupply>
                    <Balance>
                        Balance:
                        <Amounts>
                            <Amount>{fomoTokensOnAccount} FOMO</Amount>
                            <Amount>
                                {balance} <AlgoIcon fill="#5cfc3c" width="17px" />
                                <AvailableBalance>{avableBalance} avail.</AvailableBalance>
                            </Amount>
                        </Amounts>
                    </Balance>
                    <Update>
                        <Level>
                            <LabelLevel>buy discount: {discountPercents[discountLevel]}% </LabelLevel>
                            <LevelValue>level {discountLevel}</LevelValue>
                        </Level>
                        <BoostButtonConteiner onClick={buyDiscount}>
                            {discountPrices.length >= discountLevel + 1 ? (
                                <>
                                    <BoostButton
                                        isLoading={isLoadingBoostDiscount}
                                        disabled={!isBoostAviable(discountPrices[discountLevel])}
                                    >
                                        {isLoadingBoostDiscount ? '' : 'boost!'}
                                    </BoostButton>
                                    <BoostInfo>
                                        boost to {getNextDiscountPrice()}% (-
                                        {discountPrices[discountLevel]} FOMO)
                                    </BoostInfo>
                                </>
                            ) : (
                                <MaxedOut>maxed out</MaxedOut>
                            )}
                        </BoostButtonConteiner>
                    </Update>

                    <Update>
                        <Level>
                            <LabelLevel>reduce time: -{timeReductionSecs[timeReductionLevel]}sec</LabelLevel>
                            <LevelValue>level {timeReductionLevel}</LevelValue>
                        </Level>

                        <BoostButtonConteiner onClick={buyTimeReduction}>
                            {timeReductionPrices.length >= timeReductionLevel + 1 ? (
                                <>
                                    <BoostButton
                                        isLoading={isLoadingBoostTimeReduction}
                                        disabled={!isBoostAviable(timeReductionPrices[timeReductionLevel])}
                                    >
                                        {isLoadingBoostTimeReduction ? '' : 'boost!'}
                                    </BoostButton>
                                    <BoostInfo>
                                        boost to -{getNextTimeReductionPrice()} sec (-
                                        {timeReductionPrices[timeReductionLevel]} FOMO)
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
