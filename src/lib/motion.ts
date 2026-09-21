import type { Transition, Variants } from "motion/react"

export const easeOut = "easeOut" as const

/** Same curve used by MinimalMenu flip. */
export const viraEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const viewportOnce = {
  once: true,
  amount: 0.2,
  // Margem negativa em px (não %), para o fim da página ainda disparar reveal
  margin: "0px 0px -48px 0px",
} as const

/** Tighter amount so mobile reveals ~1 item at a time while scrolling. */
export const viewportStep = {
  once: true,
  amount: 0.4,
  margin: "0px 0px -64px 0px",
} as const

/** Para elementos no rodapé / fim do documento. */
export const viewportFooter = {
  once: true,
  amount: 0.05,
  margin: "0px 0px 0px 0px",
} as const

export const duration = {
  short: 0.45,
  medium: 0.6,
  flip: 0.55,
} as const

export const stagger = {
  default: 0.08,
  comfortable: 0.1,
  steps: 0.12,
} as const

export type RevealVariant =
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "scaleIn"
  | "viraFlip"
  | "fade"

/**
 * Só opacity/transform — nunca width/height/margin.
 * Translates curtos; seções devem clipar overflow para não expandir o scroll.
 */
export const revealVariants: Record<RevealVariant, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 16 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  viraFlip: {
    hidden: { opacity: 0, rotateX: 75 },
    visible: { opacity: 1, rotateX: 0 },
  },
}

export const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.comfortable,
    },
  },
}

export function revealTransition(
  variant: RevealVariant,
  delay = 0
): Transition {
  if (variant === "viraFlip") {
    return {
      duration: duration.flip,
      ease: viraEase,
      delay,
    }
  }

  return {
    duration: duration.short,
    ease: easeOut,
    delay,
  }
}
