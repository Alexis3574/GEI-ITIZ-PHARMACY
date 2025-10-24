'use client';
import { useMemo, useState } from 'react';
import { useProveedores } from '../../hooks/useProveedores';
import Form from './Form';
import List from './List';

export default function ProveedoresPage() {
  const { proveedores, crear, actualizar, eliminar } = useProveedores();
  const [proveedorEditar, setProveedorEditar] = useState(null);

  const handleSave = async (data) => {
    if (proveedorEditar) {
      await actualizar(proveedorEditar.id, data);
      setProveedorEditar(null);
    } else {
      await crear(data);
    }
  };

  
  const kpis = useMemo(() => {
    const list = proveedores || [];
    const total = list.length;
    const conContacto = list.filter(p => (p?.contacto || '').trim().length > 0).length;
    const conProductos = list.filter(p => (p?.productos || '').trim().length > 0).length;
    return { total, conContacto, conProductos };
  }, [proveedores]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-200/60 via-sky-200/60 to-violet-200/60 blur-3xl" />

      <main className="mx-auto w-full max-w-7xl px-6 py-8">
        <header className="mb-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Gestión de Proveedores</h1>
              <p className="mt-1 text-slate-600">
                Registra y administra tus proveedores, contactos y productos que ofrecen.
              </p>
            </div>

            {proveedorEditar && (
              <button
                type="button"
                onClick={() => setProveedorEditar(null)}
                className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-100"
                title="Cancelar edición"
              >
                <CancelIcon className="h-4 w-4" />
                Cancelar edición
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Chip className="border-slate-200 bg-white text-slate-700">
              <Dot className="h-3 w-3" />
              Total: <strong className="ml-1">{kpis.total}</strong>
            </Chip>
            <Chip className="border-sky-200 bg-sky-50 text-sky-700">
              <Dot className="h-3 w-3" />
              Con contacto: <strong className="ml-1">{kpis.conContacto}</strong>
            </Chip>
            <Chip className="border-emerald-200 bg-emerald-50 text-emerald-700">
              <Dot className="h-3 w-3" />
              Con productos: <strong className="ml-1">{kpis.conProductos}</strong>
            </Chip>
          </div>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
          <Form proveedorEditar={proveedorEditar} onSave={handleSave} />
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
          <List proveedores={proveedores} onEdit={setProveedorEditar} onDelete={eliminar} />
        </section>
      </main>
    </div>
  );
}

function Chip({ children, className = '', title }) {
  return (
    <span
      title={title}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${className}`}
    >
      {children}
    </span>
  );
}
function CancelIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
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
