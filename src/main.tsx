import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ChorockSoftProject from './pages/ChorockSoftProject.tsx'
import RigaAirportProject from './pages/RigaAirportProject.tsx'
import ChinaUnicomProject from './pages/ChinaUnicomProject.tsx'
import AIComputingProject from './pages/AIComputingProject.tsx'
import BeCaredProject from './pages/BeCaredProject.tsx'
import BEINGProject from './pages/BEINGProject.tsx'
import MythOSProject from './pages/MythOSProject.tsx'
import BeyondDesign from './pages/BeyondDesign.tsx'
import GoalMasterProject from './pages/GoalMasterProject.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects/chorocksoft" element={<ChorockSoftProject />} />
          <Route path="/projects/riga-airport" element={<RigaAirportProject />} />
          <Route path="/projects/china-unicom" element={<ChinaUnicomProject />} />
          <Route path="/projects/ai-computing" element={<AIComputingProject />} />
          <Route path="/projects/be-cared" element={<BeCaredProject />} />
          <Route path="/projects/being" element={<BEINGProject />} />
          <Route path="/projects/mythos" element={<MythOSProject />} />
          <Route path="/beyond-design" element={<BeyondDesign />} />
          <Route path="/projects/goal-master" element={<GoalMasterProject />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
