import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const StyledStairs = styled.div `
    
    .stairs {
        .transition-container {
            height: 100vh;
            width: 100vw;
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            display: flex;
            z-index: 100;
            div {
                position: relative;
                height: 100%;
                width: 100%;
                background-color: var(--gray);
            }
        }
    }
    
`


function Stairs({children}) {

    const anim = (variants, custom) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
            custom  
        }        
    }

    const expand = {
        initial: {
            top: 0,
        },
        enter: (i) => ( {
            top: "100%",
            transition: {
                duration: 0.4,
                delay: 0.065 * i,
            },
            transitionEnd: {
                height: 0,
                top:0,
            }
        }),
        exit : (i) => ( {
            height: "100%",
            transition: {
                duration: 0.4,
                delay: 0.065 * i,
            },
        }),

    }

    const nbOfColumns = 5;

    const routes = {
        "/" : "Home",
        "/about" : "About",
        "/waak" : "Waak",
        "/work" : "Work"
    }

    const text = {
        initial: {
            opacity: 1,
            
        },
        enter: {
            opacity: 1,
            top:0,
            transition: {
                duration: 0.4,
                delay: 0,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit : {
            opacity: 1,
            top:"40%",
        }
    }
  return (
    

    
     <StyledStairs>
       
    
        <div className='page stairs'>
            
            <div className="transition-container">
                
                {
                    [...Array(nbOfColumns)].map((_, i) => {
                        return <motion.div {...anim(expand, nbOfColumns - i)} key={i}/>
                    })
                }
                
            </div>
           {[children]}
        </div>
        </StyledStairs>
    
   
  )

}

export default Stairs