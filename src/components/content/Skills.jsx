import React from "react";


export default function Skills() {
  const techs = [
    {
      id: 1,
      source: "public/assets/html.png",
      title: "HTML",
    },
    {
      id: 2,
      source: "public/assets/css.png",
      title: "CSS",
    },
    {
      id: 3,
      source: "public/assets/javascript.png",
      title: "JavaScript",
    },
    {
      id: 4,
      source: "public/assets/react.png",
      title: "React",
    },
    {
      id: 5,
      source: "public/assets/tailwind.png",
      title: "Tailwind CSS"
    },
    {
      id: 6,
      source: "public/assets/mui.png",
      title: "MaterialUI"
    },
    {
      id: 7,
      source: "public/assets/metasploit.svg",
      title: "Metasploit"
    },
    {
      id: 8,
      source: "public/assets/kali.png",
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
          {techs.map(({ id, source, title}) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={source} alt={title} className="w-20 mx-auto " />
              <p className="text-white mt-4">{title}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
