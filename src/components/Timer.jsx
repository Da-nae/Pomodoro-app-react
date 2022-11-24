import { useTimer } from 'react-timer-hook';

const Timer = () => {
    //const {seconds, minutes, isRunning, start, pause, resume,} = useTimer(timeOut, onTimeOut ());

    return (
            <div className="flex justify-center">
                <div className="block p-6 rounded-lg shadow-lg  bg-dark-salmon max-w-sm mt-10">
                    <button type="button" className="btnTop text-bisque text-xl leading-tight font-medium mb-2 text-center">Work timer</button>
                    <div className='flex justify-around items-center mb-4'>
                        <p className="text-txtgrey text-center text-lg">
                            20:00
                        </p>
                        <div className='btnPlus'>
                            <button className='plus'>+</button>
                            <button className='minus'>-</button>
                        </div>
                    </div>
                    <button type="button" className="startTimer btnStart inline-block">Start</button>
                </div>
            </div>
    );
};

export default Timer;