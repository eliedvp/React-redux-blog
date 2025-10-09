import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/taskActions";

export default function AddTask() {
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (desc.trim()) {
      dispatch(addTask(desc));
      setDesc("");
    }
  };

  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Nouvelle tâche ..."
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "8px 0 0 8px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "0 8px 8px 0",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Ajouter
      </button>
    </div>
  );
}
