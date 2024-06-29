import "./App.css";
import "./styles.css";

function App() {
  return (
    <>
      <div id="padre">
        <div id="card">
          <form id="forms" action="">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                id="inputs"
                type="text"
                placeholder="¿Cual es la tarea de hoy?"
              />
              <button id="agregar-btn">Agregar tarea</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
