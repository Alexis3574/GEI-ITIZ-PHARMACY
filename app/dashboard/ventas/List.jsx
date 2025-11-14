'use client';

import { useMemo } from 'react';

export default function List({ data = [], onEdit, onDelete }) {
  const currency = useMemo(
    () =>
      new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 2,
      }),
    []
  );

  const totalGeneral = useMemo(() => {
    return data.reduce((acc, d) => {
      const precio = parseFloat(d.preciounitario);
      const cant = parseInt(d.cantidad || 0);
      const subtotal = (isNaN(precio) ? 0 : precio) * (isNaN(cant) ? 0 : cant);
      return acc + subtotal;
    }, 0);
  }, [data]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Lista de Detalles de Venta</h2>
          <p className="text-sm text-slate-600">
            Revisa, edita o elimina los conceptos antes de finalizar.
          </p>
        </div>
      </header>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="sticky top-0 z-10 bg-emerald-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Venta ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Producto</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Cantidad</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Precio Unitario</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Total</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 bg-white">
              {data.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-slate-500">
                    No hay registros.
                  </td>
                </tr>
              )}

              {data.map((detalle, idx) => {
                const precio = parseFloat(detalle.preciounitario);
                const cant = parseInt(detalle.cantidad || 0);
                const total = (isNaN(precio) ? 0 : precio) * (isNaN(cant) ? 0 : cant);

                return (
                  <tr
                    key={detalle.id ?? `${detalle.productoid}-${idx}`}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {detalle.ventaid ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-800">
                      {detalle.productos?.nombre ?? `Producto ${detalle.productoid}`}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">{detalle.cantidad}</td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {currency.format(isNaN(precio) ? 0 : precio)}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900">
                      {currency.format(isNaN(total) ? 0 : total)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => onEdit?.(detalle)}
                          className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
                          title="Editar"
                        >
                          <EditIcon className="h-4 w-4" />
                          Editar
                        </button>
                        <button
                          onClick={() => onDelete?.(detalle.id)}
                          className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-sm text-red-700 transition hover:bg-red-100"
                          title="Eliminar"
                        >
                          <TrashIcon className="h-4 w-4" />
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {data.length > 0 && (
              <tfoot>
                <tr className="bg-slate-50">
                  <td
                    colSpan={4}
                    className="px-4 py-3 text-right text-sm font-medium text-slate-700"
                  >
                    Total general del día:
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900">
                    {currency.format(totalGeneral)}
                  </td>
                  <td />
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    </section>
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
