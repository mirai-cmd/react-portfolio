import React from "react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      id: 1,
      styles:
        "bg-gray-800 rounded-full p-3 text-white hover:text-pink-500 hover:bg-white duration-300",
      href: "https://instagram.com/praj_wxl89",
      icon: <BsInstagram />,
    },
    {
      id: 2,
      styles:
        "bg-gray-800 rounded-full p-3 text-white hover:bg-blue-600 duration-300",
      href: "https://www.linkedin.com/in/prajwal-ghotage-429a14244/",
      icon: <FaLinkedinIn />,
    },
    {
      id: 3,
      styles:
        "bg-gray-800 rounded-full p-3 text-white hover:text-gray-800 hover:bg-white duration-300",
      href: "https://github.com/mirai-cmd",
      icon: <BsGithub />,
    },
    {
      id: 4,
      styles:
        "bg-gray-800 rounded-full p-3 text-white hover:text-blue-600 hover:bg-white duration-300",
      href: "https://twitter.com/grin980",
      icon: <BsTwitter />,
    },
  ];
  return (
    <footer className="bg-black ml-[-0.78rem]">
      <h2 className="text-[1.25rem] text-center pt-6 text-white">
        Get in touch
      </h2>
      <ul className="flex flex-row justify-center items-center h-[8rem] gap-6 pl-8 text-xl">
        {socials.map(({id,styles,href,icon})=>{
          return(<a key={id} className={styles} href={href} target="_blank">{icon}</a>);
        })}
      </ul>
    </footer>
  );
}
