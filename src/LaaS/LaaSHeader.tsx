import { TokensIcons } from '../Components/PoolHeader/PoolHeader';
import { DexProvider } from '../dexes';
import { PoolHeaderContainer, PoolInfo } from '../Components/PoolHeader/styled';
import verified from '../imgs/verified.svg';
import { Asset, Priced } from '../common/store';
import { LaaSHeaderSubtitle, LaaSHeaderTitle } from './styled';

export const LaaSHeader = ({
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
                    <LaaSHeaderTitle>{asset2.unitName}</LaaSHeaderTitle>
                    <LaaSHeaderTitle style={{ fontSize: '17px' }}>{`/${asset1.unitName}`}</LaaSHeaderTitle>
                </div>
                {isVerified && (
                    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                        <LaaSHeaderSubtitle>VERIFIED</LaaSHeaderSubtitle>
                        <img data-tip="Project is verified by Cometa" alt="" height="14px" src={verified} />
                    </div>
                )}
            </PoolInfo>
        </PoolHeaderContainer>
    );
};
