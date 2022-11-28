import { TbTrashX } from 'react-icons/tb';

import React from "react";

function Entries(prop) {
    const LSKEY = "MyTodoApp";

    const handleChange = (id) => {
        const checkedEntry = prop.entries.map((entry) => {
            if (entry.id == id) {
                entry.complete = !entry.complete;
            }

            return entry;
        });

        prop.setEntries(checkedEntry);
    };

    const handleRemove = id => {
        const newEntries = [...prop.entries].filter(entry => entry.id !== id);
        prop.setEntries(newEntries);
    }

    return (
        <section className="toDoEntries">
            <ul className='p-0'>
                {prop.entries.map((entry) => (
                    <li 
                        key={entry.id} 
                        className={"flex flex-row justify-start" + entry.complete ? "true" : "false"}
                    >
                        <input 
                            type="checkbox" checked={entry.complete}
                            onChange={() => {handleChange(entry.id)}}
                            id={entry.id}
                        />
                        <label className="toDoSingleEntries ml-2 mr-1 font-light" htmlFor={entry.id}>{entry.name}</label>
                        <button 
                            className="deleteButton relative ml-2 text-center text-sm z-10 border-0 text-darker bg-light rounded-full p-1"
                                onClick={() => handleRemove(entry.id)}
                        ><TbTrashX/></button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Entries