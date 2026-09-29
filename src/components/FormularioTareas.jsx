
import { useState } from "react";
import ListaTarea from "./ListaTarea";
import { useEffect } from "react";

const FormularioTareas = () => {
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("tareasKey")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    localStorage.setItem("tareasKey", JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") {
      return alert("Escribí una tarea antes de enviar");
    }
    const tareaExistente = tareas.find(
      (item) => item.toLowerCase().trim() === tarea.toLowerCase().trim(),
    );
    if (tareaExistente) {
      return alert("No puedes cargar una tarea duplicada");
    }
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (tareaEliminada) => {
    const tareasFiltradas = tareas.filter((item) => item !== tareaEliminada);
    setTareas(tareasFiltradas);
  };

  return (
    <section className="m-7">
      <form className="p-9" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tarea" className="form-label">
            Ingresa una Tarea
          </label>
          <input
            type="text"
            placeholder="Ej: Leer un libro"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg my-5"
            id="tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
        </div>
        <button
          type="submit"
          className="p-1 border rounded-lg bg-green-300 hover:bg-green-800"
        >
          Enviar
        </button>
      </form>
      <ListaTarea tareas={tareas} borrarTarea={borrarTarea}></ListaTarea>
    </section>
  );
};

export default FormularioTareas;