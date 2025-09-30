import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { HomePage } from '../pages/Home/HomePage'
import { DonacionesPage } from '../pages/Donaciones/DonacionesPage'

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donaciones" element={<DonacionesPage />} />
        <Route path="/nosotros" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">Próximamente - Sobre Fundación Favorita</h1></div>} />
        <Route path="/programas" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">Próximamente - Ejes de trabajo</h1></div>} />
        <Route path="/impacto" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">Próximamente - Nuestro impacto</h1></div>} />
        <Route path="/aliados" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">Próximamente - Nuestro respaldo</h1></div>} />
        <Route path="/testimonios" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">Próximamente - Testimonios</h1></div>} />
        <Route path="/contacto" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">Próximamente - Contacto</h1></div>} />
      </Routes>
    </Layout>
  )
}
