import { ComoFuncionaSection } from "@/components/como-funciona-section"
import { ExpandedMenu } from "@/components/expanded-menu"
import { HeroSection } from "@/components/hero-section"
import { JaVirouSection } from "@/components/ja-virou-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { MenuProvider } from "@/components/menu-context"
import { MinimalMenu } from "@/components/minimal-menu"
import { ProjetosReaisSection } from "@/components/projetos-reais-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SobreSection } from "@/components/sobre-section"

export function Home() {
  return (
    <MenuProvider>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black"
      >
        Pular para o conteúdo
      </a>

      <SiteHeader />
      <MinimalMenu />
      <ExpandedMenu />

      <main id="conteudo" className="overflow-x-clip">
        <HeroSection />
        <ManifestoSection />
        <ProjetosReaisSection />
        <JaVirouSection />
        <ComoFuncionaSection />
        <SobreSection />
      </main>

      <SiteFooter />
    </MenuProvider>
  )
}
