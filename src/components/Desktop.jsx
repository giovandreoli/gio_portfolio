import { useState, useRef } from "react"
import { useWindows } from "../context/WindowContext"
import { useSound } from "../context/SoundContext"

export default function Desktop() {
  const { openWindow } = useWindows()
  const { playClick } = useSound()

  function open(win) {
    playClick()
    openWindow(win)
  }

  return (
    <div id="desktop">
      <DesktopIcon
        icon="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
        label="Sobre Mim"
        onOpen={() => open("about")}
      />
    </div>
  )
}

function DesktopIcon({ icon, label, onOpen }) {
  const [selected, setSelected] = useState(false)
  const clickTimer = useRef(null)

  function handleClick() {
    setSelected(true)
    clearTimeout(clickTimer.current)
    clickTimer.current = setTimeout(() => {}, 200)
  }

  function handleDoubleClick() {
    clearTimeout(clickTimer.current)
    onOpen()
  }

  return (
    <div
      className={`icon ${selected ? "selected" : ""}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <img src={icon} draggable="false" />
      <span>{label}</span>
    </div>
  )
}
