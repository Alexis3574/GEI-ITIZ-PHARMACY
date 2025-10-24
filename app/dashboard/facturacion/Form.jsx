"use client";
import { useMemo, useState } from "react";
import useFacturas from "@/app/hooks/useFacturas";
import useFolioCheck from "@/app/hooks/useFolioCheck";
import { validateFacturaPayload } from "./validators";
import printFactura from "./printfactura";

const nuevaLinea = () => ({ descripcion: "", cantidad: 1, precio: 0, descuento: 0, iva: "" });

const initial = {
  ventaid: null,
  folio: "",
  serie: "",
  fecha: new Date().toISOString().slice(0, 10),
  moneda: "MXN",
  formaPago: "PUE",
  metodoPago: "99",
  usoCfdi: "P01",
  tasaIvaGlobal: 16,
  observaciones: "",

  negocioNombre: "",
  negocioRfc: "",
  negocioDir: "",
  negocioTel: "",
  negocioEmail: "",

  clienteNombre: "",
  clienteRfc: "",
  clienteCp: "",
  clienteDir: "",
  clienteEmail: "",
  clienteTel: "",

  items: [nuevaLinea()],
};

export default function Form() {
  const [f, setF] = useState(initial);
  const [errors, setErrors] = useState(null);
  const { crear } = useFacturas();
  const folioState = useFolioCheck(f.serie, f.folio);

  const setCampo = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const setItem = (i, k, v) =>
    setF((p) => {
      const items = p.items.slice();
      items[i] = { ...items[i], [k]: v };
      return { ...p, items };
    });

  const addItem = () => setF((p) => ({ ...p, items: [...p.items, nuevaLinea()] }));
  const delItem = (i) => setF((p) => ({ ...p, items: p.items.filter((_, idx) => idx !== i) }));

  const calcularTotalesMemo = useMemo(() => {
    const tasaGlobal = Number(f.tasaIvaGlobal || 0);
    let subtotal = 0,
      iva = 0,
      descuentos = 0;
    (f.items || []).forEach((it) => {
      const cantidad = Number(it.cantidad || 0);
      const precio = Number(it.precio || 0);
      const descPct = Number(it.descuento || 0);
      const base = cantidad * precio;
      const desc = base * (descPct / 100);
      const baseDesc = base - desc;
      const tIva = it.iva !== "" && it.iva != null ? Number(it.iva) : tasaGlobal;
      const ivaItem = baseDesc * (tIva / 100);
      subtotal += baseDesc;
      iva += ivaItem;
      descuentos += desc;
    });
    return {
      subtotal: Number(subtotal.toFixed(2)),
      iva: Number(iva.toFixed(2)),
      descuentos: Number(descuentos.toFixed(2)),
      total: Number((subtotal + iva).toFixed(2)),
    };
  }, [f.items, f.tasaIvaGlobal]);

  const validar = () => {
    const v = validateFacturaPayload(f);
    setErrors(v.errors || null);
    return v.ok;
  };

  const onGuardar = async () => {
    if (!validar()) {
      alert("Corrige los errores");
      return;
    }
    try {
      await crear(f);
      alert("Factura guardada");
    } catch (e) {
      alert(`Error: ${e.message}`);
    }
  };

  const onPDF = () => {
    if (!validar()) {
      alert("Corrige los errores");
      return;
    }
    const datos = {
      negocio: {
        nombre: f.negocioNombre,
        rfc: f.negocioRfc,
        direccion: f.negocioDir,
        telefono: f.negocioTel,
        email: f.negocioEmail,
      },
      cliente: {
        nombre: f.clienteNombre,
        rfc: f.clienteRfc,
        cp: f.clienteCp,
        direccion: f.clienteDir,
        email: f.clienteEmail,
        telefono: f.clienteTel,
      },
      factura: {
        fecha: f.fecha,
        formaPago: f.formaPago,
        metodoPago: f.metodoPago,
        usoCfdi: f.usoCfdi,
        tasaIvaGlobal: f.tasaIvaGlobal,
        moneda: f.moneda,
        observaciones: f.observaciones,
      },
      items: f.items.map((it) => ({
        ...it,
        importe: (() => {
          const cantidad = Number(it.cantidad || 0);
          const precio = Number(it.precio || 0);
          const desc = cantidad * precio * (Number(it.descuento || 0) / 100);
          const baseDesc = cantidad * precio - desc;
          const tIva = it.iva !== "" && it.iva != null ? Number(it.iva) : Number(f.tasaIvaGlobal || 0);
          const iva = baseDesc * (tIva / 100);
          return Number((baseDesc + iva).toFixed(2));
        })(),
      })),
    };
    printFactura(datos, calcularTotalesMemo);
  };

  const err = (path) => errors?.[path];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Nueva Factura</h2>
        <div className="flex gap-3">
          <button onClick={onGuardar} className="rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white shadow-sm hover:bg-emerald-700">
            Guardar
          </button>
          <button onClick={onPDF} className="rounded-lg bg-sky-600 px-5 py-2 font-semibold text-white shadow-sm hover:bg-sky-700">
            PDF
          </button>
        </div>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="text-sm font-medium">Serie</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.serie} onChange={(e) => setCampo("serie", e.target.value.toUpperCase())} maxLength={10} />
          </div>
          <div>
            <label className="text-sm font-medium">Folio</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.folio} onChange={(e) => setCampo("folio", e.target.value)} maxLength={50} />
            {folioState.checking && <p className="text-xs text-gray-500">Verificando…</p>}
            {folioState.error && <p className="text-xs text-red-600">{folioState.error}</p>}
            {folioState.exists && !folioState.checking && <p className="text-xs text-red-600">Folio ya existe</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Fecha</label>
            <input type="date" className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.fecha} onChange={(e) => setCampo("fecha", e.target.value)} />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-3 text-lg font-semibold">Datos del negocio</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">Nombre *</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.negocioNombre} onChange={(e) => setCampo("negocioNombre", e.target.value)} />
            {err("negocioNombre") && <p className="text-xs text-red-600">{err("negocioNombre")}</p>}
          </div>
          <div>
            <label className="text-sm">RFC</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.negocioRfc} onChange={(e) => setCampo("negocioRfc", e.target.value.toUpperCase())} />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Dirección</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.negocioDir} onChange={(e) => setCampo("negocioDir", e.target.value)} />
          </div>
          <div>
            <label className="text-sm">Teléfono</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.negocioTel} onChange={(e) => setCampo("negocioTel", e.target.value)} />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.negocioEmail} onChange={(e) => setCampo("negocioEmail", e.target.value)} />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-3 text-lg font-semibold">Datos del cliente</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">Nombre *</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.clienteNombre} onChange={(e) => setCampo("clienteNombre", e.target.value)} />
            {err("clienteNombre") && <p className="text-xs text-red-600">{err("clienteNombre")}</p>}
          </div>
          <div>
            <label className="text-sm">RFC</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.clienteRfc} onChange={(e) => setCampo("clienteRfc", e.target.value.toUpperCase())} />
          </div>
          <div>
            <label className="text-sm">CP</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.clienteCp} onChange={(e) => setCampo("clienteCp", e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Dirección</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.clienteDir} onChange={(e) => setCampo("clienteDir", e.target.value)} />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.clienteEmail} onChange={(e) => setCampo("clienteEmail", e.target.value)} />
          </div>
          <div>
            <label className="text-sm">Teléfono</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.clienteTel} onChange={(e) => setCampo("clienteTel", e.target.value)} />
          </div>
        </div>
      </section>

      {/* Datos de factura */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-3 text-lg font-semibold">Datos de factura</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="text-sm">Moneda</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.moneda} onChange={(e) => setCampo("moneda", e.target.value)} />
          </div>
          <div>
            <label className="text-sm">Forma de pago</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.formaPago} onChange={(e) => setCampo("formaPago", e.target.value)} />
          </div>
          <div>
            <label className="text-sm">Método de pago</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.metodoPago} onChange={(e) => setCampo("metodoPago", e.target.value)} />
          </div>
          <div>
            <label className="text-sm">Uso CFDI</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.usoCfdi} onChange={(e) => setCampo("usoCfdi", e.target.value)} />
          </div>
          <div>
            <label className="text-sm">IVA Global (%) *</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.tasaIvaGlobal} onChange={(e) => setCampo("tasaIvaGlobal", e.target.value)} />
            {errors?.tasaIvaGlobal && <p className="text-xs text-red-600">{errors.tasaIvaGlobal}</p>}
          </div>
          <div className="md:col-span-3">
            <label className="text-sm">Observaciones</label>
            <textarea rows={3} className="mt-1 w-full rounded-lg border px-3 py-2 shadow-sm" value={f.observaciones} onChange={(e) => setCampo("observaciones", e.target.value)} />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Conceptos</h3>
          <button onClick={addItem} type="button" className="rounded-lg bg-slate-800 px-3 py-1 text-white shadow-sm hover:bg-slate-900">
            Agregar
          </button>
        </div>
        <div className="overflow-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border p-2">Descripción *</th>
                <th className="border p-2">Cant. *</th>
                <th className="border p-2">P. Unit *</th>
                <th className="border p-2">Desc. %</th>
                <th className="border p-2">IVA %</th>
                <th className="border p-2"></th>
              </tr>
            </thead>
            <tbody>
              {f.items.map((it, i) => (
                <tr key={i}>
                  <td className="border p-2">
                    <input className="w-full rounded border px-2 py-1" value={it.descripcion} onChange={(e) => setItem(i, "descripcion", e.target.value)} />
                    {errors?.itemsDetail?.[i]?.descripcion && <p className="text-xs text-red-600">{errors.itemsDetail[i].descripcion}</p>}
                  </td>
                  <td className="border p-2">
                    <input type="number" className="w-24 rounded border px-2 py-1" value={it.cantidad} onChange={(e) => setItem(i, "cantidad", e.target.value)} />
                  </td>
                  <td className="border p-2">
                    <input type="number" className="w-28 rounded border px-2 py-1" value={it.precio} onChange={(e) => setItem(i, "precio", e.target.value)} />
                  </td>
                  <td className="border p-2">
                    <input type="number" className="w-20 rounded border px-2 py-1" value={it.descuento} onChange={(e) => setItem(i, "descuento", e.target.value)} />
                  </td>
                  <td className="border p-2">
                    <input type="number" className="w-20 rounded border px-2 py-1" value={it.iva} onChange={(e) => setItem(i, "iva", e.target.value)} placeholder={`vacío = ${f.tasaIvaGlobal}%`} />
                  </td>
                  <td className="border p-2">
                    <button onClick={() => delItem(i)} type="button" className="text-red-600 hover:underline">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {errors?.items && <p className="mt-2 text-xs text-red-600">{errors.items}</p>}
        </div>
      </section>

      {/* Totales */}
      <section className="flex flex-col justify-between gap-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row">
        <p className="text-sm text-slate-600">Los totales mostrados son orientativos; el backend recalcula al guardar.</p>
        <div className="space-y-1 text-right">
          <div>
            Subtotal:{" "}
            <strong>{calcularTotalesMemo.subtotal.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</strong>
          </div>
          <div>
            IVA:{" "}
            <strong>{calcularTotalesMemo.iva.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</strong>
          </div>
          {calcularTotalesMemo.descuentos > 0 && (
            <div>
              Descuentos:{" "}
              <strong>-{calcularTotalesMemo.descuentos.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</strong>
            </div>
          )}
          <div className="text-lg">
            TOTAL:{" "}
            <strong>{calcularTotalesMemo.total.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
