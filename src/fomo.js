import React from 'react';

import './css/fomo.css';
import * as fomo from './fomo_interface/index.main.mjs';
import algo from "./imgs/algo.png";
import Modal from "react-awesome-modal";
import {AppContext, ALGONET, FOMO_APP_ID, TESTNET} from "./AppContext";
import {Timer} from "./Timer";
import {batchOptIn, checkOptIn} from "./batchOptIn.mjs";
import {logEvent} from "./logEvent";
import {Status} from "./Status";


async function getAssetInfo(assetId) {
    const preffix = (ALGONET === TESTNET) ? "testnet." : "";
    return (
        fetch("https://algoindexer." + preffix + "algoexplorerapi.io/v2/assets/" + assetId, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            if (!data.asset) {
                return "";
            }
            return data.asset.params.url;
        }).catch(err => {
            console.log('ERR', err);
            return "";
        })
    );
}

function RulesModal({isModalOpen, setIsModalOpen}) {
    return (
        <Modal visible={isModalOpen} width="400" height="220" effect="fadeInUp" style={{backgroundColor: "black"}} onClickAway={() => setIsModalOpen(false)}>
            <div style={{ margin: "10px", color: "black"}}>
                <h1>Rules. <br/> Rules. <br/> Rules.</h1>
            </div>
        </Modal>
    );
}


export class Fomo extends React.Component {
    static contextType = AppContext
    constructor(props) {
        super(props);
        this.state = {
            isAccountConnected: false,
            isFomoSet: false,
            isFinish: false,
            isModalOpen: false,
            hasOptIn: false,
            isLoading: false,
            fomoDuration: 0,
            currentTime: 0,
            endTime: 0,
            nftPrize: 0,
            nftLink: "",
            currentPrice: 0,
            currentTotal: 0,
            currentWinner: "",
            winnerPrice: 0,
            ctc: null,
        };
    }

    setIsModalOpen = (isModalOpen) => {
        this.setState({isModalOpen: isModalOpen});
    }

    connectToContract = async (account) => {
        const ctc = account.contract(fomo, FOMO_APP_ID);
        console.log('Connecting to', FOMO_APP_ID);
        this.setState({ctc: ctc});

        fomo.Buyer(ctc, this)
        .catch(e => {
            console.log('[ERROR]', e);
            if (e.message.includes('no application found')) {
                this.setState({isFinish: true});
            }
        });

        await this.updateFomoInfo(ctc);
    }

    updateFomoInfo = async (ctc) => {
        if (!ctc || this.state.isFinish) {
            console.log('No ctc or fomo is finished');
            return;
        }
        const {reach} = this.context;
        console.log('Getting info');

        const [fomoInfoStatus, fomoInfo] = await ctc.views.Fomo.info();
        if (fomoInfoStatus === 'None') {
            console.log('fomoInfoStatus None');
            return;
        }

        if (!this.state.nftPrize) {
            this.setState({nftPrize: reach.bigNumberToNumber(fomoInfo.nftPrize)});
            const nftLink = await getAssetInfo(this.state.nftPrize);
            this.setState({nftLink: nftLink});
        }
        if (!this.state.hasOptIn) {
            const hasOptIn = await checkOptIn(this.props.account.networkAccount.addr, this.state.nftPrize);
            this.setState({hasOptIn: hasOptIn});
        }

        const paidToFunder = reach.formatCurrency(fomoInfo.paidToFunder);
        const currentTotal = reach.formatCurrency(fomoInfo.currentTotal) - paidToFunder;
        const winnerPrice = await ctc.views.Fomo.prevPrice(fomoInfo.currentPrice);

        const now = await reach.getNetworkSecs();
        const currentTime = reach.bigNumberToNumber(now);
        const endTime = reach.bigNumberToNumber(fomoInfo.endTimestamp);
        if (currentTime > endTime) {
            console.log('fomo is finished');
            this.setState({isFinish: true});
            return;
        }

        this.setState({
            currentPrice: reach.formatCurrency(fomoInfo.currentPrice),
            currentTotal: currentTotal,
            winnerPrice: (currentTotal > 0) ? reach.formatCurrency(winnerPrice[1]) : 0,
            currentWinner: reach.formatAddress(fomoInfo.currentWinner),

            fomoDuration: reach.bigNumberToNumber(fomoInfo.deadline),
            currentTime: currentTime,
            endTime: endTime,

            isFomoSet: true
        });

        console.log(this.state);
    }

