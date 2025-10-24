'use client';

export default function TicketVentas({ detalles = [] }) {
  const totalGeneral = (detalles || []).reduce((acc, d) => {
    const precio = Number(d.preciounitario) || 0;
    const cant = Number(d.cantidad) || 0;
    return acc + precio * cant;
  }, 0);

  const hoy = new Date().toLocaleDateString('es-MX');

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded text-black">
      <button
        onClick={() => window.print()}
        className="mb-4 rounded bg-blue-400 px-4 py-2 text-white hover:brightness-110"
      >
        Imprimir Ticket
      </button>

      <div id="ticket" className="text-center">
        <h2 className="font-bold text-lg">Ticket de Ventas</h2>
        <p className="text-sm">{hoy}</p>
        <hr className="my-2" />

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left font-semibold">
              <th>Producto</th>
              <th>Cant.</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {detalles.map((it) => {
              const nombre = it.productos?.nombre ?? `#${it.productoid ?? 'N/A'}`;
              const cantidad = Number(it.cantidad) || 0;
              const precio = Number(it.preciounitario) || 0;
              return (
                <tr key={it.id}>
                  <td>{nombre}</td>
                  <td>{cantidad}</td>
                  <td>${precio.toFixed(2)}</td>
                  <td>${(cantidad * precio).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <hr className="my-2" />
        <p className="text-right font-bold">
          Total del día: ${totalGeneral.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
