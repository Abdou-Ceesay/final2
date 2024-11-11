import React from 'react'

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import GsapMagnetic from '../magnetic/Magnetic';

const fadeUp = {
    initial: {y: "-50%", opacity:0},
    enter: {y: "0", opacity:1},
    closed: {y: "-50%", opacity:0},
}


const StyledNav = styled.div`
position: fixed;
top:0;
left:0;
z-index: 10000;
width: 100%;
    /* background-color: #111111; */
    .nav-motion {
        width: 100%;
        display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 20px 50px;
    }
    .logo {
        position: relative;
    }
    .bounding {
        width: 180%;
        height: 100px;
        position: absolute;
        top: -10%;
        left:-30%;
        z-index: 1;
        /* transform: translate(-50%, -50%); */
    }
    a img{
        width: 60px;
    }
    
    .nav-menu {
        display: flex;
        gap: 2rem;
    }
    .nav-item {
        opacity: 30%;
        padding: 20px 20px;
        
        /* background-color: red; */
    }
    .active {
        /* text-decoration : line-through; */
        opacity: 100%;
    }
    @media only screen and (max-width: 468px) {
        .nav-motion{
            padding: 20px 30px;
        }
        .nav-menu {
            display: none;
        }
    }
`

function Navbar() {
    const transition = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};
  return (
    
    <>
<StyledNav>
    <motion.div className='nav-motion' variants={fadeUp} initial="initial"  animate="enter" transition={transition}>
    <GsapMagnetic>
            <Link to="/"><img src={logo}/></Link>    
        </GsapMagnetic>
       
        
        <ul className='nav-menu'>
        <GsapMagnetic>
            <li><Link className='nav-item active' to="/">( Home )</Link></li>
        </GsapMagnetic>
        <GsapMagnetic>
            <li><Link className='nav-item' to="/work">( Work )</Link></li>
        </GsapMagnetic>
        <GsapMagnetic>
            <li><Link className='nav-item' to="/contact">( Contact )</Link></li>
        </GsapMagnetic>    
            {/* <li><Link className='nav-item' href="#">( Lab )</Link></li> */}
           
        </ul>
    </motion.div>
        
    </StyledNav>
    </>
    
  )
}

export default Navbar