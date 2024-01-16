import React, {useEffect, useRef} from 'react'
import styled from 'styled-components';
import frame from '../../assets/img/frame.png';
import open from '../../assets/img/open.svg';
import Slider from '../ui/slider';
import {motion, useInView } from 'framer-motion';

// IMAGES
import sphere from "../../assets/img/sphere.png"
import stars from "../../assets/img/stars.svg"
import blur1 from "../../assets/img/Vector 3.png"


const StyledHero = styled.div`
    background-color: #070707;
    background-size: 100px 100px;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
    background-position: -1px -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    /* height: calc(100vh - 100px); */
    height: 100vh;
    .hero-main {
        padding-left:var(--padding);
        height: calc(100vh - 100px);
        display : flex;
        align-items: center;
        width: 100%;
        position: relative;
    }
    .blur1 {
      position: absolute;
      left:-20%;
      transform: scale(1.4);
      pointer-events: none;
      opacity: .5;
    }
    .hero-text {
        width: 90%;
        z-index: 4;
    }
    .sphere {
      pointer-events: none;
      position: absolute;
      top: 5%;
      left: -3%;
      opacity: 0.75;
      z-index: 3;
      transform: scale(.5);
      img {
        width: 100%;
        height: 100%;
      }
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
        font-size: 72px;
        line-height :110%;
        background-image:linear-gradient(270deg, black, white 69%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

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
      @media only screen and (max-width: 768px) {
    .hero-main {
      .hero-text {
        h1 {
          font-size: 32px;
          
        }
      }
      .stars {
        transform: scale(.6);
        transform-origin: left;
        left: -30%;

      }
      .sphere {
        transform: scale(.45);
        left: -18%;
      }
      .blur1 {
        transform: scale(.8);
      }
    }
  }
`

function hero() {
  const phrases = [
    "I am a UI/UX & 3d designer",
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
          <img className='blur1' src={blur1} alt="" />
        
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