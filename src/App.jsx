import Desktop from "./components/Desktop"
import Window from "./components/Window"

import MyComputer from "./components/MyComputer"
import ProjectsExplorer from "./components/ProjectsExplorer"

import { useWindows } from "./context/WindowContext.jsx"

export default function App() {
  const { windows } = useWindows()

  function renderWindow(type) {
    switch (type) {
      case "computer":
        return (
          <Window key={type} title="Meu Computador" windowId={type}>
            <MyComputer />
          </Window>
        )

      case "projects":
        return (
          <Window key={type} title="Projetos" windowId={type}>
            <ProjectsExplorer />
          </Window>
        )

      default:
        return null
    }
  }

  return (
    <>
      <Desktop />
      {windows.map(renderWindow)}
    </>
  )
}
