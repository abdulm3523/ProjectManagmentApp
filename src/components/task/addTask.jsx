import { useContext, useState } from "react";
import { TaskContext } from "../../context/taskContext";
import { toast } from "react-toastify";
export default function AddTaskModal({ toggleShow, taskToUpdate, onEditMode,setTaskUpdate }) {
  const { tasks, setTasks } = useContext(TaskContext);

  const [addTask, setNewTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      taskName: "",
      category: "todo",
      description: "",
      dueDate: "",
    }
  );

  function handelOnChange(e) {
    setNewTask({
      ...addTask,
      [e.target.name]: e.target.value,
    });

    // console.log(addTask)
    }
    // Add & edit function
  function handelOnClick(newTask, EditMode) {
    if (!EditMode) {
      if (
        newTask.taskName !== "" &&
        newTask.dueDate !== "" &&
        newTask.description !== "" &&
        newTask.category !== ""
      ) {
        setTasks([...tasks, newTask]);
        toast.success("Task added Succesfully", {
          position: "top-right",
        });
        toggleShow(false);
      } else {
        toast.warn("Please fillup the information", {
          position: "top-right",
        });
      }
    } else {
         setTasks(
        tasks.map((task) => {
          if (task.id === taskToUpdate.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
      toast.success("Task updated Succesfully", {
        position: "top-right",
      });
      toggleShow(false);
    }

    }
    
    function handelOnClose() {
        toggleShow(false)
        setTaskUpdate('')
        console.log('deleted',taskToUpdate)
    }

  return (
    <>
      {console.log("task to update", taskToUpdate)}
      <div className="w-full fixed top-0 left-0 right-0 flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              {onEditMode ? "Edit Task" : " Create Task"}
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label
                  htmlfor="taskName"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="taskName"
                  value={addTask.taskName}
                  onChange={handelOnChange}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlfor="description"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Description
                </label>
                <textarea
                  value={addTask.description}
                  onChange={handelOnChange}
                  id="description"
                  name="description"
                  rows="3"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlfor="dueDate"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Due Date
                </label>
                <input
                  value={addTask.dueDate}
                  onChange={handelOnChange}
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlfor="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  value={addTask.category}
                  onChange={handelOnChange}
                  id="category"
                  name="category"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="todo">To-Do</option>
                  <option value="inprogress">On Progress</option>
                  <option value="done">Done</option>
                  <option value="revised">Revised</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={handelOnClose}
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handelOnClick(addTask, onEditMode)}
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {onEditMode ? "Save Task" : " Create Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
