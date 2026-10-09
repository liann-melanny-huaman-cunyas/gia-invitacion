export default function Portada() {
  return (
    <>
      <h2 className="font-serif italic text-3xl mb-8 text-[#5C463F]/80 mt-4">Mi Bautizo</h2>
      <img src="/koala-rama.png" alt="Koala en una rama" className="w-48 mx-auto mb-6 relative drop-shadow-md" />
      <p className="text-sm italic mb-8 text-[#5C463F]/70 font-serif px-6">
        “Que los ángeles te cuiden y <br/> Dios guíe siempre tus pasos.”
      </p>
      <h1 className="font-serif text-5xl font-bold text-[#C5A059] leading-tight mb-4 drop-shadow-sm">
        GIA AVRIL<br />CHAVEZ
      </h1>
      <p className="text-sm mb-10 text-[#5C463F]/90">
        Acompáñanos a celebrar este<br />sacramento tan especial.
      </p>
      <div className="relative w-64 mx-auto mb-12 flex justify-center">
        <img src="/foto-sobrina.png" alt="Gia Avril" className="w-full h-auto object-contain drop-shadow-xl" />
      </div>
      <div className="flex items-center justify-center gap-4 text-[#C5A059] font-bold mb-4">
        <span className="w-12 h-px bg-[#C5A059]/50" />
        <span className="font-serif text-xl text-[#5C463F]">07 / 11 / 26</span>
        <span className="w-12 h-px bg-[#C5A059]/50" />
      </div>
    </>
  );
}
