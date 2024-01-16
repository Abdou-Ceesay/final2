import React from 'react'
import styled from 'styled-components'
import FooterSlider from '../ui/footerSlider'

import sphere2 from "../../assets/img/sphere2.png"

const StyledFooter = styled.div`
    width: 100%;
    height: 100vh;
    background-color:var(--black);
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    color:#111111;
    overflow: hidden;
    .filigranne {
      position: absolute;
      z-index: -3;
      bottom: -20%;
      left: -3%;
      transform: scale(1.2);
    }
    h1 {
      font-size: 72px;
      a {
        text-decoration: underline;
        color: #111111;
      }
    }
    .copyright{
      text-align: left;
      margin-left: var(--padding);
      color: #ffffff50;
      font-size: 16px;
      position: absolute;
      bottom: 20px;
    }
    .footer-content {
      margin-top: 60px;
      font-family: 'Osiris', sans-serif;
      width: 100%;
      padding: 0 var(--padding);
      flex-direction: row ;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;
      .footer-left {
        width: 40%;
        display: flex;
        a {
          font-size: 44px;
          border: 1px solid #fff;
          padding: 30px 100px;
          border-radius: 60px;
          transition: 200ms ease-in;
          &:hover {
            background-color: var(--secondaryColor);
            color:#111111;
            border-color: var(--secondaryColor);
          }
        }
      }
      .footer-right {
          display: flex;
          width: 55%;
        ul {
          width: 100%;
        }
        ul li {
          width: 100%;
          font-size: 28px;
          margin: 0px 0;
          display: flex;
          border-bottom: 1px solid #ffffff30;
          
          
          a {
            width: 100%;
            padding: 48px 30px;
            transition: all 250ms ease-out;
            /* padding: 60px 0; */
            &:hover {
              background-color: #ffffff05;
            }
            &:hover {
              padding-left: 50px;
            }
            
          }
        }
      }

    }

`

function footer() {
  return (
    <StyledFooter>
        <img src={sphere2} alt="" className='filigranne' />
        <FooterSlider/>
       <div className="footer-content">
          <div className="footer-left">
            <a href="mailto:a.cisse256@gmail.com">drop me an Email</a>
          </div>
          <div className="footer-right">
            <ul>
              <li><a href="https://www.linkedin.com/in/madebyabdou/" target='_blank'>LinkedIn</a></li>
              <li><a href="https://www.behance.net/abdou_cisse" target='_blank'>Behance</a></li>
              <li><a href="https://dribbble.com/Stainvisuals" target='_blank'>Dribbble</a></li>
              <li><a href="https://www.instagram.com/ceesayy_/" target='_blank'>Instagram</a></li>
            </ul>
          </div>
       </div>
       <p className='copyright'>© 2023 Abdoulaye Cisse</p>
    </StyledFooter>
  )
}

export default footer