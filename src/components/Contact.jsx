import React from "react";
export default function Contact() {
  return (
    <section
      name="contact"
      className="pt-14 pb-14 lg:h-[50rem] bg-[url('/assets/main_background.jpg')] bg-cover"
    >
      <h1 className="text-4xl lg:text-7xl pl-6 font-semibold">Contact</h1>
      <p className="pt-4 pl-6 sm:text-xl  lg:text-2xl">
        Ping me for collaborations on projects or any other queries
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center pt-[6rem]">
        <img
          src="/assets/Prajwal2.jpg"
          className="w-[90%] lg:h-[30rem] lg:w-[28.5rem]"
        />
        <form
          name="form"
          action="https://getform.io/f/643dd0d2-7685-40d7-897b-5a09f0aa82cc"
          method="POST"
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(6.7px)",
          }}
          className="flex flex-col justify-center items-center gap-5 lg:gap-10 py-8 w-[90%] lg:w-[28rem] lg:h-[30rem] lg:mx-0"
        >
          <input
            name="name"
            className="h-8 w-[80%] lg:mt-2 pl-3 rounded-[0.35rem] border-black border-[0.05rem]"
            placeholder="Your Name"
          />
          <input
            name="email"
            className="h-8 w-[80%] pl-3 rounded-[0.35rem] border-black border-[0.05rem]"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            className="h-[15rem] w-[80%] pl-3 pt-1 rounded-[0.35rem] border-black border-[0.05rem] resize-none"
            placeholder="Message"
          />
          <button className=" rounded-[0.75rem] text-center pl-4 pt-2 pr-4 pb-2 hover:scale-105 hover:text-black hover:bg-white hover:border-black duration-500 text-white border-white border-[0.09rem]">
            Let's Connect
          </button>
        </form>
      </div>
    </section>
  );
}
