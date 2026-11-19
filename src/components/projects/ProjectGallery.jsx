import React, { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

/*
  Full-screen gallery for project pages.
  Place <ProjectGallery /> in a project page next to its ".container-small" block.
  Every image, video and Vimeo embed inside that block becomes part of the gallery:
  click an image or video to open it, then browse with the arrows, the keyboard
  (← → Esc), a swipe on touch screens, or the thumbnails.
  Add data-gallery-ignore to an element to leave it out.
*/

const pad = (n) => String(n).padStart(2, '0')

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #080808;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  color: var(--white);
  font-family: "Stratos", sans-serif;
  touch-action: pan-y;

  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px var(--padding);
    font-size: 15px;
    text-transform: uppercase;
  }
  .counter { color: #ffffffa0; letter-spacing: 0.06em; }
  .counter b { color: var(--white); font-weight: inherit; }
  .close {
    font: inherit;
    text-transform: uppercase;
    color: var(--white);
    background: none;
    border: none;
    padding: 12px 0 12px 12px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
    &:hover, &:focus-visible { opacity: 1; }
  }

  .stage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 clamp(16px, 7vw, 120px);
    min-height: 0;
  }
  .media {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    user-select: none;
  }
  .embed {
    width: min(100%, calc((100vh - 220px) * 16 / 9));
    aspect-ratio: 16 / 9;
    border: 0;
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid #ffffff40;
    background: rgba(8, 8, 8, 0.5);
    color: var(--white);
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover, &:focus-visible {
      background: var(--secondaryColor);
      border-color: var(--secondaryColor);
      color: var(--black);
    }
  }
  .prev { left: clamp(8px, 2vw, 40px); }
  .next { right: clamp(8px, 2vw, 40px); }

  .thumbs {
    display: flex;
    gap: 8px;
    justify-content: center;
    padding: 16px var(--padding) 24px;
    overflow-x: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
  .thumb {
    flex: 0 0 auto;
    width: 72px;
    height: 48px;
    padding: 0;
    border: 1px solid transparent;
    background: #ffffff10;
    opacity: 0.4;
    cursor: pointer;
    overflow: hidden;
    transition: opacity 0.2s, border-color 0.2s;
    img, video { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
    span { font-size: 11px; text-transform: uppercase; color: var(--white); }
    &:hover { opacity: 0.8; }
    &[aria-current="true"] { opacity: 1; border-color: var(--secondaryColor); }
  }

  @media only screen and (max-width: 768px) {
    .stage { padding: 0 12px; }
    .nav { width: 44px; height: 44px; top: auto; bottom: 12px; transform: none; }
    .prev { left: calc(50% - 56px); }
    .next { right: calc(50% - 56px); }
    .stage { padding-bottom: 68px; }
    .thumbs { display: none; }
  }
  @media only screen and (max-width: 468px) {
    .bar { padding: 16px 20px; }
  }
`

const Chevron = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={dir === 'left' ? 'M15 4L7 12L15 20' : 'M9 4L17 12L9 20'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function Lightbox({ items, index, setIndex, onClose }) {
  const item = items[index]
  const total = items.length
  const closeRef = useRef(null)
  const touch = useRef(null)

  const go = useCallback((step) => setIndex((i) => (i + step + total) % total), [setIndex, total])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose])

  useEffect(() => { closeRef.current?.focus() }, [])

  // preload the neighbouring images so browsing feels instant
  useEffect(() => {
    ;[1, -1].forEach((step) => {
      const n = items[(index + step + total) % total]
      if (n && n.type === 'image') new Image().src = n.src
    })
  }, [index, items, total])

  const onTouchStart = (e) => { touch.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touch.current === null) return
    const dx = e.changedTouches[0].clientX - touch.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    touch.current = null
  }

  return (
    <Overlay
      role="dialog"
      aria-modal="true"
      aria-label="Project gallery"
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="bar">
        <span className="counter"><b>{pad(index + 1)}</b> / {pad(total)}</span>
        <button ref={closeRef} className="close" onClick={onClose}>( Close )</button>
      </div>

      <div className="stage" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
          >
            {item.type === 'image' && <img className="media" src={item.src} alt={item.alt} draggable="false" />}
            {item.type === 'video' && <video className="media" src={item.src} controls autoPlay loop muted playsInline />}
            {item.type === 'embed' && (
              <iframe className="embed" src={item.src} title="Project video" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            )}
          </motion.div>
        </AnimatePresence>

        {total > 1 && (
          <>
            <button className="nav prev" onClick={() => go(-1)} aria-label="Previous"><Chevron dir="left" /></button>
            <button className="nav next" onClick={() => go(1)} aria-label="Next"><Chevron dir="right" /></button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="thumbs">
          {items.map((it, i) => (
            <button key={i} className="thumb" aria-label={`Show item ${i + 1}`} aria-current={i === index} onClick={() => setIndex(i)}>
              {it.type === 'image' && <img src={it.src} alt="" loading="lazy" />}
              {it.type === 'video' && <video src={it.src} muted preload="metadata" />}
              {it.type === 'embed' && <span>Video</span>}
            </button>
          ))}
        </div>
      )}
    </Overlay>
  )
}

function ProjectGallery({ selector = '.container-small' }) {
  const markerRef = useRef(null)
  const [items, setItems] = useState([])
  const [index, setIndex] = useState(null)
  const lastFocus = useRef(null)

  // collect the page's media once it is rendered, and make it clickable
  useEffect(() => {
    const page = markerRef.current?.parentElement
    const root = page?.querySelector(selector)
    if (!root) return

    const els = [...root.querySelectorAll('img, video, iframe')].filter((el) => !el.closest('[data-gallery-ignore]'))
    const list = els.map((el) => ({
      type: el.tagName === 'IMG' ? 'image' : el.tagName === 'VIDEO' ? 'video' : 'embed',
      src: el.currentSrc || el.getAttribute('src'),
      alt: el.getAttribute('alt') || '',
    }))
    setItems(list)

    const cleanups = els.map((el, i) => {
      if (el.tagName === 'IFRAME') return () => {}
      const open = () => { lastFocus.current = el; setIndex(i) }
      const onKey = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } }
      el.style.cursor = 'zoom-in'
      el.setAttribute('tabindex', '0')
      el.setAttribute('role', 'button')
      el.setAttribute('aria-label', 'Open in full screen')
      el.addEventListener('click', open)
      el.addEventListener('keydown', onKey)
      return () => {
        el.removeEventListener('click', open)
        el.removeEventListener('keydown', onKey)
      }
    })
    return () => cleanups.forEach((fn) => fn())
  }, [selector])

  // pause page scrolling while the gallery is open
  const isOpen = index !== null
  useEffect(() => {
    if (!isOpen) return
    const html = document.documentElement
    const prev = html.style.overflow
    html.style.overflow = 'hidden'
    window.__lenis?.stop()
    return () => {
      html.style.overflow = prev
      window.__lenis?.start()
    }
  }, [isOpen])

  const close = useCallback(() => {
    setIndex(null)
    lastFocus.current?.focus?.({ preventScroll: true })
  }, [])

  return (
    <>
      <span ref={markerRef} hidden />
      {createPortal(
        <AnimatePresence>
          {isOpen && items[index] && <Lightbox items={items} index={index} setIndex={setIndex} onClose={close} />}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default ProjectGallery
