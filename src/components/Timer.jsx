import { VscDebugRestart } from 'react-icons/vsc';

function Timer({secs}){
    //const [buttonText, setButtonText] = useState('Start');
const Time = (secs) => {
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let time = {
            h: hours,
            m: minutes,
            s: seconds
        };

        let hour = time.h;
        let min = time.m;
        let second = time.s;

        console.log(time.h, time.m, time.s);

        if(time.m < 10){
            min = `0`+ time.m;
        }

        if(time.s < 10){
            second = `0`+ time.s;        
        }

        let timeDisplay = `0${hour}:${min}:${second}`;

        if(time.h == 0){
            return timeDisplay = `${min}:${second}`;
        }


        return timeDisplay;
    }


    // function Reset() {
    //     console.log('reset');
    //     return;
    // }

    // function startPause() {
    //     if(){
    //         pause();
    //         setButtonText('Pause');
    //     } else {
    //         start();
    //     }
    // }

    // function startPause() {
    //     setButtonText('Pause');
    //     return;
    // }

    return (
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg  bg-dark-salmon mt-10">
                <button type="button" className="btnTop text-bisque text-xl leading-tight font-medium mb-2 text-center">Work timer</button>
                <div className='flex justify-around items-center mb-4'>
                    <p className="text-txtgrey text-center text-3xl">
                        {Time(secs)}
                    </p>
                    <div className='btnPlus'>
                        <button className='plus'>+</button>
                        <button className='minus'>-</button>
                    </div>
                </div>
                <div className='flex'>
                    <button type="button" 
                    className="startTimer text-txtgrey btnStart inline-block">Start</button>
                    <button type="button" className='text-bisque mx-2'><VscDebugRestart /></button>
                </div>
            </div>
        </div>
    );
};

export default Timer;