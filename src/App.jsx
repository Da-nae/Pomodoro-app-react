import "./App.css";
import React from "react";
import Timer from "./components/Timer.jsx";
import Modal from "./components/modal";
import Title from "./components/title";
import Entries from "./components/entries";
import Newentry from "./components/newEntry";

import {useState, useEffect} from "react";

function App() {
    const [secs, setSecs] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [isShowing, setIsShowing] = useState(false);
    const [referenceTime, setReferenceTime] = useState(Date.now());
    const [theme, setTheme] = useState("");

    // import of the todo list :
    const initialEntries = [];
    const LSKEY = "MyTodoApp";
    const [entries, setEntries] = useState(initialEntries);

    useEffect(() => {
        if (entries.length > 1) {
            localStorage.setItem(LSKEY + ".entries", JSON.stringify(entries));
        }
    }, [entries]);

    useEffect(() => {
        const saveEntries = JSON.parse(
            localStorage.getItem(LSKEY + ".entries"),
        );
        if (saveEntries) {
            setEntries(saveEntries);
        }
    }, []);

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
            setSecs(5 * 60);
            setTheme("green");
        }
    };

    // Button to switch from break to work :
    const Worktime = () => {
        if (!isActive) {
            setSecs(25 * 60);
            setTheme("peach");
        }
    };

    return (
        <div
            className={
                theme == "green"
                    ? "theme-green"
                    : theme == "peach"
                    ? "theme-peach"
                    : "green"
            }>
            <div className="w-full h-full bg-light pb-52">
                <div className="flex px-2 py-2">
                    <img src={"/src/assets/pomodoro.png"} className="w-6 mx-1" />
                    <h1 className="text-darker text-xl leading-tight font-medium">
                        My pomodoro
                    </h1>
                </div>
                <div className="flex row flex-wrap items-start mx-auto">
                    <div className="flex flex-col items-center justify-center content-center m-auto">
                    <div className="p-6 rounded-lg shadow-lg  bg-darker mt-10 mx-2 overflow-hidden mb-14 flex flex-col items-center">
                        <div className="btnsTop flex content-between items-center justify-center">
                            <button
                                type="button"
                                className="btnTop text-title mr-1"
                                onClick={Worktime}>
                                Work timer
                            </button>
                            <button
                                type="button"
                                className="btnTop breakBtn text-txtgrey focus:text-light"
                                onClick={Breaktime}>
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
                            setIsShowing={setIsShowing}
                            isShowing={isShowing}
                            reset={reset}
                            referenceTime={referenceTime}
                            setReferenceTime={setReferenceTime}
                        />
                        {isShowing && (
                            <Modal
                                setIsShowing={setIsShowing}
                                isShowing={isShowing}
                                Worktime={Worktime}
                                theme={theme}
                            />
                        )}
                    </div>
                    </div>
                <div className="todo text-left flex flex-col items-center bg-white w-4/5 m-auto p-6 rounded-xl max-w-md shadow-lg overflow-hidden mt-10">
                    <Title />
                    <Entries entries={entries} setEntries={setEntries} />
                    <Newentry entries={entries} setEntries={setEntries} />
                </div>
            </div>
        </div>
        </div>
    );
}

export default App;
