import { useEffect, useState } from "react";

const FECHA_EVENTO = new Date("2026-11-07T15:30:00-03:00");

function calcularTiempo() {
  const diferencia = FECHA_EVENTO.getTime() - Date.now();
  if (diferencia <= 0) return { días: 0, horas: 0, min: 0, seg: 0 };
  return {
    días: Math.floor(diferencia / 86400000),
    horas: Math.floor((diferencia / 3600000) % 24),
    min: Math.floor((diferencia / 60000) % 60),
    seg: Math.floor((diferencia / 1000) % 60),
  };
}

export default function Contador() {
  const [tiempo, setTiempo] = useState(calcularTiempo);
  useEffect(() => {
    const timer = setInterval(() => setTiempo(calcularTiempo()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3 my-8 text-center max-w-sm mx-auto relative z-10">
      {Object.entries(tiempo).map(([unidad, valor]) => (
        <div key={unidad} className="bg-white border border-rose-200/60 rounded-xl py-3 px-1 shadow-sm">
          <span className="block text-3xl font-serif text-[#5C463F] mb-1">{valor}</span>
          <span className="text-[10px] uppercase tracking-widest text-[#5C463F]/60">{unidad}</span>
        </div>
      ))}
    </div>
  );
}
