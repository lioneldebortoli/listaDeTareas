import ItemTareas from "./ItemTareas";

const ListaTarea = ({ tareas, borrarTarea }) => {
  return (
    <div>
      <ul className="border-2 border-solid">
        {tareas.map((itemTexto, indice) => (
          <ItemTareas key={indice} tarea={itemTexto} borrarTarea={borrarTarea}></ItemTareas>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarea;