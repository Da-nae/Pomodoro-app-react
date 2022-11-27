import "./App.css";
import React from "react";
import Timer from "./components/Timer.jsx";
import {useState} from "react";
// test 
import useModal from "./components/useModal";
import Modal from "./components/modal";

function App() {
    const [secs, setSecs] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const { isShowing, toggle } = useModal();

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

    // Button to switch from work to break : 
    const Breaktime = () => {
            if (!isActive) {
                setSecs(5 * 60);
            }
        };

    // Button to switch from break to work : 
    const Worktime = () => {
        if (!isActive) {
            setSecs(25 * 60);
        }
    };

    // Modal test
    // const useModalfunction = () => {
    //     if(secs == 0) {
    //         isShowing();
    //     }
    // }
    // useModalfunction();

    return (
        <div className="App">
            <div className="flex justify-center">
                <div className="block p-6 rounded-lg shadow-lg  bg-dark-salmon mt-10">
                    <div className="btnsTop flex">
                        <button
                            type="button"
                            className="btnTop text-bisque text-xl leading-tight font-medium mb-2 text-center" onClick={Worktime}>
                            Work timer
                        </button>
                        <button
                            type="button"
                            className="btnTop text-dark-salmon bg-bisque text-xl leading-tight font-medium mb-2 text-center" onClick={Breaktime}>
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
                    />
                        {/* <button className="modal-toggle" onClick={toggle}>
                        Show modal
                        </button>
                        <Modal isShowing={isShowing} hide={toggle} /> */}
                </div>
            </div>
        </div>
    );
}

export default App;
