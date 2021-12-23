import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React from "react";
import About from "./Components/About";
import "./index.css";
import Tasks from "./Components/Tasks";

import { useState, createContext } from "react";
import AddTask from "./Components/AddTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//userContext
export const UserContext = createContext();
export default function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Food shopping",
      day: "feb 5th at 2:30pm",
      reminder: false
    }
  ]);

  const [showAddTask, setShowAddTask] = useState(true);
  //delete task
  const deleteTask = (id) => {
    // console.log("delete", id)
    setTask(tasks.filter((task) => task.id !== id));
  };

  //onToggle change reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <UserContext.Provider value={tasks}>
                  {showAddTask && <AddTask onAdd={addTask} />}
                  {tasks.length > 0 ? (
                    <Tasks onDelete={deleteTask} onToggle={toggleReminder} />
                  ) : (
                    "No  Task to Show"
                  )}
                </UserContext.Provider>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
