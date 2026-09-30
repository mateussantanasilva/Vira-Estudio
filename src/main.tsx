import { StrictMode, useLayoutEffect } from "react"
import { createRoot } from "react-dom/client"
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router"
import "./index.css"
import { CasePage } from "./pages/case-page.tsx"
import { Home } from "./pages/home.tsx"

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    document.getElementById(id)?.scrollIntoView({
      behavior: "instant",
      block: "start",
    })
  }, [pathname, hash])

  return null
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases/:projectId" element={<CasePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
