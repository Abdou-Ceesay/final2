import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import AOS from 'aos';
import { projects } from '../../components/projects/Projects.ts'

import img1 from "../../assets/img/waak/anim1.webm";
import img2 from "../../assets/img/AC/AMERICAN_COLA_1.jpg";
import img3 from "../../assets/img/AC/viewport.png";
import img4 from "../../assets/img/AC/viezport3.png";
import img5 from "../../assets/img/AC/always.webm";
import img6 from "../../assets/img/AC/viewport2.webm";
import img7 from "../../assets/img/AC/AC_TOAST.webm";
import img8 from "../../assets/img/AC/AC_ST_VALENTIN_GROS_CARRE.webp";

import Navbar from '../../components/sections/navbar';
import styled from 'styled-components';
import Stairs from '../../components/transition/stairs';
import ProjectHeader from '../../components/projects/ProjectHeader';

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



function Cola() {
    const transition = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:0};
    const transition2 = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};
    const transition3 = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <Stairs>
    <ProjectHeader id="american-cola" showBlur={false} />
    
    <div className="container-small">
      <motion.div className="one-col-img" data-aos="fade-up">
         <img src={img2} alt="" />
      </motion.div>
      <motion.div className="two-col-img" data-aos="fade-up">
         <img src={img3} alt="" />
         <img src={img4} alt="" />
      </motion.div>
      <motion.div className="two-col-img" data-aos="fade-up">
         <video className='video' loop autoPlay playsInline src={img5} alt="" />
         <video className='video' loop autoPlay playsInline src={img6} alt="" />
      </motion.div>
      <motion.div className="two-col-img" data-aos="fade-up">
      <img src={img8} alt="" />
      <video className='video' loop autoPlay playsInline src={img7} alt="" />
      </motion.div>
    </div>
    
    </Stairs>
    
  )
}

export default Cola