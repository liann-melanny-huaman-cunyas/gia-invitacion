import React from 'react';

export default function PadrinosFamilia() {
  return (
    <section className="my-10 relative z-10 text-center">
      {/* Título de la sección[cite: 1] */}
      <h2 className="text-4xl font-serif italic text-[#5C463F] mb-6">
        Padrinos y Familia
      </h2>

      <div className="bg-white/80 rounded-3xl shadow-sm border border-[#C5A059]/40 p-8 mx-auto max-w-sm relative">
        
        {/* Decoración superior (opcional, acorde al estilo floral) */}
        <div className="w-2 h-2 border border-[#C5A059] rotate-45 mx-auto mb-6 opacity-70" />

        {/* Sección Madre[cite: 1] */}
        <div className="mb-6">
          <p className="text-sm uppercase tracking-widest text-[#C5A059] font-semibold mb-1">
            Madre:
          </p>
          <p className="text-2xl font-serif text-[#5C463F]">
            Sherelyn Chavez
          </p>
        </div>

        {/* Divisor decorativo[cite: 1] */}
        <div className="flex items-center justify-center gap-2 mb-6 opacity-70">
          <div className="h-px bg-[#C5A059] w-12" />
          <div className="w-1.5 h-1.5 border border-[#C5A059] rotate-45" />
          <div className="h-px bg-[#C5A059] w-12" />
        </div>

        {/* Sección Padrinos[cite: 1] */}
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-[#C5A059] font-semibold mb-2">
            Padrinos:
          </p>
          <p className="text-2xl font-serif text-[#5C463F]">
            Seychi Dávila
          </p>
          <p className="text-lg font-serif text-[#C5A059] my-1">
            &
          </p>
          <p className="text-2xl font-serif text-[#5C463F]">
            Renzo Ayvar
          </p>
        </div>

        {/* Imagen del Koala decorativo en la esquina (reutilizando tu asset) */}
        <img 
          src="/koala-brindis.png" 
          alt="Koala decorativo" 
          className="absolute -bottom-4 -left-4 w-24 opacity-90 drop-shadow-md pointer-events-none"
        />
      </div>
    </section>
  );
}