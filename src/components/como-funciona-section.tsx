import { CtaArrow } from "@/components/cta-arrow"
import { Reveal, ViraFlip } from "@/components/reveal"
import { ctaLink } from "@/constants/navigation"
import { processSteps } from "@/constants/process-steps"
import { ctaOrangeClassName } from "@/lib/cta"

export function ComoFuncionaSection() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-heading"
      className="bg-green"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2
          id="como-funciona-heading"
          className="max-w-3xl text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight"
        >
          <Reveal variant="fadeUp" as="span" className="block text-black">
            Sem enrolação,
          </Reveal>
          <ViraFlip delay={0.1} as="span" className="block text-white">
            é assim que vira.
          </ViraFlip>
        </h2>

        <ol className="mt-14 grid gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-8 lg:gap-10">
          {processSteps.map((step, index) => (
            <li key={step.number}>
              <Reveal
                className="flex items-start gap-3 sm:gap-4"
                delay={index * 0.12}
                stepViewport
              >
                <div
                  className="relative w-fit shrink-0 text-[clamp(2.75rem,5vw,4.25rem)]"
                  aria-hidden="true"
                >
                  <span className="absolute right-0 bottom-0 z-0 aspect-square size-[0.45em] bg-orange" />
                  <span className="relative z-10 block leading-none font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <div className="min-w-0 pt-1">
                  <h3 className="text-lg font-bold text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-balance text-sm leading-relaxed text-white/95 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14 sm:mt-16">
          <a
            href={ctaLink.href}
            target="_blank"
            rel="noreferrer"
            className={ctaOrangeClassName("h-12")}
          >
            {ctaLink.label}
            <CtaArrow />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
