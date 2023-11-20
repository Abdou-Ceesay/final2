import {React, useEffect, useRef} from 'react'
import Navbar from '../components/sections/navbar'
import Hero from '../components/sections/hero'
import Featured from '../components/sections/featured'
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
    </>
  )
}


export default Home