'use client';

export default function UserList({ usuarios, onDelete, onUpdateRol, onEdit }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur text-slate-800">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">Usuarios Registrados</h2>

      <div className="overflow-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Usuario</th>
              <th className="px-4 py-2 text-left">Rol</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-slate-200 hover:bg-slate-50"
                >
                  <td className="px-4 py-2">{u.id}</td>
                  <td className="px-4 py-2">{u.nombre}</td>
                  <td className="px-4 py-2">{u.usuario}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        u.rol === 'administrador'
                          ? 'bg-emerald-100 text-blue-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {u.rol}
                    </span>
                  </td>
                  <td className="px-4 py-2 space-x-3">
                    <button
                      onClick={() => onEdit(u)}
                      className="text-sm font-medium text-blue-600 hover:underline"
                      title="Editar usuario"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onDelete(u.id)}
                      className="text-sm font-medium text-red-600 hover:underline"
                      title="Eliminar usuario"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-6 text-center text-slate-500"
                >
                  No hay usuarios registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
