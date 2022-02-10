import React, {useEffect} from 'react';

import './css/fomo.css';
import algo from "./imgs/algo.png";
import ProgressBar from "@ramonak/react-progress-bar";
import Modal from "react-awesome-modal";

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

function Timer({init_seconds}) {
    const [seconds, setSeconds] = React.useState(init_seconds);

    useEffect(() => {
        let interval = null;
        if (seconds) {
            interval = setInterval(() => {
                setSeconds(seconds => Math.max(0, seconds - 1));
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <React.Fragment>
            <h1 className="fomo_phrase" style={{marginTop: "20px"}}>{Math.floor(seconds / 360)}:{Math.floor(seconds / 60) % 60}:{seconds % 60}</h1>
            <ProgressBar
                completed={Math.floor((1 - seconds/init_seconds) * 100)}
                className="fomo_bar_wrapper"
                barContainerClassName="fomo_bar_container"
                transitionTimingFunction="ease-in"
                bgColor="#5cfc3c"
                isLabelVisible={false}
            />
        </React.Fragment>
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

const Fomo = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="fomo">
            <h1 style={{fontSize: "20px", marginTop: "20px", color: "#197303"}}>THE ONLY WAY YOU LOSE IN THIS GAME IS IF YOU STOP PLAYING</h1>
            <button className="fomo_rules" onClick={() => setIsModalOpen(true)}>game rules</button>
            <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
                <h2 className="fomo_phrase">prize: NFT + 100500</h2>
                <img alt="Algo" src={algo} style={{marginLeft: "3px", width: "16px"}}/>
            </div>
            <RulesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <Timer init_seconds={60} />
            <a href="https://www.nftexplorer.app/asset/471831229">
                <img className="fomo_nft" src="https://arweave.net/CKu5PrxNiIfIHeY8eM_6zYt5pgMlKVfDgzXPCiMr5Vk" alt="NFT"/>
            </a>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h2 className="fomo_info">winner: </h2>
                <a className="fomo_info" href={"https://algoexplorer.io/address/5CZ6KOPCDHEAWQZUJQ4RJVVM5E6T6D3CAZDXEAI2LWEXZT5Y6X7FKIWP2I"}>5CZ6KOPCDHEAWQZUJQ4RJVVM5E6T6D3CAZDXEAI2LWEXZT5Y6X7FKIWP2I</a>
            </div>
            <h2 className="fomo_info">winner bid: 80Ⱥ</h2>
            <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
                <h1 className="fomo_phrase">bid: 100500</h1>
                <img alt="Algo" src={algo} style={{marginLeft: "3px", width: "16px"}}/>
            </div>
            <button className="fomo_button">FOMO!!!</button>
        </div>
    );
}

export default Fomo;