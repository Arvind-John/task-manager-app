import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import CalendarView from "./Pages/CalendarView";
import AdminPanel from "./Pages/AdminPanel";
import TaskForm from "./Pages/TaskForm";
import Layout from "./components/Layout";

const CURRENT_USER = {
  fullName: "Arvind John",
  role: "User",
};

function TaskManagerApp() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const userTasks = tasks.filter(
    (task) =>
      task.user === CURRENT_USER.fullName || CURRENT_USER.role === "Admin"
  );

  return (
    <Router>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Dashboard tasks={userTasks} user={CURRENT_USER} />}
          />
          <Route path="/profile" element={<Profile user={CURRENT_USER} />} />
          <Route
            path="/calendar"
            element={<CalendarView tasks={userTasks} user={CURRENT_USER} />}
          />
          <Route
            path="/admin"
            element={
              <AdminPanel
                tasks={tasks}
                setTasks={setTasks}
                user={CURRENT_USER}
              />
            }
          />
          <Route
            path="/task/new"
            element={
              <TaskForm tasks={tasks} setTasks={setTasks} user={CURRENT_USER} />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default TaskManagerApp;
