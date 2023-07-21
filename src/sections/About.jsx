import React from "react";
import { MdDownload } from "react-icons/md";


export default function Content() {

  return (
    <section name="about" className="mt-[5rem] lg:mt-[9rem] px-4 lg:px-[8rem] lg:pb-[8rem] bg-black text-white lg:flex justify-center gap-8">
      <img src="/assets/Prajwal.jpg" className="text-center h-[21.5rem] w-[14.5rem] m-auto rounded-[2rem] lg:h-[28rem] lg:w-[28rem] hover:scale-105 duration-500" alt="prajwal"/>
      <div className="aboutWrapper lg:mb-[11rem]">
        <div className="pt-[4rem] pb-[1.4rem] text-center text-5xl lg:text-6xl font-extralight">About Me</div>
        <p className="py-4 text-[1rem] lg:text-xl">
          Hey there! I am a CSE undergrad at KLSGIT, Belagavi and I LOVE computers
          and technology !! I dabble mostly in web-dev and pentesting but I am
          constantly trying to learn new things !! Looking to connect with folks
          in the relevant fields to gain experience and become a better developer.
        </p>
        <p className="py-4 lg:text-xl">
          Currently I can build responsive websites with the{" "}
          <span className="text-blue-300">ReactJS</span> library. I am also
          familiar with various tools and methodologies of penetration testing
          that includes tools like Metasploit,{" "}
          <span className="text-orange-400">Burpsuite</span>. I am also
          comfortable with various Linux distros like Kali,{" "}
          <span className="text-red-400">Fedora</span> and Ubuntu Linux.
        </p>
        <a
          href="/assets/Resume.pdf"
          download
          target="_blank"
          className="lg:hidden flex items-center gap-2 bg-green-400 text-black cursor-pointer rounded-[0.75rem] w-[7rem] p-[0.75rem] mt-3 hover:scale-105 duration-500 hover:text-white"
          >
          Resume
          <MdDownload />
        </a>
      </div>  
      </section>
  );
}


