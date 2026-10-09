const decoraciones = [
  { id: 1, src: "/mariposa.png", ancho: "w-6", top: "8%", left: "12%", opacity: "opacity-60", rot: "-rotate-12" },
  { id: 2, src: "/flor.png", ancho: "w-8", top: "18%", left: "80%", opacity: "opacity-40", rot: "rotate-45" },
  { id: 3, src: "/destello.png", ancho: "w-4", top: "28%", left: "25%", opacity: "opacity-70", rot: "rotate-0" },
  { id: 4, src: "/mariposa.png", ancho: "w-5", top: "45%", left: "85%", opacity: "opacity-50", rot: "rotate-12" },
  { id: 5, src: "/flor.png", ancho: "w-10", top: "58%", left: "10%", opacity: "opacity-30", rot: "-rotate-45" },
  { id: 6, src: "/flor.png", ancho: "w-7", top: "75%", left: "78%", opacity: "opacity-60", rot: "rotate-12" },
  { id: 7, src: "/mariposa.png", ancho: "w-8", top: "88%", left: "15%", opacity: "opacity-40", rot: "-rotate-12" },
];

export default function FondoMagico() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {decoraciones.map((deco) => (
        <img key={deco.id} src={deco.src} alt="" className={`absolute ${deco.ancho} ${deco.opacity} ${deco.rot} animate-pulse drop-shadow-sm`} style={{ top: deco.top, left: deco.left }} />
      ))}
    </div>
  );
}
