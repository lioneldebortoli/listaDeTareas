const ItemTareas = ({ tarea, borrarTarea }) => {
  return (
    <div>
      <li className="border-2 border-solid flex justify-between items-center px-2 py-1">
        <span>{tarea}</span>
        <button
          className="bg-red-600 text-white px-2 py-1 rounded"
          onClick={() => borrarTarea(tarea)}
        >
          Borrar
        </button>
      </li>
    </div>
  );
};

export default ItemTareas;