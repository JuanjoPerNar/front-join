import { useParams } from "react-router-dom";
import { TaskContext } from "./context/TaskContext";
import { useContext } from "react";

const ItemDetailPage = () => {
  const { id } = useParams()
  const { tasks } = useContext(TaskContext)
  const task = tasks.find((task) => task._id === id)

  if (!task) {
    return (
      <div className="max-w-md mx-auto mt-10 text-center text-red-600">
        <p className="text-lg font-semibold">No se encontró la tarea</p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{task.title}</h3>
      <p className="text-gray-600">
        Estado:{" "}
        <span className={`font-semibold ${task.completed ? "text-green-600" : "text-yellow-600"}`}>
          {task.completed ? "Completada" : "Pendiente"}
        </span>
      </p>
    </div>
  )
}

export default ItemDetailPage;
