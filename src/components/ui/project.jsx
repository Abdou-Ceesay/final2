import React from 'react'
import styled from 'styled-components'

const StyledProject = styled.div`
    width: 100%;
    padding: var(--padding);
    border-top: 1px solid #ffffff20;
    display: flex;
    justify-content: space-between;
    transition: transform .2s linear;
    h2 {
        font-size: calc(var(--l-sizing) * 1.3);
        transition: transform .2s linear;
    }
    p {
        font-size: var(--m-sizing);
        transition: transform .2s linear ;
    }
    &:hover {
        opacity: 0.4;
    }
    &:hover h2 {
        transform: translateX(-10px);
    }
    &:hover p {
        transform: translateX(10px);
    }
`

function project({index, title, setModal, tag}) {
  return (
    <StyledProject onMouseEnter={() => {setModal({active: true, index: index})}} onMouseLeave={() => {setModal({active: false, index: index})}}>

            <h2>{title}</h2>

            <p>{tag}</p>

    </StyledProject>
  )
}

export default project