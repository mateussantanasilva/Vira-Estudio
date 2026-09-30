import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"

import img10 from "@/assets/empresas-reais/10.webp"
import { Reveal } from "@/components/reveal"
import { empresasReaisImages, type EmpresaRealImage } from "@/constants/empresas-reais"
import { revealTransition, revealVariants } from "@/lib/motion"
import { cn } from "@/lib/utils"

/** Fecha a grade de 2 colunas (2×5); some a partir de sm, onde a grade vira 3×3. */
const mobileFiller = {
  src: img10,
  alt: "Profissional de terno",
  width: 1080,
  height: 789,
} satisfies EmpresaRealImage

/** Ordem espaçada no mosaic — evita destacar vizinhos em sequência. */
const HIGHLIGHT_ORDER = [3, 6, 1, 8, 4, 0, 5, 2, 7] as const

const HOLD_MS = 1400
const FADE_S = 0.45
const OVERLAY_DIM = 0.55

function GridCell({
  image,
  className,
  isActive,
  reduceMotion,
}: {
  image: EmpresaRealImage
  className?: string
  isActive: boolean
  reduceMotion: boolean | null
}) {
  return (
    <div className={cn("relative min-h-0 overflow-hidden", className)}>
      <motion.img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="block size-full object-cover"
        loading="lazy"
        decoding="async"
        animate={
          reduceMotion ? undefined : { scale: isActive ? 1.05 : 1 }
        }
        transition={{ duration: FADE_S, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-black"
        aria-hidden="true"
        initial={false}
        animate={{
          opacity: reduceMotion ? OVERLAY_DIM : isActive ? 0.08 : OVERLAY_DIM,
        }}
        transition={{ duration: FADE_S, ease: "easeInOut" }}
      />
    </div>
  )
}

export function ProjetosReaisSection() {
  const { left, midTop, midBottom, rightTop, rightBottom } = empresasReaisImages
  const [img09, img04, img01] = left
  const [img07, img02] = midTop
  const [img03, img05] = rightBottom

  const cells = [
    img09,
    img07,
    img02,
    rightTop,
    img04,
    midBottom,
    img01,
    img03,
    img05,
  ] as const

  /** Mobile 3×3 equilibrado (sem células gigantes). */
  const mobileOrder = [
    img09,
    img07,
    img02,
    img04,
    midBottom,
    rightTop,
    img01,
    img03,
    img05,
  ] as const

  const reduceMotion = useReducedMotion()
  const [step, setStep] = useState(0)
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const section = document.getElementById("projetos")
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduceMotion || !inView) return

    const id = window.setInterval(() => {
      setStep((current) => (current + 1) % HIGHLIGHT_ORDER.length)
    }, HOLD_MS)

    return () => window.clearInterval(id)
  }, [reduceMotion, inView])

  const activeIndex = HIGHLIGHT_ORDER[step]

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-reais-heading"
      className="relative h-[calc(100dvh-var(--minimal-menu-height))] w-full overflow-hidden bg-black"
    >
      {/* Mobile → tablet: 2 cols, depois 3 cols iguais; desktop usa o mosaic */}
      <div className="grid h-full w-full grid-cols-2 grid-rows-5 sm:grid-cols-3 sm:grid-rows-3 lg:hidden">
        {mobileOrder.map((image) => {
          const desktopIndex = cells.findIndex((cell) => cell.src === image.src)
          return (
            <GridCell
              key={image.src}
              image={image}
              isActive={activeIndex === desktopIndex}
              reduceMotion={reduceMotion}
            />
          )
        })}
        <GridCell
          image={mobileFiller}
          className="sm:hidden"
          isActive={false}
          reduceMotion={reduceMotion}
        />
      </div>

      {/*
        Desktop (referência):
        | 09 | 07 | 02 |   06   |
        | 04 |        |         |
        | 01 |   08   | 03 | 05 |
      */}
      <div className="hidden h-full w-full grid-cols-4 grid-rows-[1fr_0.87fr_1fr] lg:grid lg:grid-cols-[1fr_0.765fr_0.765fr_1.68fr]">
        <GridCell
          image={cells[0]}
          isActive={activeIndex === 0}
          reduceMotion={reduceMotion}
        />
        <GridCell
          image={cells[1]}
          className="col-start-2 row-start-1"
          isActive={activeIndex === 1}
          reduceMotion={reduceMotion}
        />
        <GridCell
          image={cells[2]}
          className="col-start-3 row-start-1"
          isActive={activeIndex === 2}
          reduceMotion={reduceMotion}
        />
        <GridCell
          image={cells[3]}
          className="col-start-4 row-span-2 row-start-1"
          isActive={activeIndex === 3}
          reduceMotion={reduceMotion}
        />
        <GridCell
          image={cells[4]}
          className="col-start-1 row-start-2"
          isActive={activeIndex === 4}
          reduceMotion={reduceMotion}
        />
        <GridCell
          image={cells[5]}
          className="col-span-2 col-start-2 row-span-2 row-start-2"
          isActive={activeIndex === 5}
          reduceMotion={reduceMotion}
        />
        <GridCell
          image={cells[6]}
          className="col-start-1 row-start-3"
          isActive={activeIndex === 6}
          reduceMotion={reduceMotion}
        />
        <div className="grid h-full min-h-0 grid-cols-2 col-start-4 row-start-3">
          <GridCell
            image={cells[7]}
            isActive={activeIndex === 7}
            reduceMotion={reduceMotion}
          />
          <GridCell
            image={cells[8]}
            isActive={activeIndex === 8}
            reduceMotion={reduceMotion}
          />
        </div>
      </div>

      <Reveal
        variant="fadeLeft"
        className="pointer-events-none absolute top-0 left-0 z-10 h-32 w-5 bg-orange sm:h-44 lg:w-10"
        aria-hidden="true"
      />
      <Reveal
        variant="fadeRight"
        delay={0.1}
        className="pointer-events-none absolute right-0 bottom-0 z-10 h-32 w-5 bg-yellow sm:h-44 lg:w-10"
        aria-hidden="true"
      />

      <motion.h2
        id="projetos-reais-heading"
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 text-center text-[clamp(1.5rem,5vw,4.5rem)] font-bold uppercase leading-tight tracking-wide text-balance text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]"
        variants={revealVariants.fadeUp}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={revealTransition("fadeUp", reduceMotion ? 0 : 0.15)}
      >
        Projetos reais
        <br />
        para marcas reais
      </motion.h2>
    </section>
  )
}
