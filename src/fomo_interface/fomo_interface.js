import * as fomo from './fomo.main.mjs';
import {AppContext} from "../AppContext";

export class FomoInterface extends React.Component {
    static contextType = AppContext
    constructor(props) {
        super(props);
        this.state = {};
    }

    async deploy() {
        const {account} = this.context;
        const ctc = account.deploy(fomo);
        this.setState({ctc: ctc});
        fomo.Buyer(ctc, this).catch(e => console.log('ERROR]', e));
    }

    // REACH BUYER INTERFACE
    showPurchase(winner_address, winner_bid) {
        console.log('WINNER', winner_address, winner_bid);
    }

    buyTicket() {
        // TODO передать callback (см доку)
        this.state.ctc.apis.Api.buyTicket().then(res => console.log(res));
    }

    getFomoData() {
        const FomoData = this.state.ctc.views.Fomo;
        console.log(FomoData);
        // deadline: UInt,
        // nftPrize: Token,
        // currentPrice: UInt,
        // currentTotal: UInt,
        // currentWinner: Address,
        return FomoData;
    }
}