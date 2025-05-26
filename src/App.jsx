import { useState, useEffect } from 'react'
import { TodoProvider } from './context'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import Footer from "./components/Footer";

//defining all functionality here
function App() {
  const [todos, setTodos] = useState([]);
  const [lastDeleted, setLastDeleted] = useState(null);
  
  const addTodo =(todo)=> {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]) // adding old values and new values as todo we have to pass in object as we already assigned todo as key in object
  }
  // date.now gives everyday diff date 
  // ...todo means we are spreading todo ... ... is used to either spread the elements of an iterable 

// means eg:
// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5];  // Spreads arr and adds 4 and 5
// console.log(newArr);  // Output: [1, 2, 3, 4, 5]

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo : prevTodo))) // through map wecan find all todo which is objects,  iterate over an array of data (like an array of objects or strings)
   // prevTodo.id= every todo's id and id is updatedTodo = (id, todo) given id
  }

  // const deletedTodo = (id) => {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id))
  // }

const deletedTodo = (id) => {
const todoToDelete = todos.find(todo => todo.id === id);
  setLastDeleted(todoToDelete);   // save the deleted todo
  setTodos(todos.filter(todo => todo.id !== id));
};
  //prev.filter means here we are saying filter the id of todo which would not match with here id (deltetodo's id)

  //undo button:
  const undoDelete = () => {
  if (lastDeleted) {
    setTodos(prevTodos => [...prevTodos, lastDeleted]);
    setLastDeleted(null);  // clear after undo
  }
};

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id===id ? {...prevTodo, completed:!prevTodo.completed}: prevTodo))
  }
  // here we want to match the prev todo with given id-toggle
  // every todo is object prev.map means we rae getting every todo, prevtodo is every individual todo
  // for local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  // here it only give us the value 
  // here we are using JSON coz the local storage takes value in string so we have to convert that in JSON

  //for adding value in local storage we use this whenever change in todos it will provide us value updated
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) //stringify use to convert into string everything
  }, [todos]) // todos
  //JSON.parse give js
  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deletedTodo, toggleCompleted}}>    {/* whenever we use provider we have to mention what provider will give like value and all */}
    <div className="bg-[#000000] min-h-screen flex flex-col">
                <div className="flex-grow w-full max-w-2xl px-4 py-4 mx-auto text-white rounded-lg shadow-md">
                    <h1 className="mt-2 text-4xl font-bold text-center text-cyan-700 mb-9">TO-DO App</h1>
                    <div className="mb-10">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex-wrap space-y-4 flex-direction: row-1 ">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='"w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
    <button
      onClick={undoDelete}
      className="px-3 py-2 mt-6 font-semibold text-white transition duration-300 bg-yellow-600 rounded hover:bg-yellow-500"
    >
      Undo
    </button>
  </div>
                </div>
                <footer className="flex items-center justify-between w-full px-3 py-2.5 text-base text-gray-500 bg-gray-800 sm:px-10 ">

      <p className='ml-24'>
        Made with ❤️ by {""}
        <a
          href="mailto:nehamehar31@gmail.com"
          className="text-base text-slate-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Neha
        </a>
      </p>
      <a
        href="https://github.com/nehamehar/TodocontextLocal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="mr-16 text-[25px] text-white text- fab fa-github"></i>
      </a>
    </footer> 
                
            </div> 
    </TodoProvider>
  )
}

export default App
