import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import ProgressBar from '@ramonak/react-progress-bar';

type TimerProps = {
    totalSec: number;
    leftSec: number;
};

export function Timer({ totalSec, leftSec }: TimerProps) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        //@ts-ignore
        let timeout;
        if (seconds > 0) {
            timeout = setTimeout(() => {
                setSeconds((seconds) => Math.max(0, seconds - 1000));
            }, 1000);
        }
        //@ts-ignore
        return () => clearTimeout(timeout);
    }, [seconds]);

    useEffect(() => {
        setSeconds(leftSec);
    }, [leftSec]);

    return (
        <div>
            <h1 className="fomo_phrase">{dayjs(seconds).format('HH:MM:ss')}</h1>
            <ProgressBar
                completed={Math.floor(1 - leftSec)}
                className="fomo_bar_wrapper"
                barContainerClassName="fomo_bar_container"
                transitionTimingFunction="ease-in"
                bgColor="#5cfc3c"
                isLabelVisible={false}
            />
        </div>
    );
}
