import FondoMagico from "./components/FondoMagico";
import FloresDoradas from "./components/FloresDoradas";
import Portada from "./components/Portada";
import Contador from "./components/Contador";
import PadrinosFamilia from "./components/PadrinosFamilia";
import MusicPlayer from "./components/MusicPlayer";
import EventoCard from "./components/EventoCard";
import ConfirmacionWhatsApp from "./components/ConfirmacionWhatsApp";
// 1. IMPORTA EL NUEVO COMPONENTE
import AgregarCalendario from "./components/AgregarCalendario"; 

export default function App() {
  return (
    <main className="min-h-screen bg-[#FDF5F6] text-[#5C463F] font-sans relative flex justify-center">
      
      {/* Fondo decorativo */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('/fondo-brillos.jpg')] bg-cover bg-center" />

      {/* Contenedor principal de la invitación */}
      <div className="w-full max-w-md bg-white/40 backdrop-blur-sm shadow-2xl relative z-10 pb-24 overflow-hidden">
        
        {/* Flores doradas laterales */}
        <FondoMagico />
        <FloresDoradas />

        {/* Contenido principal */}
        <div className="px-6 pt-12 text-center relative z-10">
          
          <Portada />
          <Contador />
          <PadrinosFamilia />

          {/* Música */}
          {/* ... (Tu código de Spotify se mantiene igual) ... */}

          {/* Ceremonia religiosa */}
          <EventoCard
            imagen="/cruz-floral.png"
            imagenAlt="Cruz floral"
            titulo="Ceremonia religiosa"
            hora="15:30 hs"
            lugar="Santuario San Expedito"
            direccion="C. Bartolomé Mitre 2411"
            mapa="https://www.google.com/maps/search/?api=1&query=Santuario+San+Expedito+C+Bartolome+Mitre+2411"
            textoBoton="Ver ubicación"
          />

          {/* Recepción */}
          <EventoCard
            imagen="/koala-brindis.png"
            imagenAlt="Koala de brindis"
            titulo="Recepción"
            hora="17:00 hs"
            lugar="Larguia 14, Villa Celina"
            direccion=""
            mapa="https://www.google.com/maps/search/?api=1&query=Larguia+14+Villa+Celina"
            textoBoton="Cómo llegar"
          />

          {/* 2. AGREGA EL COMPONENTE DE CALENDARIO AQUÍ */}
          <AgregarCalendario />

          {/* Confirmación de asistencia */}
          <ConfirmacionWhatsApp />

        </div>
      </div>

      {/* Reproductor de música flotante */}
      <MusicPlayer />
    </main>
  );
}