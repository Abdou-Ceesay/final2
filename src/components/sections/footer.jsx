import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    width: 100%;
    height: 100vh;
    background-color:var(--secondaryColor);
    /* background-color: #111111; */
    position: sticky;
    bottom: 0;
    z-index: -10;
    display: flex;
    align-items: center;
    justify-content: center;
`

function footer() {
  return (
    <StyledFooter>
        <h1>Footer</h1>
    </StyledFooter>
  )
}

export default footer