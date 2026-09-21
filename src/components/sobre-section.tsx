import { RevealGroup, RevealItem } from "@/components/reveal"
import { images } from "@/constants/images"
import { stagger } from "@/lib/motion"

export function SobreSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="bg-beige"
    >
      <div className="grid lg:grid-cols-2">
        <div className="flex items-end bg-beige">
          <img
            src={images.sobre}
            alt="Duas pessoas da equipe VIRA sentadas no chão"
            width={1080}
            height={644}
            className="block h-auto w-full"
            loading="lazy"
            decoding="async"
          />
        </div>

        <RevealGroup
          className="flex flex-col justify-center bg-yellow px-6 py-14 sm:px-10 lg:px-14 lg:py-20"
          staggerDelay={stagger.comfortable}
          stepViewport
        >
          <RevealItem>
            <h2
              id="sobre-heading"
              className="max-w-xl text-balance text-[clamp(1.5rem,3.2vw,2.25rem)] font-bold leading-snug text-black"
            >
              A gente acredita em trabalho bonito que também funciona. Em
              tecnologia que resolve. E em marca com personalidade.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 max-w-xl text-balance text-base font-semibold leading-relaxed text-black sm:text-lg">
              Não fazemos pra impressionar outros estúdios. Fazemos pra melhorar
              negócios reais.
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
