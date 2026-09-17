import { useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Training from './components/Training'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const [lightTheme, setLightTheme] = useState(false)
  return <div className={`min-h-screen overflow-x-hidden bg-[#090d16] text-[#ecf2f7] ${lightTheme ? 'light-theme' : ''}`}>
    {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}
    {introComplete && <><Navbar lightTheme={lightTheme} onToggleTheme={() => setLightTheme(theme => !theme)} />
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Training />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
    </main>
    <Footer /></>}
  </div>
}
