import React,{useRef,useEffect} from "react";
import Typed from "typed.js";
export default function Header() {
  const el = useRef(null);
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'Programmer',
        'Web Developer',
        'Penetration Tester'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    };
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])
  return (
    <section name="home">
      <div className="h-[14rem] ">
        <div className="h-[26rem] flex flex-col justify-center items-center lg:gap-4 bg-black">
          <span className="text-white lg:text-xl">Hey there! I'm</span>
          <h1 className="text-[2.8rem] font-semibold lg:text-8xl text-green-400 px-1">
            Prajwal Ghotage
          </h1>
          <div className="typeWrapper w-full text-center">
            <span className="text-white text-[1.6rem] lg:text-[2rem] font-thin">
              I'm a{" "}
            </span>
            <span className="typing text-[1.6rem] lg:text-[2.6rem] text-orange-300" ref={el} />
          </div>
        </div>
      </div>
    </section>
  );
}
