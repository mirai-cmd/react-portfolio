import React from "react";
import { MdDownload } from "react-icons/md";
export default function Header() {
  return (
    <div name="home" className="bg-black">
      <div className="pt-12 h-[14rem]">
        <div className="flex flex-col justify-center items-center lg:gap-4 pt-4 lg:pt-10">
          <span className="text-white lg:text-xl">Hey there I'm</span>
          <h1 className="text-[3.1rem] font-semibold lg:text-8xl text-green-400 px-1">
            Prajwal Ghotage
          </h1>
          <span className="text-[0.85rem] lg:text-xl text-white">
            I'm a Frontend Web Developer and Pentester
          </span>
        </div>
      </div>
      <div
        name="about"
        className="flex flex-col justify-center items-start gap-4 lg:flex-row lg:items-center lg:px-40 lg:gap-16 bg-black text-white lg:pt-[6rem] pb-[5rem] pl-3 lg:mt-[3rem]"
      >
        <img
          src="src\assets\Prajwal.jpg"
          alt="prajwal"
          className="text-center h-[18rem] w-[18rem] m-auto rounded-[2rem] p-4 lg:h-[22rem] lg:w-[21rem] hover:scale-105 duration-500"
        />
        <section>
          <h1 className="text-5xl lg:text-6xl font-semibold">About Me</h1>
          <p className="py-4 lg:text-xl">
            Hey there! I am a CSE undergrad at KLSGIT, Belagavi and I LOVE
            computers and technology !! I dabble mostly in web-dev and
            pentesting but I am constantly trying to learn new things !! Looking
            to connect with folks in the relevant fields to gain experience and
            become a better developer.
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
            href="src\assets\Resume.pdf"
            download
            className="flex items-center gap-2 bg-green-400 text-black cursor-pointer rounded-[0.75rem] w-[7rem] p-[0.75rem] mt-3 hover:scale-105 duration-500 hover:text-white"
          >
            Resume
            <MdDownload />
          </a>
        </section>
      </div>
    </div>
  );
}
