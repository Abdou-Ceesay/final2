import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from 'styled-components';
import star from "../../assets/img/star-2.png"

const Slider = styled.div`

width: 100%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 18px 0;
    /* background-color: red; */
    max-height: 120px;
    /* position: absolute; */
    h2 {
        font-size: 38px;
        /* font-weight: 500; */
        color: #fff;
    }
    .star {
        transform: scale(0.64);
    }
    .splide__list {
        display: flex;
        align-items: center;
    }
    @media only screen and (max-width: 468px) {
        padding: 1px;
        h2 {
            font-size: 28px;
        }
        .star {
        transform: scale(0.3);
    }
    }
`

function slider() {
  return (
    <Slider>
        <Splide options={{
        type: "loop",
        gap: "0px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 7,
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
                <img src={star} className="star" />
            </SplideSlide>
            <SplideSlide>
                <h2>UI design</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star"/>
            </SplideSlide>
            <SplideSlide>
                <h2>3d Animation</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star" />
            </SplideSlide>
            <SplideSlide>
                <h2>Product design</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star" />
            </SplideSlide>
            <SplideSlide>
                <h2>Branding</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star" />
            </SplideSlide>
            <SplideSlide>
                <h2>UI design</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star"/>
            </SplideSlide>
            <SplideSlide>
                <h2>3d Animation</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star" />
            </SplideSlide>
            <SplideSlide>
                <h2>Product design</h2>
            </SplideSlide>
            <SplideSlide>
                <img src={star} className="star" />
            </SplideSlide>
        </Splide>
    </Slider>
  )
}

export default slider