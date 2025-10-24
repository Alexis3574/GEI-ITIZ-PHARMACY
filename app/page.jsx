'use client';

import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('welcome_seen');
    if (!seen) {
      setShowWelcome(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await signIn('credentials', {
      redirect: false,
      usuario,
      password,
    });

    if (res?.ok) {
      router.push('/dashboard');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const closeWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('welcome_seen', 'true');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-400 via-white to-blue-400 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-xl"
      >
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Iniciar Sesión
        </h2>

        {error && (
          <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-center text-sm font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Usuario
            </label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="mt-1 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full rounded-xl bg-blue-400 px-4 py-2 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1"
          >
            Ingresar
          </motion.button>
        </form>

       
      </motion.div>

      
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-md rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ¡Bienvenido a GI-ITIZ!
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                Esta aplicación te ayudará a gestionar inventario, ventas y
                facturas de forma moderna y eficiente, Ingresa tu correo y contraseña.
              </p>
              <button
                onClick={closeWelcome}
                className="mt-6 w-full rounded-xl bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-500"
              >
                ¡Entendido!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
