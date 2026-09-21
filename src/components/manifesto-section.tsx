import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { images } from "@/constants/images"
import { stagger } from "@/lib/motion"

export function ManifestoSection() {
  return (
    <section
      id="o-vira"
      aria-labelledby="manifesto-heading"
      className="bg-yellow"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="space-y-6">
          <RevealGroup className="space-y-6" staggerDelay={stagger.comfortable}>
            <RevealItem>
              <h2
                id="manifesto-heading"
                className="max-w-xl text-3xl font-bold leading-tight text-blue md:text-6xl"
              >
                Negócio pequeno, não precisa parecer pequeno
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="max-w-xl text-balance text-base leading-relaxed text-black sm:text-lg">
                Aqui no VIRA, a gente acredita que negócio pequeno não precisa
                parecer pequeno. Tem muita gente fazendo acontecer todos os dias,
                mas ainda com uma marca improvisada, um Instagram que não
                acompanha a qualidade do negócio ou um site que nunca saiu do
                papel.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="max-w-xl text-balance text-base font-bold leading-relaxed text-black sm:text-lg">
                É pra essa gente que a gente faz.
              </p>
            </RevealItem>
          </RevealGroup>

          <RevealGroup
            className="max-w-xl space-y-4 text-balance text-base leading-relaxed text-black sm:text-lg"
            staggerDelay={stagger.comfortable}
            stepViewport
          >
            <RevealItem>
              <p>
                A gente junta design, conteúdo e tecnologia pra transformar boas
                ideias em marcas mais profissionais, negócios mais presentes e
                soluções que funcionam de verdade.
              </p>
            </RevealItem>
            <RevealItem>
              <p>Porque negócio bom merece virar mais.</p>
            </RevealItem>
          </RevealGroup>
        </div>

        <Reveal variant="scaleIn" delay={0.1} className="w-full bg-orange">
          <img
            src={images.manifesto}
            alt="Duas pessoas em pé sobre fundo laranja — visual do manifesto VIRA"
            width={1080}
            height={1124}
            className="block h-auto w-full"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  )
}
