'use client';

import { useMemo, useState } from 'react';

export default function List({ inventario = [], onEdit, onDelete }) {
  const [q, setQ] = useState('');

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return inventario;
    return inventario.filter((it) =>
      [
        it?.productos?.nombre,
        String(it?.productoid),
        String(it?.cantidad),
        it?.tipo,
        new Date(it?.fecha || '').toLocaleDateString(),
      ]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(term))
    );
  }, [inventario, q]);

  const fmtDate = (d) => {
    try {
      return new Intl.DateTimeFormat('es-MX', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date(d));
    } catch {
      return '—';
    }
  };

  const TipoBadge = ({ tipo = '' }) => {
    const map = {
      entrada: 'border-emerald-200 bg-emerald-50 text-emerald-700',
      salida: 'border-red-200 bg-red-50 text-red-700',
      ajuste: 'border-amber-200 bg-amber-50 text-amber-700',
    };
    const cls = map[tipo?.toLowerCase()] || 'border-slate-200 bg-slate-50 text-slate-700';
    return (
      <span className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs ${cls}`}>
        <Dot className="h-3 w-3" />
        {tipo}
      </span>
    );
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur text-slate-800">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Lista de Inventario</h2>
          <p className="text-sm text-slate-600">Historial de movimientos de inventario.</p>
        </div>
        <div className="w-full sm:w-72">
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar producto, tipo, fecha…"
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
                <th className="px-4 py-3 text-left text-sm font-semibold">Producto</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Cantidad</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Tipo</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Fecha de Registro</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 bg-white">
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                    {q ? 'No hay resultados para la búsqueda.' : 'No hay registros en el inventario.'}
                  </td>
                </tr>
              )}

              {rows.map((item, idx) => (
                <tr key={item.id ?? idx} className="transition hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-800">
                    {item.productos?.nombre ?? `#${item.productoid}`}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">{item.cantidad}</td>
                  <td className="px-4 py-3 text-sm">
                    <TipoBadge tipo={item.tipo} />
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    {fmtDate(item.fecha)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => onEdit?.(item)}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
                        title="Editar"
                      >
                        <EditIcon className="h-4 w-4" />
                        Editar
                      </button>
                      <button
                        onClick={() => onDelete?.(item.id)}
                        className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-sm text-red-700 transition hover:bg-red-100"
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
