import React, { useState } from "react";
import './Assets/Todo.css';

const Todo = () => {
    const [item, setItem] = useState([]);
    const [inputlist, setInputlist] = useState("buy mango");

    const itemevent = (event) => {
        setInputlist(event.target.value);
    }

    const Listofitem = () => {
        setItem((olditems) => {
            return [...olditems, inputlist]
        })
        setInputlist("");
    }

    const deleteItem = (index) => {
        const updatedItems = item.filter((_, i) => i !== index);
        setItem(updatedItems);
    }

    return (
        <div className="container">
            <div className="center_div">
                <br></br>
                <h2>Todo Do App</h2>
                <input type="text" placeholder="Add a item" onChange={itemevent} value={inputlist}></input>
                <button onClick={Listofitem}>+</button>
                <ol>
                    {item.map((itemval, index) => (
                        <div className="todo-item" key={index}>
                            <i className="delete" onClick={() => deleteItem(index)}>×</i>
                            <li>{itemval}</li>
                        </div>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Todo;
