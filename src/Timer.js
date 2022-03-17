import React, {useEffect} from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export function Timer({totalSec, leftSec}) {
    const [seconds, setSeconds] = React.useState(leftSec);

    useEffect(() => {
        let timeout;
        if (seconds > 0) {
            timeout = setTimeout(() => {
                setSeconds(seconds => Math.max(0, seconds - 1));
            }, 1000);
        }
        return () => clearTimeout(timeout);
    }, [seconds]);

    useEffect(() => {
        setSeconds(leftSec);
    }, [leftSec]);

    return (
        <div>
            <h1 className="fomo_phrase" style={{marginTop: "20px"}}>{new Date(seconds * 1000).toISOString().substr(11, 8)}</h1>
            <ProgressBar
                completed={Math.floor((1 - seconds/totalSec) * 100)}
                className="fomo_bar_wrapper"
                barContainerClassName="fomo_bar_container"
                transitionTimingFunction="ease-in"
                bgColor="#5cfc3c"
                isLabelVisible={false}
            />
        </div>
    );
}
