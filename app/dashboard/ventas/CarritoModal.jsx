'use client';
import { useState } from 'react';
import { useCarrito } from '@/app/context/CarritoContext';

export default function CarritoModal() {
  const { items, count, total, updateQty, removeItem } = useCarrito();
  const [open, setOpen] = useState(false);

  const fmt = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 2,
  });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white shadow-sm hover:brightness-110"
        title="Ver carrito"
      >
        🛒 Carrito ({count})
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4">
          <div className="w-full max-w-3xl rounded-2xl bg-white p-5 shadow-xl">
           
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Carrito de Ventas</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-slate-500 hover:bg-slate-100"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            {items.length === 0 ? (
              <p className="text-slate-600">No hay productos en el carrito</p>
            ) : (
              <ul className="divide-y">
                {items.map((it) => (
                  <li
                    key={it.id}
                    className="flex items-center justify-between py-3"
                  >
                    <div>
                      <p className="font-medium">
                        {it.producto?.nombre ?? `Producto #${it.id}`}
                      </p>
                      <p className="text-sm text-slate-500">
                        {it.cantidad} × {fmt.format(it.precio)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(it.id, it.cantidad - 1)}
                        className="rounded border px-2 py-1 hover:bg-slate-50"
                        aria-label="Disminuir cantidad"
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center">
                        {it.cantidad}
                      </span>
                      <button
                        onClick={() => updateQty(it.id, it.cantidad + 1)}
                        className="rounded border px-2 py-1 hover:bg-slate-50"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(it.id)}
                        className="rounded bg-red-600 px-3 py-1 text-white hover:brightness-110"
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-slate-600">Ítems: {count}</span>
              <strong className="text-slate-900">
                Total: {fmt.format(total)}
              </strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
