import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import { motion, useMotionValue } from 'framer-motion';
import _ from 'lodash'
import ExperienceCard from './ExperienceCard';



const Dots = ({ count, active }) => (
  <div className="dot-container">
    {_.range(count).map(i => (
      <motion.div
        className="dot"
        initial={false}
        animate={{
          scale: active === i ? 1.5 : 1,
          opacity: active === i ? 1 : 0.5,
        }}
      />
    ))}
  </div>
)

const Slide = ({ color, ...rest }) => (
  <div
    style={{ backgroundColor: color }}
    className="slide"
    {...rest}
  />
)

export const Experience = () => {
  const constraintsRef = useRef(null)
  const [active, setActive] = useState(0)
  const x = useMotionValue(0)
  const drag = useMotionValue(0)


  const width = constraintsRef.current && constraintsRef.current.offsetWidth 

  

  const dragEndHandler = (event, info) => {
    const offset = info.offset.x
    if (Math.abs(offset) > 20) {
      const direction = offset < 0 ? 1 : -1
      setActive(active => _.clamp(active + direction, 0, 3 - 1))
    }
  }

  return (
    <>
      <div className="container max-w-3xl    " ref={constraintsRef}>
        <motion.div
          className="swipper slider"
          onDragEnd={dragEndHandler}
          dragConstraints={constraintsRef}
          drag="x"
          animate={{
            x: -1 * active * width
          }}
        >
          <ExperienceCard
    clogo="/companyLogo/bswag.jpg"
    title="Freelance Web Developer  "
    company="at Brandswaggin"
    point1="Contributed to a variety of websites, ranging from Wordpress projects to full stack React projects from scratch"
    point2="Elaborated and engineered the Mother Lode Job Training californian state agency tool."
    startDate="2018"
    endDate="2023"
  />
        <ExperienceCard
    clogo="/companyLogo/neo.jpg"
    title="Full Stack Developer"
    company="at Neo-Fintech"
    point1="Participated in the development and engineering of the KIOSTORE tool (dashboard, ecommerce themes, CMS... ) with React, Flask, NextJS, Kubernetees.."
    point2="Team lead for the e-commerce frontend team of the startup"
    startDate="2020"
    endDate="2022"
  />
   <ExperienceCard
    clogo="/companyLogo/mps.jpg"
    title="Frontend Developer"
    company="at Maghreb Positionning Services"
    point1="Developed the DAS AUTOMOTIVE AM Ecommerce project from scratch with React, Material UI, NextJS.."
    point2="Tackled both the dashboard and client aspect of the project"
    startDate="2022"
    endDate="2023"
  />
        </motion.div>

        <Dots count={3} active={active} />
      </div>
      <div style={{ height: 700 }} />
    </>
  )
}

