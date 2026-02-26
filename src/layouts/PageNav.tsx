import { Link, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const pages = [
  { path: '/reurbcad', label: 'Visao Geral' },
  { path: '/reurbcad/mapa', label: 'Mapa de Campo' },
  { path: '/reurbcad/cadastro', label: 'Cadastro de Unidade' },
  { path: '/reurbcad/titular', label: 'Gestao de Titulares' },
  { path: '/reurbcad/gis', label: 'Editor GIS' },
  { path: '/reurbcad/offline', label: 'Offline & Sync' },
  { path: '/reurbcad/config', label: 'Configuracoes' },
  { path: '/reurbcad/components', label: 'UI Components' },
]

export function PageNav() {
  const location = useLocation()
  const idx = pages.findIndex((p) => p.path === location.pathname)
  if (idx === -1) return null

  const prev = idx > 0 ? pages[idx - 1] : null
  const next = idx < pages.length - 1 ? pages[idx + 1] : null

  return (
    <nav className="flex items-center justify-between mt-12 pt-6 border-t border-outline-variant">
      {prev ? (
        <Link
          to={prev.path}
          className="flex items-center gap-1.5 text-body-md text-primary no-underline hover:underline"
        >
          <ChevronLeft size={16} />
          {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={next.path}
          className="flex items-center gap-1.5 text-body-md text-primary no-underline hover:underline"
        >
          {next.label}
          <ChevronRight size={16} />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
