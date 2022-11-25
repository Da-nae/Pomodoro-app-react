import './App.css';
import React from 'react';
import Timer from './components/Timer.jsx';
import { useState } from 'react';

function App() {
    const [secs, setSecs] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);

    const BtnPlus = () => {
        let plus = secs + 60;
        setSecs(plus);
    }

    const BtnMinus = () => {
        let min = secs - 60;
        setSecs(min);
    }

    return (
        <div className="App">
            <Timer secs={secs} setSecs={setSecs} setIsActive={setIsActive} isActive={isActive} BtnPlus={BtnPlus} BtnMinus={BtnMinus}/>
        </div>
    )
}

export default App;
