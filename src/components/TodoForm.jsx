import React, { useState } from "react"
import { useTodo } from "../context"

function TodoForm() {
    const [todo, setTodo] = useState("") //individual todo
    const{addTodo} = useTodo() //taking functionality of usetodo and here we are taking Todo
    const add = (e) => {
        e.preventDefault()
        
        if(!todo) return // if todo have value then 
        addTodo({todo, completed: false}) //as addTodo is fun so we pass it as object todo have key value already mention in addTodo fun also date.now is already mention in fun addTodo which have obje
        setTodo("")
    }
    return (
        <form onSubmit={add} className="flex">  {/* giving event */}
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}  // for adding input with date we use value ={todo} the value is binding input to todo
                onChange={(e) => setTodo(e.target.value)}
                // e.target.value (e.target = shows input fleid, e.target.value= shows input current value which we have give to input (value={todo}) )
            />
            <button type="submit" className="px-3 py-1 text-white bg-green-600 rounded-r-lg shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

