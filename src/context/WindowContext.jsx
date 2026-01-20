import { createContext, useContext, useState } from "react"

const WindowContext = createContext(null)

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState({})

  function openWindow(name) {
    setWindows(prev => {
      if (prev[name]) return prev
      return {
        ...prev,
        [name]: {
          state: "normal",
          x: 120,
          y: 120,
          width: 500,
          height: 350,
          prev: null
        }
      }
    })
  }

  function closeWindow(name) {
    setWindows(prev => {
      const copy = { ...prev }
      delete copy[name]
      return copy
    })
  }

  function minimizeWindow(name) {
    setWindows(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        state: "minimized"
      }
    }))
  }

  function maximizeWindow(name) {
    setWindows(prev => {
      const win = prev[name]
      return {
        ...prev,
        [name]: {
          ...win,
          prev: { ...win },
          state: "maximized",
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight - 40
        }
      }
    })
  }

  function restoreWindow(name) {
    setWindows(prev => {
      const win = prev[name]
      if (!win || !win.prev) return prev

      return {
        ...prev,
        [name]: {
          ...win.prev,
          state: "normal"
        }
      }
    })
  }

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        restoreWindow
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export function useWindows() {
  const ctx = useContext(WindowContext)
  if (!ctx) {
    throw new Error("useWindows must be used inside WindowProvider")
  }
  return ctx
}
