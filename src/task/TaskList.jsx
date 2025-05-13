import { FaStar, FaTrashAlt, FaEdit } from "react-icons/fa";

function TaskList({ tasks, onEdit, onDelete, toggleFavorite, children }) {
  // Define an array of Tailwind background color classes
  const colors = [
    "bg-blue-500 dark:bg-blue-600",
    "bg-purple-500 dark:bg-purple-600",
    "bg-green-500 dark:bg-green-600",
    "bg-red-500 dark:bg-red-600",
    "bg-yellow-500 dark:bg-yellow-600",
    "bg-teal-500 dark:bg-teal-600",
    "bg-pink-500 dark:bg-pink-600",
    "bg-indigo-500 dark:bg-indigo-600",
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow transition-all">
      {/* Grid Header */}
      <div className="hidden lg:grid grid-cols-12 gap-4 bg-gray-50 dark:bg-gray-700 p-4 font-semibold text-gray-700 dark:text-gray-200 rounded-t-lg">
        <div className="col-span-1 flex items-center justify-center">
          <FaStar className=" h-5 w-5  " /> {/* Apply styling here */}
        </div>
        <div className="col-span-2">Title</div>
        <div className="col-span-4">Description</div>
        <div className="col-span-2">Tags</div>
        <div className="col-span-1">Priority</div>
        <div className="col-span-2 text-right pr-4">Actions</div>
      </div>

      {children}

      {/* Grid Rows */}
      <>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="group transition-all hover:bg-gray-50 dark:hover:bg-gray-700 border-t border-gray-100 dark:border-gray-700 last:rounded-b-lg"
          >
            {/* Task Row */}
            <div className="grid grid-cols-12 gap-3 p-4">
              <div className="col-span-1 flex items-center justify-center">
                <button
                  onClick={() => toggleFavorite(task.id)}
                  className="transition-transform hover:scale-110"
                >
                  <FaStar
                    className={`${
                      task.isFavorite
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-500"
                    } transition-colors`}
                    size={20}
                  />
                </button>
              </div>

              {/* For mobile: Title and actions in one row */}
              <div className="col-span-11 lg:col-span-2 font-medium text-gray-800 dark:text-gray-200 flex justify-between items-center lg:block">
                <div className="truncate">{task.title}</div>

                {/* Mobile Actions */}
                <div className="flex space-x-2 lg:hidden">
                  <button
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-1"
                    onClick={() => onDelete(task.id)}
                  >
                    <FaTrashAlt size={16} />
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 p-1"
                    onClick={() => onEdit(task)}
                  >
                    <FaEdit size={16} />
                  </button>
                </div>
              </div>

              {/* Description - Hidden on extra small screens */}
              <div className="col-span-12 lg:col-span-4 text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                {task.description}
              </div>

              {/* Tags */}
              <div className="col-span-12 lg:col-span-2">
                <div className="flex flex-wrap gap-1.5">
                  {task.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`${
                        colors[index % colors.length]
                      } rounded-full px-2 py-0.5 text-xs font-medium text-white shadow-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Priority */}
              <div className="col-span-6 lg:col-span-1">
                <span
                  className={`inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  }`}
                >
                  {task.priority}
                </span>
              </div>

              {/* Desktop Actions - Hidden on mobile */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="flex justify-end space-x-3 mr-2">
                  <button
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors p-1 opacity-0 group-hover:opacity-100"
                    onClick={() => onDelete(task.id)}
                  >
                    <FaTrashAlt size={18} />
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors p-1 opacity-0 group-hover:opacity-100"
                    onClick={() => onEdit(task)}
                  >
                    <FaEdit size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}

export default TaskList;
