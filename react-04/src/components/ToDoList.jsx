import { useState } from "react"
import {v4 as uuid4} from 'uuid'
export default function ToDoList(){
    let [todos , settodos] = useState([{task: "sample task" , id: uuid4()}])
    let [newtodo , setnewtodo] = useState("")

    let addnewTask = () =>{
        settodos([...todos , {task: newtodo , id: uuid4()}])
        setnewtodo("")
    }

    let updateTaskValue = (event) => {
        setnewtodo(event.target.value)
    }

    return(
        <div>
            <input type="text" placeholder='Add a task' value={newtodo} onChange={updateTaskValue} />
            <button onClick={addnewTask}>Add</button>
            <br />
            <br />
            <h2>Tasks To complete</h2>
            <ul>
                {
                    todos.map((todo) =>{
                        return <li key={todo.id} > {todo.task} </li>
                    })
                }
            </ul>
        </div>
    )
}