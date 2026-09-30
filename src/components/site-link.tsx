import type { ReactNode } from "react"
import { Link } from "react-router"

type SiteLinkProps = {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href)
}

export function SiteLink({ href, className, children, onClick }: SiteLinkProps) {
  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
