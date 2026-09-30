import { ArrowLeft } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useEffect, useState, type ReactNode } from "react"

import { ExpandedMenu } from "@/components/expanded-menu"
import { MinimalMenu } from "@/components/minimal-menu"
import { MenuProvider } from "@/components/menu-context"
import { Reveal, ViraFlip } from "@/components/reveal"
import { SiteFooter } from "@/components/site-footer"
import {
  getProject,
  type Project,
  type ProjectImage,
} from "@/constants/projects"
import type { SectionChrome } from "@/constants/section-chrome"
import { viraEase } from "@/lib/motion"
import { cn } from "@/lib/utils"

const caseChrome = {
  id: "case",
  bg: "var(--gray)",
  foreground: "beige",
} as const satisfies SectionChrome

const HOLD_MS = 4500
const FADE_S = 0.65

function CaseBanner({ images }: { images: ProjectImage[] }) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const rotating = images.length > 1 && !reduceMotion

  useEffect(() => {
    if (!rotating) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, HOLD_MS)

    return () => window.clearInterval(id)
  }, [images.length, rotating])

  const active = reduceMotion ? 0 : index

  return (
    <div className="relative w-full overflow-hidden bg-gray">
      {images.map((image, imageIndex) => (
        <motion.img
          key={image.src}
          src={image.src}
          alt={imageIndex === active ? image.alt : ""}
          aria-hidden={imageIndex === active ? undefined : true}
          className={cn(
            "block h-auto w-full",
            imageIndex === 0 ? "relative" : "absolute inset-0 h-full object-cover"
          )}
          initial={false}
          animate={{ opacity: imageIndex === active ? 1 : 0 }}
          transition={{ duration: rotating ? FADE_S : 0, ease: viraEase }}
          loading={imageIndex === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
    </div>
  )
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-xl font-bold tracking-wide text-orange uppercase sm:text-2xl">
        <ViraFlip as="span">{label}</ViraFlip>
      </h2>
      <Reveal variant="fadeUp" delay={0.1} className="mt-3 w-full">
        <p className="text-lg font-medium text-beige sm:text-xl">{text}</p>
      </Reveal>
    </section>
  )
}

function CaseMeta({
  label,
  value,
  as = "p",
}: {
  label: string
  value: string
  as?: "h1" | "p"
}) {
  const Value = as === "h1" ? "h1" : "p"

  return (
    <div className="flex min-w-0 flex-1 items-end justify-between gap-3 border-b border-beige/50 pb-2 sm:gap-4">
      <span className="text-right text-sm text-beige/50 uppercase sm:text-base">
        {label}
      </span>
      <Value className="text-right text-sm font-bold text-beige lowercase sm:text-lg">
        {value}
      </Value>
    </div>
  )
}

function CaseLayout({ children }: { children: ReactNode }) {
  return (
    <MenuProvider>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black"
      >
        Pular para o conteúdo
      </a>
      <MinimalMenu pinned chrome={caseChrome} />
      <ExpandedMenu />
      <main
        id="conteudo"
        className="bg-gray pt-(--minimal-menu-height) text-beige"
      >
        {children}
      </main>
      <SiteFooter />
    </MenuProvider>
  )
}

function bannerSlots(banners: ProjectImage[]) {
  const [first, second, third, ...extra] = banners
  if (!first || !second || !third) {
    throw new Error("O case precisa de pelo menos 3 banners")
  }

  return {
    lead: extra.length > 0 ? [first, ...extra] : [first],
    second,
    third,
  }
}

export function CasePage({ projectId }: { projectId: string }) {
  const project = getProject(projectId)

  useEffect(() => {
    window.scrollTo(0, 0)
    const previous = document.title
    document.title = project
      ? `${project.title} — Vira Estúdio`
      : "Vira Estúdio"
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) {
    return (
      <CaseLayout>
        <div className="mx-auto flex min-h-[70dvh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-lg font-medium text-beige sm:text-xl">
            Esse case não está por aqui.
          </p>
          <a
            href="/#ja-virou"
            className="mt-6 inline-flex w-fit items-center gap-3 font-bold text-orange transition-opacity duration-200 hover:opacity-70"
          >
            <ArrowLeft className="size-8" strokeWidth={2.5} aria-hidden="true" />
            Voltar para Já virou
          </a>
        </div>
      </CaseLayout>
    )
  }

  return (
    <CaseLayout>
      <CaseDetail project={project} />
    </CaseLayout>
  )
}

function CaseDetail({ project }: { project: Project }) {
  const { lead, second, third } = bannerSlots(project.banners)

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 sm:pt-10 lg:px-8 lg:pt-14">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="/#ja-virou"
            className="inline-flex shrink-0 text-orange transition-opacity duration-200 hover:opacity-70"
            aria-label="Voltar para Já virou"
          >
            <ArrowLeft
              className="size-8 sm:size-10"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </a>
          <div className="flex h-12 items-center sm:h-16">
            <img
              src={project.logo.src}
              alt={project.logo.alt}
              className="h-full w-auto max-w-[42vw] object-contain object-left sm:max-w-xs"
              decoding="async"
            />
          </div>
        </div>

        <header className="mt-10 flex items-stretch gap-4 sm:gap-8 lg:mt-14 lg:gap-12">
          <CaseMeta as="h1" label="Projeto" value={project.title} />
          <CaseMeta label="Tipo" value={project.categories.join(".")} />
        </header>
      </div>

      <CaseBlock label="SOBRE" text={project.about} />
      <CaseBanner images={lead} />
      <CaseBlock label="O DESAFIO" text={project.challenge} />
      <CaseBanner images={[second]} />
      <CaseBlock label="A SOLUÇÃO" text={project.solution} />
      <CaseBanner images={[third]} />
    </>
  )
}
