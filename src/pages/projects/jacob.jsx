import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import AOS from 'aos';
import { projects } from '../../components/projects/Projects.ts'

import img1 from "../../assets/img/jacob/1.png";
import img2 from "../../assets/img/jacob/2.png";
import img3 from "../../assets/img/jacob/3.png";
import img4 from "../../assets/img/jacob/4.png";
import img5 from "../../assets/img/jacob/5.png";
import img6 from "../../assets/img/jacob/6.png";
import img7 from "../../assets/img/jacob/7.png";


// import img4 from "../../assets/img/zoom4.png";
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



function Jacob() {
    const transition = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:0};
    const transition2 = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};
    const transition3 = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <Stairs>
    <ProjectHeader id="jacob" />
    <ProjectGallery />
    
    <div className="container-small">
      <div className="one-col-img">
<iframe className='frame' src="https://player.vimeo.com/video/1175944961?autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" width="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="JACOB and Co Casino Tourbillon - CGI"></iframe>
      </div>
      
      <motion.div className="two-col-img" data-aos="fade-up">
         <img src={img3} alt="" />
         <img src={img5} alt="" />
      </motion.div>
      <motion.div className="two-col-img" data-aos="fade-up">
         <img src={img7} alt="" />
         <img src={img4} alt="" />
      </motion.div>
      <div className="one-col-img" >
         <img src={img2} alt="" data-aos="fade-up"/>
         <img src={img3} alt="" data-aos="fade-up"/> 
         <img src={img1} alt="" data-aos="fade-up"/> 
      </div>
      
      
    </div>
    
    </Stairs>
    
  )
}

export default Jacob