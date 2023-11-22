import React from 'react'
import { motion, useScroll } from 'framer-motion'
import styled from 'styled-components'

const StyledProgress = styled.div`
    .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        /* width: ; */
        height: 1px;
        background-color: var(--secondaryColor);
        transform-origin: 0%;
    }
`

function ProgressBar() {
    const {scrollYProgress} = useScroll();


  return (
    <StyledProgress>
        <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }}/>
    </StyledProgress>
  )
}

export default ProgressBar
