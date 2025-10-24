'use client';

import { useState, useEffect } from 'react';

export default function UserForm({ onSubmit, usuarioEditar, onCancelEdit }) {
  const [form, setForm] = useState({
    nombre: '',
    usuario: '',
    password: '',
    rol: 'usuario',
  });

  useEffect(() => {
    if (usuarioEditar) {
      setForm({
        nombre: usuarioEditar.nombre,
        usuario: usuarioEditar.usuario,
        password: '',
        rol: usuarioEditar.rol || 'usuario',
      });
    }
  }, [usuarioEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form, usuarioEditar?.id);
    setForm({ nombre: '', usuario: '', password: '', rol: 'usuario' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 w-full max-w-md space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur text-slate-800"
    >
      <h2 className="text-lg font-semibold text-slate-900">
        {usuarioEditar ? 'Editar Usuario' : 'Agregar Usuario'}
      </h2>

      
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Nombre completo</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Ej. Juan Pérez"
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Usuario</label>
        <input
          type="text"
          name="usuario"
          value={form.usuario}
          onChange={handleChange}
          placeholder="Ej. jperez"
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Contraseña</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder={usuarioEditar ? 'Nueva Contraseña (opcional)' : 'Contraseña'}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          required={!usuarioEditar}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Rol</label>
        <select
          name="rol"
          value={form.rol}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="usuario">Usuario</option>
          <option value="administrador">Administrador</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
          title={usuarioEditar ? 'Actualizar usuario existente' : 'Crear nuevo usuario'}
        >
          {usuarioEditar ? 'Actualizar' : 'Crear'}
        </button>

        {usuarioEditar && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
