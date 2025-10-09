import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../JS/actions/taskActions";

export default function Filter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const buttonStyle = (active) => ({
    padding: "6px 12px",
    marginRight: "6px",
    border: "1px solid #007BFF",
    borderRadius: "6px",
    backgroundColor: active ? "#007BFF" : "#fff",
    color: active ? "#fff" : "#007BFF",
    cursor: "pointer",
    transition: "0.3s",
  });

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <button
        style={buttonStyle(currentFilter === "all")}
        onClick={() => dispatch(setFilter("all"))}
      >
        Toutes
      </button>
      <button
        style={buttonStyle(currentFilter === "done")}
        onClick={() => dispatch(setFilter("done"))}
      >
        Effectuées
      </button>
      <button
        style={buttonStyle(currentFilter === "notDone")}
        onClick={() => dispatch(setFilter("notDone"))}
      >
        Non effectuées
      </button>
    </div>
  );
}
