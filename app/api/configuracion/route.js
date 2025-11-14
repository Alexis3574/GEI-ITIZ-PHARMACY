import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from '@/lib/prisma';

export async function GET(req) {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const usuarioid = token.id;

    const configuraciones = await prisma.configuracion.findMany({
      where: { usuarioid },
      orderBy: { id: "asc" },
    });

    return NextResponse.json(configuraciones);
  } catch (error) {
    console.error("❌ Error en GET /configuracion:", error);
    return NextResponse.json(
      {
        error: "Error al obtener configuraciones",
        detalle: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const usuarioid = token.id;
    const { clave, valor } = await req.json();

    if (!clave || typeof clave !== "string") {
      return NextResponse.json(
        { error: "Clave inválida o faltante" },
        { status: 400 }
      );
    }

    const valorString =
      typeof valor === "string" ? valor : JSON.stringify(valor ?? null);

    const configuracion = await prisma.configuracion.upsert({
      where: { clave_usuarioid: { clave, usuarioid } },
      update: { valor: valorString },
      create: { clave, valor: valorString, usuarioid },
    });

    return NextResponse.json(configuracion);
  } catch (error) {
    console.error("❌ Error en POST /configuracion:", error);
    return NextResponse.json(
      {
        error: "Error al crear o actualizar configuración",
        detalle: error.message,
      },
      { status: 500 }
    );
  }
}
