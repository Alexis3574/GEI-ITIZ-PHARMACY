'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import { CarritoProvider } from '../context/CarritoContext';

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-600">
        Cargando sesión...
      </div>
    );
  }

  return (
    <CarritoProvider>
      <div className="flex min-h-screen transition-all duration-300">
        <aside
          className={`
            bg-gradient-to-b from-blue-300 to-blue-300
            shadow-lg transition-all duration-300 
            ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
        >
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="bg-blue-300 shadow px-6 py-4">
            <Topbar
              user={session?.user}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </header>

          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </CarritoProvider>
  );
}
