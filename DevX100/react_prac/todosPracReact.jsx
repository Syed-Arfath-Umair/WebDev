import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose';

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "Workout for 6-7 pm"
    },
    {
      title: "Eat More Calories",
      description: "Eat more caloric food"
    }
  ]);
  return (
    <div>
      {/* <Todo todos = {todos} setTodos = {setTodos}/> */}
      {todos.map(function(todo){
        return <Todo title = {todo.title} description = {todo.description} setTodos = {setTodos}/>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
  function addTodo(){
    setTodos([...todos, {
        title: "New Random Todo",
        description: "New Random Description",
      }]
    );
  }
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
