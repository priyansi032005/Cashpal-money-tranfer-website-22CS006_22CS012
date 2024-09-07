import React from 'react'
import Navbar from './Navbar/Navbar'
import Headers from './Header/Header'
import About from './Aboutus/Aboutus'
import Services from './Service/Service'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <Headers />
      <Navbar />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
