import './App.css';
import React from 'react';
import Timer from './components/Timer.jsx';
import { useState } from 'react';

function App() {
    const [secs, setSecs] = useState(25 * 60);

    return (
        <div className="App">
            <Timer secs={secs} />
        </div>
    )
}

export default App;
