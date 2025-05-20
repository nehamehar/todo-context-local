import { createContext, useContext } from "react";

export const todoContext = createContext({
    todo : [
        {
            id : 1,
            todo: "Todo msg",
            completed: false,

        }
    ],
    addTodo : (todo) => {},// this method's functionality (means here we would mot define function we define fyn in another file and export here the reason is we wrote like this is we are telling these are function )
    updatedTodo:(id, todo) => {},
    deletedTodo:(id) => {},
    toggleCompleted: (id) => {},
})  // under this todo array we are adding them in {} like all are object, and every todo have id, msg, task
// we can say todo is variable and {} are property theme:dark


export const useTodo = () => {
    return useContext(todoContext) // whenever you use anyhook manually created hook too we have to give them one context like her : useContext hook and  todoContext is context.

}

// now we have to export provider only variable kind of export
export const TodoProvider = todoContext.Provider