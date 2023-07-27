import React from "react";
import Tech from "../components/Tech";
import {techs} from "../constants"
export default function Skills() {
  return (
    <section className=" text-white pt-14 pb-14">
      <div className="text-5xl lg:text-7xl lg:pb-20 lg:pt-8 text-center font-extralight">Skills</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ml-[1.4rem] lg:ml-[13rem] mt-[3.5rem] lg:mt-[5rem] gap-20 lg:gap-x-0">
        {
          techs.map((tech,index)=>{
            return(
              <Tech key={index} {...tech}/>
            )
          })
        }
      </div>
    </section>
  );
}
