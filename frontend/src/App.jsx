import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import DetailPage from './pages/DetailPage'
import GuidesPage from './pages/GuidesPage'

export default function App() {
  return <div className="app-shell"><Header /><main><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/resultados" element={<ResultsPage />} />
    <Route path="/pontos/:id" element={<DetailPage />} />
    <Route path="/orientacoes" element={<GuidesPage />} />
  </Routes></main><Footer /></div>
}
