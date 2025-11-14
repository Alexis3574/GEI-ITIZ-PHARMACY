'use client';

import { useSession } from 'next-auth/react';
import { useMemo, useState } from 'react';


function toLocalDateString(fechaISO) {
  if (!fechaISO) return null;
  const f = new Date(fechaISO);
  const y = f.getFullYear();
  const m = String(f.getMonth() + 1).padStart(2, '0');
  const d = String(f.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function List({ productos = [], onEdit, onDelete }) {
  const { data: session } = useSession();
  const rol = session?.user?.rol;

  const stockMinimo = 5;
  const caducidadActiva = true;

  const [q, setQ] = useState('');
  const hoy = new Date();

  const currency = useMemo(
    () =>
      new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 2,
      }),
    []
  );

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return productos;
    return productos.filter((p) =>
      [
        p?.nombre,
        p?.tipo,
        p?.unidadMedida,
        String(p?.precioventa),
        String(p?.stock),
      ]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(term))
    );
  }, [productos, q]);

  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur text-slate-800">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Lista de Productos</h2>
          <p className="text-sm text-slate-600">Administra tu catálogo y verifica stock/caducidad.</p>
        </div>

        <div className="w-full sm:w-72">
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar producto, categoría, unidad…"
              className="w-full rounded-xl border border-slate-300 bg-white px-10 py-2.5 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
              <SearchIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="sticky top-0 z-10 bg-blue-400 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Nombre</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Precio</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Stock</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Unidad</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Categoría</th>
                {caducidadActiva && (
                  <th className="px-4 py-3 text-left text-sm font-semibold">Caducidad</th>
                )}
                <th className="px-4 py-3 text-left text-sm font-semibold">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 bg-white">
              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={caducidadActiva ? 7 : 6}
                    className="px-4 py-10 text-center text-slate-500"
                  >
                    {q ? 'No hay resultados para la búsqueda.' : 'No hay productos registrados.'}
                  </td>
                </tr>
              )}

              {rows.map((prod, idx) => {
                const fechaCadStr = prod.fechacaducidad
                  ? toLocalDateString(prod.fechacaducidad)
                  : null;
                const diasParaCaducar =
                  prod.fechacaducidad != null
                    ? Math.floor(
                        (new Date(prod.fechacaducidad) - hoy) / (1000 * 60 * 60 * 24)
                      )
                    : null;

                const esStockBajo = Number(prod.stock) < stockMinimo;
                const esCaducaPronto =
                  caducidadActiva && diasParaCaducar != null && diasParaCaducar <= 7;

                return (
                  <tr key={prod.id ?? idx} className="transition hover:bg-slate-50">
                    <td className="px-4 py-3 text-sm font-medium text-slate-800">
                      {prod.nombre}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {currency.format(Number(prod.precioventa) || 0)}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs ${
                          esStockBajo
                            ? 'border-red-200 bg-red-50 text-red-700'
                            : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        }`}
                        title={esStockBajo ? 'Stock bajo' : 'Stock saludable'}
                      >
                        <Dot className="h-3 w-3" />
                        {prod.stock}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {prod.unidadMedida || '—'}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">{prod.tipo}</td>

                    {caducidadActiva && (
                      <td className="px-4 py-3 text-sm">
                        {fechaCadStr ? (
                          <span
                            className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs ${
                              esCaducaPronto
                                ? 'border-amber-200 bg-amber-50 text-amber-700'
                                : 'border-slate-200 bg-slate-50 text-slate-700'
                            }`}
                            title={
                              esCaducaPronto
                                ? `Caduca pronto (${fechaCadStr})`
                                : 'Fecha de caducidad'
                            }
                          >
                            <Clock className="h-3 w-3" />
                            {fechaCadStr}
                          </span>
                        ) : (
                          '—'
                        )}
                      </td>
                    )}

                    <td className="px-4 py-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => onEdit?.(prod)}
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
                          title="Editar"
                        >
                          <Edit className="h-4 w-4" />
                          Editar
                        </button>
                        {rol === 'administrador' && (
                          <button
                            onClick={() => onDelete?.(prod.id)}
                            className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-sm text-red-700 transition hover:bg-red-100"
                            title="Eliminar"
                          >
                            <Trash className="h-4 w-4" />
                            Eliminar
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
function Dot(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}
function Clock(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function Edit(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );
}
function Trash(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    </svg>
  );
}
