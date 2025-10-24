'use client';
import { useEffect, useState } from 'react';

export default function Form({ proveedorEditar, onSave }) {
  const [form, setForm] = useState({ nombre: '', contacto: '', productos: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (proveedorEditar) {
      setForm({
        nombre: proveedorEditar.nombre ?? '',
        contacto: proveedorEditar.contacto ?? '',
        productos: proveedorEditar.productos ?? '',
      });
    } else {
      setForm({ nombre: '', contacto: '', productos: '' });
    }
  }, [proveedorEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.contacto || !form.productos) {
      setError('Todos los campos son obligatorios.');
      alert('Todos los campos son obligatorios');
      return;
    }
    onSave(form);
    if (!proveedorEditar) setForm({ nombre: '', contacto: '', productos: '' });
  };

  const limpiar = () => setForm({ nombre: '', contacto: '', productos: '' });

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm backdrop-blur
                 text-zinc-900 dark:text-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">
            {proveedorEditar ? 'Editar Proveedor' : 'Agregar Proveedor'}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Captura el nombre, un contacto y los productos que ofrece.
          </p>
        </div>
        {proveedorEditar && (
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:border-amber-300/30 dark:bg-amber-300/10 dark:text-amber-300">
            Modo edición
          </span>
        )}
      </div>

      {error && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-200">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Nombre del proveedor *
          </label>
          <input
            name="nombre"
            placeholder="Ej. Proveedora ABC"
            value={form.nombre}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm shadow-sm placeholder:text-zinc-400
                       outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                       dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder:text-zinc-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Contacto *
          </label>
          <input
            name="contacto"
            placeholder="Ej. Juan Pérez / 55-1234-5678 / correo@ejemplo.com"
            value={form.contacto}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm shadow-sm placeholder:text-zinc-400
                       outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                       dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder:text-zinc-500"
          />
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Puedes escribir nombre, teléfono, correo o ambos.
          </p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Productos que ofrece *
          </label>
          <input
            name="productos"
            placeholder="Ej. Farmaceúticos, Antibióticos,... "
            value={form.productos}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm shadow-sm placeholder:text-zinc-400
                       outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                       dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder:text-zinc-500"
          />
        </div>
      </div>

      {/* Acciones */}
      <div className="mt-6 flex flex-col-reverse items-center justify-end gap-3 sm:flex-row">
        {proveedorEditar && (
          <button
            type="button"
            onClick={limpiar}
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm
                       transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800/80 sm:w-auto"
          >
            Limpiar
          </button>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition
                     hover:brightness-105 active:scale-[.99] focus:outline-none focus:ring-2 focus:ring-blue-300 sm:w-auto"
        >
          {proveedorEditar ? 'Actualizar Proveedor' : 'Agregar Proveedor'}
        </button>
      </div>
    </form>
  );
}
