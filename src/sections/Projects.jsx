import React from "react";
import ProjectCard from "../components/ProjectCard";
import {projects} from "../constants"
export default function Content() {

  return (
    <section name="projects" className=" text-white pb-14">
      <div className="text-5xl lg:text-7xl pb-20 text-center font-extralight">
        Projects
      </div>
      <div className="mx-auto flex flex-col lg:flex-row md:flex-row lg:justify-around lg:p-8 gap-10">
        {projects.map((p) => {
          return <ProjectCard key={p.id} {...p} />;
        })}
      </div>
    </section>
  );
}
