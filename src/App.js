import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  return (
    <div
      style={{
        width: "500px",
        margin: "50px auto",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Todo List avec redux</h1>
      <AddTask />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
