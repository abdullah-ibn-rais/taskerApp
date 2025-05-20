# Tasker - Task Management App  

## Overview  
Tasker is a clean, responsive task management application built with React. It allows users to:  
- Create, edit, and delete tasks  
- Mark tasks as favorites  
- Search through tasks  
- Toggle between light/dark mode  

## Features  
✅ **Task Management**  
- Add new tasks with title, description, tags, and priority  
- Edit existing tasks  
- Delete single or all tasks  
- Toggle task favorites  

🔍 **Search Functionality**  
- Instant search by title or description  

🌓 **Dark/Light Mode**  
- System-aware theme switching  
- Persists user preference  

⏰ **Live Clock**  
- Displays current date and time  

## Technologies Used  
- React (Vite)  
- Tailwind CSS  
- React Icons  
- useReducer for state management  
- Context API for theme switching  

## Installation  
1. Clone the repository  
2. Install dependencies:  
```bash
npm install
```  
3. Run the development server:  
```bash
npm run dev
```  

## Project Structure  
```
/src  
├── /components  
│   ├── TaskBoard.jsx        # Main task management component  
│   ├── TaskList.jsx         # Task display component  
│   ├── TaskModal.jsx        # Add/edit task form  
│   └── ...                  # Other UI components  
├── /context  
│   └── ThemeContext.js      # Dark mode context  
└── App.jsx                  # Root component
└── CurrentTime.jsx          # Root component
└── index.css                # Root component  
└── main.jsx                 # Root component  
```
