import thumbIkigai from "@/assets/projects/IKIGAI-COSMETICOS/THUMBNAIL.webp"
import logoIkigai from "@/assets/projects/IKIGAI-COSMETICOS/LOGO-IKIGAI.webp"
import ikigai01 from "@/assets/projects/IKIGAI-COSMETICOS/WB-01.webp"
import ikigai02 from "@/assets/projects/IKIGAI-COSMETICOS/WB-02.webp"
import ikigai03 from "@/assets/projects/IKIGAI-COSMETICOS/WB-03.webp"
import thumbPietro from "@/assets/projects/PIETRO-LAVVI/THUMBNAIL.webp"
import logoPietro from "@/assets/projects/PIETRO-LAVVI/LOGO-PIETRO-LAVVI.webp"
import pietro01 from "@/assets/projects/PIETRO-LAVVI/WB-01.webp"
import pietro02 from "@/assets/projects/PIETRO-LAVVI/WB-02.webp"
import pietro03 from "@/assets/projects/PIETRO-LAVVI/WB-03.webp"
import thumbLamor from "@/assets/projects/LAMOR-GOURMET/THUMBNAIL.webp"
import logoLamor from "@/assets/projects/LAMOR-GOURMET/LOGO.webp"
import lamor01 from "@/assets/projects/LAMOR-GOURMET/WB-01.webp"
import lamor02 from "@/assets/projects/LAMOR-GOURMET/WB-02.webp"
import lamor03 from "@/assets/projects/LAMOR-GOURMET/WB-03.webp"
import thumbCasa from "@/assets/projects/CASA-EDITORIAL-BE-AMAZING/THUMBNAIL.webp"
import logoCasa from "@/assets/projects/CASA-EDITORIAL-BE-AMAZING/LOGO.webp"
import casa01 from "@/assets/projects/CASA-EDITORIAL-BE-AMAZING/WB-01.webp"
import casa02 from "@/assets/projects/CASA-EDITORIAL-BE-AMAZING/WB-02.webp"
import casa03 from "@/assets/projects/CASA-EDITORIAL-BE-AMAZING/WB-03.webp"
import thumbAdriane from "@/assets/projects/ADRIANE-SANTOS/THUMBNAIL.webp"
import logoAdriane from "@/assets/projects/ADRIANE-SANTOS/LOGO.webp"
import adriane01 from "@/assets/projects/ADRIANE-SANTOS/WB-01.webp"
import adriane02 from "@/assets/projects/ADRIANE-SANTOS/WB-02.webp"
import adriane03 from "@/assets/projects/ADRIANE-SANTOS/WB-03.webp"
import adriane04 from "@/assets/projects/ADRIANE-SANTOS/WB-04.webp"
import adriane05 from "@/assets/projects/ADRIANE-SANTOS/WB-05.webp"
import thumbSuzie from "@/assets/projects/SUZIE-DARC/THUMBNAIL.webp"
import logoSuzie from "@/assets/projects/SUZIE-DARC/LOGO.webp"
import suzie01 from "@/assets/projects/SUZIE-DARC/WB-01.webp"
import suzie02 from "@/assets/projects/SUZIE-DARC/WB-02.webp"
import suzie03 from "@/assets/projects/SUZIE-DARC/WB-03.webp"
import thumbGeovania from "@/assets/projects/GEOVANIA-MEDEIROS/THUMBNAIL.webp"
import logoGeovania from "@/assets/projects/GEOVANIA-MEDEIROS/LOGO.webp"
import geovania01 from "@/assets/projects/GEOVANIA-MEDEIROS/WB-01.webp"
import geovania02 from "@/assets/projects/GEOVANIA-MEDEIROS/WB-02.webp"
import geovania03 from "@/assets/projects/GEOVANIA-MEDEIROS/WB-03.webp"
import geovania04 from "@/assets/projects/GEOVANIA-MEDEIROS/WB-04.webp"
import geovania05 from "@/assets/projects/GEOVANIA-MEDEIROS/WB-05.webp"
import thumbApis from "@/assets/projects/APIS-COWORKING/THUMBNAIL.webp"
import logoApis from "@/assets/projects/APIS-COWORKING/LOGO.webp"
import apis01 from "@/assets/projects/APIS-COWORKING/WB-01.webp"
import apis02 from "@/assets/projects/APIS-COWORKING/WB-02.webp"
import apis03 from "@/assets/projects/APIS-COWORKING/WB-03.webp"

