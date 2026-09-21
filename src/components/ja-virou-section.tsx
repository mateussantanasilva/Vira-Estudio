import { ProjectCard } from "@/components/project-card"
import { Reveal, ViraFlip } from "@/components/reveal"
import { visibleProjects, type Project } from "@/constants/projects"
import { cn } from "@/lib/utils"

function chunkPairs(projects: Project[]) {
  const pairs: Project[][] = []

  for (let index = 0; index < projects.length; index += 2) {
    pairs.push(projects.slice(index, index + 2))
  }

  return pairs
}

export function JaVirouSection() {
  const pairs = chunkPairs(visibleProjects)

  return (
    <section
      id="ja-virou"
      aria-labelledby="ja-virou-heading"
      className="bg-beige"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="mb-12 max-w-2xl">
          <h2
            id="ja-virou-heading"
            className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-none text-black"
          >
            <ViraFlip as="span" className="block">
              Já virou
            </ViraFlip>
          </h2>
          <Reveal variant="fadeUp" delay={0.1} className="mt-3">
            <p className="text-lg font-medium text-black sm:text-xl">
              um pouco do que já passou por aqui
            </p>
          </Reveal>
        </header>

        <div className="flex flex-col gap-12 lg:gap-16">
          {pairs.map((pair, pairIndex) => {
            const largeOnLeft = pairIndex % 2 === 1
            const [first, second] = pair

            if (!second) {
              return (
                <Reveal
                  key={first.id}
                  className="w-full md:w-[55%]"
                  stepViewport
                >
                  <ProjectCard project={first} size="large" />
                </Reveal>
              )
            }

            const left = largeOnLeft
              ? { project: first, size: "large" as const, width: "md:w-[55%]" }
              : { project: first, size: "small" as const, width: "md:w-[42%]" }

            const right = largeOnLeft
              ? { project: second, size: "small" as const, width: "md:w-[42%]" }
              : { project: second, size: "large" as const, width: "md:w-[55%]" }

            return (
              <div
                key={`${first.id}-${second.id}`}
                className="flex flex-col items-start gap-10 md:flex-row md:gap-8 lg:gap-10"
              >
                <Reveal
                  className={cn("w-full", left.width)}
                  stepViewport
                >
                  <ProjectCard project={left.project} size={left.size} />
                </Reveal>
                <Reveal
                  className={cn("w-full", right.width)}
                  delay={0.1}
                  stepViewport
                >
                  <ProjectCard project={right.project} size={right.size} />
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
