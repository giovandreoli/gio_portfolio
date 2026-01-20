import { useEffect, useState } from "react"
import { useWindows } from "../context/WindowContext"
import { useStartMenu } from "../context/StartMenuContext"

export default function Taskbar() {
  const { windows, openWindow } = useWindows()
  const { toggleStart } = useStartMenu()
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div id="taskbar">
      <button id="start-btn" onClick={toggleStart}>
        Iniciar
      </button>

      <div className="task-buttons">
        {windows.map(win => (
          <button
            key={win.id}
            className="task-btn"
            onClick={() => openWindow(win)}
          >
            {win.title}
          </button>
        ))}
      </div>

      <div id="clock">
        {time.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })}
        <br />
        {time.toLocaleDateString("pt-BR")}
      </div>
    </div>
  )
}
