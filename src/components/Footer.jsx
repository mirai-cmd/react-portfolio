import React from "react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black ml-[-0.78rem]">
      <h2 className="text-[1.25rem] text-center pt-6 text-white">Get in touch</h2>
      <div className="flex flex-row justify-center items-center h-[8rem] gap-6 pl-8 text-xl">
        <a
          className="bg-gray-800 rounded-full p-3 text-pink-500"
          href="https://instagram.com/praj_wxl89"
        >
          <BsInstagram />
        </a>
        <a
          className="bg-blue-600 rounded-full p-3 text-white"
          href="https://www.linkedin.com/in/prajwal-ghotage-429a14244/"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="bg-gray-800 rounded-full p-3 text-white"
          href="https://github.com/mirai-cmd"
        >
          <BsGithub />
        </a>
        <a
          className="bg-white rounded-full p-3 text-blue-500"
          href="https://twitter.com/grin980"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
}
