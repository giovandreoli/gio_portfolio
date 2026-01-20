import { useWindows } from "../context/WindowContext"

export default function Window({ name, title, children }) {
  const {
    windows,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow
  } = useWindows()

  const win = windows[name]
  if (!win || win.state === "minimized") return null

  return (
    <div
      className={`window ${win.state}`}
      style={{
        top: win.y,
        left: win.x,
        width: win.width,
        height: win.height
      }}
    >
      <div className="title-bar">
        <span>{title}</span>
        <div className="buttons">
          <button onClick={() => minimizeWindow(name)}>_</button>

          {win.state === "maximized" ? (
            <button onClick={() => restoreWindow(name)}>🗗</button>
          ) : (
            <button onClick={() => maximizeWindow(name)}>▢</button>
          )}

          <button onClick={() => closeWindow(name)}>X</button>
        </div>
      </div>

      <div className="window-content">{children}</div>
    </div>
  )
}
