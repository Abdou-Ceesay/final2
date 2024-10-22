import React from 'react'
import {motion} from 'framer-motion'
import img1 from "../../assets/img/zoom65-blue.webp";
import img2 from "../../assets/img/zoom1.png";
import img3 from "../../assets/img/zoom2.png";
import img4 from "../../assets/img/zoom4.png";
import Navbar from '../../components/sections/navbar';
import styled from 'styled-components';
import blur2 from "../../assets/img/Vector 4.png"

const fadeUp = {
    initial: {y: "-50%", opacity:0},
    enter: {y: "0", opacity:1},
    closed: {y: "-50%", opacity:0},
}

function zoom(props, id) {
    const transition = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.6};

    
  return (
    <>
    <motion.div className="project-title" variants={fadeUp} initial="initial"  animate="enter" transition={transition}>
    <h1>Zoom65 Mechanical Keyboard</h1>
    <h2 className='project-role'>Role : Modeling / rendering / texturing / lighting</h2>
    <img className='blur2' src={blur2} />
    </motion.div>
    <div className="project-img-wrapper">
        <motion.img layoutId='zoomimg' src={img1} transition={{ease: [0.76, 0, 0.24, 1], duration: .75}} alt="zoom" />
    </div>
    <div className="container-small">
      <div className="two-col-img">
         <img src={img2} alt="" />
         <img src={img3} alt="" />
      </div>
      
    </div>
    
    </>
    
  )
}

export default zoom