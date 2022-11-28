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
        <section className="form flex justify-center content-around mb-4">
            <input className="inputText rounded font-light border-2 border-darker p-1 cursor-pointer w-full" ref={inputRef} type="text" placeholder="New task" 
            onKeyPress={(e) => {if(e.key == "Enter") {
                clickHandler();
            }}}
            />
            <input className="formButton text-txtgrey font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg hover:text-light transition duration-150 ease-in-out rounded ml-2 cursor-pointer bg-light border-light border-4 hover:bg-darker hover:border-darker px-6 py-2.5" type ="submit" onClick={clickHandler} />
        </section>
    )
}

export default Newentry