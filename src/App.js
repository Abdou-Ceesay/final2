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
      duration:2,
    })



function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  },[])

  function LocationProvider({children}) {  
    return <AnimatePresence mode='wait'>{children}</AnimatePresence>; }

    function RoutesWithAnimation() {
      const location = useLocation();
    
      return (
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/zoom-65' element={<Zoom />}></Route>
        </Routes>
      );
    }

    
  return (
    <>
    
      <ProgressBar/>
      <StickyCursor/>
      <Router>  
        
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
