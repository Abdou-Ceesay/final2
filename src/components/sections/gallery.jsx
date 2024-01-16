import React, { useRef } from 'react'
import styled from 'styled-components'
import {motion, useScroll, useTransform } from 'framer-motion'
import oreo from "../../assets/img/oreo 2.gif"

import gallery1 from "../../assets/img/gallery1.webp"
import gallery2 from "../../assets/img/gallery2.webp"
import gallery3 from "../../assets/img/gallery3.webp"
import gallery4 from "../../assets/img/gallery4.webp"
import gallery5 from "../../assets/img/gallery5.webp"
import gallery6 from "../../assets/img/gallery6.webp"
import gallery7 from "../../assets/img/gallery7.webp"
import gallery8 from "../../assets/img/gallery8.webp"

const StyledGallery = styled.div`
    .gallery-container {
        width: 100%;
        padding: calc(var(--xl-sizing) * 3) var(--padding);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #070707;
        gap: calc(var(--l-sizing) * 1);
        border-radius: 0 0 0px 0px;
        position: relative;
        z-index: 1;
        .gallery-row, .gallery-row {
            display: flex;
            width:120vw;
            gap:1%;
            .gallery-item {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24%;
                height: auto;
                aspect-ratio: 4/3;  
                background-color: #ffffff10;
                font-size: 24px;
                color:#888888;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
  
     
    }
    @media only screen and (max-width: 768px) {
        .gallery-container {
            padding: calc(var(--xl-sizing) * 1.5) var(--padding);
        }
        .gallery-row {
            width: 200vw !important;
        }
}

`

function Gallery() {

  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <StyledGallery>
        <div className="gallery-container" ref={container}>
            <motion.div style={{x: x1}} className="gallery-row">
                <div className="gallery-item"><img src={gallery7} alt="valhalla ui design" /></div>
                <div className="gallery-item"><img src={gallery8} alt="valhalla ui design" /></div>
                <div className="gallery-item"><img src={gallery5} alt="valhalla ui design" /></div>
                <div className="gallery-item"><img src={gallery4} alt="valhalla ui design" /></div>
            </motion.div>
            <motion.div style={{x: x2}} className="gallery-row">
                <div className="gallery-item"><img src={gallery3} alt="valhalla ui design" /></div>
                <div className="gallery-item"><img src={gallery6} alt="valhalla ui design" /></div>
                <div className="gallery-item"><img src={gallery1} alt="valhalla ui design" /></div>
                <div className="gallery-item"><img src={gallery2} alt="valhalla ui design" /></div>
            </motion.div>
        </div>
    </StyledGallery>
  )
}

export default Gallery