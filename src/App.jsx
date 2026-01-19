import Desktop from "./components/Desktop"
import Taskbar from "./components/Taskbar"
import StartMenu from "./components/StartMenu"
import Window from "./components/Window"
import ProjectsExplorer from "./components/ProjectsExplorer"
import useBootSound from "./hooks/useBootSound"
import { useWindows } from "./context/WindowContext"

export default function App() {
  useBootSound()
  const { windows } = useWindows()
  const isMobile = window.innerWidth < 768

    {isMobile && (
    <div className="mobile-hint">
        💻 Melhor experiência no desktop
    </div>
    )}

  return (
    <>
      <Desktop />

      {windows.about.open && !windows.about.minimized && (
        <Window title="Sobre Mim" name="about">
          <h2>Giovanna Andreoli</h2>
          <p>Desenvolvedora Fullstack</p>
          <p>HTML, CSS, JavaScript, React, Python, Flask, SQL</p>
        </Window>
      )}

      {windows.projects.open && !windows.projects.minimized && (
        <Window title="Meus Projetos" name="projects">
          <ProjectsExplorer />
        </Window>
      )}

      {windows.contact.open && !windows.contact.minimized && (
        <Window title="Contato" name="contact">
          <p>Email: giovanna@email.com</p>
          <p>GitHub: github.com/giovanna</p>
          <p>LinkedIn: linkedin.com/in/giovanna</p>
        </Window>
      )}

      <StartMenu />
      <Taskbar />
    </>
  )
}
