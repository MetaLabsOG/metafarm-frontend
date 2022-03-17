import React, { useState, useContext, useEffect, useCallback } from 'react';

import '../css/fomo.css';
import * as fomo from '../fomo_interface/index.main.mjs';
//@ts-ignore
import Modal from 'react-awesome-modal';
import { AppContext, FOMO_APP_ID } from '../AppContext';
import { Timer } from '../Timer';
import { batchOptIn, checkOptIn } from '../batchOptIn.mjs';
import { logEvent } from '../logEvent';
import { Status } from '../Status';
import { FomoContainer, Info, Actions, Prize, FomoSupply, Update, UpdateButton } from './styled';
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

//@ts-ignore
export const Fomo = ({ account }) => {
    const context = useContext(AppContext);
    const [isAccountConnected, setIsAccountConnected] = useState<boolean>(false);
    //@ts-ignore
    const [isFomoSet, setIsFomoSet] = useState<boolean>(false);
    const [isFinish, setIsFinish] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [hasOptIn, setHasOptIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fomoDuration, setFomoDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(0);
    const [nftPrize, setNftPrize] = useState<number>(0);
    const [nftLink, setnftLink] = useState<string>('');
    const [currentPrice, setCurrentPrice] = useState<number>(0);
    const [currentTotal, setCurrentTotal] = useState<number>(0);
    const [currentWinner, setCurrentWinner] = useState<string>('');
    const [winnerPrice, setWinnerPrice] = useState<number>(0);
    const [ctc, setCtc] = useState<null>(null);
    const [token, setToken] = useState<string>('');

    //@ts-ignore
    const updateFomoInfo = useCallback(
        async (ctc) => {
            if (!ctc || isFinish) {
                console.log('No ctc or fomo is finished');
                return;
            }
            //@ts-ignore
            const { reach } = context;
            console.log('Getting info');

            const [fomoInfoStatus, fomoInfo] = await ctc.views.Fomo.info();
            if (fomoInfoStatus === 'None') {
                console.log('fomoInfoStatus None');
                // return;
            }

            if (!nftPrize) {
                setNftPrize(reach.bigNumberToNumber(fomoInfo.nftPrize));
                //@ts-ignore
                const nftLink = await getAssetInfo(nftPrize);
                setnftLink(nftLink);
            }
            if (!hasOptIn) {
                const hasOptIn = await checkOptIn(account.networkAccount.addr, nftPrize);
                setHasOptIn(hasOptIn);
            }

            if (!token) {
                setToken(reach.bigNumberToNumber(fomoInfo.token));
            }

            const paidToFunder = reach.formatCurrency(fomoInfo.paidToFunder);
            const currentTotal = reach.formatCurrency(fomoInfo.currentTotal) - paidToFunder;
            const winnerPrice = await ctc.views.Fomo.prevPrice(fomoInfo.currentPrice);

            const now = await reach.getNetworkSecs();
            const currentTime = reach.bigNumberToNumber(now);
            const endTime = reach.bigNumberToNumber(fomoInfo.endTimestamp);
            if (currentTime > endTime) {
                console.log('fomo is finished');
                setIsFinish(true);
                return;
            }

            setCurrentPrice(reach.formatCurrency(fomoInfo.currentPrice));
            setCurrentTotal(currentTotal);
            setWinnerPrice(currentTotal > 0 ? reach.formatCurrency(winnerPrice[1]) : 0);
            setCurrentWinner(reach.formatAddress(fomoInfo.currentWinner));
            setFomoDuration(reach.bigNumberToNumber(fomoInfo.deadline));
            setCurrentTime(currentTime);
            setEndTime(endTime);
            setIsFomoSet(true);
        },
        [account, context, hasOptIn, isFinish, nftPrize, token]
    );
    const deployed = () => {};

    //@ts-ignore
    const showPurchase = async (winnerAddress, winnerPriceHex, newPriceHex) => {
        //@ts-ignore
        const winnerPrice = context.reach.formatCurrency(winnerPriceHex);
        if (winnerPrice < currentPrice) {
            return;
        }

        //@ts-ignore
        console.log('NEW WINNER', context.reach.formatAddress(winnerAddress), winnerPrice);

        await updateFomoInfo(ctc);
    };

    //@ts-ignore
    const showOutcome = (address) => {
        //@ts-ignore
        const winnerAddress = context.reach.formatAddress(address);
        console.log('WINNER!!!', winnerAddress);
        setIsFinish(true);
        setCurrentWinner(winnerAddress);
    };

    const connectToContract = useCallback(
        //@ts-ignore
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
        [updateFomoInfo]
    );

    //     //@ts-ignore
    //    const connectToContract = async (account) => {
    //         const ctc = account.contract(fomo, FOMO_APP_ID);
    //         console.log('Connecting to', FOMO_APP_ID);
    //         setCtc(ctc)

    //         fomo.Buyer(ctc, this)
    //         .catch(e => {
    //             console.log('[ERROR]', e);
    //             if (e.message.includes('no application found')) {
    //                 setIsFinish(true)
    //             }
    //         });

    //         await updateFomoInfo(ctc);
    //     }

    // // REACH BUYER INTERFACE

    //    const buyDiscount = async () => {
    //         if (!ctc) {
    //             alert('Please, connect the wallet.');
    //             return;
    //         }

    //         if (!hasOptIn) {
    //        //@ts-ignore
    //             await batchOptIn(context.reach, account.networkAccount.addr, [nftPrize, token], false);
    //         }

    //         logEvent(account.networkAccount.addr, "FOMO " + currentPrice);
    //         //@ts-ignore
    //         ctc.apis.Api.buyDiscount().then(_ => {
    //             setIsLoading(false);
    //             //@ts-ignore
    //         }).catch(e => {
    //             console.log('[ERROR]', e);
    //             if (e.message.includes('logic eval error')) {
    //                 alert('Sorry, someone beat you');
    //             }
    //             setIsLoading(false)

    //         });
    //      }

    const buyTimeReduction = async () => {
        if (!ctc) {
            alert('Please, connect the wallet.');
            return;
        }

        //@ts-ignore
        await batchOptIn(context.reach, account.networkAccount.addr, [nftPrize, token], false);

        logEvent(account.networkAccount.addr, 'FOMO ' + currentPrice);
        //@ts-ignore
        ctc.apis.Api.buyTimeReduction()
            //@ts-ignore
            .then((_) => {
                setIsLoading(false);
                //@ts-ignore
            })
            //@ts-ignore
            .catch((e) => {
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

        //@ts-ignore
        await batchOptIn(context.reach, account.networkAccount.addr, [nftPrize, token], false);

        logEvent(account.networkAccount.addr, 'FOMO ' + currentPrice);
        //@ts-ignore
        ctc.apis.Api.buyTicket()
            //@ts-ignore
            .then((_) => {
                setIsLoading(false);
                //@ts-ignore
            })
            //@ts-ignore
            .catch((e) => {
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
            <h1 style={{ fontSize: '20px', marginTop: '20px', color: '#197303' }}>
                THE ONLY WAY YOU LOSE IN THIS GAME IS IF YOU STOP PLAYING
            </h1>
            <button className="fomo_rules" onClick={() => setIsModalOpen(true)}>
                game rules
            </button>
            <RulesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Actions>
                <NFTCard>
                    {/* <a href={'https://www.nftexplorer.app/asset/' + nftPrize}>
                    <img className="fomo_nft" src={nftLink} alt="NFT" />
                </a> */}
                    <a href={'https://www.nftexplorer.app/asset/485535169'}>
                        <img
                            className="fomo_nft"
                            src="https://arweave.net/azcQlimclL0socA--QYMgpuBOHnKKsVv_L8Dqd282os"
                            alt="NFT"
                        />
                    </a>
                    <NFTCardInfo>
                        <Prize>{`prize: NFT + ${currentTotal.toPrecision(3)} algo`}</Prize>
                        <div>
                            <h2 className="fomo_info">winner: </h2>
                            <a className="fomo_info" href={'https://algoexplorer.io/address/' + currentWinner}>
                                {currentWinner}
                            </a>
                        </div>
                        <h2 className="fomo_info">winner bid: {winnerPrice} ALGO</h2>
                    </NFTCardInfo>
                </NFTCard>
                <Info>
                    <Timer totalSec={fomoDuration} leftSec={endTime - currentTime} />

                    {/* <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <h1 className="fomo_phrase">bid: {currentPrice}</h1>
                        <img alt="Algo" src={algo} style={{ marginLeft: '3px', width: '16px' }} />
                    </div> */}

                    <FomoSupply>FOMO supply: {token} </FomoSupply>
                    <Update color="#4F4F4F" onClick={buyTicket}>
                        {`bid discount level  1(10%)`} <UpdateButton />{' '}
                    </Update>
                    <Update color="#5cfc3c">{`upgrade to 15%  -100 FOMO`}</Update>
                    <Update color="#4F4F4F" onClick={buyTimeReduction}>
                        {`reduce time level 1 (-3 sec)`}
                        <UpdateButton />
                    </Update>
                    <Update color="#5cfc3c">{`upgrade to -5 sec -50 FOMO`}</Update>
                    {/*<button className="fomo_button" onClick={this.buyTicket}>FOMO!!!</button>*/}

                    <h3>BID 101 ALGO</h3>
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
