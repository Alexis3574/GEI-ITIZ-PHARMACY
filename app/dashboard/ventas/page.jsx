'use client';
import { useMemo, useState } from 'react';
import { useDetalleVentas } from '../../hooks/useDetalleVentas';
import { useCarrito } from '../../hooks/useCarrito';
import { toast } from 'react-toastify';
import Form from './Form';
import List from './List';
import CarritoModal from './CarritoModal';
import TicketVentas from './TicketVentas';
import { generarTicketPDF } from '../../../utils/generarTicket';
import ModalMetodoPago from './ModalPago';

export default function VentasPage() {
  const { detalles, crear, actualizar, eliminar } = useDetalleVentas();
  const { agregar } = useCarrito();
  const [editing, setEditing] = useState(null);
  const [ventaActual, setVentaActual] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false); 
  const [loadingPago, setLoadingPago] = useState(false); 

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
        toast.success(' Venta actualizada');
      } else {
        const nueva = await crear(data);
        toast.success(' Venta agregada');
        const productoId = Number(nueva?.productoid ?? data.productoid);
        const cantidad = Number(nueva?.cantidad ?? data.cantidad);
        const precio = Number(nueva?.preciounitario ?? data.preciounitario);
        if (!Number.isNaN(productoId) && !Number.isNaN(cantidad)) {
          await agregar(productoId, cantidad, Number.isNaN(precio) ? undefined : precio);
        }
      }
    } catch (e) {
      toast.error('❌ Ocurrió un error al guardar');
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await eliminar(id);
      toast.info(' Detalle eliminado');
    } catch (e) {
      toast.error('❌ No se pudo eliminar');
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
    toast.success(' Ticket generado');
  };


  const prepararVenta = async () => {
    try {
      const res = await fetch('/api/ventas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          total: totalGeneral,
          metodopago: null,
        }),
      });

      if (!res.ok) {
        console.error('❌ Error en /api/ventas:', await res.text());
        return null;
      }

      const data = await res.json();

      if (!data || !data.id) {
        console.error('❌ Respuesta inválida de la API:', data);
        return null;
      }

      setVentaActual(data);
      return data;
    } catch (error) {
      console.error('❌ Error creando venta:', error);
      toast.error('❌ No se pudo crear la venta antes del pago');
      return null;
    }
  };

  const abrirModalPago = async () => {
    try {
      setLoadingPago(true);
      const venta = await prepararVenta();

      if (!venta || !venta.id) {
        toast.error('❌ No se pudo preparar la venta para el pago');
        setLoadingPago(false);
        return;
      }

      setVentaActual(venta);
      setMostrarModal(true);
    } catch (error) {
      console.error('❌ Error al abrir el modal de pago:', error);
      toast.error('Ocurrió un error al abrir el pago.');
    } finally {
      setLoadingPago(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-200/60 via-sky-200/60 to-violet-200/60 blur-3xl" />

      <main className="mx-auto w-full max-w-7xl px-6 py-8">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Gestión de Ventas</h1>
            <p className="mt-1 text-slate-600">Crea, edita y administra tus detalles de venta.</p>
          </div>
          <CarritoModal />
        </header>

        <div className="mb-6 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
            Total: <strong>{currency.format(totalGeneral)}</strong>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700">
            Ítems: <strong>{items}</strong>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
            Registros: <strong>{detalles?.length || 0}</strong>
          </span>
        </div>

        <section className="rounded-2xl p-5">
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

        <section className="mt-6 rounded-2xl">
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
              onClick={abrirModalPago}
              disabled={loadingPago || totalGeneral <= 0}
              className={`rounded-md px-4 py-2 text-white font-medium shadow-md transition ${
                totalGeneral <= 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              {loadingPago ? 'Creando venta...' : ' Realizar Pago'}
            </button>
          </div>
        </div>
      </main>

      
      {mostrarModal && ventaActual && (
        <ModalMetodoPago
          venta={ventaActual}
          onClose={() => setMostrarModal(false)}
        />
      )}
    </div>
  );
}
