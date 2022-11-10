import { Contract, LaasInitialInfo } from '../common/store';
import { Button, ButtonType } from '../Components/Button/Button';
import { blocksToText } from '../Farm/PoolList/Pool/PoolInfo';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';
import { ButtonSubtitle } from './styled';
import { BUTTON_TITLE, LaaSStage } from './LaaSCard';

export const getVaultDurationText = (
    laasStage: LaaSStage,
    meanRoundDuration: number,
    currentBlock: number,
    vaultInitialState: LaasInitialInfo
): string => {
    const vaultBlocks = currentBlock - vaultInitialState.startBlock;
    if (laasStage === LaaSStage.subscription) {
        const blocksLeft = vaultInitialState.subscriptionBlock - vaultBlocks;
        const vaultDurationText = blocksToText(meanRoundDuration, blocksLeft);
        return 'closed in ' + vaultDurationText;
    }

    if (laasStage === LaaSStage.running) {
        const blocksLeft = vaultInitialState.vaultRunBlocks - vaultBlocks;
        const vaultDurationText = blocksToText(meanRoundDuration, blocksLeft);
        return 'ends in ' + vaultDurationText;
    }

    return '';
};

export const LaaSButton = ({
    laasStage,
    vault,
    onClick,
    asset2_name,
    buttonSubtitle,
    isProject,
    disabled,
}: {
    laasStage: LaaSStage;
    vault: Contract<'laas'>;
    onClick: () => Promise<void>;
    asset2_name: string;
    buttonSubtitle: string;
    isProject?: boolean;
    disabled?: boolean;
}) => {
    if (!vault.state) {
        return null;
    }

    const buttonTitle =
        laasStage === LaaSStage.subscription && !isProject ? `deposit ${asset2_name}` : BUTTON_TITLE[laasStage];
    const buttonType =
        laasStage === LaaSStage.auction
            ? ButtonType.secondary
            : laasStage === LaaSStage.running || disabled
            ? ButtonType.disabled
            : ButtonType.primary;

    return (
        <div>
            {laasStage !== LaaSStage.withdraw || disabled ? (
                <Button
                    buttonText={buttonTitle.toUpperCase()}
                    type={buttonType}
                    style={{ width: '215px', height: '42px', fontSize: '15px' }}
                    onClick={onClick}
                />
            ) : (
                <PacmanButton
                    buttonText={buttonTitle.toUpperCase()}
                    buttonStyle="swap_button"
                    style={{ width: '215px', height: '42px', fontSize: '15px' }}
                    onClickAction={onClick}
                />
            )}
            <ButtonSubtitle>{buttonSubtitle}</ButtonSubtitle>
        </div>
    );
};
