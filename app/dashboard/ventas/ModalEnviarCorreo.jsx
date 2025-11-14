"use client";
import { useState } from "react";

export default function ModalEnviarCorreo({ datosPago, onClose }) {
  const [email, setEmail] = useState(datosPago?.email || "");
  const [loading, setLoading] = useState(false);

  const handleEnviar = async () => {
    if (!email || !email.includes("@")) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

    setLoading(true);
    try {
     
      const asunto = `Comprobante de pago #${datosPago?.ventaId || "N/A"} - ${datosPago?.metodo || "Efectivo"}`;
      const mensaje = `Se envía el comprobante del pago realizado mediante ${datosPago?.metodo || "efectivo"} por un total de $${datosPago?.total || "0.00"} MXN.`;

      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          asunto,
          mensaje,
          venta: {
            id: datosPago?.ventaId,
            metodopago: datosPago?.metodo,
            total: datosPago?.total,
            fecha: new Date().toISOString(),
          },
          detalles: datosPago?.detalles || [],
        }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        alert(" Correo enviado correctamente.");
        onClose();
      } else {
        alert(`❌ Error al enviar el correo: ${data?.error || data?.detail || "Error desconocido"}`);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error inesperado al enviar el correo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Enviar comprobante de pago
        </h2>

        <p className="text-sm text-gray-600 mb-3 text-center">
          Ingresa el correo del cliente para enviar el comprobante de la venta #
          {datosPago?.ventaId || "N/A"}.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="cliente@ejemplo.com"
          className="w-full border rounded-md px-3 py-2 mb-4 dark:bg-gray-700 dark:border-gray-600"
        />

        <div className="flex justify-end gap-3">
          <button
            disabled={loading}
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Cancelar
          </button>
          <button
            disabled={loading}
            onClick={handleEnviar}
            className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
}
