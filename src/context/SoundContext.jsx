import { createContext, useContext, useRef } from "react"

const SoundContext = createContext(null)

export function SoundProvider({ children }) {
  const boot = useRef(null)
  const click = useRef(null)
  const error = useRef(null)

  function init() {
    if (!boot.current) {
      boot.current = new Audio("/sounds/boot.mp3")
      click.current = new Audio("/sounds/click.wav")
      error.current = new Audio("/sounds/error.mp3")
    }
  }

  function playBoot() {
    init()
    boot.current.volume = 0.4
    boot.current.play().catch(() => {})
  }

  function playClick() {
    init()
    click.current.currentTime = 0
    click.current.volume = 0.3
    click.current.play().catch(() => {})
  }

  function playError() {
    init()
    error.current.currentTime = 0
    error.current.volume = 0.4
    error.current.play().catch(() => {})
  }

  return (
    <SoundContext.Provider value={{ playBoot, playClick, playError }}>
      {children}
    </SoundContext.Provider>
  )
}

export function useSound() {
  const ctx = useContext(SoundContext)
  if (!ctx) {
    throw new Error("useSound must be used inside SoundProvider")
  }
  return ctx
}
