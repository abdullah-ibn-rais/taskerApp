import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";
import NoTasksMessage from "./NoTaskMessage";

export default function TaskBoard() {
  const defaultTask = [];

  const [tasks, setTasks] = useState([...defaultTask]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [tasksBackup, setTasksBackup] = useState([...defaultTask]);

  function handleAddTask(task, shouldUpdate) {
    let updatedTasks;
    if (shouldUpdate) {
      updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));
      setTaskToUpdate(null);
    } else updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    setTasksBackup(updatedTasks);
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setIsModalOpen(true);
  }

  function handleDeleteTask(id) {
    let updatedTasks;
    updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setTasksBackup(updatedTasks);
  }

  function handleDeleteAllClick() {
    let updatedTasks;
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      updatedTasks = [];
    }
    setTasks(updatedTasks);
    setTasksBackup(updatedTasks);
  }

  function handleToggleFavorite(id) {
    let updatedTasks;
    updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isFavorite: !task.isFavorite }; // Correctly toggle isFavorite
      }
      return task; // If task.id doesn't match, return the task unchanged
    });
    setTasks(updatedTasks);
    setTasksBackup(updatedTasks);
  }

  function handleOnSearch(searchTerm) {
    if (searchTerm === "") {
      setTasks([...tasksBackup]);
      return;
    }
    const searchedTasks = tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setTasks([...searchedTasks]);
  }

  return (
    <>
      <div className="container mx-auto px-4 py-6 my-8 max-w-7xl dark:bg-gray-800 bg-white rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all">
        {isModalOpen && (
          <TaskModal
            onSave={handleAddTask}
            onClose={() => setIsModalOpen(false)}
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
              onAddClick={() => setIsModalOpen(true)}
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

// {
//   id: crypto.randomUUID(),
//   title: "Learn React",
//   description:
//     "I want to Learn React such than I can treat it like my slave and make it do whatever I want to do.",
//   tags: ["web", "react", "js"],
//   priority: "High",
//   isFavorite: true,
// },
// {
//   id: crypto.randomUUID(),
//   title: "Learn vue",
//   description:
//     "I want to Learn React hahaha I can treat it like my slave and make it do whatever I want to do.",
//   tags: ["web", "react", "js"],
//   priority: "High",
//   isFavorite: true,
// },
// {
//   id: crypto.randomUUID(),
//   title: "Learn React",
//   description:
//     "I want to Learn React hahaha I can treat it like my slave and make it do whatever I want to do.",
//   tags: ["web", "react", "js"],
//   priority: "High",
//   isFavorite: true,
// },
// {
//   id: crypto.randomUUID(),
//   title: "Learn bla",
//   description:
//     "I want to Learn React hahaha I can treat it like my slave and make it do whatever I want to do.",
//   tags: ["web", "react", "js"],
//   priority: "High",
//   isFavorite: true,
// },
