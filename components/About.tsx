import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import BaseImage from "./BaseImage";

type Props = {};

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-16 lg:pt-28"
    >
      <h3 className="ml-6 absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      {/* <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        viewport={{
          once: true,
        }} */}
      <BaseImage
        width={350}
        height={450}
        src="/profilePic.jpg"
        className="-mb-32 md:mb-0 md:ml-16 flex-shrink-0 w-40 h-40 rounded-xl object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
        alt="nikhil kadam profile image"
      />

      <div className="px-0 md:px-20">
        <h4 className="text-3xl md:text-4xl font-semibold mt-8 lg:mt-2 font-outfit lg:ml-6 md:ml-6">
          $: /whoami
        </h4>
        <p className="text-sm md:text-base lg:text-lg lg:mt-4 font-light px-4 md:px-7 pt-3 font-outfit">

          <br /> Je suis{" "}
          <span className="text-blue-500 font-semibold">
            Ingénieure IA
          </span>{" "}
          et {" "}
          <span className="text-blue-500 font-semibold">
            Développeuse Web.
          </span>{" "}
          <br />
          <br />
          De la data science à la création de sites performants, je conçois des solutions efficaces, scalables et élégantes. J’interviens sur des projets IA concrets intégrant LLMs, RAG, LangChain, automatisation et gouvernance des données. Je développe aussi des plateformes web sur mesure en France et à l’international.
          <br />

          <br /> <br /> Alongside my tech endeavors, I love gaming and music, I am also always up for a {" "}
          <span className="text-blue-500 font-semibold">
            fresh cup of coffee!
          </span>
        </p>
      </div>
    </motion.div>
  );
}
