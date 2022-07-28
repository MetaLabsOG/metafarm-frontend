// TODO: change this pack to react-hook-use-modal
import Modal from 'react-awesome-modal';
import { RulesItems, RulesStrong,RulesItem, Subitems, RulesItemOrdinalNumber, RulesItemText }    from './styled'

// eslint-disable-next-line react/prop-types
export function RulesModal({ isModalOpen, setIsModalOpen }) {
    return (
        <Modal
            visible={isModalOpen}
            width="450" 
            effect="fadeInUp"
            height="660"
            style={{ backgroundColor: 'black' }}
            onClickAway={() => setIsModalOpen(false)}
        >
            <RulesItems>
                
                <RulesItem><RulesItemOrdinalNumber>1.</RulesItemOrdinalNumber>The last person to make a bid when the timer reaches zero wins the pot!</RulesItem>
                <RulesItem><RulesItemOrdinalNumber>2.</RulesItemOrdinalNumber>You can make 1 or more bids which will mark you as the current winner and will increase the pot.</RulesItem>
                <RulesItem>
                    <RulesItemOrdinalNumber>3.</RulesItemOrdinalNumber>
                    <RulesItemText>
                        With each bid the next bid price increases by <RulesStrong>0.5 ALGO</RulesStrong> and the timer increases for 30 seconds.
                    </RulesItemText>
                </RulesItem>

                <RulesItem>
                    <RulesItemOrdinalNumber>4.</RulesItemOrdinalNumber>
                    <RulesItemText>
                        <RulesStrong>For each bid</RulesStrong> made you will be given <RulesStrong>10 FOMO</RulesStrong> tokens, which you can spend  to buy boosters:
                        <Subitems>
                            <RulesItem>
                                <RulesItemOrdinalNumber>●</RulesItemOrdinalNumber>
                                <RulesItemText> Discounter: for each next bid you will have a discount (e.g. <RulesStrong>-10%</RulesStrong>).
                                </RulesItemText>                            
                            </RulesItem>
                            <RulesItem>
                                <RulesItemOrdinalNumber>●</RulesItemOrdinalNumber>
                                <RulesItemText> Reducer: each next bid will increase the timer by fewer seconds (e.g. <RulesStrong>25 instead of 30</RulesStrong>).
                                </RulesItemText>
                            </RulesItem>
                        </Subitems >    
                    </RulesItemText>
                </RulesItem>        
                  
                <RulesItem><RulesItemOrdinalNumber>5.</RulesItemOrdinalNumber>  Each booster has levels. The bigger level you have the bigger advantage it gives you and the bigger the price for an upgrade.</RulesItem> 
                <RulesItem>
                    <RulesItemOrdinalNumber>6.</RulesItemOrdinalNumber>
                    <RulesItemText>
                        At the beginning of the round the timer is set to 1 hour and a bid price is <RulesStrong>1 ALGO</RulesStrong>.
                    </RulesItemText>
                </RulesItem> 
                <RulesItem>
                    <RulesItemOrdinalNumber>7.</RulesItemOrdinalNumber>
                    <RulesStrong>You lose only if you stop playing!</RulesStrong>
                </RulesItem> 
                <RulesItem>
                    <RulesItemOrdinalNumber>8.</RulesItemOrdinalNumber>
                    <RulesItemText>
                        We provide an additional prize <RulesStrong>NFT</RulesStrong> to each round! It is given to a <RulesStrong>random bidder</RulesStrong>. The more bids you have the bigger a chance to win!
                    </RulesItemText>
                </RulesItem>
            </RulesItems>
        </Modal>
    );
}