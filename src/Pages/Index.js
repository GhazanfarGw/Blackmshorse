import React from 'react'
import Dashboard from './Dashborad'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Service from './Service'
import Offer from './Offer'
import Sustainable from './Sustainable'
import Network from './Network'
import Focus from './Focus'
import Thank from './Thank'
import Whatsnumber from './Whatsnumber';

export default function Index() {
  return (
    <>
        <Navbar/>
        <Whatsnumber/>
        <Dashboard/>
        <About/>
        <Service/>
        <Offer/>
        <Sustainable/>
        <Network/>
        <Focus/>
        <Thank/>
        <Footer/>
    </>
  )
}
