import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import AOS from 'aos';
import { projects } from '../../components/projects/Projects.ts'
import ProjectInfos from '../../components/projectInfos.jsx';

import img1 from "../../assets/img/waak/anim1.webm";
import img2 from "../../assets/img/waak/STILL_1_FRONT.webp";
import img3 from "../../assets/img/waak/STILL_1_BACK.webp";
import img4 from "../../assets/img/waak/STILL_2_BACK.webp";
import img5 from "../../assets/img/waak/STILL_2_FRONT.webp";
import img6 from "../../assets/img/waak/STILL_3_FRONT.webp";
import img7 from "../../assets/img/waak/STILL_3_BACK.webp";
// import img4 from "../../assets/img/zoom4.png";
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



function Waak() {
    const transition = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:0};
    const transition2 = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};
    const transition3 = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <Stairs>
    <ProjectInfos/>
    
    <div className="container-small">
      <motion.div className="two-col-img" data-aos="fade-up">
         <img src={img2} alt="" />
         <img src={img3} alt="" />
      </motion.div>
      <div className="one-col-img" >
         <img src={img4} alt="" data-aos="fade-up"/>
         <img src={img5} alt="" data-aos="fade-up"/> 
      </div>
      
      
    </div>
    
    </Stairs>
    
  )
}

export default Waak