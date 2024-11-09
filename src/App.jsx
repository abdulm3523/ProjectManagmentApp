import { useState } from "react";
import "../src/styles/output.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskContainer from "./components/task/taskContainer";
import { TaskContext } from "./context/taskContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <TaskContext.Provider value={{tasks, setTasks}}>
        <div className="flex h-screen">
          <Sidebar />
          <ToastContainer/>
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header/>
          <TaskContainer/>
        </main>
      </div>
      </TaskContext.Provider>
    </>
   
  );
}

export default App;
