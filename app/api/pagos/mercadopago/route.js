import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { ventaId, total, email = "cliente@prueba.com", descripcion = "Pago de prueba Mercado Pago" } = await req.json();

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN_TEST;
    if (!accessToken) {
      throw new Error("No se encontró MERCADOPAGO_ACCESS_TOKEN_TEST en .env.local");
    }


    let baseUrl =
      process.env.NEXT_PUBLIC_URL?.trim() ||
      process.env.SERVER_URL?.trim() ||
      "http://localhost:3000";


    const isLocal = baseUrl.includes("localhost") || baseUrl.includes("127.0.0.1");

    console.log("🌍 Base URL usada:", baseUrl);
    console.log("🧪 Modo:", isLocal ? "SANDBOX LOCAL (sin redirección)" : "REDIRECCIÓN REAL");

    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);

    // ✅ Crear preferencia
    const body = {
      items: [
        {
          title: descripcion,
          quantity: 1,
          unit_price: Number(total),
          currency_id: "MXN",
        },
      ],
      payer: { email },
    };

    // Solo añadir back_urls si NO estamos en localhost
    if (!isLocal) {
      body.back_urls = {
        success: `${baseUrl}/pagos/success?ventaId=${ventaId}&email=${email}&total=${total}`,
        failure: `${baseUrl}/pagos/failure`,
        pending: `${baseUrl}/pagos/pending`,
      };
      body.auto_return = "approved";
    }

    const result = await preference.create({ body });

    console.log("✅ Preferencia creada:", result.id, "→", result.init_point);

    // 💾 Actualiza venta
    await prisma.ventas.update({
      where: { id: Number(ventaId) },
      data: { metodopago: "Mercado Pago", total },
    });

    // 💌 Simulación de envío de comprobante
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
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
        <div style="font-family:Arial;padding:20px;border-radius:8px;background:#fff;">
          <h2 style="color:#2563eb;">💳 Pago registrado en Mercado Pago</h2>
          <p>Este es un <b>comprobante de prueba</b> del entorno sandbox.</p>
          <p><b>Venta:</b> #${ventaId}</p>
          <p><b>Monto:</b> $${total} MXN</p>
          <p><b>Correo:</b> ${email}</p>
          <p>Enlace de preferencia (prueba):</p>
          <a href="${result.init_point}" target="_blank" style="color:#2563eb;">Abrir Checkout Sandbox</a>
        </div>
      `;

      await transporter.sendMail({
        from: `"Gestor de Inventario - Prueba" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `🧾 Comprobante de pago - Venta #${ventaId}`,
        html,
      });

      console.log(`📧 Correo de prueba enviado a ${email}`);
    } else {
      console.log("⚠️ No se encontraron credenciales de Gmail, no se envió correo.");
    }

    return NextResponse.json({
      ok: true,
      message: "Preferencia creada correctamente",
      init_point: result.init_point,
    });
  } catch (error) {
    console.error("❌ Error en /api/pagos/mercadopago:", error);
    return NextResponse.json(
      { ok: false, message: error.message || "Error desconocido", details: error },
      { status: 500 }
    );
  }
}
