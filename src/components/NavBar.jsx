import { React, useState,useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose, MdDownload } from "react-icons/md";
import { Link } from "react-scroll";
export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();
  //Close mobile menu when click anywhere in the window
  document.addEventListener("mousedown", (e) => {
    if (toggle && !menuRef.current.contains(e.target)) {
      setToggle(!toggle);
    }
  });
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="fixed flex flex-row items-center w-full px-8 py-3 lg:py-4 bg-black text-white opacity-90 z-[1]">
      <a href="#" className="flex-1 text-2xl px-3">
        Prajwal
      </a>
      <ul className="hidden md:flex flex-row flex-2 justify-around items-center gap-9 mr-[3rem] cursor-pointer">
        <li className="hover:scale-105 hover:text-green-400 duration-500 cursor-pointer">
          <Link to="home" smooth duration={800}>
            Home
          </Link>
        </li>
        <li className="hover:scale-105 hover:text-green-400 duration-500 cursor-pointer">
          <Link to="about" smooth duration={800}>
            About
          </Link>
        </li>
        <li className="hover:scale-105 hover:text-green-400 duration-500 cursor-pointer">
          <Link to="projects" smooth duration={800}>
            Projects
          </Link>
        </li>
        <li className="hover:scale-105 hover:text-green-400 duration-500 cursor-pointer">
          <a
            href="/assets/PrajwalGhotage_CSE_Resume.pdf"
            download
            className="flex items-center gap-2 bg-green-400 text-black cursor-pointer rounded-[0.75rem] w-[7rem] p-[0.5rem] hover:scale-105 duration-500 hover:text-white"
          >
            Resume
            <MdDownload />
          </a>
        </li>

        <li className="hover:scale-105 hover:text-green-400 duration-500 cursor-pointer">
          <Link to="contact" smooth duration={800}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer lg:hidden md:hidden"
      >
        {toggle ? (
          <MdClose className="text-2xl" />
        ) : (
          <RxHamburgerMenu className="text-2xl" />
        )}
      </div>

      {/*Hamburger Nav*/}

      {toggle && (
        <ul
          id="hamburgerNav"
          ref={menuRef}
          className="md:top-[-20rem] lg:top-[-20rem] absolute space-y-4 top-[3rem] left-0 px-5 py-6 h-[11.5rem] w-full translate-y-2 transition-all ease-in-out duration-500 text-white bg-black"
        >
          <li className="hover:scale-105 hover:text-green-400 duration-500 cursor-pointer">
            <Link onClick={handleClick} to="home" smooth duration={800}>
              Home
            </Link>
          </li>
          <li className="hover:scale-105 hover:text-green-400 duration-500 cursor-pointer">
            <Link onClick={handleClick} to="about" smooth duration={800}>
              About
            </Link>
          </li>
          <li className="hover:scale-105 hover:text-green-400 duration-500 cursor-pointer">
            <Link onClick={handleClick} to="projects" smooth duration={800}>
              Projects
            </Link>
          </li>
          <li className="hover:scale-105 hover:text-green-400 duration-500 cursor-pointer">
            <Link onClick={handleClick} to="contact" smooth duration={600}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
