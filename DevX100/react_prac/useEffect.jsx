import { useState, memo, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
      .then((res) => res.json() )
      .then((data) => {
        setTodos(data.todos);
      })
  }, []);
  return(
    <div>
      {todos.map((todo)=> <Todo key={todo.id} todo={todo} />)}
    </div>
  )
}

function Todo({todo}){
  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  )
}

export default App
