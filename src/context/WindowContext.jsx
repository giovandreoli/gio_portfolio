import { createContext, useContext, useState } from "react"

const WindowContext = createContext()

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState({
    about: { open: false, minimized: false },
    projects: { open: false, minimized: false },
    contact: { open: false, minimized: false },
    computer: { open: false, minimized: false },
  })

  function openWindow(name) {
    setWindows(prev => ({
      ...prev,
      [name]: { open: true, minimized: false }
    }))
  }

  function closeWindow(name) {
    setWindows(prev => ({
      ...prev,
      [name]: { open: false, minimized: false }
    }))
  }

  function minimizeWindow(name) {
    setWindows(prev => ({
      ...prev,
      [name]: { ...prev[name], minimized: true }
    }))
  }

  function restoreWindow(name) {
    setWindows(prev => ({
      ...prev,
      [name]: { open: true, minimized: false }
    }))
  }

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        restoreWindow
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export function useWindows() {
  return useContext(WindowContext)
}
