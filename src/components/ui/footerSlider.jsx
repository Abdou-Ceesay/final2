import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from 'styled-components';
import star from "../../assets/img/star-2.png"

const Slider = styled.div`
width: 100%;
    border-top: 1px solid white;
    /* border-bottom: 1px solid var(--secondaryColor); */
    padding: 18px 0;
    /* background-color: red; */
    max-height: 140px;
    /* position: absolute; */
    h2 {
        font-size: 48px;
        /* font-weight: 500; */
        color: #ffffff70;
    }
    .star {
        transform: scale(0.5);
    }
    .splide__list {
        display: flex;
        align-items: center;
    }
    @media only screen and (max-width: 468px)  {
        padding: 9px 0;
        h2 {
            font-size: 32px;
        }
        .star {
        transform: scale(0.4);
    }
    }
`

function footerSlider() {
  return (
    <Slider>
        <Splide options={{
        type: "loop",
        gap: "7px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 2,
        autoWidth: true,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1.2
        }
      }}
      extensions={{ AutoScroll }}>
            <SplideSlide>
                <h2>Let's start creating</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star" />
            </SplideSlide>
            <SplideSlide>
                <h2>Let's start creating</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star" />
            </SplideSlide>
            <SplideSlide>
                <h2>Let's start creating</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star" />
            </SplideSlide>
             
        </Splide>
    </Slider>
  )
}

export default footerSlider