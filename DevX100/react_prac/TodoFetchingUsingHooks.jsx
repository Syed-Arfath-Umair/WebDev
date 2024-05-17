import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // const [id, setId] = useState(1);
  return (
    <div>
      {/* <button onClick={()=>setId(1)}>1</button> */}
      {/* <button onClick={()=>setId(2)}>2</button>
      <button onClick={()=>setId(3)}>3</button>
      <button onClick={()=>setId(4)}>4</button> */}
      {console.log("App rendered")}
      <Todo id={1} />
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
      console.log(id);
      console.log("useEffect");
      axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
        .then((res) => {
          const filteredTodo = res.data.todos.filter((todo) => todo.id === id);
          setTodos(filteredTodo);
        })
        .catch((error) => console.error("Error fetching todos:", error))
  }, []);

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.id}</h1>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
          </div>
        ))
      ) : (
        <p>No todo found</p>
      )}
    </div>
  )
}


export default App;
