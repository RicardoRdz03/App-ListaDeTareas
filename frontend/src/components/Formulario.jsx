import React from "react";
import { useState } from "react";
import "../styles.css";

function Formulario({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form id="forms" onSubmit={handleSubmit} action="">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          id="inputs"
          type="text"
          placeholder="¿Cual es la tarea de hoy?"
        />
        <button type="submit" id="agregar-btn">
          Agregar tarea
        </button>
      </div>
    </form>
  );
}

export default Formulario;
