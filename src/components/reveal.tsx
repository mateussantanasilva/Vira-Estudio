import type { ReactNode } from "react"
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react"

import {
  groupVariants,
  revealTransition,
  revealVariants,
  stagger,
  viewportFooter,
  viewportOnce,
  viewportStep,
  type RevealVariant,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  children?: ReactNode
  variant?: RevealVariant
  className?: string
  delay?: number
  /** Use tighter viewport for step-by-step mobile reveals. */
  stepViewport?: boolean
  /** Viewport permissivo para o fim da página. */
  footerViewport?: boolean
  as?: "div" | "span"
} & Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "animate" | "variants" | "as"
>

export function Reveal({
  children,
  variant = "fadeUp",
  className,
  delay = 0,
  stepViewport = false,
  footerViewport = false,
  as = "div",
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const variants = revealVariants[variant]
  const Component = as === "span" ? motion.span : motion.div
  const viewport = footerViewport
    ? viewportFooter
    : stepViewport
      ? viewportStep
      : viewportOnce

  return (
    <Component
      className={cn(as === "span" && "inline-block", className)}
      variants={variants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewport}
      transition={revealTransition(variant, reduceMotion ? 0 : delay)}
      {...rest}
    >
      {children}
    </Component>
  )
}

type RevealGroupProps = {
  children: ReactNode
  className?: string
  staggerDelay?: number
  stepViewport?: boolean
  footerViewport?: boolean
}

export function RevealGroup({
  children,
  className,
  staggerDelay = stagger.comfortable,
  stepViewport = false,
  footerViewport = false,
}: RevealGroupProps) {
  const reduceMotion = useReducedMotion()
  const viewport = footerViewport
    ? viewportFooter
    : stepViewport
      ? viewportStep
      : viewportOnce

  return (
    <motion.div
      className={className}
      variants={{
        ...groupVariants,
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : staggerDelay,
          },
        },
      }}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}

/** Child of RevealGroup — inherits stagger via variants. */
export function RevealItem({
  children,
  variant = "fadeUp",
  className,
}: {
  children: ReactNode
  variant?: RevealVariant
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants[variant]}
      transition={revealTransition(variant)}
    >
      {children}
    </motion.div>
  )
}

type ViraFlipProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Mount animation instead of whileInView (hero above the fold). */
  onMount?: boolean
  as?: "div" | "span"
}

export function ViraFlip({
  children,
  className,
  delay = 0,
  onMount = false,
  as = "div",
}: ViraFlipProps) {
  const reduceMotion = useReducedMotion()
  const variants = revealVariants.viraFlip
  const transition = revealTransition("viraFlip", reduceMotion ? 0 : delay)
  const Outer = as === "span" ? "span" : "div"
  const Inner = as === "span" ? motion.span : motion.div

  if (onMount) {
    return (
      <Outer
        className={cn(
          "inline-block overflow-hidden perspective-[1200px]",
          className
        )}
      >
        <Inner
          className="inline-block origin-bottom will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
          variants={variants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          transition={transition}
        >
          {children}
        </Inner>
      </Outer>
    )
  }

  return (
    <Outer
      className={cn(
        "inline-block overflow-hidden perspective-[1200px]",
        className
      )}
    >
      <Inner
        className="inline-block origin-bottom will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        variants={variants}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        transition={transition}
      >
        {children}
      </Inner>
    </Outer>
  )
}
