import React from 'react'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Aboutme/>
      <Skills/>
      <Project/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home