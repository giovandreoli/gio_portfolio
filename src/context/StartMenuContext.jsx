import { createContext, useContext, useState } from "react"

const StartMenuContext = createContext()

export function StartMenuProvider({ children }) {
  const [open, setOpen] = useState(false)

  function toggleStart() {
    setOpen(prev => !prev)
  }

  function closeStart() {
    setOpen(false)
  }

  return (
    <StartMenuContext.Provider value={{ open, toggleStart, closeStart }}>
      {children}
    </StartMenuContext.Provider>
  )
}

export function useStartMenu() {
  return useContext(StartMenuContext)
}
