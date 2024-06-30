import React from "react";
import { useState } from "react";
import "../styles.css";

function ListaDeTareas({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      editTask(task.id, newTask);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEdit(e);
    }
  };

  return (
    <>
      <div id="tarea">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {isEditing ? (
            <input
              id="inputs-2"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          ) : (
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
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              id="iconos"
              className="bi bi-pencil-square"
              onClick={handleEdit}
            ></i>
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
