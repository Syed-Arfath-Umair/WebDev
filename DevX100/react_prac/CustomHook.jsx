import { Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function useTodo(){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    axios.get('https://sum-server.100xdevs.com/todos')
      .then((res)=>{
        setTodos(res.data.todos)
        setLoading(false);
      });
  }, []);
  return [todos, loading];
}

function App() {
  const [todos, loading] = useTodo();
  
  if(loading){
    return(
      <div>
        Loading.....
      </div>
    )
  }
  else{
    return (
      <div>
          <Todo todos={todos} />
          Hi
      </div>
    )
  }
}

function Todo({todos}){
  return (
    <div>
      {todos.map((todo)=>{
        return(
        <div key={todo.id}>
          {todo.title}
          {todo.description}
        </div>)
      })}
    </div>
  )
}

export default App;
