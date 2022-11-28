import "./App.css";
import React from "react";
import Timer from "./components/Timer.jsx";
import {useState} from "react";
// test 
import Modal from "./components/modal";

function App() {
    const [secs, setSecs] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [isShowing, setIsShowing] = useState(false);
    const [referenceTime, setReferenceTime] = useState(Date.now());

    // Button to add a minute to the timer :
    const BtnPlus = () => {
        if (!isActive) {
            let plus = secs + 60;
            setSecs(plus);
        }
    };

    // Button to decrease the timer from a minute :
    const BtnMinus = () => {
        if (!isActive) {
            if (secs > 60) {
                let min = secs - 60;
                setSecs(min);
            }
        }
    };


    // Button to reset the timer to 25min
    function reset() {
        setSecs(25 * 60);
        setIsActive(false);
    }

    // Button to switch from work to break : 
    const Breaktime = () => {
            if (!isActive) {
                setSecs(5 *60);
            }
        };

    // Button to switch from break to work : 
    const Worktime = () => {
        if (!isActive) {
            setSecs(25 * 60);
        }
    };

    return (
        <div className="App">
            <div className="flex justify-center">
                <div className="p-6 rounded-lg shadow-lg  bg-dark-salmon mt-10 overflow-hidden">
                    <div className="btnsTop flex content-between items-center">
                        <button
                            type="button"
                            className="btnTop text-bisque mr-1" onClick={Worktime}>
                            Work timer
                        </button>
                        <button
                            type="button"
                            className="btnTop breakBtn text-txtgrey focus:text-bisque" onClick={Breaktime}>
                            Breaktime
                        </button>
                    </div>
                    <Timer
                        secs={secs}
                        setSecs={setSecs}
                        setIsActive={setIsActive}
                        isActive={isActive}
                        BtnPlus={BtnPlus}
                        BtnMinus={BtnMinus}
                        setIsShowing={setIsShowing} isShowing={isShowing}
                        reset={reset}
                        referenceTime={referenceTime}
                        setReferenceTime={setReferenceTime}
                    />
                    {isShowing && <Modal setIsShowing={setIsShowing} isShowing={isShowing} reset={reset} />}
                </div>
            </div>
        </div>
    );
}

export default App;
