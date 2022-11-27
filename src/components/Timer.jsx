import {VscDebugRestart} from "react-icons/vsc";
import {useEffect} from "react";

function Timer({secs, setSecs, isActive, setIsActive, BtnPlus, BtnMinus}) {
    // Button Start/Pause to activate and deactivate the timer
    function toggle() {
        setIsActive(!isActive);
    }

    // Button to reset the timer to 25min
    function reset() {
        setSecs(25 * 60);
        setIsActive(false);
    }

    // Function to make the timer decrement 1 second at a time
    useEffect(() => {
        if (secs > 0) {
            let interval = null;

            if (isActive) {
                interval = setInterval(() => {
                    setSecs((secs) => secs - 1);
                }, 1000);
            } else if (!isActive && secs !== 0) {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        }
    }, [isActive, secs]);

    // Display of the time on the page, changing the total of seconds to hours, minutes and seconds :
    const Time = (secs) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let time = {
            h: hours,
            m: minutes,
            s: seconds,
        };

        let hour = time.h;
        let min = time.m;
        let second = time.s;

        if (time.m < 10) {
            min = `0` + time.m;
        }

        if (time.s < 10) {
            second = `0` + time.s;
        }

        let timeDisplay = `0${hour}:${min}:${second}`;

        if (time.h == 0) {
            return (timeDisplay = `${min}:${second}`);
        }

        return timeDisplay;
    };

    return (
        <div>
            <div className="flex justify-around items-center mb-4">
                <p className="text-txtgrey text-center text-3xl">
                    {Time(secs)}
                </p>
                <div className="btnPlus">
                    <button className="plus" onClick={BtnPlus}>
                        +
                    </button>
                    <button className="minus" onClick={BtnMinus}>
                        -
                    </button>
                </div>
            </div>
            <div className="flex content-center">
                <button
                    type="button"
                    className="startTimer text-txtgrey btnStart inline-block"
                    onClick={toggle}>
                    {isActive ? "Pause" : "Start"}
                </button>
                <button
                    type="button"
                    className="text-bisque mx-2"
                    onClick={reset}>
                    <VscDebugRestart />
                </button>
            </div>
        </div>
    );
}

export default Timer;
