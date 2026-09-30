import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { CasePage } from "./pages/case-page.tsx"
import { Home } from "./pages/home.tsx"

const caseMatch = window.location.pathname.match(/^\/cases\/([^/]+)\/?$/)
const projectId = caseMatch ? decodeURIComponent(caseMatch[1]) : null

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {projectId ? <CasePage projectId={projectId} /> : <Home />}
  </StrictMode>,
)
