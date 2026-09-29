import FormularioTareas from "./components/FormularioTareas";


function App() {
  
  return (
    <>
      <div className="py-6 font-mono">
        <header className="text-center ">
          <h1>Lista de Tareas</h1>
        </header>
        <main className="container">
          <FormularioTareas/>
        </main>
        <footer className="text-center py-7 absolute bottom-0">
          <p>&copy; Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  );
}

export default App;
