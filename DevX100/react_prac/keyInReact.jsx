import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let globalId = 1;
function App() {
  const [todos, setTodos] = useState([{
    id: globalId++,
    title: "Gym",
    description: "Workout for an hour."
  },{
    id: globalId++,
    title: "Eat",
    description: "Eat a lot!"
  },{
    id: globalId++,
    title: "Sleep",
    description: "Sleep a lot!!"
  }]);
  function AddTodo(){
    setTodos(prevTodo => [...todos, {
      id: globalId++,
      title: Math.random(),
      description: Math.random(),
    }])
  }
  return (
    <div>
      <button onClick={AddTodo}>Add new Todo</button>
      {todos.map((todo)=>{
        return(
          <Todo key={todo.id} todo={todo} />
        )
      })}
    </div>
  )
}

function Todo({todo}){
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  )
}

export default App
