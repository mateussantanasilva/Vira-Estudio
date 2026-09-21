import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

type MenuContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  openMenu: () => void
  closeMenu: () => void
}

const MenuContext = createContext<MenuContextValue | null>(null)

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openMenu = useCallback(() => setOpen(true), [])
  const closeMenu = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, setOpen, openMenu, closeMenu }),
    [open, openMenu, closeMenu]
  )

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export function useMenu() {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error("useMenu must be used within MenuProvider")
  }
  return context
}
