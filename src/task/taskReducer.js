export default function taskReducer(state, action) {
  switch (action.type) {
    case "added": {
      const updatedTasks = action.shouldUpdate
        ? state.tasks.map((t) => (t.id === action.task.id ? action.task : t))
        : [...state.tasks, action.task];

      return {
        ...state,
        tasks: updatedTasks,
        tasksBackup: updatedTasks,
        isModalOpen: false,
        taskToUpdate: null,
      };
    }

    case "edited": {
      return {
        ...state,
        taskToUpdate: action.task,
        isModalOpen: true,
      };
    }

    case "deleted": {
      const filteredTask = state.tasks.filter((task) => task.id !== action.id);
      return {
        ...state,
        tasks: filteredTask,
        tasksBackup: filteredTask,
      };
    }

    case "deleted_all": {
      if (window.confirm("Are you sure you want to delete all tasks?")) {
        return {
          ...state,
          tasks: [],
          tasksBackup: [],
        };
      }
      return state;
    }

    case "favorite": {
      const toggledTasks = state.tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, isFavorite: !task.isFavorite };
        }
        return task;
      });

      return {
        ...state,
        tasks: toggledTasks,
        tasksBackup: toggledTasks,
      };
    }

    case "search": {
      if (action.searchTerm === "") {
        return {
          ...state,
          tasks: [...state.tasksBackup],
        };
      }
      const searchedTasks = state.tasks.filter((task) => {
        return (
          task.title.toLowerCase().includes(action.searchTerm.toLowerCase()) ||
          task.description
            .toLowerCase()
            .includes(action.searchTerm.toLowerCase())
        );
      });

      return {
        ...state,
        tasks: searchedTasks,
      };
    }

    case "toggle_modal":
      return {
        ...state,
        isModalOpen: action.value,
      };
      
    default:
      throw new Error("error hoise vai");
  }
}
