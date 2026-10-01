export type NavLink = {
  label: string
  href: string
}

export const mainNavLinks: NavLink[] = [
  { label: "O VIRA", href: "/#o-vira" },
  { label: "PROJETOS", href: "/#ja-virou" },
  { label: "COMO FUNCIONA", href: "/#como-funciona" },
  { label: "SOBRE", href: "/#sobre" },
]

export const footerNavColumns = [
  {
    title: "NAVEGA",
    links: mainNavLinks,
  },
  {
    title: "ENCONTRA",
    links: [
      { label: "INSTAGRAM", href: "https://www.instagram.com/oviraestudio" },
      { label: "TIKTOK", href: "https://www.tiktok.com/@oviraestudio" },
    ],
  },
  {
    title: "CONVERSA",
    links: [
      { label: "(11) 98334-2471", href: "https://wa.me/5511983342471" },
      { label: "oviraestudio@gmail.com", href: "mailto:oviraestudio@gmail.com" },
    ],
  },
] as const

export const ctaLink = {
  label: "FAZER VIRAR",
  href: "https://wa.me/5511983342471",
} as const
