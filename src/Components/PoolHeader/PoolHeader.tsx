import ReactTooltip from 'react-tooltip';
import { getAssetLogo, getTokenLink } from '../../Farm/PoolList/Pool/utils';
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
    PoolSubtitlesContainer,
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
    const asset1_logo = getAssetLogo(asset1_id);
    const asset2_logo = getAssetLogo(asset2_id);
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
    nftRewards,
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
    nftRewards: boolean;
}) {
    const rewards = `${rewardTokenName}${algoRewards ? ' + ALGO' : ''}${nftRewards ? ' + 🎁 NFT' : ''}`;
    return (
        <PoolHeaderContainer>
            <TokensIcons asset1_id={asset1_id} asset2_id={asset2_id} dex={dex} isGame={isGame} />
            <PoolInfo>
                <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    <PoolTitle style={{ marginRight: '5px' }}>{pool_name}</PoolTitle>
                    {isVerified && <img data-tip="Verified by Cometa" alt="" height="14px" src={verified} />}
                </div>
                <PoolSubtitlesContainer>
                    <PoolSubtitle>Earn {rewards}</PoolSubtitle>
                </PoolSubtitlesContainer>
                <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    <ContractLockSuffix>{lock}</ContractLockSuffix>
                    {lock && (
                        <img
                            data-html="true"
                            data-tip="❗️ During lock:<br />· Claim/Withdraw ➡ All rewards are lost.<br />· Stake ➡ Timer start for the beginning.<br />· POOL ENDS ➡ Lock is still active, wait."
                            alt=""
                            height="10px"
                            src={info}
                        />
                    )}
                </div>
            </PoolInfo>
            <ReactTooltip clickable place="top" type="light" effect="solid" />
        </PoolHeaderContainer>
    );
}
