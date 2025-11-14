"use client";
import { useEffect, useState } from "react";
import ModalEnviarCorreo from "./ModalEnviarCorreo";

export default function ModalMetodoPago({ venta, onClose }) {
  const [metodo, setMetodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [mostrarCorreo, setMostrarCorreo] = useState(false);
  const [datosPago, setDatosPago] = useState(null);
  const [esperandoVenta, setEsperandoVenta] = useState(true);
  const [ventaValida, setVentaValida] = useState(false);


  useEffect(() => {
    if (venta && venta.id) {
      setVentaValida(true);
      setEsperandoVenta(false);
    } else {
      const timer = setTimeout(() => {
        setEsperandoVenta(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [venta]);


  if (esperandoVenta) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-80 text-center shadow-xl">
          <p className="text-gray-600">Cargando información de la venta...</p>
        </div>
      </div>
    );
  }


  if (!ventaValida) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 text-center shadow-xl">
          <h2 className="text-lg font-semibold mb-2">Error</h2>
          <p className="text-gray-600 mb-4">
            No se encontró información de la venta.
          </p>
          <button
            onClick={onClose}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

 
  const handleMetodo = async (tipo) => {
    try {
      setMetodo(tipo);
      setLoading(true);

      if (tipo === "mercadopago") {
        const res = await fetch("/api/pagos/mercadopago", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ventaId: venta.id,
            total: venta.total,
            descripcion: `Pago de venta #${venta.id}`,
          }),
        });
        const data = await res.json();

        if (data.ok && data.init_point) {
          window.open(data.init_point, "_blank");
          alert(" Se abrió Mercado Pago. Completa el pago para continuar.");
          setDatosPago({ metodo: tipo, total: venta.total, ventaId: venta.id });
          setMostrarCorreo(true);
        } else {
          alert(" Error al crear la preferencia de Mercado Pago");
        }
      }

      if (tipo === "efectivo") {
        const res = await fetch("/api/pagos/efectivo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ventaId: venta.id,
            total: venta.total,
            descripcion: `Pago en efectivo de la venta #${venta.id}`,
          }),
        });

        const data = await res.json();
        if (data.ok) {
          alert(" Pago en efectivo registrado correctamente.");
          setDatosPago({ metodo: tipo, total: venta.total, ventaId: venta.id });
          setMostrarCorreo(true);
        } else {
          alert("❌ Error: " + data.message);
        }
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error al procesar el pago");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 shadow-2xl">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Selecciona tu método de pago
          </h2>

          <div className="flex flex-col gap-2">
            <button
              disabled={loading}
              className={`border rounded-md py-2 flex items-center justify-center gap-2 transition ${
                metodo === "mercadopago"
                  ? "bg-blue-100 border-cyan-200 text-blue-700 font-medium"
                  : "hover:bg-blue-50 border-gray-300"
              }`}
              onClick={() => handleMetodo("mercadopago")}
            >
              Mercado Pago
            </button>

            <button
              disabled={loading}
              className={`border rounded-md py-2 flex items-center justify-center gap-2 transition ${
                metodo === "efectivo"
                  ? "bg-green-100 border-green-600 text-green-700 font-medium"
                  : "hover:bg-green-50 border-gray-300"
              }`}
              onClick={() => handleMetodo("efectivo")}
            >
              Efectivo
            </button>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              disabled={loading}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>

      {mostrarCorreo && (
        <ModalEnviarCorreo
          datosPago={datosPago}
          onClose={() => {
            setMostrarCorreo(false);
            onClose();
          }}
        />
      )}
    </>
  );
}
