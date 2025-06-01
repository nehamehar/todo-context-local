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
                className="w-full px-4 py-1.5 duration-150 rounded-l-lg outline-none border-gray-800 bg-black/10 border-5 border backdrop-filter backdrop-brightness-40 text-sm sm:text-base sm:px-7 sm:py-2"
                value={todo}  // for adding input with date we use value ={todo} the value is binding input to todo
                onChange={(e) => setTodo(e.target.value)}
                // e.target.value (e.target = shows input fleid, e.target.value= shows input current value which we have give to input (value={todo}) )
            />
            <button type="submit" className="px-2 px-3 py-1 py-2 text-xs text-black bg-green-600 border rounded-r-lg shrink-0 border-slate-800 sm:text-sm sm:px-4 sm:py-2">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

