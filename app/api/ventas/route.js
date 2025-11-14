import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const ventas = await prisma.ventas.findMany({
      include: {
        detalleventas: { include: { productos: true } },
        facturas: true,
      },
      orderBy: { fecha: "desc" },
    });

    return NextResponse.json(ventas);
  } catch (error) {
    console.error("❌ Error en GET /api/ventas:", error);
    return NextResponse.json(
      { message: "Error al obtener las ventas", detail: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const nuevaVenta = await prisma.ventas.create({
      data: {
        total: body.total ? Number(body.total) : null, 
        metodopago: body.metodopago ?? null,
        fecha: body.fecha ? new Date(body.fecha) : new Date(),
      },
    });

    return NextResponse.json(nuevaVenta);
  } catch (error) {
    console.error("❌ Error en POST /api/ventas:", error);
    return NextResponse.json(
      { message: "Error al crear la venta", detail: error.message },
      { status: 500 }
    );
  }
}
