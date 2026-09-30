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
    <article className={cn("flex w-full flex-col gap-3 sm:gap-4", className)}>
      <a href={`/cases/${project.id}`} className="block">
        <img
          src={project.imageUrl}
          alt={project.imageAlt}
          width={isLarge ? 960 : 640}
          height={isLarge ? 640 : 480}
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </a>
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
