import { useEffect, useRef, useState } from "react";

export default function Player({ src, poster }) {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    let hideTimeout
    const handleMove = () => {
      setControlsVisible(true)
      clearTimeout(hideTimeout)
      hideTimeout = setTimeout(() => setControlsVisible(false), 2200)
    }
    const el = containerRef.current
    el.addEventListener('mousemove', handleMove)
    handleMove()
    return () => {
      el.removeEventListener('mousemove', handleMove)
      clearTimeout(hideTimeout)
    }
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  return (
    <div ref={containerRef} className={`relative rounded-md bg-black ${controlsVisible ? 'player-controls-visible' : 'player-controls-hidden'}`} style={{aspectRatio: "16/9"}}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-md"
        onClick={togglePlay}
        aria-label="Video player"
      />
      {/* center large play */}
      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause" : "Play"}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 text-white p-4 rounded-full min-w-[56px] min-h-[56px] flex items-center justify-center"
      >
        {playing ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 5v14M18 5v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 3v18l15-9L5 3z" fill="currentColor"/></svg>
        )}
      </button>

      {/* bottom controls */}
      <div className="controls absolute left-0 right-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-md">
        <div className="flex items-center gap-3">
          <button onClick={togglePlay} aria-label={playing ? "Pause" : "Play"} className="w-10 h-10 flex items-center justify-center rounded-md bg-white/8">
            {playing ? "II" : "▶"}
          </button>
          <div className="flex-1">
            <div className="h-2 bg-white/20 rounded-md overflow-hidden">
              <div className="h-full bg-brand w-[40%]" />
            </div>
            <div className="flex justify-between text-xs text-white/80 mt-1">
              <span>0:45</span>
              <span>4:20</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button aria-label="Captions" className="p-2 rounded-md bg-white/6 text-white">CC</button>
            <button aria-label="Quality" className="p-2 rounded-md bg-white/6 text-white">HD</button>
            <button aria-label="AirPlay" className="p-2 rounded-md bg-white/6 text-white">⤓</button>
          </div>
        </div>
      </div>
    </div>
  )
}
