import React from "react";
import "../styles.css";

function ListaDeTareas({ task, toggleComplete, deleteTask }) {
  return (
    <>
      <div id="tarea">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            id="texto-tareas"
            onClick={() => toggleComplete(task.id)}
            className={`${task.completed ? "completed" : ""}`}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "rgb(227, 227, 227)" : "white",
            }}
          >
            {task.task}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i id="iconos" className="bi bi-pencil-square"></i>
            <i
              id="iconos"
              className="bi bi-trash3-fill"
              onClick={() => deleteTask(task.id)}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaDeTareas;
