import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Music2, ChevronUp, ChevronDown } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(10);
  const [muted, setMuted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : volume / 100;
  }, [volume, muted]);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      return;
    }
    try {
      audio.volume = muted ? 0 : volume / 100;
      await audio.play();
    } catch {
      setPlaying(false);
    }
  }

  function changeVolume(event) {
    const value = Number(event.target.value);
    setVolume(value);
    if (value > 0) setMuted(false);
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/ambient.mp3" loop preload="none"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onError={() => setPlaying(false)} />
      <aside aria-label="Reproductor de música ambiental" className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 max-w-[calc(100vw-24px)]">
        <div className="w-full sm:w-72 rounded-2xl border border-[#C5A059]/70 bg-[#FFFDF9]/95 backdrop-blur-md p-3 shadow-xl">
          <div className="flex items-center gap-3">
            <button type="button" onClick={togglePlayback} aria-label={playing ? "Pausar música" : "Reproducir música"}
              className="w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-[#D8BD77] to-[#A88437] text-white flex items-center justify-center shadow-md active:scale-95">
              {playing ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-[#5C463F]">
                <Music2 className={`w-4 h-4 text-[#C5A059] ${playing ? "animate-pulse" : ""}`} />
                <span className="text-xs font-semibold truncate">Música de ambiente</span>
              </div>
              <p className="text-[11px] italic text-[#8C7335]">{playing ? "Sonando suavemente" : "Toca Play para escuchar"}</p>
            </div>
            <button type="button" onClick={() => setExpanded(!expanded)} aria-label="Mostrar control de volumen" className="p-2 rounded-lg text-[#8C7335]">
              {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
          {expanded && (
            <div className="mt-3 border-t border-[#C5A059]/25 pt-3">
              <div className="flex items-center justify-between text-xs mb-2">
                <label htmlFor="music-volume">Volumen</label>
                <span>{muted ? "Silenciado" : `${volume}%`}</span>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label={muted ? "Activar sonido" : "Silenciar"} onClick={() => setMuted(!muted)} className="text-[#8C7335]">
                  {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input id="music-volume" aria-label="Volumen de música" type="range" min="0" max="100" value={muted ? 0 : volume} onChange={changeVolume} className="w-full accent-[#C5A059]" />
              </div>
              <p className="text-[10px] text-[#8C7335] mt-2">Añade tu archivo en public/audio/ambient.mp3.</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
