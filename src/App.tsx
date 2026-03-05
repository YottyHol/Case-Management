import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CaseSection from './components/CaseSection'
import Footer from './components/Footer'
import AnimationSection from './components/AnimationSection'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<CaseSection />} />
          <Route path="/animations" element={<AnimationSection />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
