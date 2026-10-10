import React from 'react';

export default function AgregarCalendario() {
  // Configura aquí los datos de tu evento
  const tituloEvento = "Bautismo de GIA"; // Cambia el título
  const detallesEvento = "¡Te esperamos para celebrar este momento tan especial!";
  const ubicacionEvento = "Santuario San Expedito, C. Bartolomé Mitre 2411";
  
  // Formato de fecha para Google Calendar: YYYYMMDDTHHmmssZ (Hora en UTC)
 const fechaInicio = "20261107T183000Z"; 
  const fechaFin = "20261107T230000Z";

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(tituloEvento)}&dates=${fechaInicio}/${fechaFin}&details=${encodeURIComponent(detallesEvento)}&location=${encodeURIComponent(ubicacionEvento)}`;

  return (
    <div className="mt-8 mb-6 flex flex-col items-center relative z-10">
      <h3 className="text-lg font-serif text-[#5C463F] mb-3">¿Ya agendaste la fecha?</h3>
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#C5A059] text-white px-6 py-3 rounded-full shadow-md font-semibold text-sm tracking-wide transition-transform hover:scale-105 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        AGREGAR A MI CALENDARIO
      </a>
    </div>
  );
}