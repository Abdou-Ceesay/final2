import {React, useEffect} from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import StickyCursor from './components/ui/stickycursor';


import Home from './pages/Home';

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
  return (
    <>
      <StickyCursor/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
