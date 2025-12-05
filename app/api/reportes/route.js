import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import dayjs from "dayjs";

function parseIntOr(value, fallback) {
  const n = parseInt(value, 10);
  return Number.isFinite(n) ? n : fallback;
}

export async function GET(request) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);

    const q = searchParams.get("q")?.trim() || "";
    const tipo = searchParams.get("tipo")?.trim() || "";
    const desde = searchParams.get("desde");
    const hasta = searchParams.get("hasta");

    const page = parseIntOr(searchParams.get("page"), 1);
    const pageSize = Math.min(parseIntOr(searchParams.get("pageSize"), 10), 100);

    const where = {};

    
    if (tipo) {
      where.tipo = {
        contains: tipo,
        mode: "insensitive",
      };
    }

   
    if (q) {
      where.OR = [
        { tipo: { contains: q, mode: "insensitive" } },
        { datos: { path: ["contenido"], string_contains: q } },
      ];
    }

    if (desde || hasta) {
      where.fecha = {};
      if (desde) where.fecha.gte = dayjs(desde).startOf("day").toDate();
      if (hasta) where.fecha.lte = dayjs(hasta).endOf("day").toDate();
    }

   
    const [total, items] = await Promise.all([
      prisma.reportes.count({ where }),
      prisma.reportes.findMany({
        where,
        orderBy: { fecha: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        select: {
          id: true,
          tipo: true,
          fecha: true,
          datos: true,
        },
      }),
    ]);

    return NextResponse.json({
      data: items,
      pagination: {
        total,
        page,
        pageSize,
        pages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    console.error("GET /api/reportes error:", error);
    return NextResponse.json(
      { error: "Error interno al listar reportes" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const { tipo, datos } = body || {};

    const errors = [];

    if (!tipo || !tipo.trim()) {
      errors.push("El campo 'tipo' es obligatorio.");
    }
    if (!datos || !datos.contenido || !datos.contenido.trim()) {
      errors.push("El campo 'contenido' no puede estar vacío.");
    }

    if (errors.length) {
      return NextResponse.json(
        { error: errors.join(" ") },
        { status: 400 }
      );
    }

    const created = await prisma.reportes.create({
      data: {
        tipo: tipo.trim(),
        datos: {
          contenido: datos.contenido.trim(),
        },
        fecha: new Date(),
      },
    });

    return NextResponse.json(
      {
        data: created,
        message: "Reporte creado correctamente.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/reportes error:", error);
    return NextResponse.json(
      { error: "Error interno al crear el reporte" },
      { status: 500 }
    );
  }
}
