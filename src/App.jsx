import Desktop from "./components/Desktop"
import Taskbar from "./components/Taskbar"
import StartMenu from "./components/StartMenu"
import WindowsLayer from "./components/WindowsLayer"
import BootSound from "./components/BootSound"

import { WindowProvider } from "./context/WindowContext"
import { StartMenuProvider } from "./context/StartMenuContext"
import { SoundProvider } from "./context/SoundContext"

import "./style.css"

export default function App() {
  return (
    <SoundProvider>
      <WindowProvider>
        <StartMenuProvider>
          <BootSound />
          <Desktop />
          <WindowsLayer />
          <StartMenu />
          <Taskbar />
        </StartMenuProvider>
      </WindowProvider>
    </SoundProvider>
  )
}
