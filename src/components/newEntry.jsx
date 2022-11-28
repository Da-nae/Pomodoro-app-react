import React, { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

function Newentry(prop) {
    const inputRef = useRef();

    function clickHandler() {

        const inputElement = inputRef.current;
        const newEntries = {
            name : inputElement.value,
            complete : false,
            id: uuidv4()
        }

        const newInitialEntries = JSON.parse(JSON.stringify(prop.entries));
        newInitialEntries.push(newEntries);
        prop.setEntries(newInitialEntries);

        inputElement.value = null;
    }

    return(
        <section className="form flex flex-wrap mb-5">
            <input className="inputText rounded font-medium border-2 border-darker p-1 cursor-pointer max-w-lg" ref={inputRef} type="text" placeholder="New task" 
            onKeyPress={(e) => {if(e.key == "Enter") {
                clickHandler();
            }}}
            />
            <input className="formButton text-txtgrey rounded ml-2 font-medium cursor-pointer bg-light border-light border-4 hover:bg-darker hover:border-darker" type ="submit" onClick={clickHandler} />
        </section>
    )
}

export default Newentry