import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const InputCreate = () => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { addTask } = useContext(TaskContext)
    const urlApi = 'http://localhost:3000'

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (title.trim() === '') {
            setError('El título no puede estar vavío')
            return
        }
        const payload = {title}

        try {
            const response = await fetch(`${urlApi}/create`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                const errorData = await response.jason()
                throw new Error("Error al crear la tarea");
            }

            const newTask = await response.json()
            addTask(newTask)
            console.log('Tarea creada correctamente') 
            setTitle('')               
            navigate('/')           

        } catch (error) {
            console.error('Error al hacer la petición POST', error)
            setError(error.message)
        }        
    }
    
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                    type="text"  
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Añade una nueva tarea"
                    className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
                >
                    Crear tarea
                </button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    )
}

export default InputCreate