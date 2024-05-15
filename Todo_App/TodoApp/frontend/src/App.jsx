import { useState } from 'react'
import { CreateTodo } from '../Components/CreateTodo'
import { Todos } from '../Components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todos", {
    method: "GET",
  }).then(function(res){
    let d = res.json();
    console.log(d);
  }).then((data)=>{
    console.log(data);
    // setTodos(data.todos);
  })

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  )
}

export default App