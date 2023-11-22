import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import "./modal.css"
import gsap from 'gsap';
import overlay from "../../assets/img/overlay.png"
// import Image from '../../assets/img/zoom65-blue.png';

const scaleAnimation = {

    initial: {scale: 0, x:"-50%", y:"-50%"},

    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},

    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}

}

// const StyledModal = styled.div`
// width: 400px;
//     height: 300px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     overflow: hidden;
//     .modalContainer {
//     width: 400px;
//     height: 300px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     overflow: hidden;
//     }
    
//     .modalSlider {
//         height: 100%;
//         width : 100%;
//         position: absolute;
//         transition: all 500ms cubic-bezier(0.76, 0, 0.24, 1);
//     }
//     .modal {
//         position: relative;
//         width: 100%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
        
//     }
//     .modal img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//     }
// `   

function Modal({modal, projects}) {


    const { active, index} = modal;
    const container = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);
  
    useEffect(() => {
        const moveContainerX = gsap.quickTo(container.current, "left", {duration:0.65, ease: "power3"})
        const moveContainerY = gsap.quickTo(container.current, "top", {duration:0.65, ease: "power3"})

        const moveCursorY = gsap.quickTo(cursor.current, "top", {duration:0.5, ease: "power3"})
        const moveCursorX = gsap.quickTo(cursor.current, "left", {duration:0.5, ease: "power3"})

        const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {duration:0.45, ease: "power3"})
        const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {duration:0.45, ease: "power3"})

        const manageMouseMove = (e)=>{
            const {clientX, clientY} = e;
            moveContainerX(clientX);
            moveContainerY(clientY);
            moveCursorX(clientX);
            moveCursorY(clientY);
            moveCursorLabelX(clientX);
            moveCursorLabelY(clientY);
         }  
         window.addEventListener("mousemove", manageMouseMove)
            
    },[])
    

  return (
    <> 
            <motion.div ref={container} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className='modalContainer'>
                <div className="modalWindow">

                
                <div  style={{top: index * -100 + "%"}} className="modalSlider">  

                    {

                    projects.map( (project, index) => {

                    const { src, color } = project

                    return <motion.div initial={""}  className="modal" style={{backgroundColor: color}} key={`modal_${index}`} layoutId={project.id + "img"}>

                                <img

                                

                                src={process.env.PUBLIC_URL + project.img}

                                alt="image"
                                style={{
                                    backgrouColor: "red",
                                    width: "100%",
                                     height: "100%",
                                     objectFit: "cover",
                                }}

                                />

                            </motion.div>

                    })

                }
                </div>
                {/* <div className="modal-overlay"><img src={overlay}/></div> */}
                </div>
            </motion.div>

            <motion.div ref={cursor} variants={scaleAnimation} initial={"initial"} animate={active ? "enter" : "closed"} className="modalCursor"></motion.div>
            <motion.div ref={cursorLabel} variants={scaleAnimation} initial={"initial"} animate={active ? "enter" : "closed"} className="cursorLabel">View</motion.div>
    </>
        
    
)
}

export default Modal