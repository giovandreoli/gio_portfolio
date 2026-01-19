import { createContext, useContext, useState } from "react"

const WindowContext = createContext(null)

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState({
    computer: false,
    projects: false,
  })

  function openWindow(name) {
    setWindows(prev => ({ ...prev, [name]: true }))
  }

  function closeWindow(name) {
    setWindows(prev => ({ ...prev, [name]: false }))
  }

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow }}>
      {children}
    </WindowContext.Provider>
  )
}

export function useWindows() {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error("useWindows must be used within WindowProvider")
  }
  return context
}