    // REACH BUYER INTERFACE
    async showPurchase(winnerAddress, winnerPriceHex, newPriceHex) {
        const winnerPrice = this.context.reach.formatCurrency(winnerPriceHex);
        if (winnerPrice < this.state.currentPrice) {
            return;
        }

        console.log('NEW WINNER', this.context.reach.formatAddress(winnerAddress), winnerPrice);

        await this.updateFomoInfo(this.state.ctc);
    }

    showOutcome(address) {
        const winnerAddress = this.context.reach.formatAddress(address);
        console.log('WINNER!!!', winnerAddress);
        this.setState({
            isFinish: true,
            currentWinner: winnerAddress
        });
    }

    deployed() {
    }

    buyTicket = async () => {
        if (!this.state.ctc) {
            alert('Please, connect the wallet.');
            return;
        }

        this.setState({isLoading: true});

        if (!this.state.hasOptIn) {
            await batchOptIn(this.context.reach, this.props.account.networkAccount.addr, [this.state.nftPrize], false);
        }

        logEvent(this.props.account.networkAccount.addr, "FOMO " + this.state.currentPrice);
        this.state.ctc.apis.Api.buyTicket().then(_ => {
            this.setState({isLoading: false});
        }).catch(e => {
            console.log('[ERROR]', e);
            if (e.message.includes('logic eval error')) {
                alert('Sorry, someone beat you');
            }
            this.setState({isLoading: false});
        });
    }

    componentDidUpdate() {
        if (this.props.account && !this.state.isAccountConnected) {
            this.connectToContract(this.props.account);
            this.setState({isAccountConnected: true});
        }
    }

    render() {
        if (!this.props.account) {
            return (
                <div className="fomo">
                    <h1 style={{fontSize: "20px", marginTop: "20px"}}>PLEASE, CONNECT THE WALLET.</h1>
                </div>
            );
        }

        if (this.state.isFinish) {
            return (
                <div className="fomo">
                    <h1 style={{fontSize: "20px", marginTop: "20px"}}>THE FOMO IS FINISHED.</h1>
                    {this.state.currentWinner ?
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <h2 className="fomo_info">winner: </h2>
                            <a className="fomo_info" href={"https://algoexplorer.io/address/" + this.state.currentWinner}>{this.state.currentWinner}</a>
                        </div> : <br/>
                    }
                </div>
            );
        }

        if (!this.state.isFomoSet) {
            return (
                <Status status="CONNECTING TO THE SMART-CONTRACT" showLoading={true} />
            );
        }

        return (
            <div className="fomo">
                <h1 style={{fontSize: "20px", marginTop: "20px", color: "#197303"}}>THE ONLY WAY YOU LOSE IN THIS GAME IS IF YOU STOP PLAYING</h1>
                <button className="fomo_rules" onClick={() => this.setIsModalOpen(true)}>game rules</button>
                <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
                    <h2 className="fomo_phrase">prize: NFT + {this.state.currentTotal.toPrecision(3)}</h2>
                    <img alt="Algo" src={algo} style={{marginLeft: "3px", width: "16px"}}/>
                </div>
                <RulesModal isModalOpen={this.state.isModalOpen} setIsModalOpen={this.setIsModalOpen}/>
                <Timer totalSec={this.state.fomoDuration} leftSec={this.state.endTime - this.state.currentTime} />
                <a href={"https://www.nftexplorer.app/asset/" + this.state.nftPrize}>
                    <img className="fomo_nft" src={this.state.nftLink} alt="NFT"/>
                </a>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h2 className="fomo_info">winner: </h2>
                    <a className="fomo_info" href={"https://algoexplorer.io/address/" + this.state.currentWinner}>{this.state.currentWinner}</a>
                </div>
                <h2 className="fomo_info">winner bid: {this.state.winnerPrice} Ⱥ</h2>
                <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
                    <h1 className="fomo_phrase">bid: {this.state.currentPrice}</h1>
                    <img alt="Algo" src={algo} style={{marginLeft: "3px", width: "16px"}}/>
                </div>
                {/*<button className="fomo_button" onClick={this.buyTicket}>FOMO!!!</button>*/}
                <button className={!this.state.isLoading ? "fomo_button" : "fomo_button_loading" } onClick={!this.state.isLoading ? this.buyTicket : undefined}>
                    FOMO!!!
                    {this.state.isLoading ? <span className="fomo_loading">
                        <img style={{ maxWidth: '100%', maxHeight: '100%' }} alt='loader' src={require('./imgs/loader.gif').default}/></span> : <br/>}
                </button>
            </div>
        );
    }
}