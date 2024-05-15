import { useState } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input type="text" id="title" placeholder="Enter The title" style={{padding: 10,margin: 10}} onChange={async(e)=>{
                const value = e.target.value;
                setTitle(e.target.value);
            }} />
            <br /> <br />
            <input type="text" id="description" placeholder="Enter The description" style={{padding: 10,margin: 10}} onChange={(e)=>{
                const value = e.target.value;
                setDescription(e.target.value);
            }} />
            <br /> <br />
            <input type="button" value="Add Todo" onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                    }),
                    headers: {
                        "content-type": "application/json", 
                    }
                })
                    .then(async(res)=>{
                        const json = await res.json();
                        alert("Todo Added");
                    })
            }} style={{
                padding: 10,
                margin: 10
            }}/>
        </div>
    )
}
