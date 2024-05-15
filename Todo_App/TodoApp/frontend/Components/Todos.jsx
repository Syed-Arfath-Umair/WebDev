import { useState } from "react";

export function Todos({todos}) {
    if (!Array.isArray(todos)) {
        return <div>No todos found.</div>;
    }
    return <div>
        {todos}
        {/* {todos.map((todo) => {
            return <div key = {todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div> 
        })} */}
    </div>
}