"use client";

import { Suspense, useEffect, useState } from "react";
import ReporteForm from "../reportes/Form";
import ReporteList from "../reportes/List";

export const dynamic = "force-dynamic";

export default function PageReportes() {
  const [editingId, setEditingId] = useState(null);
  const [reportes, setReportes] = useState([]);

  const cargarReportes = async () => {
    try {
      const res = await fetch("/api/reportes", { cache: "no-store" });
      const json = await res.json();

      
      setReportes(json.data || []);
    } catch (error) {
      console.error("Error cargando reportes:", error);
    }
  };

  useEffect(() => {
    cargarReportes();
  }, []);

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
            >
              Cancelar edición
            </button>
          )}
        </header>

        <Suspense fallback={<SkeletonGrid />}>
          <div className="grid gap-6 lg:grid-cols-2">
            
          
            <ReporteForm 
              editingId={editingId} 
              onSaved={() => {
                setEditingId(null);
                cargarReportes();   
              }} 
            />

         
            <ReporteList
              reportes={reportes}    
              onEdit={(item) => setEditingId(item?.id)}
              onDelete={async (id) => {
                await fetch(`/api/reportes/${id}`, { method: "DELETE" });
                cargarReportes();  
              }}
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
