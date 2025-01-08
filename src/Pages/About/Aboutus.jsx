import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AboutUsHero from './AboutUsHero'
import AboutContent from './AboutContent'
import AboutTeam from './AboutTeam'
import ContactSection from '../../Components/ContactSection/ContactSection'
import FooterSection from '../../Components/FooterSection/FooterSection'


const Aboutus = () => {
  return (
    <>
      <Navbar/>
      <AboutUsHero/>
      <AboutContent/>
      <AboutTeam/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default Aboutus
