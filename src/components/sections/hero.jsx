import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import Slider from '../ui/slider';
import stars from "../../assets/img/stars.svg"

// Slideshow images: lightweight copies made for the hero (src/assets/img/hero)
import crocsImg from "../../assets/img/hero/crocs.webp"
import crocsThumb from "../../assets/img/hero/crocs-thumb.webp"
import jacobImg from "../../assets/img/hero/jacob.webp"
import jacobThumb from "../../assets/img/hero/jacob-thumb.webp"
import waakImg from "../../assets/img/hero/waak.webp"
import waakThumb from "../../assets/img/hero/waak-thumb.webp"
import colaImg from "../../assets/img/hero/cola.webp"
import colaThumb from "../../assets/img/hero/cola-thumb.webp"
import zoomImg from "../../assets/img/hero/zoom.webp"
import zoomThumb from "../../assets/img/hero/zoom-thumb.webp"

const SLIDES = [
  { title: 'Crocs × Harry Potter', path: '/crocs', img: crocsImg, thumb: crocsThumb },
  { title: 'Jacob & Co Casino Tourbillon', path: '/jacobandco', img: jacobImg, thumb: jacobThumb },
  { title: 'WAAK Clothing', path: '/waak', img: waakImg, thumb: waakThumb },
  { title: 'American Cola', path: '/american-cola', img: colaImg, thumb: colaThumb },
  { title: 'Zoom65', path: '/zoom-65', img: zoomImg, thumb: zoomThumb },
]
const SLIDE_DURATION = 4000 // ms each image stays on screen

const StyledHero = styled.section`
  position: relative;
  z-index: 1; /* stay above the sticky footer, like the previous hero */
  isolation: isolate;
  overflow: hidden;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  padding-top: 100px; /* room for the fixed navbar */
  background-color: #080808;
  background-image:
    radial-gradient(ellipse 76vw 91vh at 70% 48%, rgba(197, 255, 73, 0.15) 0%, rgba(197, 255, 73, 0.05) 45%, transparent 72%),
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 100% 100%, 100px 100px, 100px 100px;
  background-repeat: no-repeat, repeat, repeat;

  .stars {
    position: absolute;
    left: -4vw;
    top: 8vh;
    width: 104vw;
    height: auto;
    z-index: -1;
    pointer-events: none;
    opacity: 0.9;
  }

  .hero-main {
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      "text media"
      "actions media";
    column-gap: clamp(32px, 4.5vw, 64px);
    row-gap: 36px;
    align-items: center;
    padding: clamp(12px, 2.5vh, 36px) var(--padding);
  }

  .hero-text {
    grid-area: text;
    align-self: end;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--secondaryColor);
  }
  .eyebrow .dot {
    display: none;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: var(--secondaryColor);
  }
  h1 {
    /* scales with screen width and height so the three lines always fit */
    font-size: clamp(46px, min(6.6vw, 10.5vh), 104px);
    line-height: 0.92;
    letter-spacing: -0.01em;
    white-space: nowrap;
  }
  .lineMask { overflow: hidden; }
  .lineMask h1 { padding-bottom: 0.04em; }
  .accent { color: var(--secondaryColor); }

  .hero-actions {
    grid-area: actions;
    align-self: start;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 60px;
    padding: 0 34px;
    border-radius: 60px;
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
    transition: transform 0.2s ease-in, background-color 0.2s ease-in, color 0.2s ease-in;
    &:hover { transform: translateY(-2px); }
  }
  .btn-primary {
    background-color: var(--secondaryColor);
    color: var(--black);
  }
  .btn-outline {
    border: 1px solid rgba(255, 255, 255, 0.5);
    &:hover { background-color: var(--white); color: var(--black); }
  }

  .hero-media {
    grid-area: media;
    position: relative;
    display: block;
    width: clamp(300px, 30vw, 429px);
    aspect-ratio: 429 / 539;
    max-height: calc(100svh - 400px);
    min-height: 340px;
    overflow: hidden;
    background-color: #151515;
    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .recent {
    display: flex;
    align-items: flex-end;
    gap: 14px;
    padding: 0 var(--padding) 24px;
    p {
      width: 110px;
      margin-right: 18px;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 0.08em;
      color: rgba(255, 255, 255, 0.6);
      text-transform: uppercase;
      line-height: 1.3;
    }
  }
  .thumb {
    position: relative;
    flex: 0 1 200px;
    min-width: 0;
    aspect-ratio: 200 / 112;
    padding: 0;
    border: none;
    background: #151515;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      filter: brightness(0.4);   /* dimmed, not see-through */
      transition: filter 0.3s ease-in;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 3px;
      background-color: var(--secondaryColor);
      transform: scaleX(0);
      transform-origin: left;
    }
    &:hover img, &:focus-visible img { filter: brightness(0.75); }
    &[aria-pressed="true"] img { filter: none; }
    &[aria-pressed="true"]::after {
      animation: thumb-progress ${SLIDE_DURATION}ms linear forwards;
    }
  }
  &.paused .thumb[aria-pressed="true"]::after {
    animation-play-state: paused;
  }
  @keyframes thumb-progress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }

  /* Tablet and phone: one column — text, image, buttons */
  @media only screen and (max-width: 900px) {
    .hero-main {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas:
        "text"
        "media"
        "actions";
      row-gap: 20px;
      align-content: center;
    }
    .hero-text { gap: 16px; }
    h1 { font-size: clamp(40px, 11.8vw, 72px); white-space: normal; }
    .eyebrow { font-size: 12px; gap: 8px; }
    .eyebrow .dot { display: block; }
    .eyebrow .paren { display: none; }
    .hero-media {
      width: 100%;
      aspect-ratio: 350 / 286;
      max-height: 52svh;
      min-height: 220px;
    }
    .hero-actions {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }
    .btn { height: 52px; padding: 0 16px; font-size: 15px; gap: 8px; }
    .recent { display: none; }
    background-image:
      radial-gradient(ellipse 140vw 75vh at 55% 62%, rgba(197, 255, 73, 0.15) 0%, rgba(197, 255, 73, 0.05) 45%, transparent 72%),
      linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 100% 100%, 78px 78px, 78px 78px;
    .stars { left: -51vw; top: 30vh; width: 200vw; }
  }
  @media only screen and (max-width: 468px) {
    padding-top: 80px;
    .hero-main { padding: 24px 20px; }
  }
`

