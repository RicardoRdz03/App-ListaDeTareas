import { useState } from "react";
import "./App.css";
import "./styles.css";
import Formulario from "./components/Formulario";
import { v4 as uuidv4 } from "uuid";
import ListaDeTareas from "./components/ListaDeTareas";
uuidv4();

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todos) => {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        task: todos,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todo);
  };

  const toggleComplete = (id) => {
    setTodo(
      todo.map((todos) =>
        todos.id === id ? { ...todos, completed: !todos.completed } : todos
      )
    );
  };

  const toggleDelete = (id) => {
    setTodo(todo.filter((todos) => todos.id !== id));
  };

  return (
    <>
      <div id="padre">
        <div id="card">
          <h1 style={{ textAlign: "center", color: "white" }}>
            Lista de tareas
          </h1>
          <Formulario addTodo={addTodo} />
          {todo.map((todos) => (
            <ListaDeTareas
              task={todos}
              key={todos.id}
              toggleComplete={toggleComplete}
              deleteTask={toggleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
