import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(req) {
  try {
    const { email, asunto, mensaje, venta, detalles } = await req.json();

    if (!email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: email, asunto o mensaje" },
        { status: 400 }
      );
    }

    
     const transporter = nodemailer.createTransport({
     host: process.env.EMAIL_HOST,
     port: Number(process.env.EMAIL_PORT),
     secure: true,
     auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS,
      },
    });

    console.log("📨 SMTP CONFIG:", {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
    });

    
    const html = `
      <div style="font-family:'Segoe UI',sans-serif;max-width:650px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;background-color:#ffffff;">
        <!-- ENCABEZADO -->
        <div style="background-color:#10b981;color:white;padding:20px;text-align:center;">
          <h2 style="margin:0;">Gestor de Inventario</h2>
          <p style="margin:4px 0 0;font-size:14px;">${asunto}</p>
        </div>

        <!-- CUERPO -->
        <div style="padding:24px;">
          <p style="font-size:16px;color:#1f2937;">Hola ,</p>
          <p style="font-size:15px;color:#374151;">${mensaje}</p>

          ${
            venta
              ? `
              <table style="width:100%;margin-top:16px;border-collapse:collapse;border:1px solid #e5e7eb;">
                <tr style="background-color:#f9fafb;">
                  <th style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:left;">Detalle</th>
                  <th style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:left;">Valor</th>
                </tr>
                <tr><td style="padding:8px;">Venta ID</td><td style="padding:8px;">#${venta.id ?? "N/A"}</td></tr>
                <tr><td style="padding:8px;">Método de Pago</td><td style="padding:8px;">${venta.metodopago ?? "No especificado"}</td></tr>
                <tr><td style="padding:8px;">Total</td><td style="padding:8px;font-weight:bold;color:#10b981;">$${venta.total ?? "0.00"}</td></tr>
              </table>
              <p style="font-size:14px;margin-top:8px;color:#6b7280;">Fecha: ${new Date(
                venta.fecha || new Date()
              ).toLocaleString("es-MX")}</p>
            `
              : ""
          }

          ${
            detalles && detalles.length > 0
              ? `
              <h3 style="margin-top:24px;font-size:16px;color:#111827;">Productos:</h3>
              <table style="width:100%;border-collapse:collapse;margin-top:8px;border:1px solid #e5e7eb;">
                <tr style="background-color:#f9fafb;">
                  <th style="text-align:left;padding:8px;">Producto</th>
                  <th style="text-align:right;padding:8px;">Cantidad</th>
                  <th style="text-align:right;padding:8px;">Precio</th>
                  <th style="text-align:right;padding:8px;">Subtotal</th>
                </tr>
                ${detalles
                  .map(
                    (d) => `
                    <tr>
                      <td style="padding:8px;">${d.productos?.nombre || "Producto"}</td>
                      <td style="text-align:right;padding:8px;">${d.cantidad}</td>
                      <td style="text-align:right;padding:8px;">$${Number(
                        d.preciounitario || 0
                      ).toFixed(2)}</td>
                      <td style="text-align:right;padding:8px;">$${(
                        Number(d.cantidad || 0) * Number(d.preciounitario || 0)
                      ).toFixed(2)}</td>
                    </tr>`
                  )
                  .join("")}
              </table>
            `
              : ""
          }

          <p style="font-size:14px;color:#6b7280;margin-top:24px;text-align:center;">
            Si tienes alguna duda, responde a este correo o contacta con el soporte de Gestor de Inventario.
          </p>
        </div>

        <!-- PIE -->
        <div style="background-color:#f3f4f6;padding:12px;text-align:center;font-size:12px;color:#6b7280;">
          © ${new Date().getFullYear()} Gestor de Inventario · Todos los derechos reservados
        </div>
      </div>
    `;

   
    await delay(1500); 

    
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || "Gestor de Inventario <no-reply@zacru.app>",
      to: email,
      subject: asunto,
      html,
    });

    console.log("✅ Correo enviado correctamente a:", email, "| ID:", info.messageId);

    return NextResponse.json({ ok: true, messageId: info.messageId });
  } catch (error) {
    console.error("❌ Error al enviar correo:", error);
    return NextResponse.json(
      { error: "Error al enviar correo", detail: error.message },
      { status: 500 }
    );
  }
}
