import Window from "./Window"
import { useWindows } from "../context/WindowContext"

export default function WindowsLayer() {
  const { windows } = useWindows()

  return (
    <>
      {Object.entries(windows).map(([name, win]) => {
        if (win.state === "minimized") return null

        return (
          <Window
            key={name}
            name={name}
            title={name.toUpperCase()}
          >
            <p>Conteúdo da janela {name}</p>
          </Window>
        )
      })}
    </>
  )
}
