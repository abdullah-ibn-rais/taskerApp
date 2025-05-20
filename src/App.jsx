// App.jsx - Enhanced with Header and Footer

import { FaList, FaSun } from "react-icons/fa";
import { useDarkMode } from "./context/ThemeContext";
import { ThemeProvider } from "./context/ThemeContext";
import CurrentTime from "./CurrentTime";
import TaskBoard from "./task/TaskBoard";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Header />
        <HeroSection />
        <TaskBoard className="main-app-section" />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function Header() {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <nav className="px-4 py-4 md:py-6 fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex flex-col sm:flex-row items-center space-x-2 group"
        >
          <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-lg transform group-hover:scale-110 transition-all duration-300">
            <FaList className="h-5 w-5 text-white" />
          </div>
          <span className="text-gray-800 dark:text-white text-lg font-bold font-mono tracking-tight">
            Tasker
          </span>
        </a>

        <CurrentTime />

        {/* Theme Toggle Placeholder */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <FaSun className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-35 pb-6 md:pt-38 md:pb-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Manage Tasks{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Effortlessly
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Organize, prioritize, and conquer tasks with Tasker — your personal
            productivity ally for seamless goal achievement.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 bg-white dark:bg-gray-800 shadow-inner transition-colors duration-300 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} | All rights reserved by
            <img
              className="ml-2 inline h-5 w-5"
              src="assets/company_logo.png"
              alt=""
              srcset=""
            />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {" "}
              LFL
            </span>
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
