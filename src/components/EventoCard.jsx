export default function EventoCard({ imagen, imagenAlt, titulo, hora, lugar, direccion, mapa, textoBoton }) {
  return (
    <section className="bg-white/90 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-sm border border-rose-100 relative z-10">
      <img src={imagen} alt={imagenAlt} className="w-16 mx-auto mb-4" />
      <h3 className="font-serif text-2xl mb-4 text-[#5C463F]">{titulo}</h3>
      <p className="font-medium text-[#5C463F]/90">Hora: {hora}</p>
      <p className="text-sm mt-1 text-[#5C463F]/80">{lugar}</p>
      {direccion && <p className="text-sm mb-5 text-[#5C463F]/80">{direccion}</p>}
      {!direccion && <div className="mb-5" />}
      <a href={mapa} target="_blank" rel="noopener noreferrer"
        className="inline-block bg-[#FDF5F6] border border-rose-200 text-[#5C463F] rounded-full px-6 py-2 text-sm shadow-sm hover:bg-rose-50 transition">
        {textoBoton}
      </a>
    </section>
  );
}
