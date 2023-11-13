'use client';
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import oneclock from "../../assets/img/oneclock-inside-angle.png"
import k1 from "../../assets/img/zoom65-blue.png"
import Project from '../ui/project'

import { projects } from '../projects/Projects.ts'
import project from '../ui/project'
import Modal from '../modal/modal'


const StyledFeatured = styled.div`
    margin : var(--spacer) 0;
    position: relative;
    .projects {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
   

`

function Featured() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <>
        <StyledFeatured>
            <h1 className='section-title'>Featured projects</h1>   
            <div className="projects">
                
                {
                    projects.map( (project, index) => {
                        return <Project key={index} index={index} title={project.title} img={project.img} tag={project.tag} setModal={setModal}/>
                    })  
                }
               <Modal modal={modal} projects={projects}/>

            </div>
           
        </StyledFeatured>
        
    </>
  )
}

export default Featured