const ease = [0.33, 1, 0.68, 1]

function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const textRef = useRef(null)
  const inView = useInView(textRef, { once: true, margin: '-10%' })

  // advance the slideshow; the timer restarts whenever the slide changes
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setActive((i) => (i + 1) % SLIDES.length), SLIDE_DURATION)
    return () => clearTimeout(id)
  }, [active, paused])

  // load every slide up front so the fades never wait on the network
  useEffect(() => {
    SLIDES.forEach((s) => { new Image().src = s.img })
  }, [])

  const scrollToWork = useCallback((e) => {
    const target = document.getElementById('work')
    if (!target) return
    e.preventDefault()
    if (window.__lenis) window.__lenis.scrollTo(target, { offset: -100 })
    else target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const lines = [
    <>3D product visuals</>,
    <><span className="accent">&amp; CGI</span> campaigns</>,
    <>for brands.</>,
  ]
  const lineAnim = {
    initial: { y: '100%' },
    open: (i) => ({ y: '0%', transition: { duration: 0.75, delay: 0.1 * i, ease } }),
  }
  const slide = SLIDES[active]

  return (
    <StyledHero id="top" className={paused ? 'paused' : ''}>
      <img className="stars" src={stars} alt="" aria-hidden="true" />

      <div className="hero-main">
        <div className="hero-text" ref={textRef}>
          <p className="eyebrow">
            <span className="dot" aria-hidden="true"></span>
            <span><span className="paren">( </span>Abdou Cisse — 3D Artist, Dakar<span className="paren"> )</span></span>
          </p>
          <div>
            {lines.map((line, i) => (
              <div className="lineMask" key={i}>
                <motion.h1 custom={i} variants={lineAnim} initial="initial" animate={inView ? 'open' : 'initial'}>
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>

        <Link
          to={slide.path}
          className="hero-media"
          aria-label={`View project: ${slide.title}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={slide.img}
              src={slide.img}
              alt={slide.title}
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease }}
            />
          </AnimatePresence>
        </Link>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#work" onClick={scrollToWork}>
            View work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v16M5 13l7 7 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <Link className="btn btn-outline" to="/contact">
            Start a project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18L18 6M8 6h10v10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>

      <div
        className="recent"
        aria-label="Recent work"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p>Recent<br />work →</p>
        {SLIDES.map((s, i) => (
          <button
            key={s.path}
            type="button"
            className="thumb"
            aria-label={`Show ${s.title}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <img src={s.thumb} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      <Slider />
    </StyledHero>
  )
}

export default Hero
