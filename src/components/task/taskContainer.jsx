import { SortIcon } from "../icons";
import TaskCard from "./taskCard";
import { TaskContext } from "../../context/taskContext";
import { taskData } from "../../data/taskData";
import { useContext, useState } from "react";
import AddTaskModal from "./addTask";
export default function TaskContainer() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState("");
  const [taskEditMode, setTaskEditMode] = useState(false);
  // GETING TASK NUMBERS FOR INDIVIDUAL CATEGORY
  const taskTotalNumber = (status) => {
    const taskListNumber = tasks.filter((task) => task.category === status);
    return taskListNumber.length;
  };
  // add task modal
  function handelAddTaskModal() {
    setShowTaskModal(true);
    setTaskEditMode(false);
    setTaskToUpdate("");
  }

  // handel sort
  function handelSort() {
  
    const reverseData = tasks.reverse()
    console.log('reverseData', reverseData)
    setTasks([reverseData,...tasks])
  }
  // DELETE TASK WHEN CLICK ON DELETE
  function handelDeleteTask(currTaskId) {
    const deleteTask = tasks.filter((task) => task.id !== currTaskId);
    setTasks(deleteTask);
  }

  // EDIT TASK
  function handelOnEditTask(task) {
    setTaskToUpdate(task);
    setTaskEditMode(true);
    setShowTaskModal(true);
  }
  return (
    <>
      {console.log(taskData)}
      {showTaskModal && (
        <AddTaskModal
          taskToUpdate={taskToUpdate}
          setTaskUpdate={setTaskToUpdate}
          toggleShow={setShowTaskModal}
          onEditMode={taskEditMode}
        />
      )}

      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              onClick={handelAddTaskModal}
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                <path d="M15 12h-6" />
                <path d="M12 9v6" />
              </svg>
              Add
            </button>
          </div>
        </div>
        {tasks.length > 0 ? (
          <div className="-mx-2 mb-6 flex flex-wrap">
            <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
              <div className="rounded-lg bg-indigo-600 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    To-Do ({taskTotalNumber("todo")})
                  </h3>
    
                  <svg
                    onClick={handelSort}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l9 0" />
                    <path d="M4 12l7 0" />
                    <path d="M4 18l7 0" />
                    <path d="M15 15l3 3l3 -3" />
                    <path d="M18 6l0 12" />
                  </svg>
                </div>

                <div>
                  {tasks.map((task) =>
                    task.category === "todo" ? (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onDeleteTask={handelDeleteTask}
                        onEditTask={() => handelOnEditTask(task)}
                        bgColor={"bg-gray-800"}
                        textColor={"text-indigo-500"}
                      />
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
              <div className="rounded-lg bg-yellow-500 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    On Progress ({taskTotalNumber("inprogress")})
                  </h3>
                   <svg
                    onClick={handelSort}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l9 0" />
                    <path d="M4 12l7 0" />
                    <path d="M4 18l7 0" />
                    <path d="M15 15l3 3l3 -3" />
                    <path d="M18 6l0 12" />
                  </svg>
                </div>

                {tasks.map((task) =>
                  task.category === "inprogress" ? (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onDeleteTask={handelDeleteTask}
                      onEditTask={() => handelOnEditTask(task)}
                      bgColor={"bg-gray-800"}
                      textColor={"text-yellow-500"}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>

            <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
              <div className="rounded-lg bg-teal-500 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Done ({taskTotalNumber("done")})
                  </h3>
                   <svg
                    onClick={handelSort}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l9 0" />
                    <path d="M4 12l7 0" />
                    <path d="M4 18l7 0" />
                    <path d="M15 15l3 3l3 -3" />
                    <path d="M18 6l0 12" />
                  </svg>
                </div>

                <div>
                  {tasks.map((task) =>
                    task.category === "done" ? (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onDeleteTask={handelDeleteTask}
                        onEditTask={() => handelOnEditTask(task)}
                        bgColor={"bg-gray-800"}
                        textColor={"text-teal-500"}
                      />
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
              <div className="rounded-lg bg-rose-500 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Revise ({taskTotalNumber("revise")})
                  </h3>
                   <svg
                    onClick={handelSort}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l9 0" />
                    <path d="M4 12l7 0" />
                    <path d="M4 18l7 0" />
                    <path d="M15 15l3 3l3 -3" />
                    <path d="M18 6l0 12" />
                  </svg>
                </div>
                {tasks.map((task) =>
                  task.category === "revised" ? (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onDeleteTask={handelDeleteTask}
                      onEditTask={() => handelOnEditTask(task)}
                      date={task.dueDate}
                      bgColor={"bg-gray-800"}
                      textColor={"text-rose-500"}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-lg font-bold text-rose-500 text-center p-8 m-8">
            No task available
          </p>
        )}
      </div>
    </>
  );
}
