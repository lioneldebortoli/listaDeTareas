const FormularioTarea = () => {
  return (
    <section className="m-7">
      <form>
        <div className="mb-3">
          <label htmlFor="tarea" className="form-label">Ingresa una Tarea</label>
          <input type="text" placeholder="Ej: Leer un libro" className="w-full px-4 py-2 border border-gray-300 rounded-lg my-5" id="tarea"/>
        </div>
        <button type="submit" className="p-1 border rounded-lg bg-green-300">Enviar</button>
      </form>
    </section>
  )
}

export default FormularioTarea
