import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import gsap from 'gsap';
import cursor from "../../assets/img/cursor.svg"

const StyledCursor = styled.div`
/* .cursor{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:var(--secondaryColor);
    position: fixed;
    pointer-events: none;
    z-index: 1;
} */
    z-index: 9;
    .cursor-img {
      z-index: 5;
      pointer-events: none;
      position: fixed;
      transform: scale(0.8);
    }
    .hide {
      opacity: 0;
    }
    @media only screen and (max-width: 468px) {
      .cursor-img{
        display: none;
      }
    }
    
`

function Stickycursor() {
 const cursorSize = 70;   
 const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
 }

 const smoothOptions = {damping: 20, stiffness:300, mass:0.5}
 const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
 }

 const manageMouseMove = (e)=>{
    const {clientX, clientY} = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
 }

useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove)
    return () => {window.removeEventListener("mousemove", manageMouseMove)}
})

const cursorRef = useRef();

  return (
    <StyledCursor>
   
        <motion.img src={cursor} className='cursor-img' ref={cursorRef} style={{left: smoothMouse.x, top: smoothMouse.y}}/>
   
    </StyledCursor>
    
  )
}

export default Stickycursor
