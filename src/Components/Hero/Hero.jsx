import { useRef } from "react";
import textMockup1 from "../../assets/text-mockup1.svg";
import textMockup2 from "../../assets/text-mockup2.svg";
import userBgMockUp from "../../assets/user-bg-mockup.svg";
import ellipse from "../../assets/Ellipse.svg";
import userbg from "../../assets/userIMG.png";
import invertedCap from "../../assets/invertedCap.svg";
import Ratings from "../Ratings/Ratings";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const heroText = useRef(null);
  const heroBg = useRef(null);
  const userMockup = useRef(null);
  const userTag = useRef(null);
  const userRate = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(heroText.current, {
      y: -30,
      duration: 0.2,
    });

    tl.to(heroText.current, {
      y: 250,
      duration: 0.2,
    });

    tl.to(
      userMockup.current,
      {
        width: "54rem",
        duration: 0.2,
      },
      "-=0.2"
    );

    tl.to(userMockup.current, {
      width: "51rem",
      duration: 0.2,
    });

    tl.to(
      userTag.current,
      {
        y: -100,
        duration: 0.2,
      },
      "-=0.2"
    );

    tl.to(
      userRate.current,
      {
        y: -100,
        duration: 0.2,
      },
      "-=0.2"
    );

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    heroBg.current.addEventListener("mouseenter", onEnter);
    heroBg.current.addEventListener("mouseleave", onLeave);

    return () => {
      heroBg.current.removeEventListener("mouseenter", onEnter);
      heroBg.current.removeEventListener("mouseleave", onLeave);
      tl.kill();
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen">
      {/* hero text section  */}
      <article ref={heroText} id="hero-text" className="pt-32">
        {/* hero text section  */}
        <div>
          {/* hello button  */}
          <div className="relative w-fit mx-auto">
            <button className="ring rounded-full px-4 py-1 text-[1.2rem] font-semibold">
              Hello!
            </button>
            <img
              className="absolute w-[1.4rem] -top-4 -right-6"
              src={textMockup1}
              alt=""
            />
          </div>

          {/* hero text  */}
          <div className="w-fit mx-auto relative mt-2">
            <h1 className="text-center text-[4rem] leading-16 font-urbanist font-semibold">
              I'm <span className="text-(--primary-text)">Rohan</span>, <br />{" "}
              Software Developer
            </h1>
            <img
              className="absolute -left-8 -bottom-8 w-[2.8rem]"
              src={textMockup2}
              alt=""
            />
          </div>
        </div>
      </article>

      {/* hero bg section  */}
      <article className="cursor-pointer" id="hero-bg">
        {/* user tag  */}
        <div ref={userTag} className="absolute-vertical-center mt-12 ml-20">
          <img src={invertedCap} alt="" />
          <p>
            Rohan's Exceptional product design <br /> ensure our website's
            success. <br /> Highly Recommended
          </p>
        </div>

        {/* user experiece and rating  */}
        <div ref={userRate} className="right-0 absolute-vertical-center mt-12 mr-20 flex flex-col items-end">
          <Ratings rating={5} />
          <h3 className="text-[3rem] leading-none font-semibold">3 Years</h3>
          <span className="font-semibold mt-2">Experience</span>
        </div>

        {/* user image  */}
        <div
          id="user-image"
          className="absolute w-full bottom-0 flex justify-center"
        >
          <img className="w-182 z-0" src={ellipse} alt="" />
          <img
            ref={userMockup}
            className="absolute bottom-0 w-0"
            src={userBgMockUp}
            alt=""
          />
          <img ref={heroBg} className="absolute bottom-0 w-[20rem] z-20" src={userbg} alt="" />
          <div className="glass-card absolute bottom-10 z-30 flex gap-2 p-[5px] rounded-full">
            <button className="bg-(--primary-text) text-white px-3 py-1 rounded-full text-2xl">PortFolio</button>
            <button className="ring-1 ring-(--primary-text) text-white px-3 py-1 rounded-full text-2xl">Hire me</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
