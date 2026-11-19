import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Stairs from '../components/transition/stairs'

const EMAIL = 'hello@abdoucisse.net'

const SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/madebyabdou/' },
  { name: 'Behance', url: 'https://www.behance.net/abdou_cisse' },
  { name: 'Dribbble', url: 'https://dribbble.com/Stainvisuals' },
  { name: 'Instagram', url: 'https://www.instagram.com/ceesayy_/' },
]

const PROJECT_TYPES = [
  'Product visualization',
  '3D animation / motion',
  'FOOH / CGI',
  'Other',
]

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.4 + i * 0.12 },
  }),
}

// Netlify Forms expects a url-encoded POST that includes the form name
const encode = (data) => new URLSearchParams(data).toString()

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 43 43" aria-hidden="true">
    <path d="M0.87868 37.8787C-0.292893 39.0503 -0.292893 40.9497 0.87868 42.1213C2.05025 43.2929 3.94975 43.2929 5.12132 42.1213L0.87868 37.8787ZM43 3C43 1.34314 41.6569 -9.06788e-07 40 -3.16732e-07L13 -2.00261e-06C11.3431 -2.00261e-06 10 1.34314 10 3C10 4.65685 11.3431 6 13 6H37V30C37 31.6569 38.3431 33 40 33C41.6569 33 43 31.6569 43 30L43 3ZM5.12132 42.1213L42.1213 5.12132L37.8787 0.878678L0.87868 37.8787L5.12132 42.1213Z" fill="currentColor" />
  </svg>
)

const StyledContact = styled.section`
  min-height: 100vh;
  background-color: #070707;
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  padding: calc(100px + var(--xl-sizing)) var(--padding) var(--xl-sizing);
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(40px, 6vw, 120px);
  align-items: start;

  .eyebrow {
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--secondaryColor);
    margin-bottom: var(--m-sizing);
  }
  h1 {
    font-size: clamp(44px, 6.5vw, 104px);
    line-height: 100%;
    margin-bottom: var(--l-sizing);
  }
  .intro {
    font-size: clamp(16px, 1.3vw, 20px);
    line-height: 150%;
    color: #ffffffa0;
    max-width: 440px;
    margin-bottom: var(--xl-sizing);
  }

  .direct {
    border-top: 1px solid #ffffff20;
    padding-top: var(--m-sizing);
    margin-bottom: var(--l-sizing);
    span {
      display: block;
      font-size: 13px;
      text-transform: uppercase;
      color: #ffffff60;
      margin-bottom: 8px;
    }
    a {
      font-size: clamp(18px, 1.8vw, 26px);
      text-transform: none;
      transition: color 0.2s ease-in;
      &:hover { color: var(--secondaryColor); }
    }
  }

  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    a {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 15px;
      padding: 14px 22px;
      border: 1px solid #ffffff40;
      border-radius: 60px;
      transition: all 0.2s ease-in;
      &:hover {
        background-color: var(--secondaryColor);
        border-color: var(--secondaryColor);
        color: var(--black);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--m-sizing);
    background-color: #ffffff06;
    border: 1px solid #ffffff15;
    padding: clamp(24px, 3vw, 48px);
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--m-sizing);
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #ffffffa0;
  }
  input, select, textarea {
    font-family: "Stratos", sans-serif;
    font-size: 17px;
    color: var(--white);
    background: transparent;
    border: none;
    border-bottom: 1px solid #ffffff40;
    border-radius: 0;
    padding: 10px 0;
    outline: none;
    transition: border-color 0.2s ease-in;
    &:focus { border-color: var(--secondaryColor); }
    &::placeholder { color: #ffffff40; }
  }
  select {
    appearance: none;
    cursor: pointer;
    background-image: linear-gradient(45deg, transparent 50%, #ffffffa0 50%), linear-gradient(135deg, #ffffffa0 50%, transparent 50%);
    background-position: calc(100% - 12px) 55%, calc(100% - 6px) 55%;
    background-size: 6px 6px;
    background-repeat: no-repeat;
    option { color: var(--black); }
  }
  textarea {
    min-height: 140px;
    resize: vertical;
    line-height: 150%;
  }
  .hidden { display: none; }

  button {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: "Stratos", sans-serif;
    font-weight: bold;
    font-size: clamp(18px, 1.6vw, 22px);
    text-transform: uppercase;
    color: var(--black);
    background-color: var(--secondaryColor);
    border: none;
    border-radius: 60px;
    padding: 18px 40px;
    cursor: pointer;
    transition: transform 0.2s ease-in, opacity 0.2s ease-in;
    &:hover { transform: translateY(-2px); }
    &:disabled { opacity: 0.5; cursor: default; transform: none; }
  }

  .status {
    font-size: 15px;
    line-height: 150%;
    a { text-transform: none; text-decoration: underline; }
  }
  .status.error { color: #ff8a80; }

  .success {
    display: flex;
    flex-direction: column;
    gap: var(--s-sizing);
    padding: clamp(24px, 3vw, 48px);
    border: 1px solid var(--secondaryColor);
    h2 { font-size: clamp(28px, 3vw, 44px); color: var(--secondaryColor); }
    p { color: #ffffffa0; line-height: 150%; }
  }

  .copyright {
    grid-column: 1 / -1;
    font-size: 14px;
    color: #ffffff50;
    padding-top: var(--l-sizing);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    .intro { margin-bottom: var(--l-sizing); }
  }
  @media only screen and (max-width: 468px) {
    padding-top: calc(80px + var(--l-sizing));
    .row { grid-template-columns: 1fr; }
    button { align-self: stretch; justify-content: center; }
    .socials a { padding: 12px 18px; font-size: 14px; }
  }
`

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '', 'bot-field': '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      if (!res.ok) throw new Error(res.status)
      setStatus('sent')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <Stairs>
      <StyledContact>
        <motion.div variants={fadeUp} initial="initial" animate="enter" custom={0}>
          <p className="eyebrow">( Contact )</p>
          <h1>Let's work together</h1>
          <p className="intro">
            Have a product to bring to life in 3D, an animation or a CGI campaign in mind? Tell me about it and I'll get back to you.
          </p>

          <div className="direct">
            <span>Or email me directly</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>

          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                {s.name} <Arrow />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="initial" animate="enter" custom={1}>
          {status === 'sent' ? (
            <div className="success" role="status">
              <h2>Message sent.</h2>
              <p>Thanks {form.name.split(' ')[0] || ''} — I'll reply to {form.email} soon.</p>
            </div>
          ) : (
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" value={form['bot-field']} onChange={handleChange} /></label>
              </p>

              <div className="row">
                <label>
                  Name
                  <input type="text" name="name" required autoComplete="name" placeholder="Your name" value={form.name} onChange={handleChange} />
                </label>
                <label>
                  Email
                  <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" value={form.email} onChange={handleChange} />
                </label>
              </div>

              <label>
                Project type
                <select name="project" value={form.project} onChange={handleChange}>
                  <option value="">Select one (optional)</option>
                  {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>

              <label>
                Message
                <textarea name="message" required placeholder="Tell me about your project, timeline and budget" value={form.message} onChange={handleChange} />
              </label>

              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'} <Arrow />
              </button>

              {status === 'error' && (
                <p className="status error" role="alert">
                  Something went wrong. Please email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
              )}
            </form>
          )}
        </motion.div>

        <p className="copyright">© {new Date().getFullYear()} Abdoulaye Cisse</p>
      </StyledContact>
    </Stairs>
  )
}

export default Contact
