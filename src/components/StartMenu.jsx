import { useStartMenu } from "../context/StartMenuContext"
import { useWindows } from "../context/WindowContext"
import { useSound } from "../context/SoundContext"

export default function StartMenu() {
  const { open, closeStart } = useStartMenu()
  const { openWindow } = useWindows()
  const { playClick } = useSound()

  if (!open) return null

  function openProgram(win) {
    playClick()
    openWindow(win)
    closeStart()
  }

  function shutdown() {
    playClick()
    closeStart()
    setTimeout(() => {
      window.location.reload()
    }, 300)
  }

  return (
    <div id="start-menu">
      <div className="start-header">
        <img
          src="https://i.imgur.com/0y8Ftya.png"
          alt="user"
        />
        <span>Giovanna</span>
      </div>

      <div className="start-body">
        <p
          onClick={() =>
            openProgram({
              id: "computer",
              title: "Meu Computador",
              content: <p>Skills, tecnologias e experiências</p>,
            })
          }
        >
          Meu Computador
        </p>

        <p
          onClick={() =>
            openProgram({
              id: "projects",
              title: "Projetos",
              content: <p>Projetos fullstack</p>,
            })
          }
        >
          Projetos
        </p>
      </div>

      <div className="start-footer">
        <button onClick={shutdown}>Desligar</button>
      </div>
    </div>
  )
}
