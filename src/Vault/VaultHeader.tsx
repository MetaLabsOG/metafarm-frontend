import ReactTooltip from 'react-tooltip';
import { TokensIcons } from '../Components/PoolHeader/PoolHeader';
import { DexProvider } from '../dexes';
import { PoolHeaderContainer, PoolInfo } from '../Components/PoolHeader/styled';
import verified from '../imgs/verified.svg';
import { Asset, Priced } from '../common/store';
import { VaultHeaderSubtitle, VaultHeaderTitle } from './styled';

export const VaultHeader = ({
    asset1,
    asset2,
    dex,
    isVerified,
}: {
    asset1: Priced<Asset>;
    asset2: Priced<Asset>;
    dex: DexProvider;
    isVerified: boolean;
}) => {
    return (
        <PoolHeaderContainer>
            <TokensIcons asset1_id={asset1.id} asset2_id={asset2.id} dex={dex} />
            <PoolInfo>
                <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    <VaultHeaderTitle>{asset2.unitName}</VaultHeaderTitle>
                    <VaultHeaderTitle style={{ fontSize: '17px' }}>{`/${asset1.unitName}`}</VaultHeaderTitle>
                </div>
                {isVerified && (
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                        <VaultHeaderSubtitle>VERIFIED</VaultHeaderSubtitle>
                        <img data-tip="Project is verified by Cometa" alt="" height="14px" src={verified} />
                    </div>
                )}
            </PoolInfo>
            <ReactTooltip clickable place="top" type="light" effect="solid" />
        </PoolHeaderContainer>
    );
};
