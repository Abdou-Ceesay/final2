import {React, useEffect, useRef} from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import StickyCursor from './components/ui/stickycursor';
import ProgressBar from './components/ui/ProgressBar';
import Navbar from './components/sections/navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Waak from './pages/projects/waak'
import Dior from './pages/projects/Dior'
import Cola from './pages/projects/americanCola'

import ScrollToTop from './components/ScrollToTop';

// PROJECTS //
import Zoom from './pages/projects/zoom';
import { AnimatePresence } from 'framer-motion';




function App() {
  const cursorRef = useRef();
  const location = useLocation();

  useEffect(()=>{
    const lenis = new Lenis({
      duration:1.5,
    })

    
    

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  },[]);

  
    
  return (
    <>
    
      <ProgressBar/>
      {/* <StickyCursor/> */}
      <AnimatePresence mode='wait'>
      <ScrollToTop />
                  
                  <Navbar/>

                  <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/work' element={<Work />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/waak' element={<Waak />}></Route>
                    <Route path='/zoom-65' element={<Zoom />}></Route>
                    <Route path='/dior' element={<Dior />}></Route>
                    <Route path='/american-cola' element={<Cola />}></Route>
                  </Routes>
             
      </AnimatePresence>
    </>
  );
}

export default App;
