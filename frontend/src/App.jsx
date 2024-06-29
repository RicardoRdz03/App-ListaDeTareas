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

  return (
    <>
      <div id="padre">
        <div id="card">
          <Formulario addTodo={addTodo} />
          {todo.map((todos, index) => (
            <ListaDeTareas task={todos} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
