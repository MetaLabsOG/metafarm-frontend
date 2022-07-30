import ProgressBar from '@ramonak/react-progress-bar';
import { useTimer } from '../common/reachHooks';

type TimerProps = {
    totalSec: number;
    leftSec: number;
};

export function Timer({ totalSec, leftSec }: TimerProps) {
    const [seconds] = useTimer(leftSec);

    return (
        <div>
            <h1 className="fomo_phrase">{new Date(seconds * 1000).toISOString().substring(11, 19)}</h1>
            <ProgressBar
                completed={Math.floor((1 - leftSec / totalSec) * 100)}
                className="fomo_bar_wrapper"
                barContainerClassName="fomo_bar_container"
                transitionTimingFunction="ease-in"
                bgColor="#5cfc3c"
                isLabelVisible={false}
            />
        </div>
    );
}
