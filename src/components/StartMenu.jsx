import { useState } from "react"
import { useWindows } from "../context/WindowContext"

export default function StartMenu() {
  const [open, setOpen] = useState(false)
  const { openWindow } = useWindows()

  function handleOpen(name) {
    openWindow(name)
    setOpen(false)
  }

  return (
    <>
      <button id="start-btn" onClick={() => setOpen(!open)}>
        Iniciar
      </button>

      {open && (
        <div id="start-menu">
          <p onClick={() => handleOpen("about")}>Sobre Mim</p>
          <p onClick={() => handleOpen("projects")}>Projetos</p>
          <p onClick={() => handleOpen("contact")}>Contato</p>
        </div>
      )}
    </>
  )
}
