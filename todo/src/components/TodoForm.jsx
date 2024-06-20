import React, { useState } from 'react'
import {useTodo} from "../context/TodoContext"
/**
 * TodoForm component for adding new todos.
 *
 * @component
 * @return {JSX.Element} The TodoForm component.
 */
function TodoForm() {
    // State for the new todo input.
    const [todo,setTodo]=useState("");
    // Get the addTodo function from the TodoContext.
    const{addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault();
        if(!todo) return;
        addTodo({todo:todo , completed: false});
        setTodo("");
    }

  return (
      // The form for adding new todos.
      <form  className="flex" onSubmit={add}>
          {/* Input field for the new todo. */}
          <input
              type="text"
              value={todo}
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              // Update the todo state on input change.
              onChange={(event)=>setTodo(event.target.value)}
          />
          {/* Button to add the new todo. */}
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
              // Add the new todo when the form is submitted.
              onClick={(event)=>{
                  event.preventDefault();
                  addTodo({todo});
                  setTodo("");
              }}
          >
              Add
          </button>
      </form>
  );
}

export default TodoForm;
