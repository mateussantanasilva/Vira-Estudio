import img01 from "@/assets/empresas-reais/01.webp"
import img02 from "@/assets/empresas-reais/02.webp"
import img03 from "@/assets/empresas-reais/03.webp"
import img04 from "@/assets/empresas-reais/04.webp"
import img05 from "@/assets/empresas-reais/05.webp"
import img06 from "@/assets/empresas-reais/06.webp"
import img07 from "@/assets/empresas-reais/07.webp"
import img08 from "@/assets/empresas-reais/08.webp"
import img09 from "@/assets/empresas-reais/09.webp"

export type EmpresaRealImage = {
  src: string
  alt: string
  width: number
  height: number
}

/**
 * Mosaic alinhado a IMG-BANNER-EMPRESAS-REAIS:
 * | 09 | 07 | 02 |   06   |
 * | 04 |        |         |
 * | 01 |   08   | 03 | 05 |
 *
 * Frações de coluna (~23.75% / 36.35% / 39.9%) equilibram a altura
 * natural de cada pilha sem object-cover.
 */
export const empresasReaisImages = {
  left: [
    {
      src: img09,
      alt: "Profissional da saúde com estetoscópio",
      width: 1080,
      height: 1081,
    },
    {
      src: img04,
      alt: "Profissional sorrindo",
      width: 1080,
      height: 724,
    },
    {
      src: img01,
      alt: "Profissional em consultório",
      width: 1080,
      height: 789,
    },
  ],
  midTop: [
    {
      src: img07,
      alt: "Profissional em atendimento",
      width: 1080,
      height: 1065,
    },
    {
      src: img02,
      alt: "Chef em uniforme",
      width: 1080,
      height: 1025,
    },
  ],
  midBottom: {
    src: img08,
    alt: "Profissional em ambiente corporativo",
    width: 1080,
    height: 1162,
  },
  rightTop: {
    src: img06,
    alt: "Profissional em escritório",
    width: 1080,
    height: 1003,
  },
  rightBottom: [
    {
      src: img03,
      alt: "Profissional com produtos artesanais",
      width: 1080,
      height: 982,
    },
    {
      src: img05,
      alt: "Profissional em cozinha",
      width: 1080,
      height: 1082,
    },
  ],
} as const satisfies {
  left: EmpresaRealImage[]
  midTop: EmpresaRealImage[]
  midBottom: EmpresaRealImage
  rightTop: EmpresaRealImage
  rightBottom: EmpresaRealImage[]
}
