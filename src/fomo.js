import React from 'react';

import './css/fomo.css';
import * as fomo from './fomo_interface/fomo.main.mjs';
import algo from "./imgs/algo.png";
import Modal from "react-awesome-modal";
import {AppContext, FOMO_APP_ID} from "./AppContext";
import {Timer} from "./Timer";


async function getAssetInfo(assetId) {
    return (
        fetch("https://" + "algoindexer.algoexplorerapi.io/v2/assets/" + assetId, {method: 'GET'})
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
    constructor(props) {
        super(props);
        this.state = {
            isAccountConnected: false,
            isFomoSet: false,
            isModalOpen: false,
            deadline: 0,
            nftPrize: 0,
            currentPrice: 0,
            currentTotal: 0,
            currentWinner: "",
            winnerPrice: 0,
        };
    }

    setIsModalOpen = (isModalOpen) => {
        this.state.isModalOpen = isModalOpen;
    }

    unpackValue = (res) => {
        if (res[0] !== 'None') {
            return parseInt(res[1]._hex, 16);
        }
        return null;
    }

    async connectToContract(account) {
        const ctc = account.contract(fomo, FOMO_APP_ID);
        this.setState({ctc: ctc});
        fomo.Buyer(ctc, this).catch(e => console.log('[ERROR]', e));

        const nftPrize = await ctc.views.Fomo.nftPrize();
        this.setState({nftPrize: this.unpackValue(nftPrize)});
        getAssetInfo(this.state.nftPrize).then(res => {this.setState({nftLink: res})});

        const deadline = await ctc.views.Fomo.deadline();
        this.setState({deadline: this.unpackValue(deadline)});

        const currentPrice = await ctc.views.Fomo.currentPrice();
        this.setState({currentPrice: this.unpackValue(currentPrice) / 1000000});

        const currentTotal = await ctc.views.Fomo.currentTotal();
        this.setState({currentTotal: this.unpackValue(currentTotal) / 1000000});

        const currentWinner = await ctc.views.Fomo.currentWinner();
        this.setState({currentWinner: currentWinner[1]}); //TODO parse string

        // TODO get last winner price
        // TODO get time left or start time

        this.setState({isFomoSet: true});
        console.log(this.state);
    }

    // REACH BUYER INTERFACE
    showPurchase(winner_address, winner_bid) {
        const winnerPrice = parseInt(winner_bid._hex, 16) / 1000000;
        console.log('WINNER', winner_address, winnerPrice);
        this.setState({
            currentWinner: winner_address,
            winnerPrice: winnerPrice,
        });
        // TODO update current bid
    }

    buyTicket = () => {
        if (this.state.ctc) {
            this.state.ctc.apis.Api.buyTicket().then(res => console.log(res));
        } else {
            alert('Please, connect the wallet.');
        }
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

        if (!this.state.isFomoSet) {
            return (
                <div className="fomo">
                    <h1 style={{fontSize: "20px", marginTop: "20px"}}>WAITING THE SMART-CONTRACT.</h1>
                </div>
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
                <Timer init_seconds={this.state.deadline} />
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