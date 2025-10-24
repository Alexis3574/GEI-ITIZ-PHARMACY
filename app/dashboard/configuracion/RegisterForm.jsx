'use client';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [error, setError] = useState(null);
  const [exito, setExito] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const strength = useMemo(() => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score; 
  }, [password]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setExito(null);

    if (password !== confirmar) {
      return setError('Las contraseñas no coinciden');
    }
    if (password.length < 8) {
      return setError('La contraseña debe tener al menos 8 caracteres');
    }

    try {
      setLoading(true);
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, usuario, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return setError(data.error || 'Error al registrar usuario');
      }

      setExito('✅ Registro exitoso.');
      setNombre('');
      setUsuario('');
      setPassword('');
      setConfirmar('');
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError('Error en la red o en el servidor');
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-full max-w-md mx-auto rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur text-slate-800"
    >
      <h2 className="mb-4 text-center text-xl font-bold">Crear Cuenta</h2>

      {error && (
        <div className="mb-3 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </div>
      )}
      {exito && (
        <div className="mb-3 rounded-xl border border-blue-300 bg-emerald-50 px-4 py-2 text-sm text-blue-500">
          {exito}
        </div>
      )}

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium">Nombre completo</label>
        <input
          type="text"
          placeholder="Ej. Juan Pérez"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium">Nombre de usuario</label>
        <input
          type="text"
          placeholder="Ej. jperez"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium">Contraseña</label>
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Mínimo 8 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            required
          />
          <button
            type="button"
            onClick={() => setShowPass((s) => !s)}
            className="absolute inset-y-0 right-2 inline-flex items-center px-2 text-slate-500 hover:text-slate-700"
            aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            title={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPass ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>

        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full transition-all ${
              strength <= 2
                ? 'bg-red-500 w-1/5'
                : strength === 3
                ? 'bg-amber-500 w-2/4'
                : 'bg-emerald-600 w-5/6'
            }`}
            style={{ width: `${Math.max(strength, 1) * 20}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-slate-500">Usa mayúsculas, minúsculas, números y símbolos para una contraseña más fuerte.</p>
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">Confirmar contraseña</label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Repite tu contraseña"
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirm((s) => !s)}
            className="absolute inset-y-0 right-2 inline-flex items-center px-2 text-slate-500 hover:text-slate-700"
            aria-label={showConfirm ? 'Ocultar confirmación' : 'Mostrar confirmación'}
            title={showConfirm ? 'Ocultar confirmación' : 'Mostrar confirmación'}
          >
            {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {confirmar && password !== confirmar && (
          <p className="mt-1 text-xs text-red-600">Las contraseñas no coinciden</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Registrando…' : 'Registrarse'}
      </button>

      <p className="mt-3 text-center text-xs text-slate-500">
        ¿Ya tienes cuenta?{' '}
        <button
          type="button"
          onClick={() => router.push('/login')}
          className="text-blue-700 underline underline-offset-2 hover:text-blue-800"
        >
          Iniciar sesión
        </button>
      </p>
    </form>
  );
}

function Eye(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function EyeOff(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 2.4-4.4" />
      <path d="M9.9 4.2A10.5 10.5 0 0 1 12 4c7 0 11 8 11 8a18.9 18.9 0 0 1-5.1 6.3" />
      <path d="M6.1 6.1A18.8 18.8 0 0 0 1 12s4 8 11 8c1.6 0 3.1-.4 4.5-1.1" />
    </svg>
  );
}
