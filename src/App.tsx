import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { FullPortfolio } from './pages/FullPortfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<FullPortfolio />} />
      </Routes>
    </Router>
  )
}

export default App

