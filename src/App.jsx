import FormularioTarea from "./components/FormularioTarea";


function App() {
  
  return (
    <>
      <div className="py-6">
        <header className="text-center ">
          <h1>Lista de Tareas</h1>
        </header>
        <main className="container">
          <FormularioTarea />
        </main>
        <footer className="text-center"></footer>
      </div>
    </>
  );
}

export default App;
