import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroBanner from './Hero/HeroBanner'
import ServicesSection from './Services/ServicesSection'
import ProjectsSection from './ProjectsSection/ProjectsSection'
import ContactSection from './ContactSection/ContactSection'
import FooterSection from './FooterSection/FooterSection'


const App = () => {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <ServicesSection/>
      <ProjectsSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default App
