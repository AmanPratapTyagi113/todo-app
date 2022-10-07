import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import {db} from './firebase';
import { 
  query, 
  collection, 
  onSnapshot, 
  updateDoc, 
  doc, 
  addDoc,  
  deleteDoc
} from 'firebase/firestore';
// import { async } from '@firebase/util';
import './App.css';

// const style = {
//   // bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
//   // container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
//   // heading: `text-3xl font-bold text-center text-gray-800 p-2`,
//   // form: `flex justify-between`,
//   // input: `border p-2 w-full text-xl`,
//   // button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
//   // count: `text-center p-2`
// }
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

// Create todo
const createTodo = async (e) =>{
  e.preventDefault(e);
  if(input === ''){
    alert('Pleas enter a valid todo')
    return;
  }
  await addDoc(collection(db, 'todos'),{
    text: input,
    completed: false,
  })
  setInput('')
};


  // Read todo from firebas
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      });
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])

  // Update todo in firebase
const toggleComplete = async(todo)=> {
  await updateDoc(doc(db, 'todos', todo.id),{
    completed: !todo.completed
  })
}

  // Delete todo 
const deleteTodo =async(id)=> {
  await deleteDoc(doc(db, 'todos', id))
}

const date = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobar", "November", "December"]

  return (
    <div className="bg">
      <div className="container">
        <h3 className="heading">Todo App</h3>
        <div className='date'>
          <p>{days[date.getDay()]},</p>
          <p>{date.getDate()}</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>
        <form onSubmit={createTodo} className="form">
          <input 
            value={input} 
            onChange={(e)=> setInput(e.target.value)} 
            className="input"
            type="text" 
            placeholder='Add Todo' 
          />
          <button className="button"><AiOutlinePlus size={25} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index} 
              todo={todo} 
              toggleComplete={toggleComplete} 
              deleteTodo={deleteTodo}
            />
          ))}

        </ul>
        {todos.length < 1 ? null: (
          <p className="count">{`You have ${todos.length} todos`}</p>
        )}
        
      </div>
    </div>
  );
}

export default App;
