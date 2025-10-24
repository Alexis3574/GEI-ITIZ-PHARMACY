'use client';

import { useState, useEffect } from 'react';
import { useUsuarios } from '../../hooks/useUsuarios';
import UserForm from './UserForm';
import UserList from './UserList';
import Form from './Form'; 
import { useSession } from 'next-auth/react';
import { message } from 'antd';

export default function ConfiguracionPage() {
  const { usuarios, crear: crearUsuario, eliminar, actualizarRol, actualizar } =
    useUsuarios();

  const [usuarioEditar, setUsuarioEditar] = useState(null);

  const [configuracion, setConfiguracion] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    fetch('/api/configuracion')
      .then(res => res.json())
      .then(data => setConfiguracion(data))
      .catch(err => console.error(err));
  }, []);

  const handleSave = async (formData) => {
    if (usuarioEditar) {
      await actualizar(usuarioEditar.id, formData);
      setUsuarioEditar(null);
    } else {
      await crearUsuario(formData);
    }
  };

  const handleEdit = (usuario) => {
    setUsuarioEditar(usuario);
  };

  const handleSaveConfig = async (clave, valor) => {
    try {
      const res = await fetch(`/api/configuracion/${clave}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ valor }),
      });
      if (res.ok) {
        message.success(`Configuración ${clave} actualizada`);
      } else {
        message.error('Error al guardar configuración');
      }
    } catch (error) {
      console.error(error);
      message.error('Error al guardar configuración');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 text-slate-800">
      <header>
        <h1 className="text-3xl font-bold text-blue-700">
          Configuración del Sistema
        </h1>
        <p className="text-slate-600 mt-1 text-sm">
          Administra usuarios y personaliza la aplicación.
        </p>
      </header>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <UserForm
            onSubmit={handleSave}
            usuarioEditar={usuarioEditar}
            onCancelEdit={() => setUsuarioEditar(null)}
          />
        </div>

        <UserList
          usuarios={usuarios}
          onDelete={eliminar}
          onUpdateRol={actualizarRol}
          onEdit={handleEdit}
        />
      </section>

      {session?.user?.rol === 'administrador' && (
        <section className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Personalización de la Aplicación
          </h2>
          <Form configuracion={configuracion} onSave={handleSaveConfig} />
        </section>
      )}
    </div>
  );
}
