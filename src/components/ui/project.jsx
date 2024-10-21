import React, {useEffect} from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from "framer-motion"

import zoom from "../../assets/img/zoom65-blue.webp"
// import arrow from "../../assets/img/arrow.svg"
const StyledLink = styled.div`
    width: 100%;
    opacity: 0.5;
    transition: all .2s ease-in;
    &:hover {
        opacity: 1;
    }
    .project-mobile {
        display: none;
    }
    @media only screen and (max-width: 768px) {
    .project-mobile{
        display: block;
    }
    opacity: 1;
    .projectLink {
        display: none;
    }
}
`
const StyledProject = styled.div`
    width: 100%;
    padding: 20px var(--padding);
    border-top: 1px solid #ffffff20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .2s ease-in;
    
    &:last-child {
        border-bottom:1px solid #ffffff20;
    }
    h2 {
        font-size: calc(var(--l-sizing) * 1);
        transition: transform .35s ease-in;
        display: flex;
        align-items: baseline;
        gap: 12px;
    }
    .dot {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: var(--secondaryColor);
        transform: scale(0);
        transition: transform .15s ease-out;
    }
    p {
        font-size: var(--m-sizing);
        transition: all .2s linear ;
    }
    svg path {
        transition: all .2s ease-in;
    }
    .arrow {
        width: 100px;
        height: 100px;
        /* background-color: var(--secondaryColor); */
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .2s ease-in;
    }
    &:hover svg path {
        fill: var(--black);
    }
    &:hover .arrow {
        background-color: var(--secondaryColor);
    }
    &:hover {
        opacity: 1;
        background-color: #ffffff08;
    }
    &:hover h2 {
        transform: translateX(16px);
    }
    &:hover .dot {
        transform: scale(1);
    }
    &:hover p {
        transform: translateX(10px);
    }
    
    
`
const StyledMobile = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    border: 1px solid #888;
    flex-direction: column;
    margin-bottom: 50px;
    .project-cover-m {
        width: 100%;
        aspect-ratio: 4/3;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .project-title-m {
            padding: 50px 20px;
            font-size: 14px;
        }
`

function Project(props) {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <StyledLink>
        <Link to={props.path} className='projectLink'>
            <StyledProject onMouseEnter={() => {props.setModal({active: true, index: props.index})}} onMouseLeave={() => {props.setModal({active: false, index: props.index})}} data-aos="fade-up">


                <motion.h2 exit={{opacity:0}}>{props.title}<span className='dot'></span></motion.h2>
                <div className="arrow">
                <svg width="30" height="30" viewBox="0 0 43 43" fill="blue" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.87868 37.8787C-0.292893 39.0503 -0.292893 40.9497 0.87868 42.1213C2.05025 43.2929 3.94975 43.2929 5.12132 42.1213L0.87868 37.8787ZM43 3C43 1.34314 41.6569 -9.06788e-07 40 -3.16732e-07L13 -2.00261e-06C11.3431 -2.00261e-06 10 1.34314 10 3C10 4.65685 11.3431 6 13 6H37V30C37 31.6569 38.3431 33 40 33C41.6569 33 43 31.6569 43 30L43 3ZM5.12132 42.1213L42.1213 5.12132L37.8787 0.878678L0.87868 37.8787L5.12132 42.1213Z" fill="white"/>
                </svg>

                </div>

            </StyledProject>
        </Link>

        <Link to={props.path} className='project-mobile'>
            <StyledMobile data-aos="fade-up">
                <div className="project-cover-m">
                    <img src={props.img}/>
                </div>
                <div className="project-title-m">
                    <h2>{props.title}</h2>
                </div>
            </StyledMobile>
        </Link>
    </StyledLink>
    
   
    
    
  )
}

export default Project