const WHATSAPP_NUMERO = "5491122835555"; // Reemplaza por el número real con código de país, sin + ni espacios.
const MENSAJE_WS = "¡Hola! Confirmo mi asistencia al bautismo de Gia Avril Chávez.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(MENSAJE_WS)}`;

export default function ConfirmacionWhatsApp() {
  return (
    <section className="relative z-20 text-center py-8 sm:py-10">
      <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#3A3533] uppercase mb-3">
        Confirma tu asistencia
      </h3>
      <p className="font-serif text-base sm:text-lg text-[#64605E] max-w-md mx-auto px-4 mb-6 leading-relaxed">
        Nos encantaría contar con tu presencia en esta fecha tan importante para nosotros.
      </p>
      <div className="mt-4 flex justify-center">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="min-h-[48px] px-6 sm:px-8 py-3.5 rounded bg-gradient-to-r from-[#D8BD77] via-[#C5A246] to-[#A88437] font-sans text-xs sm:text-sm font-semibold tracking-[0.12em] text-white uppercase inline-flex items-center justify-center gap-2.5 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A246] active:scale-[0.99]">
          <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.882-9.89 9.882zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.58 0 11.943-5.336 11.946-11.896 0-3.176-1.24-6.165-3.477-8.45z"/>
          </svg>
          <span>Confirmar por WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
