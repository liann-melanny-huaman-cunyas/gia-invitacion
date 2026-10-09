import FondoMagico from "./components/FondoMagico";
import Portada from "./components/Portada";
import Contador from "./components/Contador";
import MusicPlayer from "./components/MusicPlayer";
import EventoCard from "./components/EventoCard";
import ConfirmacionWhatsApp from "./components/ConfirmacionWhatsApp";

export default function App() {
  return (
    <main className="min-h-screen bg-[#FDF5F6] text-[#5C463F] font-sans relative flex justify-center">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('/fondo-brillos.jpg')] bg-cover bg-center" />
      <div className="w-full max-w-md bg-white/40 backdrop-blur-sm shadow-2xl relative z-10 pb-24 overflow-hidden">
        <FondoMagico />
        <div className="px-6 pt-12 text-center relative z-10">
          <Portada />
          <Contador />
          <section className="my-14 relative z-10">
            <div className="w-2 h-2 border border-[#C5A059] rotate-45 mx-auto mb-6 opacity-70" />
            <p className="text-xs italic text-[#5C463F]/70 font-serif mb-5">Un momento especial para acompañar este día</p>
            <div className="bg-white/90 rounded-2xl shadow-sm border border-[#C5A059]/40 p-3">
              <iframe
                title="Canción en Spotify"
                src="https://open.spotify.com/embed/track/0IaW6NFaem0rcjxH3ZYZqs?utm_source=generator"
                width="100%"
                height="152"
                style={{ borderRadius: 12 }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
              <a className="mt-3 inline-block text-xs font-semibold text-[#168746]" href="https://open.spotify.com/search/Cazzu%20Inti" target="_blank" rel="noreferrer">
                Abrir en Spotify ↗
              </a>
            </div>
          </section>
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
          <ConfirmacionWhatsApp />
        </div>
      </div>
      <MusicPlayer />
    </main>
  );
}
