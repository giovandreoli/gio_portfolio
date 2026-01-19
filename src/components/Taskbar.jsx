import { useWindows } from "../context/WindowContext"

export default function Taskbar() {
  const { windows, restoreWindow } = useWindows()

  return (
    <div id="taskbar">
      <button id="start-btn">Iniciar</button>

      <div className="task-buttons">
        {Object.entries(windows).map(([key, win]) =>
          win.open ? (
            <button
              key={key}
              className="task-btn"
              onClick={() => restoreWindow(key)}
            >
              {key}
            </button>
          ) : null
        )}
      </div>
    </div>
  )
}
