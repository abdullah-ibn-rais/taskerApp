import { FaPlus, FaTrashAlt } from "react-icons/fa";

function TaskActions({ onAddClick, onDeleteAllClick }) {
  return (
    <div className="flex gap-2 sm:gap-3">
      <button
        onClick={onAddClick}
        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
      >
        <FaPlus className="h-3 w-3" />
        Add Task
      </button>
      <button
        className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
        onClick={onDeleteAllClick}
      >
        <FaTrashAlt className="h-3 w-3" />
        Delete All
      </button>
    </div>
  );
}

export default TaskActions;
