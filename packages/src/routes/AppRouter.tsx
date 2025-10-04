import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { HomePage } from '../pages/Home/HomePage'
import { DonacionesPage } from '../pages/Donaciones/DonacionesPage'
import { AppPage } from '../pages/App/AppPage'

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donaciones" element={<DonacionesPage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </Layout>
  )
}
