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
    
    <div className="container-small">
      <div className="one-col-img">
<iframe className='frame' src="https://player.vimeo.com/video/1138526450?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" width="100%" aspect-ratio="16/9" frameborder="0" allow="autoplay; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
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