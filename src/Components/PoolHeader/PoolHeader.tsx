import ReactTooltip from 'react-tooltip';
import { getAssetLogoUrl, getTokenLink } from '../../Farm/PoolList/Pool/utils';
import verified from '../../imgs/verified.svg';
import info from '../../imgs/info.svg';
import game from '../../imgs/game.png';
import { getDexIcon } from '../../Farm/utils';
import tokenPlaceholder from '../../imgs/tokenPlaceholder.svg';
import { DexProvider } from '../../dexes';
import {
    PoolHeaderContainer,
    ContractLockSuffix,
    DexIcon,
    LPTokensIcon,
    LpTokensIconsWrapper,
    PoolInfo,
    PoolTitle,
    PoolSubtitle,
    Game,
} from './styled';

// KOSTYL for GARD....
const GARD_ID = 684649988;

export function TokensIcons({
    asset1_id,
    asset2_id,
    dex,
    isGame,
}: {
    asset1_id: number;
    asset2_id: number;
    dex: DexProvider | null;
    isGame?: boolean;
}) {
    const asset1_logo = getAssetLogoUrl(asset1_id);
    const asset2_logo = getAssetLogoUrl(asset2_id);
    const dexIcon = dex ? getDexIcon(dex) : null;

    return (
        <div>
            <LpTokensIconsWrapper>
                <a target="_blank" href={getTokenLink(asset1_id)} rel="noreferrer">
                    <LPTokensIcon first isWhite={asset1_id === GARD_ID}>
                        {asset1_logo && (
                            <img
                                alt=""
                                width="40px"
                                height="40px"
                                src={asset1_logo}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = tokenPlaceholder;
                                }}
                            />
                        )}
                    </LPTokensIcon>
                </a>
                <a target="_blank" href={getTokenLink(asset2_id)} rel="noreferrer">
                    <LPTokensIcon isWhite={asset2_id === GARD_ID}>
                        {asset2_logo && (
                            <img
                                alt=""
                                width="40px"
                                height="40px"
                                src={asset2_logo}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = tokenPlaceholder;
                                }}
                            />
                        )}
                    </LPTokensIcon>
                </a>
                {dexIcon && <DexIcon alt="" src={dexIcon} />}
                {isGame && <Game alt="" src={game} />}
            </LpTokensIconsWrapper>
        </div>
    );
}

export function PoolHeader({
    asset1_id,
    asset2_id,
    pool_name,
    rewardTokenName,
    dex,
    lock,
    isVerified,
    algoRewards,
    isGame,
}: {
    asset1_id: number;
    asset2_id: number;
    pool_name: string;
    rewardTokenName: string;
    dex: DexProvider | null;
    lock: string;
    isVerified: boolean;
    algoRewards: boolean;
    isGame: boolean;
}) {
    return (
        <PoolHeaderContainer>
            <TokensIcons asset1_id={asset1_id} asset2_id={asset2_id} dex={dex} isGame={isGame} />
            <PoolInfo>
                <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    <PoolTitle style={{ marginRight: '5px' }}>{pool_name}</PoolTitle>
                    {isVerified && <img data-tip="Project is verified by Cometa" alt="" height="14px" src={verified} />}
                </div>
                <div style={{ display: 'flex' }}>
                    <PoolSubtitle>EARN {rewardTokenName}</PoolSubtitle>
                    {algoRewards && <PoolSubtitle style={{ marginLeft: '3px' }}>+ ALGO</PoolSubtitle>}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    <ContractLockSuffix>{lock}</ContractLockSuffix>
                    {lock && (
                        <img data-tip="You can claim rewards only after lock period" alt="" height="10px" src={info} />
                    )}
                </div>
            </PoolInfo>
            <ReactTooltip clickable place="top" type="light" effect="solid" />
        </PoolHeaderContainer>
    );
}
