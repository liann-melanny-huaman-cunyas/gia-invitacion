const decoraciones = [
  // --- FRONTERA SUPERIOR / ESQUINAS ALTAS (0% - 15% TOP) ---
  { id: 1, src: "/mariposa.png", ancho: "w-6", top: "2%", left: "4%", opacity: "opacity-60", rot: "-rotate-45" },
  { id: 2, src: "/flor.png", ancho: "w-8", top: "1%", left: "88%", opacity: "opacity-45", rot: "rotate-12" },
  { id: 3, src: "/destello.png", ancho: "w-3", top: "3%", left: "25%", opacity: "opacity-80", rot: "rotate-0" },
  { id: 4, src: "/hoja.png", ancho: "w-6", top: "4%", left: "93%", opacity: "opacity-40", rot: "rotate-45" },
  { id: 5, src: "/petalo.png", ancho: "w-4", top: "5%", left: "15%", opacity: "opacity-50", rot: "rotate-12" },
  { id: 6, src: "/flor.png", ancho: "w-7", top: "6%", left: "75%", opacity: "opacity-55", rot: "rotate-45" },
  { id: 7, src: "/mariposa.png", ancho: "w-5", top: "8%", left: "2%", opacity: "opacity-40", rot: "-rotate-12" },
  { id: 8, src: "/hoja.png", ancho: "w-5", top: "9%", left: "82%", opacity: "opacity-50", rot: "-rotate-45" },
  { id: 9, src: "/destello.png", ancho: "w-4", top: "10%", left: "12%", opacity: "opacity-80", rot: "rotate-45" },
  { id: 10, src: "/petalo.png", ancho: "w-4", top: "11%", left: "91%", opacity: "opacity-60", rot: "rotate-90" },
  { id: 11, src: "/flor.png", ancho: "w-6", top: "12%", left: "7%", opacity: "opacity-45", rot: "rotate-30" },
  { id: 12, src: "/mariposa.png", ancho: "w-6", top: "13%", left: "85%", opacity: "opacity-65", rot: "rotate-12" },
  { id: 13, src: "/destello.png", ancho: "w-3", top: "14%", left: "19%", opacity: "opacity-90", rot: "-rotate-12" },
  { id: 14, src: "/petalo.png", ancho: "w-5", top: "15%", left: "96%", opacity: "opacity-40", rot: "rotate-0" },

  // --- ZONA MEDIA ALTA - ALREDEDOR DEL "MI BAUTIZO" Y KOALA (16% - 35% TOP) ---
  { id: 15, src: "/mariposa.png", ancho: "w-7", top: "17%", left: "83%", opacity: "opacity-60", rot: "rotate-45" },
  { id: 16, src: "/flor.png", ancho: "w-5", top: "18%", left: "5%", opacity: "opacity-45", rot: "-rotate-12" },
  { id: 17, src: "/destello.png", ancho: "w-4", top: "19%", left: "89%", opacity: "opacity-75", rot: "rotate-45" },
  { id: 18, src: "/hoja.png", ancho: "w-5", top: "21%", left: "2%", opacity: "opacity-35", rot: "-rotate-45" },
  { id: 19, src: "/mariposa.png", ancho: "w-5", top: "22%", left: "12%", opacity: "opacity-40", rot: "-rotate-12" },
  { id: 20, src: "/petalo.png", ancho: "w-4", top: "23%", left: "78%", opacity: "opacity-50", rot: "rotate-90" },
  { id: 21, src: "/flor.png", ancho: "w-6", top: "24%", left: "8%", opacity: "opacity-50", rot: "rotate-15" },
  { id: 22, src: "/hoja.png", ancho: "w-6", top: "26%", left: "92%", opacity: "opacity-40", rot: "-rotate-12" },
  { id: 23, src: "/destello.png", ancho: "w-3", top: "27%", left: "16%", opacity: "opacity-70", rot: "rotate-30" },
  { id: 24, src: "/mariposa.png", ancho: "w-6", top: "29%", left: "84%", opacity: "opacity-55", rot: "rotate-12" },
  { id: 25, src: "/flor.png", ancho: "w-8", top: "30%", left: "3%", opacity: "opacity-35", rot: "-rotate-30" },
  { id: 26, src: "/petalo.png", ancho: "w-4", top: "32%", left: "95%", opacity: "opacity-55", rot: "rotate-45" },
  { id: 27, src: "/destello.png", ancho: "w-4", top: "33%", left: "10%", opacity: "opacity-80", rot: "rotate-12" },
  { id: 28, src: "/hoja.png", ancho: "w-5", top: "35%", left: "88%", opacity: "opacity-45", rot: "-rotate-45" },

  // --- ZONA CENTRAL - COSTADOS (36% - 60% TOP) ---
  { id: 29, src: "/mariposa.png", ancho: "w-5", top: "37%", left: "4%", opacity: "opacity-45", rot: "-rotate-12" },
  { id: 30, src: "/flor.png", ancho: "w-7", top: "38%", left: "91%", opacity: "opacity-40", rot: "rotate-30" },
  { id: 31, src: "/hoja.png", ancho: "w-6", top: "40%", left: "8%", opacity: "opacity-30", rot: "-rotate-12" },
  { id: 32, src: "/petalo.png", ancho: "w-4", top: "41%", left: "82%", opacity: "opacity-50", rot: "rotate-45" },
  { id: 33, src: "/destello.png", ancho: "w-3", top: "43%", left: "1%", opacity: "opacity-70", rot: "rotate-0" },
  { id: 34, src: "/mariposa.png", ancho: "w-7", top: "44%", left: "87%", opacity: "opacity-55", rot: "rotate-30" },
  { id: 35, src: "/flor.png", ancho: "w-6", top: "46%", left: "12%", opacity: "opacity-45", rot: "rotate-15" },
  { id: 36, src: "/hoja.png", ancho: "w-5", top: "47%", left: "94%", opacity: "opacity-35", rot: "-rotate-30" },
  { id: 37, src: "/petalo.png", ancho: "w-5", top: "49%", left: "3%", opacity: "opacity-40", rot: "rotate-90" },
  { id: 38, src: "/destello.png", ancho: "w-4", top: "51%", left: "80%", opacity: "opacity-80", rot: "rotate-12" },
  { id: 39, src: "/mariposa.png", ancho: "w-6", top: "52%", left: "15%", opacity: "opacity-45", rot: "-rotate-45" },
  { id: 40, src: "/flor.png", ancho: "w-7", top: "54%", left: "86%", opacity: "opacity-50", rot: "rotate-12" },
  { id: 41, src: "/destello.png", ancho: "w-3", top: "55%", left: "6%", opacity: "opacity-60", rot: "rotate-45" },
  { id: 42, src: "/hoja.png", ancho: "w-6", top: "57%", left: "93%", opacity: "opacity-40", rot: "-rotate-12" },
  { id: 43, src: "/petalo.png", ancho: "w-4", top: "59%", left: "10%", opacity: "opacity-45", rot: "rotate-15" },
  { id: 44, src: "/mariposa.png", ancho: "w-5", top: "60%", left: "81%", opacity: "opacity-60", rot: "rotate-30" },

  // --- ZONA MEDIA BAJA (61% - 80% TOP) ---
  { id: 45, src: "/flor.png", ancho: "w-6", top: "61%", left: "14%", opacity: "opacity-50", rot: "rotate-45" },
  { id: 46, src: "/destello.png", ancho: "w-5", top: "63%", left: "89%", opacity: "opacity-80", rot: "rotate-45" },
  { id: 47, src: "/petalo.png", ancho: "w-4", top: "65%", left: "5%", opacity: "opacity-45", rot: "-rotate-45" },
  { id: 48, src: "/mariposa.png", ancho: "w-6", top: "66%", left: "76%", opacity: "opacity-35", rot: "-rotate-12" },
  { id: 49, src: "/hoja.png", ancho: "w-5", top: "68%", left: "1%", opacity: "opacity-40", rot: "rotate-12" },
  { id: 50, src: "/flor.png", ancho: "w-7", top: "69%", left: "95%", opacity: "opacity-45", rot: "-rotate-30" },
  { id: 51, src: "/destello.png", ancho: "w-3", top: "71%", left: "11%", opacity: "opacity-75", rot: "rotate-0" },
  { id: 52, src: "/petalo.png", ancho: "w-4", top: "72%", left: "83%", opacity: "opacity-60", rot: "rotate-45" },
  { id: 53, src: "/mariposa.png", ancho: "w-6", top: "74%", left: "8%", opacity: "opacity-50", rot: "rotate-15" },
  { id: 54, src: "/hoja.png", ancho: "w-6", top: "76%", left: "90%", opacity: "opacity-50", rot: "-rotate-15" },
  { id: 55, src: "/flor.png", ancho: "w-5", top: "77%", left: "3%", opacity: "opacity-55", rot: "rotate-45" },
  { id: 56, src: "/destello.png", ancho: "w-4", top: "79%", left: "86%", opacity: "opacity-70", rot: "rotate-12" },
  { id: 57, src: "/petalo.png", ancho: "w-5", top: "80%", left: "15%", opacity: "opacity-40", rot: "-rotate-12" },

  // --- ZONA INFERIOR / ESQUINAS BAJAS (81% - 100% TOP) ---
  { id: 58, src: "/flor.png", ancho: "w-9", top: "82%", left: "9%", opacity: "opacity-45", rot: "-rotate-45" },
  { id: 59, src: "/hoja.png", ancho: "w-6", top: "83%", left: "88%", opacity: "opacity-45", rot: "rotate-12" },
  { id: 60, src: "/destello.png", ancho: "w-3", top: "85%", left: "20%", opacity: "opacity-75", rot: "rotate-0" },
  { id: 61, src: "/petalo.png", ancho: "w-4", top: "86%", left: "82%", opacity: "opacity-55", rot: "rotate-45" },
  { id: 62, src: "/mariposa.png", ancho: "w-7", top: "88%", left: "5%", opacity: "opacity-45", rot: "rotate-12" },
  { id: 63, src: "/flor.png", ancho: "w-6", top: "89%", left: "94%", opacity: "opacity-50", rot: "rotate-30" },
  { id: 64, src: "/hoja.png", ancho: "w-5", top: "91%", left: "12%", opacity: "opacity-40", rot: "-rotate-45" },
  { id: 65, src: "/destello.png", ancho: "w-4", top: "92%", left: "77%", opacity: "opacity-85", rot: "rotate-45" },
  { id: 66, src: "/petalo.png", ancho: "w-4", top: "93%", left: "1%", opacity: "opacity-50", rot: "rotate-15" },
  { id: 67, src: "/mariposa.png", ancho: "w-6", top: "95%", left: "84%", opacity: "opacity-60", rot: "-rotate-12" },
  { id: 68, src: "/flor.png", ancho: "w-8", top: "96%", left: "18%", opacity: "opacity-35", rot: "rotate-45" },
  { id: 69, src: "/hoja.png", ancho: "w-6", top: "97%", left: "92%", opacity: "opacity-40", rot: "rotate-12" },
  { id: 70, src: "/destello.png", ancho: "w-3", top: "98%", left: "8%", opacity: "opacity-80", rot: "rotate-0" },
  { id: 71, src: "/petalo.png", ancho: "w-5", top: "99%", left: "75%", opacity: "opacity-55", rot: "-rotate-30" },
  { id: 72, src: "/mariposa.png", ancho: "w-5", top: "99%", left: "3%", opacity: "opacity-45", rot: "rotate-45" },
];

export default function FondoMagico() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {decoraciones.map((deco) => (
        <img
          key={deco.id}
          src={deco.src}
          alt=""
          className={`absolute ${deco.ancho} ${deco.opacity} ${deco.rot} animate-pulse drop-shadow-sm transition-transform duration-500 hover:scale-110`}
          style={{ top: deco.top, left: deco.left }}
          onError={(e) => {
            e.currentTarget.src = "/flor.png";
          }}
        />
      ))}
    </div>
  );
}