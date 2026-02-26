import { Outlet, useLocation, Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { PageNav } from './PageNav'
import { Menu, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const breadcrumbLabels: Record<string, string> = {
  reurbcad: 'REURBCAD',
  mapa: 'Mapa de Campo',
  cadastro: 'Cadastro de Unidade',
  titular: 'Gestao de Titulares',
  gis: 'Editor GIS',
  offline: 'Offline & Sync',
  config: 'Configuracoes',
  components: 'UI Components',
}

export function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const segments = location.pathname.split('/').filter(Boolean)
  const breadcrumbs = segments.map((seg, i) => ({
    label: breadcrumbLabels[seg] || seg,
    to: '/' + segments.slice(0, i + 1).join('/'),
    isLast: i === segments.length - 1,
  }))

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 h-14 bg-surface border-b border-outline-variant flex items-center px-4 gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-1.5 rounded-component hover:bg-surface-container-high text-on-surface-variant"
          >
            <Menu size={20} />
          </button>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-body-sm overflow-hidden">
            <Link to="/" className="text-on-surface-variant hover:text-on-surface no-underline shrink-0">
              CARF
            </Link>
            {breadcrumbs.map((bc) => (
              <span key={bc.to} className="flex items-center gap-1 min-w-0">
                <ChevronRight size={14} className="text-outline shrink-0" />
                {bc.isLast ? (
                  <span className="text-on-surface font-medium truncate">{bc.label}</span>
                ) : (
                  <Link to={bc.to} className="text-on-surface-variant hover:text-on-surface no-underline truncate">
                    {bc.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[900px] mx-auto px-6 py-8">
            <Outlet />
            <PageNav />
          </div>
        </main>
      </div>
    </div>
  )
}
