import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ServicesHero from './ServicesHero';
import MoreServices from './MoreServices';
import FooterSection from '../../Components/FooterSection/FooterSection'
import ContactFormSection from '../Contact/ContactFormSection';
const Services = () => {
  return (
    <>
    <Navbar/>
    <ServicesHero/>
    <MoreServices/>
    <ContactFormSection/>
    <FooterSection/>
    </>
  )
}

export default Services
