import { HashRouter, Routes, Route } from 'react-router-dom'
import Hub from './pages/Hub'
import Pimel from './pages/Pimel'
import LinguicaExata from './pages/LinguicaExata'
import Condel from './pages/Condel'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/pimel" element={<Pimel />} />
        <Route path="/linguica-exata" element={<LinguicaExata />} />
        <Route path="/condel" element={<Condel />} />
      </Routes>
    </HashRouter>
  )
}

export default App
