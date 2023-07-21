import React from "react";
import { BiLink } from "react-icons/bi";
export default function ProjectCard({ title, img, desc, code, tags, live }) {
  return (
    <section className="bg-gray-900 p-2 lg:p-3 rounded-xl ml-6 lg:mr-10 w-[22rem] lg:w-[35rem]">
      <div className="relative h-[230px]">
        <img
          src={img}
          alt="project_image"
          className="w-full h-full object-cover rounded-xl"
        />

        <div className="absolute inset-0 flex justify-end">
          <div className="black-gradient h-[2.5rem] w-[2.5rem] rounded-full flex flex-col cursor-pointer lg:relative left-20">
            <a href={code} target="_blank">
              <img
                src="assets/github.png"
                alt="source code"
                className="object-contain"
              />
            </a>
            {typeof live !== "undefined" && (
              <a
                href={live}
                target="_blank"
                className="text-[1.8rem] mt-4 ml-1"
              >
                <BiLink />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[1.7rem]">{title}</h3>
        <ul className="flex flex-row justify-start items-center gap-4 py-3">
          {tags.map(({ name, color }, index) => {
            return (
              <li
                key={index}
                className={`${color.background} ${color.textColor} rounded-xl px-1 lg:px-2 text-[0.8rem] lg:text-[0.9rem]`}
              >
                {name}
              </li>
            );
          })}
        </ul>
        <p className="mt-2 opacity-80 text-[0.9rem]">{desc}</p>
      </div>
    </section>
  );
}
