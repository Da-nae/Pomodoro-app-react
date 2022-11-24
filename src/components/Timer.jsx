import { useStopwatch } from 'react-timer-hook';
import { VscDebugRestart } from 'react-icons/vsc';

const Timer = () => {
    const {seconds, minutes, isRunning, start, pause, reset,} = useStopwatch({ autoStart: false });

    return (
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg  bg-dark-salmon mt-10">
                <button type="button" className="btnTop text-bisque text-xl leading-tight font-medium mb-2 text-center">Work timer</button>
                <div className='flex justify-around items-center mb-4'>
                    <p className="text-txtgrey text-center text-lg">
                        {minutes}:{seconds}
                        
                    </p>
                    <div className='btnPlus'>
                        <button className='plus'>+</button>
                        <button className='minus'>-</button>
                    </div>
                </div>
                <div className='flex'>
                    <button type="button" onClick={isRunning ? pause : start} className="startTimer text-txtgrey btnStart inline-block">Start</button>
                    <button type="button" className='text-bisque mx-2' onClick={reset}><VscDebugRestart /></button>
                </div>
            </div>
        </div>
    );
};

export default Timer;