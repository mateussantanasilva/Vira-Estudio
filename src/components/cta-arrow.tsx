import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

/** Seta dos CTAs. */
export function CtaArrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      aria-hidden="true"
      className={cn(
        "size-4 shrink-0 transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5",
        className
      )}
      strokeWidth={2.5}
    />
  )
}
