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
    const ILSubtitle = isFinalIL ? 'Result' : 'Current'; // TODO Expected
    const roundedAPY = APY === 0 ? '0' : (APY * 100).toFixed(2);

    return (
        <LaaSResultsContainer>
            <LaaSSquare>
                <LaaSResultNumber>{`${roundedAPY}%`}</LaaSResultNumber>
                <LaaSResultNumberSubtitle>{APYSubtitle} APY</LaaSResultNumberSubtitle>
            </LaaSSquare>
            <LaaSSquare>
                <LaaSResultNumber style={{ color: IL > 0.75 ? theme.red : theme.green }}>{`${numberRound(
                    IL * 100,
                    2
                )}%`}</LaaSResultNumber>
                <LaaSResultNumberSubtitle>{ILSubtitle} IL</LaaSResultNumberSubtitle>
            </LaaSSquare>
        </LaaSResultsContainer>
    );
};
