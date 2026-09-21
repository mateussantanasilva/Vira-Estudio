import { cn } from "@/lib/utils"
import type { Project } from "@/constants/projects"

const accentClasses = {
  green: "bg-green",
  orange: "bg-orange",
  black: "bg-black",
  gray: "bg-gray",
} as const

type ProjectCardProps = {
  project: Project
  size?: "large" | "small"
  className?: string
}

export function ProjectCard({
  project,
  size = "large",
  className,
}: ProjectCardProps) {
  const isLarge = size === "large"

  return (
    <article className={cn("flex w-full flex-col gap-3 sm:gap-4", className)}>
      <div className="relative">
        <div
          className={cn(
            "absolute top-0 left-0 z-10 h-full w-2.5 sm:w-3",
            accentClasses[project.accent]
          )}
          aria-hidden="true"
        />
        <img
          src={project.imageUrl}
          alt={project.imageAlt}
          width={isLarge ? 960 : 640}
          height={isLarge ? 640 : 480}
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <p className="text-sm font-semibold lowercase tracking-wide text-black/80">
          {project.categories.join(".")}
        </p>
        <h3
          className={cn(
            "mt-1 font-bold text-black",
            isLarge ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          )}
        >
          {project.title}
        </h3>
      </div>
    </article>
  )
}
