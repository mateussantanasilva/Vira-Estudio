import { Link } from "react-router"

import { cn } from "@/lib/utils"
import { images } from "@/constants/images"

type BrandLogoProps = {
  className?: string
  variant?: "full" | "mark"
  tone?: "dark" | "light" | "beige"
}

export function BrandLogo({
  className,
  variant = "full",
  tone = "dark",
}: BrandLogoProps) {
  const isLight = tone === "light" || tone === "beige"
  const src =
    variant === "mark"
      ? images.iconCreme
      : isLight
        ? images.logoCreme
        : images.logoBlack

  return (
    <Link
      to="/"
      onClick={() => {
        if (window.location.pathname !== "/" || window.location.hash !== "") return

        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: reduceMotion ? "instant" : "smooth",
        })
      }}
      className={cn(
        "inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange",
        className
      )}
      aria-label="VIRA Estúdio — ir para o topo"
    >
      <img
        src={src}
        alt="VIRA Estúdio"
        width={variant === "mark" ? 40 : 140}
        height={variant === "mark" ? 36 : 45}
        className={cn(
          "h-auto w-auto",
          variant === "mark" ? "h-8" : "h-8 sm:h-9",
          variant === "mark" && tone === "dark" && "brightness-0"
        )}
        decoding="async"
      />
    </Link>
  )
}
