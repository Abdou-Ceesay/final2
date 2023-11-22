import React, {useEffect, useRef} from 'react'
import styled from 'styled-components';
import frame from '../../assets/img/frame.png';
import open from '../../assets/img/open.svg';
import Slider from '../ui/slider';
import {motion, useInView } from 'framer-motion';

// IMAGES
import sphere from "../../assets/img/sphere.png"
import stars from "../../assets/img/stars.svg"


const StyledHero = styled.div`
    background-color: #111111;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .hero-main {
        padding-left:var(--padding);
        display : flex;
        height: calc(100vh - 100px);
        align-items: center;
        width: 100%;
        position: relative;
    }
    
    .hero-text {
        width: 90%;
        z-index: 4;
    }
    .sphere {
      pointer-events: none;
      position: absolute;
      top: -8%;
      left: -3%;
      opacity: 0.6;
      z-index: 3;
      transform: scale(.6);
    }
    .stars {
      pointer-events: none;
      position: absolute;
      top: -10%;
      left: -10%;
      opacity: 1;
      z-index: 3;
      transform: scale(.8);
    }
    h1 {
        font-size: 60px;
        line-height :110%;

    }
    .hero-frame {
        position : relative;
    }
    .hero-open {
        position : absolute;
        bottom:-15%;
        right : -30%;
        transform: translateX(-50%);
    }
    .lineMask {
      overflow: hidden;
    }
    @keyframes rotating {
        from {
          -ms-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -ms-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      .rotating {
        -webkit-animation: rotating 10s linear infinite;
        -moz-animation: rotating 10s linear infinite;
        -ms-animation: rotating 10s linear infinite;
        -o-animation: rotating 10s linear infinite;
        animation: rotating 10s linear infinite;
      }
      span {
        color: var(--secondaryColor);
      }
`

function hero() {
  const phrases = [
    "I am a UI/UX & 3D designer",
    "passionate about creating",
    " great user experiences.",
  ]

  return (
    <StyledHero>
        <div className="hero-main">
            
               <MaskText phrases={phrases}/>
            
            {/* <div className="hero-img">
                <div className="hero-frame">
                    <img src={frame} alt=""/>
                    <img className='hero-open rotating' src={open} alt=""/>
                </div>
            </div> */}
             
          <div className="stars"><img src={stars} /></div>
          <div className="sphere"><img src={sphere} alt="sphere" /></div>
        
        </div>
       
        <Slider/>
    </StyledHero>
  )
}
function MaskText({phrases}) {

  const animate = {
    initial: {y: "100%"},
    open: (i) => ({y: "0%", transition: {duration: .75, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1]}})
  }

  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin:"-10%"});



  return (
    
    <div ref={body} className='hero-text'>
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className='lineMask'>
            <motion.h1 custom={index} variants={animate} initial="initial" animate={isInView ? "open" : ""}>{phrase}</motion.h1>
            </div>
        })
      }
    </div>
    
  )
}

export default hero