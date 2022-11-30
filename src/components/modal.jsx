const Modal = ({setIsShowing, isShowing, Worktime, theme, BreaktimeReset, setIsActive, isActive}) => {

    return (
        <div className="modal-bg fixed flex pt-20 justify-center top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto z-20 bg-gray-900/70">
            <div className="modalContainer bg-darker-op border-none shadow-lg flex flex-col justify-around relative w-64 h-48 pointer-events-auto bg-clip-padding rounded-md outline-none text-center">
                <span className="absolute animate-ping w-5 h-5 bg-light rounded-full -top-1 -left-1"></span>
                <span className="absolute w-5 h-5 bg-light rounded-full -top-1 -left-1"></span>
                <div className="modal-title text-light-op text-lg">
                    <h4>{theme == 'green' ? "Let's get some work done !" : 'Take a break !'}</h4>
                </div>
                <div className="modal-body text-light-op px-6">
                    {theme == 'green' ? 'I hope your break was refreshing, now get back to work 💪' : "You worked well, now it's time to touch some grass 🌱"}
                </div>
                <div className="flex justify-around">
                    <button
                        type="button"
                        className="modalbtn modal-close-button bg-darker text-light"
                        onClick={() => setIsShowing(false)}>
                        Close
                    </button>
                    <button
                        type="button"
                        className="modalbtn modal-newtimer-button bg-light"
                        onClick={() => {
                            setIsShowing(false), Worktime();
                        }}>
                        Start a new work timer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
