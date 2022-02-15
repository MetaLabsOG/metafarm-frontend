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
            endTime: 0,
            startTime: 0,
            currentTime: Math.floor(Date.now() / 1000),
            nftPrize: 0,
            currentPrice: 0,
            currentTotal: 0,
            currentWinner: "",
            winnerPrice: 0,
        };
    }

    setIsModalOpen = (isModalOpen) => {
        this.setState({isModalOpen: isModalOpen});
    }

    async connectToContract(account) {
        const { reach } = this.context;
        const ctc = account.contract(fomo, FOMO_APP_ID);
        this.setState({ctc: ctc});
        fomo.Buyer(ctc, this).catch(e => {
            console.log('[ERROR]', e);
            if (e.message.includes('no application found')) {
                this.setState({isFinish: true});
            }
        });

        const fomoInfo = await ctc.views.Fomo.info();
        if (fomoInfo[0] === 'None') {
            return;
        }

        this.setState({nftPrize: parseInt(fomoInfo[1].nftPrize._hex, 16)});
        getAssetInfo(this.state.nftPrize).then(res => {this.setState({nftLink: res})});
        checkOptIn(this.props.account.networkAccount.addr, this.state.nftPrize).then(res => this.setState({hasOptIn: res}));


        this.setState({currentPrice: parseInt(fomoInfo[1].currentPrice._hex, 16) / 1000000});

        const paidToFunder = parseInt(fomoInfo[1].paidToFunder._hex, 16) / 1000000;
        this.setState({currentTotal: parseInt(fomoInfo[1].currentTotal._hex, 16) / 1000000 - paidToFunder});
        this.setState({currentWinner: reach.formatAddress(fomoInfo[1].currentWinner)});

        this.setState({endTime: parseInt(fomoInfo[1].deadlineSecs[1]._hex, 16)});
        this.setState({startTime: parseInt(fomoInfo[1].startSecs[1]._hex, 16)});

        if (this.state.currentTime > this.state.endTime) {
            this.setState({isFinish: true});
        }

        if (this.state.currentPrice > 0) {
            const winnerPriceHex = await ctc.views.Fomo.prevPrice(this.state.currentPrice);
            const winnerPrice = parseInt(winnerPriceHex[1]._hex, 16) / 1000000;
            this.setState({winnerPrice: winnerPrice});
        }

        this.setState({isFomoSet: true});
        console.log(this.state);
    }

    // REACH BUYER INTERFACE
    async showPurchase(winnerAddress, winnerPriceHex, newPriceHex) {
        const winnerPrice = parseInt(winnerPriceHex._hex, 16) / 1000000;
        if (winnerPrice < this.state.currentPrice) {
            return;
        }

        const { reach } = this.context;

        const newPrice = parseInt(newPriceHex._hex, 16) / 1000000;
        console.log('WINNER', winnerAddress, winnerPrice, newPrice);

        this.setState({
            currentWinner: reach.formatAddress(winnerAddress),
            winnerPrice: winnerPrice,
            currentPrice: newPrice,
        });

        const fomoInfo = await this.state.ctc.views.Fomo.info();
        if (fomoInfo[0] === 'None') {
            return;
        }
        this.setState({currentTotal: parseInt(fomoInfo[1].currentTotal._hex, 16) / 1000000});
    }

    showOutcome(address) {
        const { reach } = this.context;
        console.log('WINNER!!!', reach.formatAddress(address));
    }

    buyTicket = async () => {
        if (!this.state.ctc) {
            alert('Please, connect the wallet.');
            return;
        }

        if (!this.state.hasOptIn) {
            const { reach } = this.context;
            await batchOptIn(reach, this.props.account.networkAccount.addr, [this.state.nftPrize], false);
        }

        logEvent(this.props.account.networkAccount.addr, "FOMO " + this.state.currentPrice);
        this.state.ctc.apis.Api.buyTicket();
    }

    componentDidUpdate() {
        if (this.props.account && !this.state.isAccountConnected) {
            this.connectToContract(this.props.account);
            this.setState({isAccountConnected: true});
        }
    }

    render() {
        if (this.state.isFinish) {
            return (
                <div className="fomo">
                    <h1 style={{fontSize: "20px", marginTop: "20px"}}>THE FOMO IS FINISHED.</h1>
                </div>
            );
        }

        if (!this.props.account) {
            return (
                <div className="fomo">
                    <h1 style={{fontSize: "20px", marginTop: "20px"}}>PLEASE, CONNECT THE WALLET.</h1>
                </div>
            );
        }

        if (!this.state.isFomoSet) {
            return (
                <Status status="WAITING THE SMART-CONTRACT" showLoading={true} />
            );
        }

        return (
            <div className="fomo">
                <h1 style={{fontSize: "20px", marginTop: "20px", color: "#197303"}}>THE ONLY WAY YOU LOSE IN THIS GAME IS IF YOU STOP PLAYING</h1>
                <button className="fomo_rules" onClick={() => this.setIsModalOpen(true)}>game rules</button>
                <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
                    <h2 className="fomo_phrase">prize: NFT + {this.state.currentTotal}</h2>
                    <img alt="Algo" src={algo} style={{marginLeft: "3px", width: "16px"}}/>
                </div>
                <RulesModal isModalOpen={this.state.isModalOpen} setIsModalOpen={this.setIsModalOpen}/>
                <Timer totalSec={this.state.endTime - this.state.startTime} leftSec={this.state.endTime - this.state.currentTime} />
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
                <button className="fomo_button" onClick={this.buyTicket}>FOMO!!!</button>
            </div>
        );
    }
}