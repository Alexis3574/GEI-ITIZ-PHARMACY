"use client";
import useFacturas from "@/app/hooks/useFacturas";
import printFactura from "./printfactura";

export default function List() {
  const { list, loading, error, eliminar, listar } = useFacturas();

  const toPDF = (f) => {
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
        fecha: f.fecha?.slice?.(0, 10) || "",
        formaPago: f.formaPago,
        metodoPago: f.metodoPago,
        usoCfdi: f.usoCfdi,
        tasaIvaGlobal: f.tasaIvaGlobal,
        moneda: f.moneda,
        observaciones: f.observaciones,
      },
      items: (f.items || []).map((it) => ({
        descripcion: it.descripcion,
        cantidad: Number(it.cantidad),
        precio: Number(it.precio),
        descuento: Number(it.descuento),
        iva: Number(it.iva),
        importe: Number(it.importe),
      })),
    };
    const totales = {
      subtotal: Number(f.subtotal || 0),
      iva: Number(f.iva || 0),
      descuentos: Number(f.descuentos || 0),
      total: Number(f.total || 0),
    };
    printFactura(datos, totales);
  };

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-800">Facturas</h3>
        <div className="flex items-center gap-3">
          {loading && <span className="text-sm text-gray-500">Cargando…</span>}
          <button
            onClick={listar}
            className="rounded-lg bg-gray-200 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-gray-300"
          >
            Refrescar
          </button>
        </div>
      </div>

      {error && (
        <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="overflow-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="border p-2 text-left">ID</th>
              <th className="border p-2 text-left">Fecha</th>
              <th className="border p-2 text-left">Serie/Folio</th>
              <th className="border p-2 text-left">Cliente</th>
              <th className="border p-2 text-left">Total</th>
              <th className="border p-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {list.map((f) => (
              <tr key={f.id} className="hover:bg-slate-50">
                <td className="border px-3 py-2">{f.id}</td>
                <td className="border px-3 py-2">{(f.fecha || "").slice(0, 10)}</td>
                <td className="border px-3 py-2">
                  {[f.serie, f.folio].filter(Boolean).join("-")}
                </td>
                <td className="border px-3 py-2">{f.clienteNombre}</td>
                <td className="border px-3 py-2 font-semibold">
                  {Number(f.total || 0).toLocaleString("es-MX", {
                    style: "currency",
                    currency: "MXN",
                  })}
                </td>
                <td className="border px-3 py-2 space-x-2">
                  <button
                    onClick={() => toPDF(f)}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    PDF
                  </button>
                  <button
                    onClick={() => eliminar(f.id)}
                    className="text-sm font-medium text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

            {list.length === 0 && !loading && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No hay facturas registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
