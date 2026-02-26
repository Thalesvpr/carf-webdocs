import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/theme'
import { DocsLayout } from '@/layouts/DocsLayout'
import { CARFHome } from '@/pages/CARFHome'
import { ComponentShowcase } from '@/pages/ComponentShowcase'
import { ReurbcadOverview } from '@/pages/ReurbcadOverview'
import { MapaPage } from '@/pages/MapaPage'
import { CadastroPage } from '@/pages/CadastroPage'
import { TitularPage } from '@/pages/TitularPage'
import { GISPage } from '@/pages/GISPage'
import { OfflinePage } from '@/pages/OfflinePage'
import { ConfigPage } from '@/pages/ConfigPage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DocsLayout />}>
            <Route path="/" element={<CARFHome />} />
            <Route path="/reurbcad" element={<ReurbcadOverview />} />
            <Route path="/reurbcad/mapa" element={<MapaPage />} />
            <Route path="/reurbcad/cadastro" element={<CadastroPage />} />
            <Route path="/reurbcad/titular" element={<TitularPage />} />
            <Route path="/reurbcad/gis" element={<GISPage />} />
            <Route path="/reurbcad/offline" element={<OfflinePage />} />
            <Route path="/reurbcad/config" element={<ConfigPage />} />
            <Route path="/reurbcad/components" element={<ComponentShowcase />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
