"use client";

import { Suspense, useState } from "react";
import ReporteForm from "../reportes/Form";
import ReporteList from "../reportes/List";

export const dynamic = "force-dynamic";

export default function PageReportes() {
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-200/60 via-sky-200/60 to-violet-200/60 blur-3xl" />

      <main className="mx-auto w-full max-w-7xl px-6 py-8">
        <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Reportes</h1>
            <p className="mt-1 text-slate-600">
              Crea, edita y exporta reportes en PDF.
            </p>
          </div>

          {editingId && (
            <button
              type="button"
              onClick={() => setEditingId(null)}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-100"
              title="Cancelar edición"
            >
              <CancelIcon className="h-4 w-4" />
              Cancelar edición
            </button>
          )}
        </header>

        <Suspense fallback={<SkeletonGrid />}>
          <div className="grid gap-6 lg:grid-cols-2">
            <ReporteForm editingId={editingId} onSaved={() => setEditingId(null)} />
            <ReporteList
              // Soporta ambos casos: si la lista manda el objeto o solo el id
              onEdit={(itemOrId) => setEditingId(itemOrId?.id ?? itemOrId)}
            />
          </div>
        </Suspense>
      </main>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
        >
          <div className="mb-4 h-6 w-40 animate-pulse rounded bg-slate-200" />
          <div className="mb-2 h-10 w-full animate-pulse rounded bg-slate-200" />
          <div className="mb-2 h-10 w-5/6 animate-pulse rounded bg-slate-200" />
          <div className="h-40 w-full animate-pulse rounded bg-slate-200" />
        </div>
      ))}
    </div>
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
