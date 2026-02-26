import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  Map,
  ClipboardList,
  Users,
  Layers,
  WifiOff,
  Settings,
  Palette,
  LayoutGrid,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  label: string
  to: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

const reurbcadItems: NavItem[] = [
  { label: 'Visao Geral', to: '/reurbcad', icon: LayoutGrid },
  { label: 'Mapa de Campo', to: '/reurbcad/mapa', icon: Map },
  { label: 'Cadastro de Unidade', to: '/reurbcad/cadastro', icon: ClipboardList },
  { label: 'Gestao de Titulares', to: '/reurbcad/titular', icon: Users },
  { label: 'Editor GIS', to: '/reurbcad/gis', icon: Layers },
  { label: 'Offline & Sync', to: '/reurbcad/offline', icon: WifiOff },
  { label: 'Configuracoes', to: '/reurbcad/config', icon: Settings },
  { label: 'UI Components', to: '/reurbcad/components', icon: Palette },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const location = useLocation()
  const [reurbcadOpen, setReurbcadOpen] = useState(true)
  const isReurbcad = location.pathname.startsWith('/reurbcad')

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-60 bg-surface-container border-r border-outline-variant',
          'flex flex-col overflow-y-auto',
          'transition-transform duration-200 ease-in-out',
          'md:translate-x-0 md:static md:z-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 px-4 h-14 border-b border-outline-variant no-underline shrink-0"
          onClick={onClose}
        >
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-body-sm">C</span>
          </div>
          <span className="text-title-md font-semibold text-on-surface">CARF</span>
        </Link>

        {/* Nav tree */}
        <nav className="flex-1 py-2 px-2">
          {/* REURBCAD section */}
          <button
            onClick={() => setReurbcadOpen(!reurbcadOpen)}
            className={cn(
              'w-full flex items-center gap-2 px-3 py-2 rounded-component text-left',
              'hover:bg-surface-container-high transition-colors',
              isReurbcad ? 'text-primary font-semibold' : 'text-on-surface font-medium'
            )}
          >
            {reurbcadOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span className="text-title-sm">REURBCAD</span>
          </button>

          {reurbcadOpen && (
            <div className="ml-2 mt-0.5 flex flex-col gap-0.5">
              {reurbcadItems.map((item) => {
                const isActive = location.pathname === item.to
                const Icon = item.icon
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className={cn(
                      'flex items-center gap-2.5 px-3 py-2 rounded-component no-underline text-body-md transition-colors',
                      isActive
                        ? 'bg-secondary-container text-primary font-medium'
                        : 'text-on-surface-variant hover:bg-surface-container-high'
                    )}
                  >
                    <Icon size={18} className={isActive ? 'text-primary' : 'text-on-surface-variant'} />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          )}
        </nav>
      </aside>
    </>
  )
}
