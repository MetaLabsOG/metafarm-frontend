import React, { useState, useContext, useEffect, useCallback } from 'react';

import '../css/fomo.css';
import * as fomo from '../fomo_interface/index.main.mjs';
//@ts-ignore
import Modal from 'react-awesome-modal';
import { AppContext, FOMO_APP_ID, Context } from '../AppContext';
import { Timer } from '../Timer';
import { batchOptIn, checkOptIn } from '../batchOptIn.mjs';
import { getAssetInfo } from '../providers/contractProvider';
import { logEvent } from '../logEvent';

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
    BID,
    Nft,
} from './styled';
import { NFTCard, NFTCardInfo } from '../common/styled';

function RulesModal({ isModalOpen, setIsModalOpen }: { isModalOpen: boolean; setIsModalOpen: any }) {
    return (
        <Modal
            visible={isModalOpen}
            width="400"
            height="220"
            effect="fadeInUp"
            style={{ backgroundColor: 'black' }}
            onClickAway={() => setIsModalOpen(false)}
        >
            <div style={{ margin: '10px', color: 'black' }}>
                <h1>
                    Rules. <br /> Rules. <br /> Rules.
                </h1>
            </div>
        </Modal>
    );
}

export const Fomo = () => {
    const { reach, account } = useContext(AppContext) as Context;
    const [isAccountConnected, setIsAccountConnected] = useState<boolean>(false);
    const [isFomoSet, setIsFomoSet] = useState<boolean>(false);
    const [isFinish, setIsFinish] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [hasOptIn, setHasOptIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fomoDuration, setFomoDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(0);
    const [nftPrize, setNftPrize] = useState<number | null>(null);
    const [balance, setBalance] = useState<number>(0);
    const [nftLink, setnftLink] = useState<string>('');
    const [currentPrice, setCurrentPrice] = useState<number>(0);
    const [currentTotal, setCurrentTotal] = useState<number>(0);
    const [currentWinner, setCurrentWinner] = useState<string>('');
    const [winnerPrice, setWinnerPrice] = useState<number>(0);
    const [ctc, setCtc] = useState<null>(null);
    const [token, setToken] = useState<number | null>(null);
    const [fomoTokensOnAccount, setFomoTokensOnAccount] = useState<number>(0);
    const [tokenOwnedByUsers, setTokenOwnedByUsers] = useState<number | null>(null);

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

            console.log('FOMO_INFO', fomoInfo);

            if (reach !== undefined && account !== undefined) {
                if (!nftPrize) {
                    const { nftPrize } = fomoInfo;
                    setNftPrize(reach.bigNumberToNumber(nftPrize));
                    const nftLink = await getAssetInfo(reach.bigNumberToNumber(nftPrize));
                    setnftLink(nftLink);
                }

                if (!hasOptIn) {
                    const hasOptIn = await checkOptIn(account.networkAccount.addr, nftPrize);
                    setHasOptIn(hasOptIn);
                }

                if (!token) {
                    setToken(reach.bigNumberToNumber(fomoInfo.token));
                }

                if (!tokenOwnedByUsers) {
                    setTokenOwnedByUsers(reach.bigNumberToNumber(fomoInfo.tokenOwnedByUsers));
                }

                const paidToFunder = Number.parseFloat(reach.formatCurrency(fomoInfo.paidToFunder, 4));
                const currentTotal = Number.parseFloat(reach.formatCurrency(fomoInfo.currentTotal, 4)) - paidToFunder;
                const winnerPrice = await ctc.views.Fomo.prevPrice(fomoInfo.currentPrice);

                const now = await reach.getNetworkSecs();
                const currentTime = reach.bigNumberToNumber(now);
                const endTime = reach.bigNumberToNumber(fomoInfo.endTimestamp);
                if (currentTime > endTime) {
                    console.log('fomo is finished');
                    setIsFinish(true);
                    return;
                }

                const balance = await reach.balanceOf(account);
                const fomoTokensInfo = await account.tokenMetadata(fomoInfo.nftPrize);
                const fomoTokensSupply = reach.bigNumberToNumber(fomoTokensInfo.supply);

                setFomoTokensOnAccount(fomoTokensSupply);

                setBalance(Number.parseFloat(reach.formatCurrency(balance, 4)));

                setCurrentPrice(Number.parseFloat(reach.formatCurrency(fomoInfo.currentPrice, 4)));
                setCurrentTotal(currentTotal);
                setWinnerPrice(currentTotal > 0 ? Number.parseFloat(reach.formatCurrency(winnerPrice[1], 4)) : 0);
                setCurrentWinner(reach.formatAddress(fomoInfo.currentWinner));
                setFomoDuration(reach.bigNumberToNumber(fomoInfo.deadline));
                setCurrentTime(currentTime);
                setEndTime(endTime);
                setIsFomoSet(true);
            }
        },
        [account, reach, hasOptIn, isFinish, nftPrize, token, tokenOwnedByUsers]
    );
    const deployed = () => {};

    const showPurchase = useCallback(
        async (winnerAddress, winnerPriceHex, newPriceHex) => {
            if (reach !== undefined) {
                const winnerPrice = Number.parseFloat(reach.formatCurrency(winnerPriceHex, 4));
                if (winnerPrice < currentPrice) {
                    return;
                }

                console.log('NEW WINNER', reach.formatAddress(winnerAddress), winnerPrice);

                await updateFomoInfo(ctc);
            }
        },
        [reach, ctc, currentPrice, updateFomoInfo]
    );

    const showOutcome = useCallback(
        (address) => {
            if (reach !== undefined) {
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

            fomo.Buyer(ctc, { showOutcome, showPurchase, deployed }).catch((e) => {
                console.log('[ERROR]', e);
                if (e.message.includes('no application found')) {
                    setIsFinish(true);
                }
            });

            await updateFomoInfo(ctc);
        },
        [updateFomoInfo, showOutcome, showPurchase]
    );

    // // REACH BUYER INTERFACE
    const buyDiscount = async () => {
        if (!ctc) {
            alert('Please, connect the wallet.');
            return;
        }

        if (account !== undefined) {
            if (!hasOptIn) {
                await batchOptIn(reach, account.networkAccount.addr, [nftPrize, token], false);
            }

            logEvent(account.networkAccount.addr, 'FOMO ' + currentPrice);
        }
        //@ts-ignore
        ctc.apis.Api.buyDiscount()
            //@ts-ignore
            .then((_) => {
                setIsLoading(false);
                //@ts-ignore
            })
            .catch((e: Error) => {
                console.log('[ERROR]', e);
                if (e.message.includes('logic eval error')) {
                    alert('Sorry, someone beat you');
                }
                setIsLoading(false);
            });
    };

    const buyTimeReduction = async () => {
        if (!ctc) {
            alert('Please, connect the wallet.');
            return;
        }

        if (account) {
            await batchOptIn(reach, account.networkAccount.addr, [nftPrize, token], false);

            logEvent(account.networkAccount.addr, 'FOMO ' + currentPrice);
        }

        //@ts-ignore
        ctc.apis.Api.buyTimeReduction()
            //@ts-ignore
            .then((_) => {
                setIsLoading(false);
            })
            .catch((e: Error) => {
                console.log('[ERROR]', e);
                if (e.message.includes('logic eval error')) {
                    alert('Sorry, someone beat you');
                }
                setIsLoading(false);
            });
    };

    const buyTicket = async () => {
        if (!ctc) {
            alert('Please, connect the wallet.');
            return;
        }
        setIsLoading(true);
        if (account) {
            await batchOptIn(reach, account.networkAccount.addr, [nftPrize, token], false);

            logEvent(account.networkAccount.addr, 'FOMO ' + currentPrice);
        }

        //@ts-ignore
        ctc.apis.Api.buyTicket()
            //@ts-ignore
            .then((_) => {
                setIsLoading(false);
                //@ts-ignore
            })
            .catch((e: Error) => {
                console.log('[ERROR]', e);
                if (e.message.includes('logic eval error')) {
                    alert('Sorry, someone beat you');
                }
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (account && !isAccountConnected) {
            connectToContract(account);
            setIsAccountConnected(true);
        }
    }, [account, connectToContract, isAccountConnected]);

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
                        <Prize>{`prize: NFT + ${currentTotal.toPrecision(3)} algo`}</Prize>
                        <Winner>
                            <h2 className="fomo_info">
                                winner: &nbsp;
                                <a className="fomo_info" href={'https://algoexplorer.io/address/' + currentWinner}>
                                    {currentWinner}
                                </a>
                            </h2>
                        </Winner>
                        <h2 className="fomo_info">winner bid: {winnerPrice} ALGO</h2>
                    </NFTCardInfo>
                </NFTCard>
                <Info>
                    <Timer totalSec={fomoDuration} leftSec={endTime - currentTime} />

                    <FomoSupply>FOMO supply: {tokenOwnedByUsers} </FomoSupply>
                    <Balance>
                        Balance:
                        <Amounts>
                            <Amount>FOMO: {fomoTokensOnAccount}</Amount>
                            <Amount>ALGO: {balance}</Amount>
                        </Amounts>
                    </Balance>
                    <Update color="#4F4F4F">
                        {`bid discount level  1(10%)`}
                        <BoostButtonConteiner onClick={buyDiscount}>
                            <BoostButton>boost!</BoostButton>
                            <BoostInfo>boost to 15% (-100 FOMO)</BoostInfo>
                        </BoostButtonConteiner>
                    </Update>

                    <Update color="#4F4F4F">
                        {`reduce time level 1 (-3 sec)`}
                        <BoostButtonConteiner onClick={buyTimeReduction}>
                            <BoostButton>boost!</BoostButton>
                            <BoostInfo>boost to -3 sec (-50 FOMO)</BoostInfo>
                        </BoostButtonConteiner>
                    </Update>

                    {/*<button className="fomo_button" onClick={this.buyTicket}>FOMO!!!</button>*/}

                    <BID>BID {currentPrice} ALGO</BID>
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
