import { useEffect, useRef } from "react"

export default function useBootSound() {
  const audioRef = useRef(null)
  const playedRef = useRef(false)

  useEffect(() => {
    audioRef.current = new Audio("/src/assets/audio/windows-xp-startup.mp3")
    audioRef.current.volume = 0.4
    audioRef.current.muted = true

    const playSound = () => {
      if (!playedRef.current) {
        audioRef.current.play().catch(() => {})
        playedRef.current = true
      }
    }

    window.addEventListener("click", playSound, { once: true })

    return () => {
      window.removeEventListener("click", playSound)
    }
  }, [])
}

return audioRef