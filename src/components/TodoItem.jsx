import React, { useState } from "react"
import { useTodo } from "../context"

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)  //todo is not edititable that's why we did it flase
    const [todoMsg, setTodoMsg] = useState(todo.todo) //what msg under todo it will only give through usestate (object todo ka todo access)
    const{updatedTodo, deletedTodo, toggleCompleted} = useTodo()  //we are taking fun here

    const editTodo =() => {
        updatedTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }
    const toggleComplete =() => {
        toggleCompleted(todo.id)
    }
    
    return (
        <div
            className={`flex border border-black rounded-lg px-3 py-1.5 gap-x-2 shadow-sm shadow-white/50 duration-300  text-[#4A4A4A] ${
                todo.completed ? "bg-[#bbebbcb3]" : "bg-[#aea7b1]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.complete}
                onChange={toggleComplete}
            />
            <input
            className={`border outline-none w-full bg-transparent rounded-lg ${
                isTodoEditable ? "border-black/30 px-2" : "border-transparent"
            } ${todo.completed ? "line-through" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
       
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/100 bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-90"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/100 hover:bg-gray-100 shrink-0 bg-gray-50"
                onClick={() => deletedTodo(todo.id)}
            >
             ❌
            </button>
        </div>
    );
}

export default TodoItem;
