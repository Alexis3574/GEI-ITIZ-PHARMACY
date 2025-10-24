'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="p-6">
        <div className="h-6 w-48 animate-pulse rounded bg-zinc-200" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-400 via-white to-blue-400 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <main className="flex-grow p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-white dark:bg-zinc-900 shadow-xl p-6 flex flex-col md:flex-row md:justify-between"
        >
          <div className="flex-1">
            
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Bienvenido, {session?.user?.name || session?.user?.email}
            </p>

            <h3 className="mt-6 font-semibold text-zinc-700 dark:text-zinc-200">
              Desde aquí podrás gestionar:
            </h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Resumen',
                'Ventas',
                'Productos',
                'Inventario',
                'Proveedores',
                'Reportes',
                'Facturación',
                'Gestión de Perfiles',
                'Perfil',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-center text-sm font-medium shadow-sm transition hover:bg-blue-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
              Abre la barra desde el ícono para visualizar el contenido del menú.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="md:ml-6 mt-6 md:mt-0 md:self-start"
          >
            <Image
              src="/images/gi-itiz1.png"
              alt="Logo"
              width={260}
              height={260}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
