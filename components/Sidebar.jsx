'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { useSession } from 'next-auth/react';

const navItems = [
  { name: 'Resumen', path: '/dashboard/resumen' },
  { name: 'Ventas', path: '/dashboard/ventas' },
  { name: 'Productos', path: '/dashboard/productos' },
  { name: 'Inventario', path: '/dashboard/inventario', adminOnly: true },
  { name: 'Proveedores', path: '/dashboard/proveedores', adminOnly: true },
  { name: 'Reportes', path: '/dashboard/reportes', adminOnly: true },
  { name: 'Facturación', path: '/dashboard/facturacion', adminOnly: true },
  { name: 'Configuración', path: '/dashboard/configuracion', adminOnly: true },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const rol = session?.user?.rol;

  const visibleItems = navItems.filter(
    (item) => !item.adminOnly || rol === 'administrador'
  );

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out
      bg-gradient-to-b from-blue-300 to-blue-300 backdrop-blur-sm
      md:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex items-center justify-between md:hidden px-4 py-3">
        <h1 className="text-lg font-bold text-black">GI-ITIZ</h1>
        <button
          onClick={() => setSidebarOpen(false)}
          aria-label="Cerrar sidebar"
          className="rounded-lg p-1.5 text-blue-700/80 hover:bg-emerald-100/80"
        >
          <X size={22} />
        </button>
      </div>

      <div className="hidden md:block px-6 py-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-black">
          GI-ITIZ
        </h1>
      </div>

      <nav className="flex flex-col h-[calc(100%-5rem)] justify-start px-6">
        <ul className="flex flex-col gap-6">
          {visibleItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link href={item.path}>
                  <span
                    className={`block cursor-pointer text-base font-semibold tracking-wide transition
                    ${isActive ? 'text-blue-500' : 'text-gray-600'}
                    hover:text-blue-500`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
