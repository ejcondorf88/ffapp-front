import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { HomePage } from '../pages/Home/HomePage'
import { DonacionesPage } from '../pages/Donaciones/DonacionesPage'
import {Intranet} from '../pages/Intranet/Intranet'
import { FormsOng } from '../pages/Intranet/FormsOng'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas CON Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/donaciones" element={<DonacionesPage />} />
      </Route>

      {/* Ruta SIN Layout */}
      <Route path="/app-intranet" element={<Intranet />} />
      <Route path="/app-intranet/formulario-ongs" element={<FormsOng />} />
    </Routes>
  )
}
