import React from "react";


export default function Skills() {
  const techs = [
    {
      id: 1,
      source: "/assets/html.png",
      title: "HTML",
    },
    {
      id: 2,
      source: "/assets/css.png",
      title: "CSS",
    },
    {
      id: 3,
      source: "/assets/javascript.png",
      title: "JavaScript",
    },
    {
      id: 4,
      source: "/assets/react.png",
      title: "React",
    },
    {
      id: 5,
      source: "/assets/tailwind.png",
      title: "Tailwind CSS"
    },
    {
      id: 6,
      source: "/assets/mui.png",
      title: "MaterialUI"
    },
    {
      id: 7,
      source: "/assets/metasploit.svg",
      title: "Metasploit"
    },
    {
      id: 8,
      source: "/assets/linux.png",
      title: "Linux"
    },
    {
      id: 9,
      source: "/assets/burpsuite.jpg",
      title: "Burpsuite"
    }
  ];
  return (
    <section className="bg-black text-white pt-14 pb-14">
      <h1 className="font-semibold text-4xl pl-6 lg:text-7xl">
        Skills
      </h1>
      <p className="pt-4 pl-6 lg:text-2xl">Technologies I've worked with</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-12 text-center py-14 px-10 ">
          {techs.map(({ id, source, title}) => (
            <div
              key={id}
              className="hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={source} alt={title} className="h-20 w-20 mx-auto" />
              <p className="text-white mt-4">{title}</p>
            </div>
          ))}
        </div>
    </section>
  );
}
