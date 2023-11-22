import React from 'react'
import styled from 'styled-components'

const StyledGallery = styled.div`
    .gallery-container {
        width: 100%;
        height: 100vh;
        padding: calc(var(--xl-sizing) * .75) var(--padding);
        display: flex;
        flex-direction: column;
        background-color: #111111;
        gap: calc(var(--xl-sizing) * 1.3);
        border-radius: 0 0 50px 50px;
        position: relative;
        .gallery-row1, .gallery-row2 {
            transform: scale(1.2);
            display: flex;
            width:100%;
            gap:1%;
            .gallery-item {
                width: 24%;
                height: auto;
                aspect-ratio: 4/3;
                background-color: #ffffff10;
            }
        }
        .gallery-row2 {
            margin-left: 100px;
        }
    }

`

function gallery() {
  return (
    <StyledGallery>
        <div className="gallery-container">
            <div className="gallery-row1">
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
            </div>
            <div className="gallery-row2" id='row2'>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
                <div className="gallery-item"></div>
            </div>
        </div>
    </StyledGallery>
  )
}

export default gallery