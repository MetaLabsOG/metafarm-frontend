import { theme } from '../theme';
import { numberRound } from '../Farm/PoolList/Pool/utils';
import { VaultResultNumber, VaultResultNumberSubtitle, VaultResultsContainer, VaultSquare } from './styled';
import { VaultStage } from './VaultCard';

export const VaultResults = ({ vaultStage, APY, IL }: { vaultStage: VaultStage; APY: number; IL: number }) => {
    const APYSubtitle = vaultStage >= VaultStage.auction ? 'Result' : 'Projected';
    const ILSubtile = vaultStage === VaultStage.withdraw ? 'Result' : 'Expected';

    return (
        <VaultResultsContainer>
            <VaultSquare>
                <VaultResultNumber>{`${numberRound(APY * 100)}%`}</VaultResultNumber>
                <VaultResultNumberSubtitle>{APYSubtitle} APY</VaultResultNumberSubtitle>
            </VaultSquare>
            <VaultSquare>
                <VaultResultNumber style={{ color: IL > 0 ? theme.red : theme.green }}>{`${
                    IL * 100
                }%`}</VaultResultNumber>
                <VaultResultNumberSubtitle>{ILSubtile} IL</VaultResultNumberSubtitle>
            </VaultSquare>
        </VaultResultsContainer>
    );
};
