import { Link } from "react-router"

import { cn } from "@/lib/utils"
import type { Project } from "@/constants/projects"

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
    <article className={cn("group flex w-full flex-col gap-3 sm:gap-4", className)}>
      <Link to={`/cases/${project.id}`} className="block overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.imageAlt}
          width={isLarge ? 960 : 640}
          height={isLarge ? 640 : 480}
          className="block h-auto w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div>
        <p className="text-sm font-semibold lowercase tracking-wide text-black/80">
          {project.categories.join(" . ")}
        </p>
        <h3
          className={cn(
            "mt-1 font-bold text-black transition-colors duration-300 group-hover:text-orange",
            isLarge ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          )}
        >
          {project.title}
        </h3>
      </div>
    </article>
  )
}
