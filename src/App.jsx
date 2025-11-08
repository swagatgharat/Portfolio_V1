import React from 'react'
import NavbarSection from './components/NavbarSection.jsx'
import HomeSection from './components/HomeSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import TechSection from './components/TechSection.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import FooterSection from './components/FooterSection.jsx'

const App = () => {
  return (
    <>
      <NavbarSection />
      <HomeSection />
      <AboutSection/>
      <TechSection/>
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default App
