"use client";
import { useMemo, useState } from "react";
import { generarPDFReporteLibre } from "@/lib/pdf/reportesTextoPdf";

export default function List({
  reportes = [],             
  onEdit,                   
  onDelete,                   
}) {
  const [q, setQ] = useState("");

  const getFecha = (r) => r.fecha || r.createdAt || r.created_at || r.updatedAt || null;

  const fmtFecha = (d) => {
    try {
      if (!d) return "—";
      return new Intl.DateTimeFormat("es-MX", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(d));
    } catch {
      return "—";
    }
  };

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return reportes;
    return reportes.filter((r) =>
      [
        r?.tipo,
        r?.datos?.contenido,
        String(r?.id),
        String(getFecha(r)),
      ]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(term))
    );
  }, [reportes, q]);

  const handlePreview = (r) => {
    const doc = generarPDFReporteLibre({
      titulo: "Reporte",
      tipo: r.tipo,
      contenido: r?.datos?.contenido || "",
      autor: "Administrador",
      marcaNoOficial: true,
    });
    window.open(doc.output("bloburl"), "_blank");
  };

  const handleDownload = (r) => {
    const doc = generarPDFReporteLibre({
      titulo: "Reporte",
      tipo: r.tipo,
      contenido: r?.datos?.contenido || "",
      autor: "Administrador",
      marcaNoOficial: true,
    });
    doc.save(`Reporte_${r.tipo || "general"}_${r.id ?? ""}.pdf`);
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur text-slate-800">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Lista de Reportes</h2>
          <p className="text-sm text-slate-600">Explora, exporta y gestiona tus reportes.</p>
        </div>
        <div className="w-full sm:w-80">
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por tipo, contenido o fecha…"
              className="w-full rounded-xl border border-slate-300 bg-white px-10 py-2.5 text-sm shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
              <SearchIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="sticky top-0 z-10 bg-blue-400 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Tipo</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Resumen</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Fecha</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 bg-white">
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                    {q ? "No hay resultados para la búsqueda." : "No hay reportes guardados."}
                  </td>
                </tr>
              )}

              {rows.map((r, idx) => (
                <tr key={r.id ?? idx} className="transition hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm text-slate-700">{r.id ?? "—"}</td>
                  <td className="px-4 py-3 text-sm font-medium text-slate-800">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs">
                      <DocIcon className="h-3 w-3" />
                      {r.tipo || "—"}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-sm text-slate-700">
                    <span
                      title={r?.datos?.contenido || ""}
                      className="line-clamp-1 block max-w-[46ch] truncate"
                    >
                      {r?.datos?.contenido || "—"}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-sm text-slate-700">{fmtFecha(getFecha(r))}</td>

                  <td className="px-4 py-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => handlePreview(r)}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
                        title="Previsualizar PDF (no oficial)"
                      >
                        <EyeIcon className="h-4 w-4" />
                        Ver
                      </button>
                      <button
                        onClick={() => handleDownload(r)}
                        className="inline-flex items-center gap-1 rounded-lg bg-sky-600 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm transition hover:brightness-105"
                        title="Descargar PDF"
                      >
                        <DownloadIcon className="h-4 w-4" />
                        Descargar
                      </button>
                      <button
                        onClick={() => onEdit?.(r)}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
                        title="Editar"
                      >
                        <EditIcon className="h-4 w-4" />
                        Editar
                      </button>
                      <button
                        onClick={() => onDelete?.(r.id)}
                        className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-sm text-red-700 transition hover:bg-red-100"
                        title="Eliminar"
                      >
                        <TrashIcon className="h-4 w-4" />
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
function DocIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}
function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}
function EditIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );
}
function TrashIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    </svg>
  );
}
