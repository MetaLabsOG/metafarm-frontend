import { ContractInfo, FarmType } from '../../../common/store';
import { PoolHeader } from '../../../Components/PoolHeader/PoolHeader';
import { DexProvider } from '../../../dexes';
import { formatRawLPTokenName } from './utils';
import { useWindowSize } from '../../../hooks';
import { ColumnType, POOL_COLUMN_WIDTH } from '../columns';
import { theme } from '../../../theme';
import {
    PoolInfoDesktopContainer,
    PoolInfoValue,
    PoolPropertyValue,
    PoolPropertyName,
    PoolInfoMobileContainer,
    PoolInfoGrid,
    SkeletonLine,
    SkeletonBlock,
    TimingMobile,
} from './styled';
import { GradientGridCell, GradientStakeButton } from './GradientPoolCard';

/** Extract pool pair name from description like "TinymanPool2.0 META/ALGO -> META + ALGO" */
function parsePoolName(description: string | null): string | null {
    if (!description) return null;
    const beforeArrow = description.split('->')[0].trim();
    return formatRawLPTokenName(beforeArrow);
}

/**
 * Lightweight pool card shown while token info / prices are still loading.
 * Renders pool header (icons + name) from contract metadata with "—" value placeholders.
 */
export function PoolPreview({ contractInfo }: { contractInfo: ContractInfo<FarmType> }): JSX.Element {
    const { isMobile, isTablet } = useWindowSize();
    const meta = contractInfo.metadata as Record<string, unknown>;

    const asset1_id = meta.asset1_id ? Number(meta.asset1_id) : 0;
    const asset2_id = meta.asset2_id ? Number(meta.asset2_id) : 0;

    // No metadata for preview — fall back to skeleton
    if (!asset1_id && !asset2_id) {
        return (
            <div style={{ padding: '20px' }}>
                <SkeletonLine style={{ width: '60%', height: '16px', marginBottom: '12px' }} />
                <SkeletonBlock style={{ height: '40px', marginBottom: '8px' }} />
                <SkeletonLine style={{ width: '40%', height: '12px' }} />
            </div>
        );
    }

    const pool_name = parsePoolName(contractInfo.description) ?? '...';
    const dex = (meta.dex as DexProvider) ?? null;
    const rewardTokenName = (meta.reward_token_name as string) ?? '...';
    const isVerified = Boolean(meta.verified);

    const headerProps = {
        asset1_id,
        asset2_id,
        pool_name,
        rewardTokenName,
        dex,
        lock: '',
        isVerified,
        algoRewards: false,
        isGame: false,
        nftRewards: false,
    };

    if (isMobile || isTablet) {
        return (
            <PoolInfoMobileContainer>
                <PoolHeader {...headerProps} />
                <PoolInfoGrid style={{ gridTemplateRows: 'auto' }}>
                    <GradientGridCell>
                        <PoolPropertyName>TVL</PoolPropertyName>
                        <PoolPropertyValue>—</PoolPropertyValue>
                    </GradientGridCell>
                    <GradientGridCell>
                        <PoolPropertyName>APR</PoolPropertyName>
                        <PoolPropertyValue>—</PoolPropertyValue>
                    </GradientGridCell>
                </PoolInfoGrid>
                <GradientStakeButton disabled>Stake</GradientStakeButton>
                <TimingMobile>—</TimingMobile>
            </PoolInfoMobileContainer>
        );
    }

    return (
        <PoolInfoDesktopContainer>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Name]}>
                <PoolHeader {...headerProps} />
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Tvl]}>
                <PoolPropertyValue style={{ color: theme.gray }}>—</PoolPropertyValue>
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Apr]}>
                <PoolPropertyValue style={{ color: theme.gray }}>—</PoolPropertyValue>
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Stake]}>
                <PoolPropertyValue style={{ color: theme.gray }}>—</PoolPropertyValue>
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Reward]}>
                <PoolPropertyValue style={{ color: theme.gray }}>—</PoolPropertyValue>
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Ends]} style={{ color: theme.gray, fontSize: '16px' }}>
                —
            </PoolInfoValue>
        </PoolInfoDesktopContainer>
    );
}
