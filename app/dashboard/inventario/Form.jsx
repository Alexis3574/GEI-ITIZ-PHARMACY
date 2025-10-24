'use client';
import { useEffect, useState } from 'react';

export default function Form({ itemEditar, onSave }) {
  const [productos, setProductos] = useState([]);
  const [productoid, setProductoid] = useState('');
  const [tipo, setTipo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [observacion, setObservacion] = useState('');
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/productos');
        const data = await res.json();
        if (mounted) setProductos(Array.isArray(data) ? data : []);
      } catch {
      }
    })();

    if (itemEditar) {
      setProductoid(itemEditar.productoid ?? '');
      setTipo(itemEditar.tipo ?? '');
      setCantidad(itemEditar.cantidad ?? '');
      setObservacion(itemEditar.observacion ?? '');
      setFecha(itemEditar.fecha?.split('T')[0] ?? '');
    } else {
      setProductoid('');
      setTipo('');
      setCantidad('');
      setObservacion('');
      setFecha('');
    }

    return () => { mounted = false; };
  }, [itemEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!productoid || !tipo || !cantidad) {
      setError('Por favor completa los campos obligatorios.');
      alert('Por favor completa los campos obligatorios');
      return;
    }

    await onSave({
      productoid: parseInt(productoid),
      tipo,
      cantidad: parseInt(cantidad),
      observacion,
      fecha: fecha ? new Date(fecha) : new Date(),
    });

    if (!itemEditar) {
      setProductoid('');
      setTipo('');
      setCantidad('');
      setObservacion('');
      setFecha('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur text-slate-800"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {itemEditar ? 'Editar Movimiento' : 'Nuevo Movimiento de Inventario'}
          </h3>
          <p className="text-sm text-slate-600">
            Selecciona el producto, tipo de movimiento y define la cantidad.
          </p>
        </div>
        {itemEditar && (
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Modo edición
          </span>
        )}
      </div>

      {error && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Producto *
          </label>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={productoid}
              onChange={(e) => setProductoid(e.target.value)}
              required
            >
              <option value="">Selecciona producto</option>
              {productos.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Tipo de movimiento * 
          </label>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
            >
              <option value="">Selecciona tipo</option>
              <option value="entrada">Entrada</option>
              <option value="salida">Salida</option>
              <option value="ajuste">Ajuste</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Cantidad * 
          </label>
          <input
            type="number"
            min="1"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Ej. 10"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Observación
          </label>
          <input
            type="text"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Ej. Ajuste por inventario físico"
            value={observacion}
            onChange={(e) => setObservacion(e.target.value)}
          />
        </div>

     
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Fecha
          </label>
          <input
            type="date"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <p className="mt-1 text-xs text-slate-500">Si no seleccionas, se usará la fecha actual.</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse items-center justify-end gap-3 sm:flex-row">
        {itemEditar && (
          <button
            type="button"
            onClick={() => {
              setProductoid('');
              setTipo('');
              setCantidad('');
              setObservacion('');
              setFecha('');
            }}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 sm:w-auto"
          >
            Limpiar
          </button>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 active:scale-[.99] sm:w-auto"
        >
          {itemEditar ? 'Actualizar Movimiento' : 'Agregar Movimiento'}
        </button>
      </div>
    </form>
  );
}

function ChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
