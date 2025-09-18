import { Routes, Route } from 'react-router-dom'
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<div className=''>Home</div>} />
      <Route path="/donaciones" element={<div>Donaciones</div>} />
    </Routes>
  )
}
