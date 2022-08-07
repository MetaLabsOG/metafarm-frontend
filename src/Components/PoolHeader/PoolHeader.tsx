import ReactTooltip from 'react-tooltip';
import { getAssetLogoUrl, getTokenLink } from '../../Farm/PoolList/Pool/utils';
import verified from '../../imgs/verified.svg';
import info from '../../imgs/info.svg';
import {
    PoolHeaderContainer,
    ContractLockSuffix,
    DexIcon,
    LPTokensIcon,
    LpTokensIconsWrapper,
    PoolInfo,
    PoolTitle,
    PoolSubtitle,
} from './styled';

export const PoolHeader = ({
    asset1_id,
    asset2_id,
    pool_name,
    rewardTokenName,
    dexIcon,
    lock,
    isVerified,
    algoRewards,
}: {
    asset1_id: number;
    asset2_id: number;
    pool_name: string;
    rewardTokenName: string;
    dexIcon: string;
    lock: string;
    isVerified: boolean;
    algoRewards: boolean;
}) => {
    const asset1_logo = getAssetLogoUrl(asset1_id);
    const asset2_logo = getAssetLogoUrl(asset2_id);

    return (
        <PoolHeaderContainer>
            <div>
                <LpTokensIconsWrapper>
                    <a target="_blank" href={getTokenLink(asset1_id)} rel="noreferrer">
                        <LPTokensIcon first>
                            {asset1_logo && <img alt="" width="40px" height="40px" src={asset1_logo} />}
                        </LPTokensIcon>
                    </a>
                    <a target="_blank" href={getTokenLink(asset2_id)} rel="noreferrer">
                        <LPTokensIcon>
                            {asset2_logo && <img alt="" width="40px" height="40px" src={asset2_logo} />}
                        </LPTokensIcon>
                    </a>
                    {dexIcon && <DexIcon alt="" src={dexIcon} />}
                </LpTokensIconsWrapper>
            </div>
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
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*
             // @ts-ignore */}
            <ReactTooltip place="top" type="light" effect="solid" clickable={true} />
        </PoolHeaderContainer>
    );
};
