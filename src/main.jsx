import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./style.css"
import "./index.css"

import { WindowProvider } from "./context/WindowContext.jsx"
import { StartMenuProvider } from "./context/StartMenuContext.jsx"
import { SoundProvider } from "./context/SoundContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WindowProvider>
      <StartMenuProvider>
        <SoundProvider>
          <App />
        </SoundProvider>
      </StartMenuProvider>
    </WindowProvider>
  </StrictMode>
)
