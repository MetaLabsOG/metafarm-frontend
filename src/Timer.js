import React, {useEffect} from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export function Timer({init_seconds}) {
    const [seconds, setSeconds] = React.useState(init_seconds);

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
            <h1 className="fomo_phrase" style={{marginTop: "20px"}}>{Math.floor(seconds / 360)}:{Math.floor(seconds / 60) % 60}:{seconds % 60}</h1>
            <ProgressBar
                completed={Math.floor((1 - seconds/init_seconds) * 100)}
                className="fomo_bar_wrapper"
                barContainerClassName="fomo_bar_container"
                transitionTimingFunction="ease-in"
                bgColor="#5cfc3c"
                isLabelVisible={false}
            />
        </React.Fragment>
    );
}
