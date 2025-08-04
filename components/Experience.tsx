import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import { motion, useMotionValue } from 'framer-motion';
import _ from 'lodash'
import ExperienceCard from './ExperienceCard';



const Dots = ({ count, active }) => (
  <div className="dot-container">

    {_.range(count).map(i => (
      <motion.div
        key={i}
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
      setActive(active => _.clamp(active + direction, 0, 4 - 1))
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
            title="Développeuse Web Freelance "
            company="Brandswaggin • New  Jersey, USA"
            point1="Réalisation de projets digitaux à échelles variées, allant de sites vitrines à des
                            plateformes e-commerce, en utilisant des CMS comme WordPress, Shopify, Wix et Webflow.
                            Travail en équipe avec des profils divers (designers, développeurs, chefs de projet) dans
                            une dynamique collaborative et internationale."
            point2="Travail en équipe avec des profils divers (designers, développeurs, chefs de projet) dans
                            une dynamique collaborative et internationale."
            point3="Refonte du site web de l'agence dans le cadre d'un projet interne, avec une nouvelle charte graphique modernisée et adaptée aux standards actuels.

"
            startDate="Juin 2023"
            endDate=" Septembre 2024"
          />
          <ExperienceCard
            clogo="/companyLogo/logispear.png"
            title="Ingénieure IA"
            company="LogiSpear • Paris, France"
            point1="Réalisation d'audits IA pour PME : identification des besoins, évaluation de la maturité technologique et détection
d'opportunités d'automatisation.."
            point2="Conception de stratégies IA sur mesure : choix d’outils (LLM, RAG, chatbots…), cadrage des cas d’usage et accompagnement à
l'adoption."
            point3="Contribution au projet open source LangchainDoc : visualisation de documentation LangChain, extraction de concepts,
structuration via LangGraph."
            startDate=" Mai"
            endDate=" Août 2025"
          />

        </motion.div>

        <Dots count={2} active={active} />
      </div>
      <div style={{ height: 700 }} />
    </>
  )
}

