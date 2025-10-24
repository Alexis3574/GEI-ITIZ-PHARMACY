'use client';
import { useMemo, useState } from 'react';
import { useDetalleVentas } from '../../hooks/useDetalleVentas';
import { useCarrito } from '../../hooks/useCarrito';
import { toast } from 'react-toastify';

import Form from './Form';
import List from './List';
import CarritoModal from './CarritoModal';
import TicketVentas from './TicketVentas'; // 👈 importamos el nuevo componente

import { generarTicketPDF } from '../../../utils/generarTicket';

export default function VentasPage() {
  const { detalles, crear, actualizar, eliminar } = useDetalleVentas();
  const { agregar } = useCarrito();
  const [editing, setEditing] = useState(null);

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
    return (detalles || []).reduce((acc, d) => {
      const precio = Number(d.preciounitario);
      const cant = Number(d.cantidad || 0);
      const sub = (Number.isNaN(precio) ? 0 : precio) * (Number.isNaN(cant) ? 0 : cant);
      return acc + sub;
    }, 0);
  }, [detalles]);

  const items = (detalles || []).reduce((acc, d) => acc + (Number(d.cantidad) || 0), 0);

  const handleSubmit = async (data) => {
    try {
      if (editing) {
        await actualizar(editing.id, data);
        setEditing(null);
        toast?.success('✅ Venta actualizada');
      } else {
        const nueva = await crear(data);
        toast?.success('✅ Venta agregada');

        const productoId = Number(nueva?.productoid ?? data.productoid);
        const cantidad = Number(nueva?.cantidad ?? data.cantidad);
        const precio = Number(nueva?.preciounitario ?? data.preciounitario);

        if (!Number.isNaN(productoId) && !Number.isNaN(cantidad)) {
          await agregar(productoId, cantidad, Number.isNaN(precio) ? undefined : precio);
        }
      }
    } catch (e) {
      toast?.error('❌ Ocurrió un error al guardar');
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await eliminar(id);
      toast?.info('🗑️ Detalle eliminado');
    } catch (e) {
      toast?.error('❌ No se pudo eliminar');
      console.error(e);
    }
  };

  const pagarYGenerarPDF = () => {
    if ((detalles?.length || 0) === 0) return;

    generarTicketPDF({
      detalles,
      total: totalGeneral,
      negocio: { nombre: 'Gestor de Inventario' },
      folio: `V-${Date.now()}`,
    });

    toast?.success('✅ Pago realizado con éxito');
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-200/60 via-sky-200/60 to-violet-200/60 blur-3xl" />

      <main className="mx-auto w-full max-w-7xl px-6 py-8">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Gestión de Ventas</h1>
            <p className="mt-1 text-slate-600">Crea, edita y administra tus detalles de venta.</p>
          </div>
          <CarritoModal />
        </header>

        <div className="mb-6 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-500">
            Total: <strong>{currency.format(totalGeneral)}</strong>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-black">
            Ítems: <strong>{items}</strong>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
            Registros: <strong>{detalles?.length || 0}</strong>
          </span>
        </div>

        <section className="rounded-2xl p-5 ">
          <Form
            onSubmit={handleSubmit}
            initialData={editing || {}}
            onAddToCart={async ({ productoId, cantidad, precio }) => {
              await agregar(Number(productoId), Number(cantidad), Number(precio));
            }}
          />
          {editing && (
            <div className="mt-3 flex justify-end">
              <button
                onClick={() => setEditing(null)}
                className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Cancelar edición
              </button>
            </div>
          )}
        </section>

        <section className="mt-6 rounded-2xl ">
          <List data={detalles} onEdit={setEditing} onDelete={handleDelete} />
        </section>

        <section className="mt-6">
          <TicketVentas detalles={detalles} />
        </section>

        <div className="sticky bottom-4 mt-6 flex justify-end">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
            <span className="text-sm text-slate-600">
              Total a pagar:{' '}
              <strong className="text-slate-900">{currency.format(totalGeneral)}</strong>
            </span>
            <button
              type="button"
              disabled={(detalles?.length || 0) === 0}
              className="inline-flex w-44 items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              onClick={pagarYGenerarPDF}
            >
              Pagar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
