import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import AOS from 'aos';
import { projects } from '../../components/projects/Projects.ts'
import ProjectInfos from '../../components/projectInfos.jsx';

import img1 from "../../assets/img/waak/anim1.webm";
import img2 from "../../assets/img/dior.webp";

import Navbar from '../../components/sections/navbar';
import styled from 'styled-components';
import blur2 from "../../assets/img/Vector 4.png"
import Stairs from '../../components/transition/stairs';

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
    <motion.div className="project-info" >
    <motion.div className="project-title" variants={fadeDown} initial="initial" animate="enter" transition={transition2}>
    <h1 className='client'>Dior Homme</h1>
    <h2 className='year'>2024</h2>
    </motion.div>
    
    {/* <motion.div className="about-client" variants={fadeDown} initial="initial" animate="enter" transition={transition3}>
    <div className="description"><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus congue leo tincidunt cursus. Pellentesque finibus magna pharetra dolor efficitur, ultrices interdum lacus porttitor. </h2></div>
    <div className="project-role"><h2>Role :<br/> Modeling / rendering / texturing / lighting</h2></div>

    </motion.div> */}
    
    <img className='blur2' src={blur2} />
    </motion.div>
    
    <div className="container-small">
      <div className="one-col-img" >
         <img src={img2} alt="" data-aos="fade-up"/>
      </div>
      
      
    </div>
    
    </Stairs>
    
  )
}

export default Dior