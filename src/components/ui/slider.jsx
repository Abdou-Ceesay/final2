import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from 'styled-components';
import star from "../../assets/img/star.svg"

const Slider = styled.div`
width: 100vw;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 18px 0;
    h2 {
        font-size: 80px;
        font-weight: 500;
    }
    .splide__list {
        display: flex;
        align-items: center;
    }
`

function slider() {
  return (
    <Slider>
        <Splide options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 10,
        autoWidth: true,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1
        }
      }}
      extensions={{ AutoScroll }}>
            <SplideSlide>
                <h2>Branding</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} alt="star" />
            </SplideSlide>
            <SplideSlide>
                <h2>UI Design</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} alt="star"/>
            </SplideSlide>
            <SplideSlide>
                <h2>3D Animation</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} alt="star" />
            </SplideSlide>
            <SplideSlide>
                <h2>Product Design</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} alt="star" />
            </SplideSlide>
        </Splide>
    </Slider>
  )
}

export default slider