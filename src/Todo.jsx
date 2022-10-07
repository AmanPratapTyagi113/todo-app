import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import "./App.css";

// const style = {

//     // li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
//     // liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
        
//     // text: `ml-2 cursor-pointer`,
        // textComplete: `ml-2 cursor-pointer line-through`,
//     // button: `cursor-pointer flex items-center`

// };

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className="todo.completed ?  liComplete: li" >
            <div className="row">
            {/* <input onChange={()=> toggleComplete(todo)} type="checkbox" checked={todo.comleted ? 'checked':''}/> */}
                
                <p onClick={()=> toggleComplete(todo)} className="textComplete" >
                    {todo.text}
                </p>
        </div>
        <button className="button2" onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
        </li >
    )
}
export default Todo;