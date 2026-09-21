export type NavLink = {
  label: string
  href: string
}

export const mainNavLinks: NavLink[] = [
  { label: "O VIRA", href: "#o-vira" },
  { label: "PROJETOS", href: "#ja-virou" },
  { label: "COMO FUNCIONA", href: "#como-funciona" },
  { label: "SOBRE", href: "#sobre" },
]

export const footerNavColumns = [
  {
    title: "NAVEGA",
    links: mainNavLinks,
  },
  {
    title: "ENCONTRA",
    links: [
      { label: "INSTAGRAM", href: "https://instagram.com" },
      { label: "FACEBOOK", href: "https://facebook.com" },
      { label: "TIKTOK", href: "https://tiktok.com" },
    ],
  },
  {
    title: "CONVERSA",
    links: [
      { label: "WHATSAPP", href: "https://wa.me/5500000000000" },
      { label: "E-MAIL", href: "mailto:ola@viraestudio.com.br" },
    ],
  },
] as const

export const ctaLink = {
  label: "FAZER VIRAR",
  href: "https://wa.me/5500000000000",
} as const
