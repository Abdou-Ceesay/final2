import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import GsapMagnetic from '../magnetic/Magnetic';

const fadeUp = {
    initial: {y: "-50%", opacity:0},
    enter: {y: "0", opacity:1},
    closed: {y: "-50%", opacity:0},
}


const StyledNav = styled(motion.div)`
position: fixed;
top:0;
left:0;
z-index: 10000;
width: 100%;
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
    /* once the page is scrolled, a dark backdrop keeps the links readable over content */
    &.scrolled {
        background-color: rgba(8, 8, 8, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }
    .nav-motion {
        width: 100%;
        display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 20px var(--padding);
    }
    .logo {
        position: relative;
    }
    .bounding {
        width: 180%;
        height: 100px;
        position: absolute;
        top: -10%;
        left:-30%;
        z-index: 1;
        /* transform: translate(-50%, -50%); */
    }
    a img{
        width: 60px;
    }
    
    .nav-menu {
        display: flex;
        gap: 2rem;
    }
    .nav-item {
        opacity: 30%;
        padding: 20px 20px;
        
        /* background-color: red; */
    }
    .active {
        /* text-decoration : line-through; */
        opacity: 100%;
    }
    @media only screen and (max-width: 468px) {
        .nav-motion{
            height: 80px;
            padding: 16px 20px;
        }
        a img {
            width: 44px;
        }
        .nav-menu {
            gap: 0;
        }
        .nav-item {
            padding: 12px 8px;
            font-size: 13px;
        }
    }
`

// Hides the navbar while scrolling down and brings it back when scrolling up.
function useHideOnScroll(pathname) {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        let ticking = false;
        const update = () => {
            const y = window.scrollY;
            const delta = y - lastY;
            setScrolled(y > 20);
            if (y < 120) setHidden(false);          // always shown near the top
            else if (delta > 6) setHidden(true);    // scrolling down
            else if (delta < -6) setHidden(false);  // scrolling up
            if (Math.abs(delta) > 6) lastY = y;
            ticking = false;
        };
        const onScroll = () => {
            if (!ticking) { ticking = true; requestAnimationFrame(update); }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // every new page starts with the navbar visible
    useEffect(() => { setHidden(false); }, [pathname]);

    return { hidden, scrolled, show: () => setHidden(false) };
}

function Navbar() {
    const { pathname } = useLocation();
    const { hidden, scrolled, show } = useHideOnScroll(pathname);
    const transition = { duration:1, ease: [0.43, 0.13, 0.23, 0.96], delay:.5};
  return (
    
    <>
<StyledNav
    className={scrolled ? 'scrolled' : ''}
    animate={{ y: hidden ? '-100%' : '0%' }}
    transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
    onFocusCapture={show}
>
    <motion.div className='nav-motion' variants={fadeUp} initial="initial"  animate="enter" transition={transition}>
    <GsapMagnetic>
            <Link to="/"><img src={logo}/></Link>    
        </GsapMagnetic>
       
        
        <ul className='nav-menu'>
        <GsapMagnetic>
            <li><Link className={`nav-item ${pathname === '/' ? 'active' : ''}`} to="/">( Home )</Link></li>
        </GsapMagnetic>
        {/* <GsapMagnetic>
            <li><Link className='nav-item' to="/work">( Work )</Link></li>
        </GsapMagnetic> */}
        <GsapMagnetic>
            <li><Link className={`nav-item ${pathname === '/contact' ? 'active' : ''}`} to="/contact">( Contact )</Link></li>
        </GsapMagnetic>    
            {/* <li><Link className='nav-item' href="#">( Lab )</Link></li> */}
           
        </ul>
    </motion.div>
        
    </StyledNav>
    </>
    
  )
}

export default Navbar