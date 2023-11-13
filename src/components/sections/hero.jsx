import React from 'react'
import styled from 'styled-components';
import frame from '../../assets/img/frame.png';
import open from '../../assets/img/open.svg';
import Slider from '../ui/slider';


const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .hero-main {
        padding-left:var(--padding);
        display : flex;
        height: calc(100vh - 100px);
        align-items: center;
    }
    
    .hero-text {
        width: 70%;
    }
    h1 {
        font-size: var(--xxl-sizing);
        line-height :100%
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
  return (
    <StyledHero>
        <div className="hero-main">
            <div className="hero-text">
                <h1>I am a <span>UI/UX</span> & <span>3D Designer</span> passionate about creating great user experiences<span>.</span></h1>
            </div>
            <div className="hero-img">
                <div className="hero-frame">
                    <img src={frame} alt=""/>
                    <img className='hero-open rotating' src={open} alt=""/>
                </div>
            </div>
        </div>
        
        <Slider/>
    </StyledHero>
  )
}

export default hero