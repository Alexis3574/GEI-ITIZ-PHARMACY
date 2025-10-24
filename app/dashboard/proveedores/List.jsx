'use client';

import { useMemo, useState } from 'react';

export default function List({ proveedores = [], onEdit, onDelete }) {
  const [q, setQ] = useState('');

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return proveedores;
    return proveedores.filter((p) =>
      [p?.nombre, p?.contacto, p?.productos]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(term))
    );
  }, [proveedores, q]);

  return (
    <section className="mt-6 rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm backdrop-blur text-zinc-900
                        dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-100">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Lista de Proveedores</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Administra tus proveedores, contactos y productos que ofrecen.
          </p>
        </div>

        <div className="w-full sm:w-80">
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por nombre, contacto o producto…"
              className="w-full rounded-xl border border-zinc-300 bg-white px-10 py-2.5 text-sm shadow-sm outline-none transition
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                         dark:border-zinc-700 dark:bg-zinc-800"
            />
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400 dark:text-zinc-500">
              <SearchIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="sticky top-0 z-10 bg-blue-400 text-white dark:bg-blue-300">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Nombre</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Contacto</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Productos</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-900">
              {rows.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-10 text-center text-zinc-500 dark:text-zinc-400">
                    {q ? 'No hay resultados para la búsqueda.' : 'No hay proveedores registrados.'}
                  </td>
                </tr>
              )}

              {rows.map((p, idx) => (
                <tr key={p.id ?? idx} className="transition hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                  <td className="px-4 py-3 text-sm font-medium">{p.nombre}</td>
                  <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">{p.contacto}</td>
                  <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span
                      title={p.productos}
                      className="line-clamp-1 block max-w-[42ch] truncate"
                    >
                      {p.productos}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => onEdit?.(p)}
                        className="inline-flex items-center gap-1 rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-sm text-zinc-800 shadow-sm transition
                                   hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800/80"
                        title="Editar"
                      >
                        <EditIcon className="h-4 w-4" />
                        Editar
                      </button>
                      <button
                        onClick={() => onDelete?.(p.id)}
                        className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-sm text-red-700 transition
                                   hover:bg-red-100 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-300"
                        title="Eliminar"
                      >
                        <TrashIcon className="h-4 w-4" />
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* Íconos inline (sin dependencias) */
function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
function EditIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );
}
function TrashIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    </svg>
  );
}
