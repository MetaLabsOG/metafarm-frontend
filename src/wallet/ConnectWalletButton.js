import React from "react";


import {AppContext} from "../AppContext";

import '../css/wallet.css';

export function ConnectWalletButton() {
    const { setIsWalletModalOpen, account } = React.useContext(AppContext);

    const openModal = e => {
        e.preventDefault();
        setIsWalletModalOpen(true);
    };

    return (
        <div style={{justifyContent: "center", display: "flex"}}>
            {!account ? <button className="connect_wallet" onClick={openModal}>connect wallet</button> : <h1 className="account_info">{account.networkAccount.addr}</h1>}
        </div>
    )
}