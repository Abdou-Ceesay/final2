import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png"

const StyledNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 20px 50px;
    a img{
        width: 60px;
    }
    
    .nav-menu {
        display: flex;
        gap: var(--l-sizing);
    }
    .nav-item {
        opacity: 30%;
    }
    .active {
        /* text-decoration : line-through; */
        opacity: 100%;
    }
    
`

function navbar() {
  return (
    <StyledNav>
        <Link path="/"><img src={logo}/></Link>
        <ul className='nav-menu'>
            <li><Link className='nav-item active' href="#">( Home )</Link></li>
            <li><Link className='nav-item' href="#">( Work )</Link></li>
            {/* <li><Link className='nav-item' href="#">( Lab )</Link></li> */}
            <li><Link className='nav-item' href="#">( Contact )</Link></li>
        </ul>
    </StyledNav>
  )
}

export default navbar