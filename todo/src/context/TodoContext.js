import {createContext, useContext} from "react";



export const TodoContext= createContext({
    todos: [{
        id: 1,
        todo: "Learn React",
        completed: false
    }],
    theme: "dark",
    addTodo: (todo)=>{},
    updatedTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete:(id)=>{},
});


export const TodoProvider=TodoContext.Provider;


export const useTodo=()=>{
    return useContext(TodoContext);
}