import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import AOS from 'aos';
import { projects } from '../../components/projects/Projects.ts'

import img1 from "../../assets/img/waak/anim1.webm";
import img2 from "../../assets/img/dior.webp";

import Navbar from '../../components/sections/navbar';
import styled from 'styled-components';
import Stairs from '../../components/transition/stairs';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectGallery from '../../components/projects/ProjectGallery';

const fadeDown = {
    initial: {y: "-50%", opacity:0},
    enter: {y: "0", opacity:1},
    closed: {y: "-50%", opacity:0},
}
const fadeUp = {
    initial: {y: "50%", opacity:0},
    enter: {y: "0", opacity:1},
    closed: {y: "50%", opacity:0},
}



function Dior() {
    const transition = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:0};
    const transition2 = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};
    const transition3 = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <Stairs>
    <ProjectHeader id="dior" />
    <ProjectGallery />
    
    <div className="container-small">
      <div className="one-col-img" >
         <img src={img2} alt="" data-aos="fade-up"/>
      </div>
      
      
    </div>
    
    </Stairs>
    
  )
}

export default Dior