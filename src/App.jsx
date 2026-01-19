import Desktop from "./components/Desktop"
import Window from "./components/Window"

import MyComputer from "./components/MyComputer"
import ProjectsExplorer from "./components/ProjectsExplorer"

import { useWindows } from "./context/WindowContext.jsx"

export default function App() {
  const { windows } = useWindows()

  return (
    <>
      <Desktop />

      {windows.computer && (
        <Window title="Meu Computador" windowId="computer">
          <MyComputer />
        </Window>
      )}

      {windows.projects && (
        <Window title="Projetos" windowId="projects">
          <ProjectsExplorer />
        </Window>
      )}
    </>
  )
}
