import { useReducer } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";
import NoTasksMessage from "./NoTaskMessage";
import taskReducer from "./taskReducer";

const initialState = {
  tasks: [],
  tasksBackup: [],

  isModalOpen: false,
  taskToUpdate: null,
};

export default function TaskBoard() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { tasks, isModalOpen, taskToUpdate } = state;

  function handleAddTask(task, shouldUpdate) {
    dispatch({
      type: "added",
      task,
      shouldUpdate,
    });
  }

  function handleEditTask(task) {
    dispatch({
      type: "edited",
      task,
    });
  }

  function handleDeleteTask(id) {
    dispatch({
      type: "deleted",
      id,
    });
  }

  function handleDeleteAllClick() {
    dispatch({
      type: "deleted_all",
    });
  }

  function handleToggleFavorite(id) {
    dispatch({
      type: "favorite",
      id,
    });
  }

  function handleOnSearch(searchTerm) {
    dispatch({
      type: "search",
      searchTerm,
    });
  }

  return (
    <>
      <div className="container mx-auto px-4 py-6 my-8 dark:bg-gray-800 bg-white rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all">
        {isModalOpen && (
          <TaskModal
            onSave={handleAddTask}
            onClose={() => dispatch({ type: "toggle_modal", value: false })}
            taskToUpdate={taskToUpdate}
          />
        )}
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-8 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Your Tasks
          </h2>

          {/* Search and Actions */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <SearchTask onSearch={handleOnSearch} />

            {/* Task Adding Buttons */}
            <TaskActions
              onAddClick={() => dispatch({ type: "toggle_modal", value: true })}
              onDeleteAllClick={handleDeleteAllClick}
            />
          </div>
        </div>

        {/* Table/content */}
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          toggleFavorite={handleToggleFavorite}
        >
          {tasks.length === 0 && <NoTasksMessage />}
        </TaskList>
      </div>
    </>
  );
}
