import './css/menu.css';
import logo from "./imgs/logo.png";
import {Link} from "react-router-dom";
import {ConnectWalletButton} from "./wallet/ConnectWalletButton";

const Menu = () => {
    return (
        <div className="menu">
            <div style={{display: "flex", alignItems: "center", width: "100%"}}>
                <Link to="/">
                    <img src={logo} alt="logo" height="40px" />
                </Link>
                <Link className="menu_item" to="/fomo">fomo3d</Link>
                <Link className="menu_item" to="/farm">farm</Link>
            </div>
            <ConnectWalletButton />
        </div>
    );
}

export default Menu;