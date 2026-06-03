import { useState } from "react"
import './ToDoList.css'
import {v4 as uuid4} from 'uuid'
export default function ToDoList(){
    let [todos , settodos] = useState([{task: "sample task" , id: uuid4(), done: false}])
    let [newtodo , setnewtodo] = useState("")

    let addnewTask = () =>{
        settodos((prevtodos) =>{
            return [...prevtodos , {task: newtodo , id: uuid4(), done: false}]
        })
        setnewtodo("")
    }

    let updateTaskValue = (event) => {
        setnewtodo(event.target.value)
    }

    function deleteTask(id){
        settodos((prevtodos)=>prevtodos.filter((t) => t.id != id))
    }

    function uppercaseAll(){
        settodos((prevtodos) => prevtodos.map(todo => ({ ...todo, task: String(todo.task).toUpperCase() })))
    }

    // uppercase a single task by id
    function uppercaseOne(id){
        settodos((prevtodos) => prevtodos.map(todo => todo.id === id ? { ...todo, task: String(todo.task).toUpperCase() } : todo))
    }

    function toggleDone(id){
        settodos((prevtodos) => prevtodos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo))
    }

    function uppercaseOne(id){
        settodos((prevtodos) => prevtodos.map(todo => todo.id === id ? { ...todo, task: String(todo.task).toUpperCase() } : todo))
    }

    return(
        <div className="todo-container">
            <div className="todo-controls">
                <input type="text" placeholder='Add a task' value={newtodo} onChange={updateTaskValue} />
                <button className="button primary" onClick={addnewTask}>Add</button>
                <button className="button" onClick={uppercaseAll}>UPPERCASE ALL</button>
            </div>

            <h2 style={{margin:'12px 0 8px', color:'var(--accent-strong)'}}>Tasks To complete</h2>
            <ul className="tasks-list">
                {
                    todos.map((todo) =>{
                        return <li key={todo.id} className={todo.done ? 'done' : ''} > 
                            <span>
                                {todo.task}
                            </span>
                            <button className="button ghost" onClick={() => deleteTask(todo.id)}>Delete</button>
                            <button className="button" onClick={() => uppercaseOne(todo.id)}>Uppercase</button>
                            <button className="button mark-done" onClick={() => toggleDone(todo.id)}>{todo.done ? 'Undo' : 'Mark Done'}</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}