import { DAY } from '../../../common/lib';

export const calculateUnlockTimeinSecs = (currentBlock: number, lockTimestamp: number, lockLengthBlocks: number) => {
    if (!lockLengthBlocks || !lockTimestamp) {
        return 0;
    }
    return Math.floor(Math.max(0, lockLengthBlocks - (currentBlock - lockTimestamp)) * 4.35); // in seconds
};

const formatUnlockTime = (unlockTime: number) => {
    if (unlockTime > DAY) {
        return `${Math.floor(unlockTime / DAY)} days`;
    }

    return new Date(unlockTime * 1000).toISOString().substring(11, 19);
};

export const UnlockTimer = ({ unlockTimer }: { unlockTimer: number }) => {
    if (unlockTimer <= 0) {
        return <></>;
    }

    return (
        <div style={{ marginTop: '5px', fontSize: '12px', marginLeft: '3px' }}>
            unlock in {formatUnlockTime(unlockTimer)}
        </div>
    );
};
