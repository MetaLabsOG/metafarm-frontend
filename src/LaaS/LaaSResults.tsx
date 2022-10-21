import { theme } from '../theme';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { LaaSResultNumber, LaaSResultNumberSubtitle, LaaSResultsContainer, LaaSSquare } from './styled';

export const LaaSResults = ({
    APY,
    IL,
    isFinalAPY,
    isFinalIL,
}: {
    APY: number;
    IL: number;
    isFinalAPY?: boolean;
    isFinalIL?: boolean;
}) => {
    const APYSubtitle = isFinalAPY ? 'Result' : 'Projected';
    const ILSubtile = isFinalAPY ? 'Result' : 'Current'; // TODO Expected

    return (
        <LaaSResultsContainer>
            <LaaSSquare>
                <LaaSResultNumber>{`${numberRound(APY * 100)}%`}</LaaSResultNumber>
                <LaaSResultNumberSubtitle>{APYSubtitle} APY</LaaSResultNumberSubtitle>
            </LaaSSquare>
            <LaaSSquare>
                <LaaSResultNumber style={{ color: IL > 0.75 ? theme.red : theme.green }}>{`${numberRound(
                    IL * 100
                )}%`}</LaaSResultNumber>
                <LaaSResultNumberSubtitle>{ILSubtile} IL</LaaSResultNumberSubtitle>
            </LaaSSquare>
        </LaaSResultsContainer>
    );
};
