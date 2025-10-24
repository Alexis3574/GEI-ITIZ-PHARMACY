'use client';

import Head from 'next/head';
import { useEffect, useState, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

export default function Resumen() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [resumen, setResumen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      fetchResumen();
    }
  }, [status]);

  const fetchResumen = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch('/api/dashboard/resumen');
      if (!res.ok) throw new Error('Error al cargar resumen');
      const data = await res.json();
      setResumen(data);
    } catch (error) {
      console.error('❌ Error al obtener resumen:', error);
      setError('No se pudo cargar el resumen.');
    } finally {
      setLoading(false);
    }
  };

  const currency = useMemo(
    () =>
      new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 2,
      }),
    []
  );

  const statItems = useMemo(
    () => [
      {
        id: 'ventasDia',
        title: 'Ventas del Día',
        value: currency.format(Number(resumen?.ventasDia || 0)),
        accent: 'from-emerald-500 to-emerald-600',
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 3h18v4H3z"/>
            <path d="M5 7v14h14V7"/>
            <path d="M9 11h6"/>
          </svg>
        ),
      },
      {
        id: 'stockBajo',
        title: 'Stock Bajo',
        value: `${resumen?.stockBajo || 0} productos`,
        accent: 'from-amber-500 to-amber-600',
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 7l9-4 9 4-9 4-9-4z"/>
            <path d="M3 12l9 4 9-4"/>
            <path d="M3 17l9 4 9-4"/>
          </svg>
        ),
      },
      {
        id: 'proximosCaducar',
        title: 'Próximos a Caducar',
        value: `${resumen?.proximosCaducar || 0} productos`,
        accent: 'from-cyan-500 to-cyan-600',
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 7v6l4 2"/>
          </svg>
        ),
      },
      {
        id: 'masVendido',
        title: 'Más Vendido',
        value: resumen?.masVendido || '—',
        accent: 'from-violet-500 to-violet-600',
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 17l-5 3 1.9-5.9L4 9h6.2L12 3l1.8 6H20l-4.9 5.1L17 20z"/>
          </svg>
        ),
      },
    ],
    [currency, resumen]
  );

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Head>
          <title>Resumen | Cargando…</title>
        </Head>
        <main className="mx-auto w-full max-w-7xl px-6 py-10">
          <PageHeader name={session?.user?.name} showSubtitle shimmer />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonStatCard key={i} />
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="mb-4 h-6 w-40 animate-pulse rounded bg-slate-200" />
            <div className="h-[300px] animate-pulse rounded-xl bg-slate-100" />
          </div>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="mb-4 h-6 w-56 animate-pulse rounded bg-slate-200" />
            <ul className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="h-10 animate-pulse rounded-lg bg-slate-100" />
              ))}
            </ul>
          </div>
        </main>
      </div>
    );
  }

  if (error || !resumen) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Head>
          <title>Resumen | Error</title>
        </Head>
        <main className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-6 px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 shadow-sm">
              <h1 className="text-xl font-semibold text-red-700">No se pudo cargar el resumen</h1>
              <p className="mt-2 text-red-600/90">{error || 'Intenta recargar la página.'}</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <button onClick={fetchResumen} className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-white transition hover:brightness-105">
                  <RefreshIcon className="h-4 w-4 transition group-hover:rotate-180" />
                  Reintentar
                </button>
                <button onClick={() => router.push('/')} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-50">
                  Volver al inicio
                </button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Resumen | Panel de Administración</title>
      </Head>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white text-slate-800">
        {/* Radial glow background */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-300 via-sky-200/60 to-violet-200/60 blur-3xl" />

        <main className="mx-auto w-full max-w-7xl px-6 py-10">
          <PageHeader name={session?.user?.name} />

          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {statItems.map((s, idx) => (
              <StatCard key={s.id} title={s.title} value={s.value} accent={s.accent} icon={s.icon} delay={0.05 * idx} />
            ))}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Ventas esta semana</h2>
              <button onClick={fetchResumen} className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50">
                <RefreshIcon className="h-4 w-4 transition group-hover:rotate-180" />
                Actualizar
              </button>
            </div>

            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resumen?.grafico || []} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" tick={{ fill: '#334155' }} tickLine={false} axisLine={{ stroke: '#e2e8f0' }} />
                  <YAxis tick={{ fill: '#334155' }} tickLine={false} axisLine={{ stroke: '#e2e8f0' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="ventas" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
          >
            <h2 className="mb-4 text-xl font-semibold">Últimos Movimientos</h2>
            <ul className="divide-y divide-slate-200">
              {(resumen?.movimientos || []).map((mov) => (
                <li key={mov.id} className="flex items-center gap-4 py-3">
                  <BadgeTipo tipo={mov.tipo} />
                  <div className="flex-1">
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-slate-800">{mov.tipo}</span> — {mov.producto}
                    </p>
                    <p className="text-xs text-slate-500">{mov.cantidad} unidades • {formatDate(mov.fecha)}</p>
                  </div>
                </li>
              ))}
              {(!resumen?.movimientos || resumen.movimientos.length === 0) && (
                <li className="py-6 text-sm text-slate-500">Sin movimientos recientes</li>
              )}
            </ul>
          </motion.section>
        </main>
      </div>
    </>
  );
}

function PageHeader({ name, showSubtitle = true, shimmer = false }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-8 flex flex-col gap-2"
    >
      <h1 className={`text-3xl font-bold tracking-tight ${shimmer ? 'animate-pulse' : ''}`}>Resumen General</h1>
      {showSubtitle && (
        <p className={`text-slate-600 ${shimmer ? 'animate-pulse' : ''}`}>
          Bienvenido, <span className="font-semibold text-slate-800">{name || 'Usuario'}</span>
        </p>
      )}
    </motion.header>
  );
}

function StatCard({ title, value, accent = 'from-blue-500 to-blue-600', icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
    >
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur transition">
        <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-12 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl`} />
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-600">{title}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
          </div>
          <div className="rounded-xl bg-slate-900/5 p-2 text-slate-700 transition group-hover:scale-110">
            {icon}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonStatCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
      <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
      <div className="mt-3 h-7 w-32 animate-pulse rounded bg-slate-200" />
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const v = payload[0]?.value ?? 0;
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow">
        <div className="font-medium text-slate-800">{label}</div>
        <div className="text-slate-600">Ventas: <span className="font-semibold text-slate-800">{v}</span></div>
      </div>
    );
  }
  return null;
}

function BadgeTipo({ tipo }) {
  const map = {
    Venta: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Entrada: 'bg-sky-100 text-sky-700 border-sky-200',
    Salida: 'bg-amber-100 text-amber-700 border-amber-200',
  };
  const cls = map[tipo] || 'bg-slate-100 text-slate-700 border-slate-200';
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs ${cls}`}>
      <DotIcon className="h-3 w-3" />
      {tipo}
    </span>
  );
}

function DotIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}

function RefreshIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}

function formatDate(dateLike) {
  try {
    const d = new Date(dateLike);
    return new Intl.DateTimeFormat('es-MX', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(d);
  } catch {
    return String(dateLike ?? '');
  }
}
