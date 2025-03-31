import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ItemDetailPage from "./ItemDetailPage";
import InputCreate from "./components/InputCreate";
import { TaskProvider } from "./context/TaskContext";


const App = () => {

    return (
      <TaskProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
          <nav className="bg-blue-600 text-white py-4 shadow-md">
            <div className="flex justify-center gap-x-6">
              <Link to="/" className="font-semibold hover:underline">Inicio</Link>
              <Link to="/create" className="font-semibold hover:underline">Crear tarea</Link>
            </div>
          </nav>
            <main className="max-w-4xl mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<InputCreate />} />
                <Route path='/:id' element={<ItemDetailPage />} />
              </Routes>
            </main>
          </div>
        </Router>  
      </TaskProvider>    
  )
};

export default App;
