import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import UnitPage from './pages/UnitPage.jsx'
import ExamPage from './pages/ExamPage.jsx'
import ReviewPage from './pages/ReviewPage.jsx'
import PlanPage from './pages/PlanPage.jsx'
import ReviewExpressPage from './pages/ReviewExpressPage.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/unidad/:unitId" element={<UnitPage />} />
        <Route path="/unidad/:unitId/examen" element={<ExamPage />} />
        <Route path="/unidad/:unitId/repaso" element={<ReviewExpressPage />} />
        <Route path="/repaso" element={<ReviewPage />} />
        <Route path="/plan" element={<PlanPage />} />
        {/* Cualquier ruta desconocida vuelve al índice */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
