import React from "react";
import "../styles.css";

function ListaDeTareas({ task }) {
  return (
    <>
      <div id="tarea">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              marginBlockEnd: "auto",
              marginBlockStart: "auto",
              color: "white",
              fontFamily: "sans-serif",
              fontSize: "22px",
            }}
          >
            {task.task}
          </p>
          <div>
            <i id="iconos" className="bi bi-pen-fill"></i>
            <i id="iconos" className="bi bi-trash3-fill"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaDeTareas;
