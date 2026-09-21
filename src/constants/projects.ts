import { images } from "@/constants/images"

export type ProjectAccent = "green" | "orange" | "black" | "gray"

export type Project = {
  id: string
  title: string
  categories: string[]
  imageUrl: string
  imageAlt: string
  accent: ProjectAccent
  visible: boolean
}

export const projects: Project[] = [
  {
    id: "dra-ieda",
    title: "Dra. Ieda Lis Ciolette",
    categories: ["social media", "design"],
    imageUrl: images.cases.draIeda,
    imageAlt: "Mockups de social media da Dra. Ieda Lis Ciolette",
    accent: "green",
    visible: true,
  },
  {
    id: "lamor-gourmet",
    title: "Lamor Gourmet",
    categories: ["social media", "design"],
    imageUrl: images.cases.lamorGourmet,
    imageAlt: "Mockups de Instagram da Lamor Gourmet",
    accent: "black",
    visible: true,
  },
  {
    id: "positiva-temperos",
    title: "Positiva Temperos",
    categories: ["social media", "design"],
    imageUrl: images.cases.positivaTemperos,
    imageAlt: "Produtos e posts da Positiva Temperos",
    accent: "orange",
    visible: true,
  },
  {
    id: "adriane-santos-brand",
    title: "Adriane Santos",
    categories: ["social media", "design"],
    imageUrl: images.cases.adrianeSantosBrand,
    imageAlt: "Identidade visual Adriane Santos",
    accent: "gray",
    visible: true,
  },
  {
    id: "pietro-lavvi",
    title: "Pietro Lavvi",
    categories: ["desenvolvimento", "design"],
    imageUrl: images.cases.pietroLavvi,
    imageAlt: "Site imobiliário Pietro Lavvi em mockup de laptop",
    accent: "green",
    visible: true,
  },
  {
    id: "adriane-santos-site",
    title: "Adriane Santos",
    categories: ["branding", "design", "social media"],
    imageUrl: images.cases.adrianeSantosSite,
    imageAlt: "Site Adriane Santos em mockup de laptop",
    accent: "orange",
    visible: true,
  },
  {
    id: "instituto-qdm",
    title: "Instituto QDM",
    categories: ["social media", "design"],
    imageUrl: images.cases.institutoQdm,
    imageAlt: "Projeto de social media do Instituto QDM",
    accent: "orange",
    visible: true,
  },
  {
    id: "casa-editorial-ba",
    title: "Casa Editorial BA",
    categories: ["desenvolvimento", "design", "social media"],
    imageUrl: images.cases.casaEditorialBa,
    imageAlt: "Site e Instagram da Casa Editorial BA",
    accent: "black",
    visible: true,
  },
]

export const visibleProjects = projects.filter((project) => project.visible)
