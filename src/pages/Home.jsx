import {React, useEffect, useRef} from 'react'
import Navbar from '../components/sections/navbar'
import Hero from '../components/sections/hero'
import Gallery from '../components/sections/gallery'
import Featured from '../components/sections/featured'
import Footer from '../components/sections/footer'
import Lenis from '@studio-freight/lenis'
import { AnimatePresence } from 'framer-motion'


function Home() {

  
  // useEffect( ()=> {
  //   const lenis = new Lenis({
  //     duration:4,
  //   })
  // },[])

  return (
    <>
      <Hero/>
      <Featured/>   
      <Gallery/>  
      <Footer/>  
    </>
  )
}


export default Home