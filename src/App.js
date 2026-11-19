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
import Waak from './pages/projects/waak';
import Dior from './pages/projects/Dior';
import Cola from './pages/projects/americanCola';
import Crocs from './pages/projects/crocs';
import Jacob from './pages/projects/jacob';


import ScrollToTop from './components/ScrollToTop';

// PROJECTS //
import Zoom from './pages/projects/zoom';
import { AnimatePresence } from 'framer-motion';
import { projectDetails } from './components/projects/projectDetails';

// Browser tab title for each page. Project pages use the title from projectDetails.js.
const SITE_NAME = 'Abdou Cisse'
const HOME_TITLE = 'Abdou Cisse - 3D Artist'
const PAGE_TITLES = {
  '/contact': 'Contact',
  '/work': 'Work',
}
const PROJECT_IDS = {
  '/crocs': 'crocs',
  '/jacobandco': 'jacob',
  '/waak': 'waak',
  '/american-cola': 'american-cola',
  '/zoom-65': 'zoom',
  '/dior': 'dior',
}
const titleFor = (path) => {
  const clean = path.replace(/\/+$/, '') || '/'
  if (clean === '/') return HOME_TITLE
  const page = PAGE_TITLES[clean] || projectDetails[PROJECT_IDS[clean]]?.title
  return page ? `${page} - ${SITE_NAME}` : HOME_TITLE
}




function App() {
  const cursorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    document.title = titleFor(location.pathname)
  }, [location.pathname]);

  useEffect(()=>{
    const lenis = new Lenis({
      duration:1.5,
    })
    // lets other components (like the project gallery) pause smooth scrolling
    window.__lenis = lenis

    
    

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
                    <Route path='/crocs' element={<Crocs />}></Route>
                    <Route path='/jacobandco' element={<Jacob />}></Route>
                  </Routes>
             
      </AnimatePresence>
    </>
  );
}

export default App;
