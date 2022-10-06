import { Contract, VaultInitialInfo } from '../common/store';
import { Button, ButtonType } from '../Components/Button/Button';
import { blocksToText } from '../Farm/PoolList/Pool/PoolInfo';
import { ButtonSubtitle } from './styled';
import { BUTTON_TITLE, VaultStage } from './VaultCard';

export const getVaultDurationText = (
    vaultStage: VaultStage,
    meanRoundDuration: number,
    currentBlock: number,
    vaultInitialState: VaultInitialInfo
): string => {
    const vaultBlocks = currentBlock - vaultInitialState.startBlock;
    if (vaultStage === VaultStage.subscription) {
        const blocksLeft = vaultInitialState.subscriptionBlocks - vaultBlocks;
        const vaultDurationText = blocksToText(meanRoundDuration, blocksLeft);
        return 'closed in ' + vaultDurationText;
    }

    if (vaultStage === VaultStage.running) {
        const blocksLeft = vaultInitialState.vaultRunBlocks - vaultBlocks;
        const vaultDurationText = blocksToText(meanRoundDuration, blocksLeft);
        return 'ends in ' + vaultDurationText;
    }

    return '';
};

export const VaultButton = ({
    vaultStage,
    vault,
    onClick,
    asset2_name,
    buttonSubtitle,
    isProject,
}: {
    vaultStage: VaultStage;
    vault: Contract<'vault'>;
    onClick: () => void;
    asset2_name: string;
    buttonSubtitle: string;
    isProject?: boolean;
}) => {
    if (!vault.state) {
        return <></>;
    }
    const buttonTitle =
        vaultStage === VaultStage.subscription && !isProject ? `deposit ${asset2_name}` : BUTTON_TITLE[vaultStage];
    const buttonType =
        vaultStage === VaultStage.auction
            ? ButtonType.secondary
            : vaultStage === VaultStage.running
            ? ButtonType.disabled
            : ButtonType.primary;

    return (
        <div>
            <Button
                buttonText={buttonTitle.toUpperCase()}
                type={buttonType}
                style={{ width: '215px', height: '42px', fontSize: '15px' }}
                onClick={onClick}
            />
            <ButtonSubtitle>{buttonSubtitle}</ButtonSubtitle>
        </div>
    );
};
