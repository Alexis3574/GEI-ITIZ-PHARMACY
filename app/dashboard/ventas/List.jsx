'use client';
import { useState, useEffect, useMemo } from 'react';
import { useCarrito } from '@/app/context/CarritoContext';

export default function Form({ onSubmit, initialData = {} }) {
  const { addItem } = useCarrito();   
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const [form, setForm] = useState({
    productoid: '',
    cantidad: '',
    preciounitario: '',
  });

  const currency = useMemo(
    () =>
      new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 2,
      }),
    []
  );

  // Helpers
  const toInt = (v) => {
    const n = Number.parseInt(v, 10);
    return Number.isFinite(n) ? n : NaN;
  };
  const toFloat = (v) => {
    const n = Number.parseFloat(v);
    return Number.isFinite(n) ? n : NaN;
  };

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setCargando(true);
        const res = await fetch('/api/productos');
        const data = await res.json();
        if (!alive) return;
        const lista = Array.isArray(data) ? data : [];
        setProductos(lista);

        const pid = toInt(initialData.productoid ?? '');
        if (pid && !initialData.preciounitario) {
          const p = lista.find((x) => toInt(x.id) === pid);
          if (p) {
            setForm((prev) => ({
              ...prev,
              preciounitario: toFloat(p.precioventa ?? '') || '',
            }));
          }
        }
      } catch {
      } finally {
        if (alive) setCargando(false);
      }
    })();

    setForm({
      productoid: initialData.productoid ?? '',
      cantidad: initialData.cantidad ?? '',
      preciounitario: initialData.preciounitario ?? '',
    });

    return () => {
      alive = false;
    };
  }, [initialData]);

  useEffect(() => {
    const pid = toInt(form.productoid);
    if (!pid) return;
    const p = productos.find((x) => toInt(x.id) === pid);
    if (!p) return;

    const precio = toFloat(p.precioventa ?? '');
    if (Number.isFinite(precio)) {
      setForm((prev) => ({ ...prev, preciounitario: precio }));
    }
  }, [form.productoid, productos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productoid = toInt(form.productoid);
    const cantidad = toInt(form.cantidad);
    const preciounitario = toFloat(form.preciounitario);

    if (
      !Number.isFinite(productoid) ||
      !Number.isFinite(cantidad) ||
      cantidad <= 0 ||
      !Number.isFinite(preciounitario)
    ) {
      alert('Por favor llena todos los campos correctamente.');
      return;
    }

    await onSubmit?.({ productoid, cantidad, preciounitario });

    addItem({
      id: productoid,
      producto: {
        nombre: productos.find((p) => toInt(p.id) === productoid)?.nombre,
      },
      cantidad,
      precio: preciounitario,
    });

    setForm({ productoid: '', cantidad: '', preciounitario: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur transition"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Gestión de Ventas</h3>
        <p className="text-sm text-slate-600">
          Selecciona un producto, revisa el precio y define la cantidad.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {/* Producto */}
        <div className="md:col-span-7">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Producto
          </label>
          <div className="relative">
            <select
              name="productoid"
              value={form.productoid}
              onChange={handleChange}
              disabled={cargando}
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-slate-50"
            >
              <option value="">
                {cargando ? 'Cargando productos…' : 'Selecciona un producto'}
              </option>
              {productos.map((prod) => (
                <option key={prod.id} value={prod.id}>
                  {prod.nombre}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="md:col-span-5">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Precio Unitario
          </label>
          <div className="flex items-stretch overflow-hidden rounded-xl border border-slate-300 bg-slate-50 shadow-sm">
            <span className="flex items-center px-3 text-slate-500">MXN</span>
            <input
              name="preciounitario"
              type="number"
              value={form.preciounitario}
              readOnly
              className="w-full bg-slate-50 px-3 py-2.5 text-slate-800 outline-none"
              placeholder="Precio Unitario"
              aria-label={`Precio: ${currency.format(
                Number(form.preciounitario || 0)
              )}`}
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            {form.preciounitario
              ? currency.format(Number(form.preciounitario || 0))
              : '—'}
          </p>
        </div>

        <div className="md:col-span-4">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Cantidad
          </label>
          <input
            name="cantidad"
            type="number"
            min="1"
            value={form.cantidad}
            onChange={handleChange}
            placeholder="Cantidad"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue -200"
          />
        </div>

        {/* Botón */}
        <div className="md:col-span-8 flex items-end">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-400 px-4 py-3 font-medium text-white shadow-sm transition hover:brightness-105 active:scale-[.99]"
          >
            <Plus className="h-4 w-4 transition group-hover:scale-110" />
            {initialData.id ? 'Actualizar Venta' : 'Agregar Venta'}
          </button>
        </div>
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
function Plus(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
