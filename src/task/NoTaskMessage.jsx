import { FaClipboardList } from "react-icons/fa";

export default function NoTasksMessage() {
  return (
    <div className="py-16 px-4 rounded-b-lg bg-gray-50 dark:bg-gray-700">
      <div className="text-center max-w-md mx-auto">
        <FaClipboardList className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
        <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
          No tasks yet
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Create your first task by clicking the "Add Task" button above.
        </p>
      </div>
    </div>
  );
}
