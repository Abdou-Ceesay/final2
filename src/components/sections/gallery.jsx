import React, { useRef } from 'react'
import styled from 'styled-components'
import {motion, useScroll, useTransform } from 'framer-motion'

const StyledGallery = styled.div`
    .gallery-container {
        width: 100%;
        padding: calc(var(--xl-sizing) * 3) var(--padding);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #111111;
        gap: calc(var(--l-sizing) * 1);
        border-radius: 0 0 50px 50px;
        position: relative;
        .gallery-row, .gallery-row {
            display: flex;
            width:120vw;
            gap:1%;
            .gallery-item {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24%;
                height: 35vh;
                /* aspect-ratio: 4/3; */
                background-color: #ffffff10;
                font-size: 24px;
                color:#888888
            }
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
                <div className="gallery-item">Img</div>
                <div className="gallery-item">Img</div>
                <div className="gallery-item">Img</div>
                <div className="gallery-item">Img</div>
            </motion.div>
            <motion.div style={{x: x2}} className="gallery-row">
                <div className="gallery-item">Img</div>
                <div className="gallery-item">Img</div>
                <div className="gallery-item">Img</div>
                <div className="gallery-item">Img</div>
            </motion.div>
        </div>
    </StyledGallery>
  )
}

export default Gallery