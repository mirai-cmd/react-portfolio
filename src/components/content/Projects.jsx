import React from "react";
import ProjectCard from "./ProjectCard";
export default function Content() {
  const projects = [
    {
      id: 1,
      img: "/assets/PyScan.png",
      title: "PyScan",
      desc: "This is a command line port scanner written in python using argparser and python sockets. It includes options to scan custom port ranges and individual ports. Multithreading speeds up the scanning process.",
      code: "https://github.com/mirai-cmd/python-port-scanner",
    },
    {
      id: 2,
      img: "/assets/HackerSpace.png",
      title: "HackerSpace",
      desc: "This a React App that uses the NewsAPI to fetch content related to Cyber-Security. Material UI has been used for styling and displaying the news articles.It also has search functionality to look up specific articles.",
      code: "https://github.com/mirai-cmd/hacker-space",
    },
  ];
  return (
    <section name="projects" className="bg-black  text-white pb-14">
      <h1 className="text-4xl lg:text-7xl pt-10 pl-6 font-semibold">
        My Projects
      </h1>
      <h2 className="pt-4 pl-6 text-[1rem] lg:text-2xl">Some of my personal projects</h2>
      <div className="flex flex-col lg:flex-row md:flex-row lg:justify-around lg:p-8 gap-6">
        {projects.map((p) => {
          return <ProjectCard key={p.id} item={p} />;
        })}
      </div>
    </section>
  );
}
