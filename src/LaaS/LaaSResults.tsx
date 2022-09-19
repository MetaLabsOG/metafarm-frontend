import { theme } from '../theme';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { LaaSResultNumber, LaaSResultNumberSubtitle, LaaSResultsContainer, LaaSSquare } from './styled';
import { LaaSStage } from './LaaSCard';

export const LaaSResults = ({ laasStage, APY, IL }: { laasStage: LaaSStage; APY: number; IL: number }) => {
    const APYSubtitle = laasStage >= LaaSStage.auction ? 'Result' : 'Projected';
    const ILSubtile = laasStage === LaaSStage.withdraw ? 'Result' : 'Expected';

    return (
        <LaaSResultsContainer>
            <LaaSSquare>
                <LaaSResultNumber>{`${numberRound(APY * 100)}%`}</LaaSResultNumber>
                <LaaSResultNumberSubtitle>{APYSubtitle} APY</LaaSResultNumberSubtitle>
            </LaaSSquare>
            <LaaSSquare>
                <LaaSResultNumber style={{ color: IL > 0 ? theme.red : theme.green }}>{`${
                    IL * 100
                }%`}</LaaSResultNumber>
                <LaaSResultNumberSubtitle>{ILSubtile} IL</LaaSResultNumberSubtitle>
            </LaaSSquare>
        </LaaSResultsContainer>
    );
};
