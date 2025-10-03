import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { HomePage } from '../pages/Home/HomePage'
import { DonacionesPage } from '../pages/Donaciones/DonacionesPage'
import { Intranet } from '../pages/Intranet/Intranet'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas que usan Layout */}
      <Route element={<Layout  />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/donaciones" element={<DonacionesPage />} />
      </Route>

      {/* Rutas sin Layout */}
      <Route path="/intranet/*" element={<Intranet />} />

      {/* 404 */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}






