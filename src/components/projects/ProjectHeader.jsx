import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import blur from '../../assets/img/Vector 4.png'
import { projectDetails } from './projectDetails'

const ease = [0.43, 0.13, 0.23, 0.96]
const reveal = {
  initial: { y: 40, opacity: 0 },
  enter: (i) => ({ y: 0, opacity: 1, transition: { duration: 1, ease, delay: 0.5 + i * 0.12 } }),
}
const line = {
  initial: { scaleX: 0 },
  enter: { scaleX: 1, transition: { duration: 1.2, ease, delay: 0.7 } },
}

const StyledHeader = styled.header`
  position: relative;
  overflow-x: clip;
  padding: calc(100px + var(--xl-sizing)) var(--padding) var(--xl-sizing);

  .blur {
    position: absolute;
    top: 0;
    left: -20%;
    width: 140%;
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
  }
  > * { position: relative; z-index: 1; }

  .eyebrow {
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--secondaryColor);
    margin-bottom: var(--m-sizing);
  }

  .top {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: clamp(32px, 5vw, 96px);
    align-items: end;
  }
  h1 {
    font-size: clamp(44px, 7vw, 112px);
    line-height: 95%;
    overflow-wrap: break-word;
  }
  .description {
    font-size: clamp(16px, 1.3vw, 20px);
    line-height: 155%;
    text-transform: none;
    color: #ffffffb0;
    max-width: 480px;
    justify-self: end;
  }

  .rule {
    height: 1px;
    background: #ffffff30;
    margin: var(--xl-sizing) 0 var(--m-sizing);
    transform-origin: left;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--m-sizing) clamp(40px, 8vw, 140px);
    dt {
      font-size: 13px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #ffffff60;
      margin-bottom: 6px;
    }
    dd {
      font-size: clamp(18px, 1.6vw, 24px);
    }
  }

  @media only screen and (max-width: 900px) {
    .top { grid-template-columns: 1fr; align-items: start; }
    .description { justify-self: start; }
  }
  @media only screen and (max-width: 468px) {
    padding: calc(80px + var(--l-sizing)) 20px var(--l-sizing);
    .rule { margin-top: var(--l-sizing); }
  }
`

function ProjectHeader({ id, showBlur = true }) {
  const project = projectDetails[id]
  if (!project) return null

  return (
    <StyledHeader>
      {showBlur && <img className="blur" src={blur} alt="" />}

      <motion.p className="eyebrow" variants={reveal} initial="initial" animate="enter" custom={0}>
        ( Project )
      </motion.p>

      <div className="top">
        <motion.h1 variants={reveal} initial="initial" animate="enter" custom={1}>
          {project.title}
        </motion.h1>
        {project.description && (
          <motion.p className="description" variants={reveal} initial="initial" animate="enter" custom={2}>
            {project.description}
          </motion.p>
        )}
      </div>

      <motion.div className="rule" variants={line} initial="initial" animate="enter" />

      <motion.dl className="meta" variants={reveal} initial="initial" animate="enter" custom={3}>
        <div>
          <dt>Category</dt>
          <dd>{project.category}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
      </motion.dl>
    </StyledHeader>
  )
}

export default ProjectHeader
