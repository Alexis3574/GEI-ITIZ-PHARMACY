import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      ventaId,
      total,
      email = "cliente@prueba.com",
      descripcion = "Pago en efectivo",
    } = await req.json();

    if (!ventaId || !total) {
      throw new Error("Faltan datos requeridos (ventaId o total).");
    }

    if (!email || typeof email !== "string") {
      throw new Error("Falta el correo electrónico del cliente.");
    }

    await prisma.ventas.update({
      where: { id: Number(ventaId) },
      data: {
        metodopago: "Efectivo",
        total: Number(total),
      },
    });


    if (
      process.env.EMAIL_HOST &&
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT) || 465,
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const html = `
        <div style="font-family:Arial, sans-serif; max-width:650px; margin:auto; border:1px solid #e2e8f0; border-radius:12px; overflow:hidden; background-color:#ffffff;">
          <div style="background-color:#10b981; color:white; padding:20px; text-align:center;">
            <h2 style="margin:0;">Gestor de Inventario</h2>
            <p style="margin:4px 0 0;font-size:14px;">Comprobante de pago en efectivo</p>
          </div>
          <div style="padding:24px;">
            <p style="font-size:16px;color:#1f2937;">Hola 👋,</p>
            <p style="font-size:15px;color:#374151;">
              Tu pago de <b>$${total} MXN</b> correspondiente a la venta <b>#${ventaId}</b> ha sido registrado correctamente mediante <b>efectivo</b>.
            </p>
            <table style="width:100%;margin-top:16px;border-collapse:collapse;border:1px solid #e5e7eb;">
              <tr style="background-color:#f9fafb;">
                <th style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:left;">Detalle</th>
                <th style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:left;">Valor</th>
              </tr>
              <tr>
                <td style="padding:8px;">Venta ID</td>
                <td style="padding:8px;">#${ventaId}</td>
              </tr>
              <tr>
                <td style="padding:8px;">Método de Pago</td>
                <td style="padding:8px;">Efectivo</td>
              </tr>
              <tr>
                <td style="padding:8px;">Total</td>
                <td style="padding:8px;font-weight:bold;color:#10b981;">$${total}</td>
              </tr>
            </table>
            <p style="font-size:14px;margin-top:8px;color:#6b7280;">
              Fecha: ${new Date().toLocaleString("es-MX")}
            </p>
            <p style="font-size:14px;color:#6b7280;margin-top:24px;text-align:center;">
              Si tienes alguna duda, responde a este correo o comunícate con el equipo de soporte.
            </p>
          </div>
          <div style="background-color:#f3f4f6;padding:12px;text-align:center;font-size:12px;color:#6b7280;">
            © ${new Date().getFullYear()} Gestor de Inventario · Todos los derechos reservados
          </div>
        </div>
      `;

      // 📤 Enviar correo
      await transporter.sendMail({
        from:
          process.env.EMAIL_FROM ||
          `"Gestor de Inventario" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Confirmación de pago en efectivo - Venta #${ventaId}`,
        html,
      });

      console.log(`📧 Correo enviado correctamente a ${email}`);
    } else {
      console.warn("⚠️ No hay configuración SMTP válida en .env.local");
    }

    return NextResponse.json({
      ok: true,
      message: "Pago en efectivo registrado y correo enviado correctamente.",
    });
  } catch (error) {
    console.error("❌ Error en /api/pagos/efectivo:", error);
    return NextResponse.json(
      {
        ok: false,
        message: error.message || "Error desconocido",
        details: error,
      },
      { status: 500 }
    );
  }
}
