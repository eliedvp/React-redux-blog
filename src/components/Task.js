import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../JS/actions/taskActions";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.description);

  const handleEdit = () => {
    if (text.trim()) {
      dispatch(editTask(task.id, text));
      setEdit(false);
    }
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: task.isDone ? "#e6ffe6" : "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      {edit ? (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ flex: 1, marginRight: "8px", padding: "6px" }}
          />
          <button
            onClick={handleEdit}
            style={{
              padding: "6px 10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            ✅
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              flex: 1,
              textDecoration: task.isDone ? "line-through" : "none",
              color: task.isDone ? "gray" : "#333",
            }}
          >
            {task.description}
          </span>

          <button
            onClick={handleToggle}
            style={{
              marginRight: "6px",
              padding: "6px 10px",
              backgroundColor: task.isDone ? "#ffc107" : "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {task.isDone ? "Non effectuée" : "Effectuée"}
          </button>

          <button
            onClick={() => setEdit(true)}
            style={{
              padding: "6px 10px",
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            ✏️
          </button>
        </>
      )}
    </div>
  );
}
