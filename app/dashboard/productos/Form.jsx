'use client';
import { useEffect, useMemo, useState } from 'react';


function toLocalDateString(fechaISO) {
  if (!fechaISO) return '';
  const fecha = new Date(fechaISO);
  const y = fecha.getFullYear();
  const m = String(fecha.getMonth() + 1).padStart(2, '0');
  const d = String(fecha.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function Form({ productoEditar, onSave }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [fechacaducidad, setFechacaducidad] = useState('');
  const [error, setError] = useState(null);

  
  const currency = useMemo(
    () =>
      new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 2,
      }),
    []
  );

 
  useEffect(() => {
    if (productoEditar) {
      setNombre(productoEditar.nombre ?? '');
      setPrecio(productoEditar.precioventa?.toString() ?? '');
      setStock(productoEditar.stock?.toString() ?? '');
      setCategoria(productoEditar.tipo ?? '');
      setUnidadMedida(productoEditar.unidadMedida ?? '');
      setFechacaducidad(
        productoEditar.fechacaducidad
          ? toLocalDateString(productoEditar.fechacaducidad)
          : ''
      );
    } else {
    
      setNombre('');
      setPrecio('');
      setStock('');
      setCategoria('');
      setUnidadMedida('');
      setFechacaducidad('');
    }
  }, [productoEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!nombre || !precio || !stock || !categoria || !unidadMedida) {
      setError('Todos los campos marcados son obligatorios.');
      alert('Todos los campos son obligatorios');
      return;
    }

    await onSave({
      nombre,
      precioventa: parseFloat(precio),
      stock: parseInt(stock),
      tipo: categoria,
      unidadMedida,
      fechacaducidad: fechacaducidad ? new Date(fechacaducidad) : null,
    });

   
    if (!productoEditar) {
      setNombre('');
      setPrecio('');
      setStock('');
      setCategoria('');
      setUnidadMedida('');
      setFechacaducidad('');
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
            {productoEditar ? 'Editar Producto' : 'Agregar Producto'}
          </h3>
          <p className="text-sm text-slate-600">
            Completa la información del producto. Los campos con * son obligatorios.
          </p>
        </div>

        {productoEditar && (
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
            Nombre *
          </label>
          <input
            type="text"
            placeholder="Ej. Paracetamol, Ibuprofeno…"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Precio (MXN) *
          </label>
          <div className="flex items-stretch overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-200">
            <span className="flex items-center px-3 text-slate-500">MXN</span>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              className="w-full px-3 py-2.5 outline-none"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            {precio ? currency.format(Number(precio) || 0) : '—'}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Stock *
          </label>
          <input
            type="number"
            min="0"
            placeholder="Cantidad en inventario"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Categoría *
          </label>
          <input
            type="text"
            placeholder="Ej. Antigripal, Analgésico, Antiinflamatorio…"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Unidad de medida *
          </label>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={unidadMedida}
              onChange={(e) => setUnidadMedida(e.target.value)}
            >
              <option value="">Selecciona unidad</option>
              <option value="unidad">Piezas</option>
              {/*<option value="kg">Kilogramos (kg)</option>
              <option value="lt">Litros (lt)</option>
              <option value="m">Metros (m)</option>*/}
              <option value="caja">Caja</option>
              <option value="paquete">Paquete</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Fecha de caducidad (opcional)
          </label>
          <input
            type="date"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={fechacaducidad}
            onChange={(e) => setFechacaducidad(e.target.value)}
          />
          <p className="mt-1 text-xs text-slate-500">
            Déjalo vacío si el producto no caduca.
          </p>
        </div>
      </div>

  
      <div className="mt-6 flex flex-col-reverse items-center justify-end gap-3 sm:flex-row">
        {productoEditar && (
          <button
            type="button"
            onClick={() => {
           
              setNombre('');
              setPrecio('');
              setStock('');
              setCategoria('');
              setUnidadMedida('');
              setFechacaducidad('');
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
          {productoEditar ? 'Actualizar Producto' : 'Agregar Producto'}
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
