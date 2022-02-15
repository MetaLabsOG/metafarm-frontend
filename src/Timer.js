import React, {useEffect} from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export function Timer({totalSec, leftSec}) {
    const [seconds, setSeconds] = React.useState(leftSec);

    useEffect(() => {
        let interval = null;
        if (seconds) {
            interval = setInterval(() => {
                setSeconds(seconds => Math.max(0, seconds - 1));
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <React.Fragment>
            <h1 className="fomo_phrase" style={{marginTop: "20px"}}>{new Date(seconds * 1000).toISOString().substr(11, 8)}</h1>
            <ProgressBar
                completed={Math.floor((1 - seconds/totalSec) * 100)}
                className="fomo_bar_wrapper"
                barContainerClassName="fomo_bar_container"
                transitionTimingFunction="ease-in"
                bgColor="#5cfc3c"
                isLabelVisible={false}
            />
        </React.Fragment>
    );
}
