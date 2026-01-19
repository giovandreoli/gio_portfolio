import { useState } from "react"
import { useWindows } from "../context/WindowContext"

export default function Window({ title, name, children }) {
  const { closeWindow, minimizeWindow } = useWindows()
  const [position, setPosition] = useState({ x: 120, y: 120 })
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  function handleMouseDown(e) {
    setDragging(true)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  function handleMouseMove(e) {
    if (!dragging) return
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    })
  }

  function handleMouseUp() {
    setDragging(false)
  }

  return (
    <div
      className="window"
      style={{ top: position.y, left: position.x }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="title-bar" onMouseDown={handleMouseDown}>
        <span>{title}</span>
        <div>
          <button onClick={() => minimizeWindow(name)}>_</button>
          <button onClick={() => closeWindow(name)}>X</button>
        </div>
      </div>

      <div className="window-content">
        {children}
      </div>
    </div>
  )
}
