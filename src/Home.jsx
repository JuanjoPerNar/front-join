import { Link } from "react-router-dom";
import { TaskContext } from "./context/TaskContext";
import { useContext } from "react";

const Home = () => {
  const { tasks } = useContext(TaskContext)

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
     <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Lista de tareas</h2>
     {tasks.length === 0 ? (
      <p className="text-gray-500 text-center">No hay tareas disponibles</p>
     ) : (
      <ul className="space-y-3">
          {tasks.map(task => (
            <li key={task._id}>
              <Link 
                to={`/${task._id}`}
                className="block bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-4 rounded-lg transition"
              >
                {task.title}
              </Link>
            </li>
          ))}
      </ul>
     )}
    </div>
  )
};

export default Home;
