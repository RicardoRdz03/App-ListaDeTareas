import { useState, useEffect } from "react";
import "./App.css";
import "./styles.css";
import Formulario from "./components/Formulario";
import { v4 as uuidv4 } from "uuid";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      console.log("Loaded from localStorage:", parsedTodos);
      setTodo(parsedTodos);
    }
  }, []);

  useEffect(() => {
    console.log("Saving to localStorage", todo);
    localStorage.setItem("todoList", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (todos) => {
    const newTodo = {
      id: uuidv4(),
      task: todos,
      completed: false,
      isEditing: false,
    };
    setTodo((prevTodos) => [...prevTodos, newTodo]);
    console.log("Added new todo", newTodo);
  };

  const toggleComplete = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todos) =>
        todos.id === id ? { ...todos, completed: !todos.completed } : todos
      )
    );
  };

  const toggleDelete = (id) => {
    setTodo((prevTodos) => prevTodos.filter((todos) => todos.id !== id));
  };

  const editTask = (id, newTask) => {
    setTodo((prevTodos) =>
      prevTodos.map((todos) =>
        todos.id === id ? { ...todos, task: newTask } : todos
      )
    );
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
              editTask={editTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
