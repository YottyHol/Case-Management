import Navbar from './components/Navbar'
import CaseSection from './components/CaseSection'
import Footer from './components/Footer'
import AnimationSection from './components/AnimationSection'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <main className="flex-1">
        <CaseSection />
        <AnimationSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