export type ProjectImage = {
  src: string
  alt: string
}

/** light: arte clara, precisa de fundo gray. dark: arte escura, fica no bege. */
export type LogoTone = "light" | "dark"

export type Project = {
  id: string
  title: string
  categories: string[]
  imageUrl: string
  imageAlt: string
  visible: boolean
  about: string
  challenge: string
  solution: string
  logo: ProjectImage
  logoTone: LogoTone
  banners: ProjectImage[]
}

function banners(
  sources: string[],
  title: string
): ProjectImage[] {
  return sources.map((src, index) => ({
    src,
    alt: `Material ${index + 1} do projeto ${title}`,
  }))
}

export const projects: Project[] = [
  {
    id: "ikigai-cosmeticos",
    title: "Ikigai Cosméticos Naturais",
    categories: ["social media"],
    imageUrl: thumbIkigai,
    imageAlt: "Projeto de social media da Ikigai Cosméticos Naturais",
    visible: true,
    logo: { src: logoIkigai, alt: "Logo Ikigai Cosméticos Naturais" },
    logoTone: "light",
    banners: banners(
      [ikigai01, ikigai02, ikigai03],
      "Ikigai Cosméticos Naturais"
    ),
    about:
      "A Ikigai é uma marca brasileira de cosméticos naturais e veganos que acredita em uma rotina de cuidados mais simples e consciente. Com produtos para pele, cabelo e corpo, a marca une ingredientes naturais, cuidado e bem-estar no dia a dia.",
    challenge:
      "A Ikigai já tinha produtos cheios de personalidade. O desafio era fazer essa essência aparecer também nas redes sociais, criando uma comunicação mais consistente, próxima e visualmente marcante, sem perder o jeito natural e acessível da marca.",
    solution:
      "Criamos uma nova direção para o conteúdo da Ikigai, unindo planejamento, design, fotos e vídeos em uma comunicação mais viva e conectada com a marca. Dos posts às captações, cada conteúdo foi pensado para apresentar os produtos de um jeito simples, bonito e fácil de entender.",
  },
  {
    id: "pietro-lavvi",
    title: "Pietro Lavvi",
    categories: ["desenvolvimento web"],
    imageUrl: thumbPietro,
    imageAlt: "Site imobiliário Pietro Lavvi",
    visible: true,
    logo: { src: logoPietro, alt: "Logo Pietro Lavvi" },
    logoTone: "dark",
    banners: banners([pietro01, pietro02, pietro03], "Pietro Lavvi"),
    about:
      "Pietro Lavvi reúne empreendimentos imobiliários de alto padrão em diferentes regiões de São Paulo. O projeto precisava de um espaço digital à altura dessa proposta, valorizando cada imóvel e facilitando o acesso às informações de quem está procurando seu próximo lugar para morar.",
    challenge:
      "O site precisava funcionar como uma central para todos os empreendimentos, mas sem colocar tudo no mesmo lugar. A ideia era ter uma página principal para apresentar o portfólio e, ao mesmo tempo, dar a cada novo projeto uma página própria, completa e fácil de navegar.",
    solution:
      "Criamos uma estrutura que conecta todos os empreendimentos em um só site, mantendo uma experiência única para cada projeto. A página principal reúne o portfólio, enquanto as páginas individuais apresentam fotos, plantas, vídeos, localização e os detalhes de cada imóvel de forma organizada e responsiva.",
  },
  {
    id: "lamor-gourmet",
    title: "Lamor Gourmet",
    categories: ["social media"],
    imageUrl: thumbLamor,
    imageAlt: "Projeto de social media da Lamor Gourmet",
    visible: true,
    logo: { src: logoLamor, alt: "Logo Lamor Gourmet" },
    logoTone: "light",
    banners: banners([lamor01, lamor02, lamor03], "Lamor Gourmet"),
    about:
      "A Lamor Gourmet é uma marca que transforma receitas artesanais em produtos feitos sob encomenda, com cuidado em cada detalhe. Bolos, pães, cookies e outras criações fazem parte de um cardápio que mistura sabor, apresentação e aquele toque de feito à mão.",
    challenge:
      "A Lamor estava dando seus primeiros passos nas redes sociais e precisava encontrar seu jeito de se comunicar por ali. A identidade visual já existia, então o desafio era levá-la para o Instagram e criar uma linha editorial que desse unidade ao perfil sem tirar o protagonismo dos produtos.",
    solution:
      "Criamos a presença digital da Lamor a partir da identidade que a marca já tinha, definindo uma linguagem visual e uma linha de conteúdo para o Instagram. Organizamos o perfil e desenvolvemos peças que apresentam os produtos, contam mais sobre a marca e deixam cada receita falar por si.",
  },
  {
    id: "casa-editorial-be-amazing",
    title: "Casa Editorial Be Amazing",
    categories: ["desenvolvimento web", "social media"],
    imageUrl: thumbCasa,
    imageAlt: "Site e redes sociais da Casa Editorial Be Amazing",
    visible: true,
    logo: { src: logoCasa, alt: "Logo Casa Editorial Be Amazing" },
    logoTone: "light",
    banners: banners(
      [casa01, casa02, casa03],
      "Casa Editorial Be Amazing"
    ),
    about:
      "A Casa Editorial Be Amazing transforma histórias, ideias e conhecimento em livros. Além de acompanhar seus autores durante o processo editorial, a marca reúne obras de diferentes temas e perfis, cada uma com sua própria história para contar.",
    challenge:
      "Mais do que criar o site da editora, o projeto precisava acompanhar seus lançamentos. Cada novo livro pede uma comunicação própria, com identidade, público e proposta diferentes, mas sem deixar de fazer parte do universo da Be Amazing.",
    solution:
      "Criamos o site principal da editora e, a cada novo lançamento, desenvolvemos uma landing page pensada especialmente para aquela obra. O trabalho também chegou às redes sociais, com conteúdos para divulgar livros, autores, lançamentos e tudo o que acontece por trás da editora.",
  },
  {
    id: "adriane-santos",
    title: "Adriane Santos",
    categories: ["identidade visual", "social media"],
    imageUrl: thumbAdriane,
    imageAlt: "Identidade visual e social media de Adriane Santos",
    visible: true,
    logo: { src: logoAdriane, alt: "Logo Adriane Santos" },
    logoTone: "dark",
    banners: banners(
      [adriane01, adriane02, adriane03, adriane04, adriane05],
      "Adriane Santos"
    ),
    about:
      "Adriane Santos atua com terapias manuais voltadas ao alívio de dores, recuperação corporal e bem-estar, com um atendimento próximo e personalizado.",
    challenge:
      "Adriane precisava transformar seu trabalho em uma marca. O desafio era construir uma identidade que transmitisse profissionalismo e confiança, sem perder a sensação de cuidado, acolhimento e proximidade presente nos atendimentos.",
    solution:
      "Criamos sua identidade visual do zero, do símbolo e tipografia à paleta de cores e aplicações da marca. Depois, levamos esse universo para seus primeiros passos no Instagram, criando uma presença visual coerente e uma base para a comunicação da Adriane crescer mantendo a mesma essência.",
  },
  {
    id: "suzie-darc",
    title: "Suzie Darc",
    categories: ["social media", "desenvolvimento web"],
    imageUrl: thumbSuzie,
    imageAlt: "Presença digital da Suzie Darc",
    visible: true,
    logo: { src: logoSuzie, alt: "Logo Suzie Darc" },
    logoTone: "dark",
    banners: banners(
      [suzie01, suzie02, suzie03],
      "Suzie Darc"
    ),
    about:
      "Suzie Darc atua há mais de 20 anos com cuidado corporal, drenagem terapêutica e acompanhamento de pacientes no pós-operatório de cirurgias plásticas, oferecendo uma assistência próxima e individualizada durante o processo de recuperação.",
    challenge:
      "Transformar toda essa experiência em uma presença digital que transmitisse confiança, cuidado e profissionalismo. A comunicação precisava abordar um tema técnico como o pós-operatório de forma clara e acessível, sem perder a proximidade necessária para quem está passando por esse momento.",
    solution:
      "Construímos a presença digital da Suzie conectando conteúdo e experiência. Nas redes sociais, desenvolvemos uma direção visual e conteúdos educativos para apresentar seu trabalho, compartilhar conhecimento e fortalecer sua autoridade. No digital, criamos um site completo para organizar seus serviços, apresentar sua experiência e facilitar o contato de novos pacientes.",
  },
  {
    id: "geovania-medeiros",
    title: "Geovânia Medeiros Advocacia",
    categories: ["identidade visual", "social media", "desenvolvimento web"],
    imageUrl: thumbGeovania,
    imageAlt: "Identidade visual, redes e site da Geovânia Medeiros Advocacia",
    visible: true,
    logo: { src: logoGeovania, alt: "Logo Geovânia Medeiros Advocacia" },
    logoTone: "light",
    banners: banners(
      [geovania01, geovania02, geovania03, geovania04, geovania05],
      "Geovânia Medeiros Advocacia"
    ),
    about:
      "Geovânia Medeiros é advogada com atuação em Direito Imobiliário, Inventários e Leilões de Imóveis. Seu trabalho busca trazer mais segurança e clareza para decisões importantes, com uma atuação próxima e uma comunicação fácil de entender.",
    challenge:
      "O projeto começou com a necessidade de construir uma marca que representasse a experiência da Geovânia e, ao mesmo tempo, fugisse daquela comunicação jurídica distante e engessada. A identidade precisava passar confiança e profissionalismo, mas continuar próxima de quem busca orientação.",
    solution:
      "Criamos a identidade visual completa da Geovânia e levamos essa linguagem para diferentes pontos da marca. Do cartão de visita e materiais institucionais aos primeiros conteúdos para as redes sociais e ao site, tudo foi pensado para manter a mesma identidade e tornar a comunicação mais clara e reconhecível.",
  },
  {
    id: "apis-coworking",
    title: "Apis Coworking",
    categories: ["social media"],
    imageUrl: thumbApis,
    imageAlt: "Projeto de social media da Apis Coworking",
    visible: true,
    logo: { src: logoApis, alt: "Logo Apis Coworking" },
    logoTone: "dark",
    banners: banners([apis01, apis02, apis03], "Apis Coworking"),
    about:
      "A Apis é um coworking em Osasco que oferece espaços de trabalho, salas de reunião, atendimento e escritório virtual para empresas e profissionais. A proposta é oferecer estrutura para trabalhar, receber clientes e cuidar do negócio sem precisar manter um escritório próprio.",
    challenge:
      "A Apis já tinha uma identidade bem marcante e uma variedade grande de serviços. O desafio era levar tudo isso para as redes sociais de um jeito mais interessante, mostrando que o espaço vai além do aluguel de salas e pode fazer parte da rotina de diferentes tipos de negócios.",
    solution:
      "Criamos conteúdos para as redes sociais misturando apresentação dos espaços, serviços, curiosidades e assuntos ligados ao dia a dia de quem empreende. Mantivemos o amarelo e o preto como protagonistas e criamos uma linguagem visual mais direta, com chamadas fortes e conteúdos fáceis de consumir.",
  },
]

export const visibleProjects = projects.filter((project) => project.visible)

export function getProject(id: string) {
  return projects.find((project) => project.id === id)
}
