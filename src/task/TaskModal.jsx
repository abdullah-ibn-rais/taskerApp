import { useState } from "react";

function TaskModal({ onSave, onClose, taskToUpdate }) {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task, !!taskToUpdate);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-800/70 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 overflow-y-auto shadow-xl transform transition-all"
        style={{ maxHeight: "90vh" }}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
          {taskToUpdate ? "Edit Task" : "Add New Task"}
        </h2>
        <div className="space-y-5 text-gray-800 dark:text-gray-200">
          {/* Title Input */}
          <div className="space-y-2">
            <label htmlFor="title" className="block font-medium">
              Title
            </label>
            <input
              className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent focus:outline-none transition-colors"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
              placeholder="Enter task title"
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <label htmlFor="description" className="block font-medium">
              Description
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-2.5 min-h-[120px] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent focus:outline-none transition-colors"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Describe your task"
            />
          </div>

          {/* Tags and Priority Inputs */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="tags" className="block font-medium">
                Tags
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent focus:outline-none transition-colors"
                type="text"
                name="tags"
                id="tags"
                value={task.tags.join(",")}
                onChange={handleChange}
                placeholder="tag1,tag2,tag3"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="priority" className="block font-medium">
                Priority
              </label>
              <select
                className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent focus:outline-none transition-colors"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between gap-4">
          <button
            type="button"
            className="flex-1 rounded-lg bg-gray-200 dark:bg-gray-700 px-4 py-2.5 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:outline-none transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2.5 text-white font-medium hover:bg-blue-700 dark:hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 focus:outline-none transition-colors"
          >
            {taskToUpdate ? "Save" : "Add"} Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskModal;

/*Background colors:

bg-black/80 → bg-gray-500/50 (overlay)

bg-gray-800 → bg-white (modal background)

bg-gray-100 → bg-gray-100 (input backgrounds)

Text colors:

text-gray-800 → text-gray-800 (all text elements)

Border color:

border-gray-700 → border-gray-300

Button colors (keep the same hover states):

bg-red-600 → bg-red-500

bg-blue-600 → bg-blue-500

Modal shadow (optional):

Add shadow-lg to the form for better visibility

*/
