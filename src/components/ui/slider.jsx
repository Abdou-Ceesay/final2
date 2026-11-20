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
        padding: 0 clamp(12px, 1.4vw, 22px);
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
                <h2>Product visualization</h2>
            </SplideSlide>
            <SplideSlide>
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3236 28.0104V17.5701L1.92506 22.9963L0.750248 20.9615L10.3946 15.3933L0.162842 9.48597L1.33766 7.45113L11.3236 13.2165L11.3236 0.989655L13.6732 0.989655V13.5004L24.1509 7.45113L25.3257 9.48597L15.0939 15.3933L24.7383 20.9615L23.5635 22.9963L13.6732 17.2862V28.0104H11.3236Z" fill="var(--secondaryColor)"/>
</svg>

            </SplideSlide>
            <SplideSlide>
                <h2>3D animation</h2>
            </SplideSlide>
            <SplideSlide>
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3236 28.0104V17.5701L1.92506 22.9963L0.750248 20.9615L10.3946 15.3933L0.162842 9.48597L1.33766 7.45113L11.3236 13.2165L11.3236 0.989655L13.6732 0.989655V13.5004L24.1509 7.45113L25.3257 9.48597L15.0939 15.3933L24.7383 20.9615L23.5635 22.9963L13.6732 17.2862V28.0104H11.3236Z" fill="var(--secondaryColor)"/>
</svg>
            </SplideSlide>
            <SplideSlide>
                <h2>CGI campaigns</h2>
            </SplideSlide>
            <SplideSlide>
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3236 28.0104V17.5701L1.92506 22.9963L0.750248 20.9615L10.3946 15.3933L0.162842 9.48597L1.33766 7.45113L11.3236 13.2165L11.3236 0.989655L13.6732 0.989655V13.5004L24.1509 7.45113L25.3257 9.48597L15.0939 15.3933L24.7383 20.9615L23.5635 22.9963L13.6732 17.2862V28.0104H11.3236Z" fill="var(--secondaryColor)"/>
</svg>
            </SplideSlide>
            <SplideSlide>
                <h2>FOOH</h2>
            </SplideSlide>
            <SplideSlide>
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3236 28.0104V17.5701L1.92506 22.9963L0.750248 20.9615L10.3946 15.3933L0.162842 9.48597L1.33766 7.45113L11.3236 13.2165L11.3236 0.989655L13.6732 0.989655V13.5004L24.1509 7.45113L25.3257 9.48597L15.0939 15.3933L24.7383 20.9615L23.5635 22.9963L13.6732 17.2862V28.0104H11.3236Z" fill="var(--secondaryColor)"/>
</svg>
            </SplideSlide>
            <SplideSlide>
                <h2>Product visualization</h2>
            </SplideSlide>
            <SplideSlide>
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3236 28.0104V17.5701L1.92506 22.9963L0.750248 20.9615L10.3946 15.3933L0.162842 9.48597L1.33766 7.45113L11.3236 13.2165L11.3236 0.989655L13.6732 0.989655V13.5004L24.1509 7.45113L25.3257 9.48597L15.0939 15.3933L24.7383 20.9615L23.5635 22.9963L13.6732 17.2862V28.0104H11.3236Z" fill="var(--secondaryColor)"/>
</svg>
            </SplideSlide>
            <SplideSlide>
                <h2>3D animation</h2>
            </SplideSlide>
            <SplideSlide>
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3236 28.0104V17.5701L1.92506 22.9963L0.750248 20.9615L10.3946 15.3933L0.162842 9.48597L1.33766 7.45113L11.3236 13.2165L11.3236 0.989655L13.6732 0.989655V13.5004L24.1509 7.45113L25.3257 9.48597L15.0939 15.3933L24.7383 20.9615L23.5635 22.9963L13.6732 17.2862V28.0104H11.3236Z" fill="var(--secondaryColor)"/>
</svg>
            </SplideSlide>
            <SplideSlide>
                <h2>CGI campaigns</h2>
            </SplideSlide>
            <SplideSlide>
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3236 28.0104V17.5701L1.92506 22.9963L0.750248 20.9615L10.3946 15.3933L0.162842 9.48597L1.33766 7.45113L11.3236 13.2165L11.3236 0.989655L13.6732 0.989655V13.5004L24.1509 7.45113L25.3257 9.48597L15.0939 15.3933L24.7383 20.9615L23.5635 22.9963L13.6732 17.2862V28.0104H11.3236Z" fill="var(--secondaryColor)"/>
</svg>
            </SplideSlide>
            <SplideSlide>
                <h2>FOOH</h2>
            </SplideSlide>
            <SplideSlide>
                <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3236 28.0104V17.5701L1.92506 22.9963L0.750248 20.9615L10.3946 15.3933L0.162842 9.48597L1.33766 7.45113L11.3236 13.2165L11.3236 0.989655L13.6732 0.989655V13.5004L24.1509 7.45113L25.3257 9.48597L15.0939 15.3933L24.7383 20.9615L23.5635 22.9963L13.6732 17.2862V28.0104H11.3236Z" fill="var(--secondaryColor)"/>
</svg>
            </SplideSlide>
        </Splide>
    </Slider>
  )
}

export default slider