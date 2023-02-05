import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import mui from "../../assets/mui.png";
import metasploit from "../../assets/metasploit.svg";
import kali from "../../assets/kali.png";

export default function Skills() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS"
    },
    {
      id: 6,
      src: mui,
      title: "MaterialUI"
    },
    {
      id: 7,
      src: metasploit,
      title: "Metasploit"
    },
    {
      id: 8,
      src: kali,
      title: "Kali Linux"
    }
  ];
  return (
    <div className="bg-black mt-10 pt-10">
      <h1 className="font-semibold text-5xl pl-3 lg:text-6xl text-teal-300">
        Skills
      </h1>
      <p className="pt-4 pl-5 text-white lg:text-2xl">Technologies I've worked with</p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title}) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img loading="lazy" src={src} alt={title} className="w-20 mx-auto " />
              <p className="text-white mt-4">{title}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
