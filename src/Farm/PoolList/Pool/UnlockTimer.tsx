import { DAY } from '../../../common/lib';
import { $meanRoundDuration } from '../../../common/store';

export const calculateUnlockTimeinSecs = (
    currentBlock: number,
    lockTimestamp: number,
    lockLengthBlocks: number,
    meanRoundDuration: number
) => {
    if (!lockLengthBlocks || !lockTimestamp) {
        return 0;
    }

    return Math.floor(Math.max(0, lockLengthBlocks - (currentBlock - lockTimestamp)) * meanRoundDuration); // In seconds
};

const formatUnlockTime = (unlockTime: number) => {
    if (unlockTime > DAY) {
        return `${Math.floor(unlockTime / DAY)} days`;
    }

    return new Date(unlockTime * 1000).toISOString().slice(11, 19);
};

export function UnlockTimer({ unlockTimer }: { unlockTimer: number }) {
    if (unlockTimer <= 0) {
        return null;
    }

    return (
        <div style={{ marginTop: '5px', fontSize: '12px', marginLeft: '3px' }}>
            unlock in {formatUnlockTime(unlockTimer)}
        </div>
    );
}
