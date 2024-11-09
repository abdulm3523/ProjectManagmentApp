import { useContext, useState } from "react";
import { TaskContext } from "../context/taskContext";

export default function SearchBox() {
  const { tasks, setTasks } = useContext(TaskContext);  
  const [searchTerm, setSearchTerm] = useState(''); 
 

  function handelSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

 
    if (searchTerm !== '') {
      const searchTask = tasks.filter(task =>
        task?.taskName?.toLowerCase().includes(searchTerm)
      );
      setTasks([...searchTask]);  
    } else {
      return tasks
    }
  }

  return (
    <div className="mx-4 flex-1">
      <input
        onChange={handelSearch}
        type="text"
        placeholder="Search here"
        className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        value={searchTerm}
      />
    </div>
  );
}
