'use client';

export default function TestimonialCard({ nombre, comentario, ubicacion }) {
    return (
      <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
        <p className="text-black italic">"{comentario}"</p>
        <div className="mt-4 text-sm text-black">
          — <span className="font-semibold">{nombre}</span>, {ubicacion}
        </div>
      </div>
    );
  }
  