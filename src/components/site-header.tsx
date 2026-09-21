import { Menu } from "lucide-react"

import { CtaArrow } from "@/components/cta-arrow"
import { BrandLogo } from "@/components/brand-logo"
import { MenuTrigger } from "@/components/expanded-menu"
import { ctaLink, mainNavLinks } from "@/constants/navigation"
import { ctaOrangeClassName, navLinkClassName } from "@/lib/cta"

export function SiteHeader() {
  return (
    <header id="site-header" className="border-b-2 border-black bg-beige">
      <div className="mx-auto flex h-(--minimal-menu-height) max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <BrandLogo
          tone="dark"
          className="transition-opacity duration-200 hover:opacity-70 [&_img]:h-9 sm:[&_img]:h-10"
        />

        <div className="flex items-center gap-6 lg:gap-8">
          <nav
            className="hidden items-center gap-6 lg:flex lg:gap-8"
            aria-label="Principal"
          >
            {mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={navLinkClassName()}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={ctaLink.href}
            target="_blank"
            rel="noreferrer"
            className={ctaOrangeClassName("hidden h-11 sm:inline-flex")}
          >
            {ctaLink.label}
            <CtaArrow />
          </a>

          <MenuTrigger className="inline-flex size-10 items-center justify-center text-black transition-opacity duration-200 hover:opacity-70 lg:hidden">
            <Menu className="size-6" aria-hidden="true" />
          </MenuTrigger>
        </div>
      </div>
    </header>
  )
}
