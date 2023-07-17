import React, { useEffect } from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'

const Home = (props) => {
 useEffect(() => {
  document.title = "Krunal Raiyani - Portfolio"
  props.setProgress(100)
  setTimeout(() => {
    props.setProgress(0)
}, 10);
 }, [])
 
  return (
    <>
    <main className='main-container'>
      <Hero />
      <About/>
      <Projects />
      <Contact />
    </main>
    <Footer/>
    </>
  )
}

export default Home