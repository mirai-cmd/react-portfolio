import React from "react";

export default function Contact() {
  return (
    <div name="contact" className="py-8 pl-3 bg-[#03fc7b]">
      <h1 className="text-5xl lg:text-6xl font-semibold">Contact</h1>
      <p className="pt-4 pl-3 lg:text-2xl">Ping me for collaborations on projects</p>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center mt-10">
        <img
          src="src/assets/Prajwal2.jpg"
          className="w-[90%] lg:h-[24.2rem] lg:w-[28%] "
        />
        <form
          name="form"
          action="https://getform.io/f/643dd0d2-7685-40d7-897b-5a09f0aa82cc"
          method="POST"
          className="flex flex-col justify-center items-center gap-5 py-8 bg-gray-200 w-[90%] lg:w-[30%] lg:h-[50%] lg:mx-0"
        >
          <input name="name"
            className="h-8 w-[80%] pl-3 rounded-[0.35rem] border-black border-[0.05rem]"
            placeholder="Your Name"
          />
          <input name="email"
            className="h-8 w-[80%] pl-3 rounded-[0.35rem] border-black border-[0.05rem]"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            className="h-40 w-[80%] pl-3 rounded-[0.35rem] border-black border-[0.05rem] resize-none"
            placeholder="Message"
          />
          <button className="bg-[#03fc7b] rounded-[0.75rem] text-center pl-4 pt-2 pr-4 pb-2 hover:scale-105 duration-500 hover:text-white">
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
}
