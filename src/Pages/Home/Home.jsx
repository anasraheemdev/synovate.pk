import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import HeroBanner from '../../Components/Hero/HeroBanner';
import ServicesSection from '../../Components/Services/ServicesSection';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import FooterSection from '../../Components/FooterSection/FooterSection';
const Home = () => {
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

export default Home
