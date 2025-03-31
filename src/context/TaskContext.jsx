import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const urlApi = 'http://localhost:3000'
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        try {
            const response = await fetch(urlApi)
            const data = await response.json()
            setTasks(data)
        } catch (error) {
            console.error('Error fetching tasks', error);            
        }
    }

    const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <TaskContext.Provider value={{ tasks, fetchTasks, addTask }}>
            {children}
        </TaskContext.Provider>
    )
}

