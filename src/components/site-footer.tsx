import { BrandLogo } from "@/components/brand-logo"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { SiteLink } from "@/components/site-link"
import { footerNavColumns } from "@/constants/navigation"
import { footerLinkClassName } from "@/lib/cta"
import { stagger } from "@/lib/motion"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="rodape"
      className="overflow-hidden bg-gray text-beige"
      role="contentinfo"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_2fr] lg:items-start lg:px-8">
        <Reveal variant="fade" footerViewport>
          <BrandLogo
            tone="beige"
            className="self-start [&_img]:h-16 sm:[&_img]:h-20"
          />
        </Reveal>

        <RevealGroup
          className="grid gap-10 sm:grid-cols-3"
          staggerDelay={stagger.default}
          footerViewport
        >
          {footerNavColumns.map((column) => (
            <RevealItem key={column.title} variant="fade">
              <h3 className="mb-4 text-sm font-bold tracking-widest text-yellow">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <SiteLink href={link.href} className={footerLinkClassName()}>
                      {link.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          variant="fade"
          footerViewport
          className="border-t-2 border-beige"
        >
          <p className="py-6 text-xs font-medium tracking-wide text-beige/80">
            © {year} VIRA ESTÚDIO . TODOS OS DIREITOS RESERVADOS
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
