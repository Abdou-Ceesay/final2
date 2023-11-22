import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import AOS from 'aos';


import oneclock from "../../assets/img/oneclock-inside-angle.png"
import k1 from "../../assets/img/zoom65-blue.png"
import Project from '../ui/project'
import { projects } from '../projects/Projects.ts'
import project from '../ui/project'
import Modal from '../modal/modal'


const StyledFeatured = styled.div`
    padding : calc(var(--spacer) * 2) 0;
    background-color: #111111;
    position: relative;
    .projects {
        display: flex;
        flex-direction: column;
        /* flex-wrap: wrap; */
        width: 100%;
        align-items: center;
        justify-content: center;
    }
   

`
const transition = { duration:3, ease: [0.43, 0.13, 0.23, 0.96]};

function Featured() {
    useEffect(() => {
        AOS.init();
      }, [])

  const [modal, setModal] = useState({active: false, index: 0})

  return (
    
    <>
        
        <StyledFeatured>
        <Modal modal={modal} projects={projects}/>

            <motion.h1 className='section-title' exit={{opacity:0}} transition={transition} data-aos="fade-in">Featured works</motion.h1>  
            <div className="projects">
                
                {
                    projects.map( (project, index) => {
                        return <Project  key={index} index={index} title={project.title} id={project.id} img={project.img} tag={project.tag} setModal={setModal} path={project.path}/>
                    })  
                }
             
            </div>
            
           
        </StyledFeatured>
        
    </>
  )
}

export default Featured