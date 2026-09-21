export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "A gente conversa",
    description:
      "Você conta o que precisa, o que já tem e onde quer chegar.",
  },
  {
    number: "02",
    title: "A gente faz",
    description: "Organizamos as ideias e colocamos a mão na massa.",
  },
  {
    number: "03",
    title: "Seu negócio vira",
    description:
      "Você aprova. A gente entrega. E o projeto vai pro mundo.",
  },
]
