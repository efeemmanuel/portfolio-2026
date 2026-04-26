import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CaseStudySyncFlow from './pages/CaseStudySyncFlow.jsx'
import CaseStudyReferChain from './pages/CaseStudyReferChain.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/syncflow" element={<CaseStudySyncFlow />} />
      <Route path="/projects/referchain" element={<CaseStudyReferChain />} />
    </Routes>
  )
}
