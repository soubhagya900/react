import {createContext, useContext} from 'react'

export const ToDoContext = createContext({
    todos:[
        {
            id: 1,
            todo: 'ToDo Message',
            completed: false
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteToDO: (id) => {},
    toggleComplete: (id) => {}



})

export const ToDoProvider = ToDoContext.Provider

export const useToDo =() =>{
    return useContext(ToDoContext)
}