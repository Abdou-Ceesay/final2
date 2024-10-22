import {React, useEffect} from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import StickyCursor from './components/ui/stickycursor';
import ProgressBar from './components/ui/ProgressBar';
import Navbar from './components/sections/navbar';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

// PROJECTS //
import Zoom from './pages/projects/zoom';
import { AnimatePresence } from 'framer-motion';




function App() {

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
      <StickyCursor/>
      
      <Router>  
      <ScrollToTop />
                  <Navbar/>
                  <AnimatePresence mode='wait'>
                  <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/zoom-65' element={<Zoom />}></Route>
                  </Routes>
                  </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
