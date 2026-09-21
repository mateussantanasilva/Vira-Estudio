import iconViraCreme from "@/assets/ICON-VIRA-CREME-SEM-FUNDO.webp"
import imgSecaoEmpresasPequenas from "@/assets/IMG-SECAO-EMPRESAS-PEQUENAS.webp"
import imgSecaoSobre from "@/assets/SECAO-SOBRE-IMG-COMPLETA.webp"
import logoViraBlack from "@/assets/LOGO-VIRA-BLACK-SEM-FUNDO.webp"
import logoViraCreme from "@/assets/LOGO-VIRA-CREME-SEM-FUNDO.webp"
import case01 from "@/assets/ja-virou-cases/IMGS-SECAO-JA-VIROU-01.webp"
import case02 from "@/assets/ja-virou-cases/IMGS-SECAO-JA-VIROU-02.webp"
import case03 from "@/assets/ja-virou-cases/IMGS-SECAO-JA-VIROU-03.webp"
import case04 from "@/assets/ja-virou-cases/IMGS-SECAO-JA-VIROU-04.webp"
import case05 from "@/assets/ja-virou-cases/IMGS-SECAO-JA-VIROU-05.webp"
import case06 from "@/assets/ja-virou-cases/IMGS-SECAO-JA-VIROU-06.webp"
import case07 from "@/assets/ja-virou-cases/IMGS-SECAO-JA-VIROU-07.webp"
import case08 from "@/assets/ja-virou-cases/IMGS-SECAO-JA-VIROU-08.webp"

export const images = {
  logoBlack: logoViraBlack,
  logoCreme: logoViraCreme,
  iconCreme: iconViraCreme,
  manifesto: imgSecaoEmpresasPequenas,
  sobre: imgSecaoSobre,
  cases: {
    draIeda: case01,
    lamorGourmet: case02,
    positivaTemperos: case03,
    adrianeSantosBrand: case04,
    pietroLavvi: case05,
    adrianeSantosSite: case06,
    institutoQdm: case07,
    casaEditorialBa: case08,
  },
} as const
