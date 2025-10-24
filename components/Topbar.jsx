'use client';

import { signOut } from 'next-auth/react';
import { Menu } from 'lucide-react';

export default function Topbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="flex items-center justify-between w-full h-14 px-4 bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 shadow-sm backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-blue-400 hover:bg-blue-50 dark:hover:bg-zinc-800 transition"
          aria-label="Abrir menú"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
          Gestor de Inventario
        </h1>
      </div>

      <div>
        <button
          onClick={() => signOut()}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
