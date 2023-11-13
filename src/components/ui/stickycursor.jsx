import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const StyledCursor = styled.div`
.cursor{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:var(--secondaryColor);
    position: fixed;
    pointer-events: none;
    z-index: 1;
}
    
`

function Stickycursor() {

 const cursorSize = 20;   
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

  return (
    <StyledCursor>
    <motion.div className='cursor' style={{left: smoothMouse.x, top: smoothMouse.y}}>
        
    </motion.div>
    </StyledCursor>
    
  )
}

export default Stickycursor
