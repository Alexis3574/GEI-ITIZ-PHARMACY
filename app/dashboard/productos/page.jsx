'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import Form from './Form';
import List from './List';
import { useProductos } from '../../hooks/useProductos';

export default function ProductosPage() {
  const {
    productos,
    crearProducto,
    actualizarProducto,
    obtenerProductos,
    eliminarProducto,
    cargando,
  } = useProductos();

  const [productoEditar, setProductoEditar] = useState(null);
  const stockMinimo = 5;
  const caducidadActiva = true;

  // ✅ useCallback asegura que la referencia de la función no cambie en cada render
  const cargarProductos = useCallback(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  // ✅ Se ejecuta solo una vez al montar
  useEffect(() => {
    cargarProductos();
  }, [cargarProductos]);

  // ✅ Guardar (crear o actualizar)
  const handleSave = async (datos) => {
    try {
      if (productoEditar) {
        await actualizarProducto(productoEditar.id, datos);
        setProductoEditar(null);
      } else {
        await crearProducto(datos);
      }
      // Refrescar una sola vez
      await cargarProductos();
    } catch (err) {
      console.error('❌ Error al guardar producto:', err);
    }
  };

  // ✅ Eliminar producto
  const handleDelete = async (id) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      await eliminarProducto(id);
      await cargarProductos();
    }
  };

  const hoy = new Date();

  // ✅ KPIs calculados con useMemo para no recalcular innecesariamente
  const kpis = useMemo(() => {
    const total = productos?.length || 0;
    const bajos = (productos || []).filter((p) => Number(p.stock) < stockMinimo).length;

    const porCaducar = caducidadActiva
      ? (productos || []).filter((p) => {
          if (!p.fechacaducidad) return false;
          const dias = Math.floor(
            (new Date(p.fechacaducidad) - hoy) / (1000 * 60 * 60 * 24)
          );
          return dias <= 7;
        }).length
      : 0;

    return { total, bajos, porCaducar };
  }, [productos]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-200/60 via-sky-200/60 to-violet-200/60 blur-3xl" />

      <main className="mx-auto w-full max-w-7xl px-6 py-8">
        {/* Header principal */}
        <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Gestión de Productos</h1>
            <p className="mt-1 text-slate-600">Agrega, edita y administra tu catálogo.</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={cargarProductos}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
              title="Actualizar listado"
            >
              <RefreshIcon className="h-4 w-4" />
              Actualizar
            </button>

            {productoEditar && (
              <button
                type="button"
                onClick={() => setProductoEditar(null)}
                className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-100"
              >
                <CancelIcon className="h-4 w-4" />
                Cancelar edición
              </button>
            )}
          </div>
        </header>

        {/* KPIs */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
            <Dot className="h-3 w-3" />
            Total: <strong className="ml-1">{kpis.total}</strong>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-700">
            <Dot className="h-3 w-3" />
            Stock bajo: <strong className="ml-1">{kpis.bajos}</strong>
          </span>
          {caducidadActiva && (
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm text-amber-700">
              <Dot className="h-3 w-3" />
              Por caducar (≤7 días):{' '}
              <strong className="ml-1">{kpis.porCaducar}</strong>
            </span>
          )}
        </div>

        {/* Formulario */}
        <section className="mt-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
          <Form productoEditar={productoEditar} onSave={handleSave} />
        </section>

        {/* Listado */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
          <List
            productos={productos}
            onEdit={setProductoEditar}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
}

/* ---------- Íconos reutilizados ---------- */

function RefreshIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}

function CancelIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6L6 18M6 6l12 12" />
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
