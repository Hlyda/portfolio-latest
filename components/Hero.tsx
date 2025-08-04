import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import BaseImage from "./BaseImage";

const imgURl =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1671209654236/2TRB5sdiZ.png?w=500&h=500&fit=crop&crop=faces&auto=compress";

type Props = {};

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Bonjour, Je suis Linda.",
      "J'apprends, j'innove, je progresse. Tous les jours.",
      "Je contribue à des projets à la croisée de l'IA et du Web.",

    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <BaseImage
        width={200}
        height={200}
        className="relative h-32 w-32 rounded-full mx-auto object-cover"
        src="/profilePic.jpg"
        alt="Linda profile image"
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-400 uppercase tracking-[18px] md:tracking-[15px] pb-2 font-outfit">
          Ingénieure IA & Développeuse Web
        </h2>
        <h1 className="pt-2 text-3xl md:text-4xl lg:text-6xl font-semibold px-16">
          <span className="mr-3 font-outfit">{text}</span>
          <Cursor cursorColor="#aaaaaa" />
        </h1>

        <div className="pt-4 lg:pt-4 font-outfit">
          <Link href="#about">
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              À propos
            </button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              Expériences
            </button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              Skills
            </button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton bg-slate-500/20 backdrop-blur-sm">
              Projets
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
