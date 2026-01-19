import { useWindows } from "../context/WindowContext"

export default function Desktop() {
  const { openWindow } = useWindows()

  return (
    <div id="desktop">
      <div className="icon" onClick={() => openWindow("about")}>
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png" />
        <span>Sobre Mim</span>
      </div>

      <div className="icon" onClick={() => openWindow("projects")}>
        <img src="https://cdn-icons-png.flaticon.com/512/716/716784.png" />
        <span>Projetos</span>
      </div>

      <div className="icon" onClick={() => openWindow("contact")}>
        <img src="https://cdn-icons-png.flaticon.com/512/906/906864.png" />
        <span>Contato</span>
      </div>
    </div>
  )
}
