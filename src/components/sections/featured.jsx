import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import AOS from 'aos';



import Project from '../ui/project'
import { projects } from '../projects/Projects.ts'
import project from '../ui/project'
import Modal from '../modal/modal'
import blur2 from "../../assets/img/Vector 4.png"


const StyledFeatured = styled.div`
    padding-top : calc(var(--spacer) * 2);
    background-color: #070707;
    position: relative;
    z-index: 5;
    overflow:  hidden;
    .projects {
        display: flex;
        flex-direction: column;
        /* flex-wrap: wrap; */
        width: 100%;
        align-items: center;
        justify-content: center;
    }
   
    .blur2 {
        position: absolute;
        right: -20%;
        transform: scale(1);
        bottom: 0;
        z-index: 2;
        opacity: .5;
        pointer-events: none;
    }
    @media only screen and (max-width: 468px) {
        padding-top : 20px;
        .project-title-m {
            font-size: 12px;
            padding: 36px 20px;
        }
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

            <motion.h1 className='section-title' exit={{opacity:0}} transition={transition} data-aos="fade-up">Featured works</motion.h1>  
            <div className="projects">
                
                {
                    projects.map( (project, index) => {
                        return <Project  key={index} index={index} title={project.title} id={project.id} img={project.img} tag={project.tag} setModal={setModal} path={project.path}/>
                    })  
                }
             
            </div>
            
           <img className='blur2' src={blur2} />
        </StyledFeatured>
        
    </>
  )
}

export default Featured