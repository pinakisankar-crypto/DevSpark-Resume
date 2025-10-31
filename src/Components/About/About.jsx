import { useRef } from "react";
import aboutBG from "../../assets/aboutBG.png";
import aboutMockup from "../../assets/about-mockup.svg"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  const imgBody = useRef(null);
  const rings = useRef(null)

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(imgBody.current, {
      y: 25,
      duration: 0.2,
    });

    tl.to(imgBody.current, {
      y: 15,
      duration: 0.2,
    });

    tl.to(rings.current, {
      transform: "scale(135%)",
      duration: 0.2
    }, "-=0.4")

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    imgBody.current.addEventListener("mouseenter", onEnter);
    imgBody.current.addEventListener("mouseleave", onLeave);

    return () => {
      imgBody.current.removeEventListener("mouseenter", onEnter);
      imgBody.current.removeEventListener("mouseleave", onLeave);
      tl.kill();
    };
  }, []);

  return (
    <section className="xl:px-32 lg:px-18 md:px-12 sm:px-8 px-4 py-46 bg-(--secondary-bg) flex-between">
      <div
        ref={imgBody}
        className="relative bg-[#feb273] rounded-4xl w-88 h-120 overflow-visible"
      >
        <img
          className="absolute-horizontal-center bottom-0 w-full` z-10"
          src={aboutBG}
          alt=""
        />

        <img ref={rings} className="absolute w-full scale-0 -top-28" src={aboutMockup} alt="" />
      </div>

      <div className="w-[50%]">
        <h2 className="text-5xl font-semibold font-[lufgaBold]">
          Know <span className="text-(--primary-text)">About Me</span>
        </h2>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed
          aspernatur aut fuga eveniet minima ut ab doloribus nemo sequi
          quibusdam quis accusantium dolores, debitis a, reprehenderit
          reiciendis dicta nostrum! Consequuntur impedit explicabo suscipit
          beatae sunt veritatis iusto atque nobis voluptas temporibus itaque
          omnis assumenda, aut vero nulla at optio laudantium qui quas, alias
          perferendis. Qui, ab. Quaerat, minima esse.
        </p>

        <div className="flex-between mt-16">
          <div>
            <h5 className="text-4xl font-semibold text-(--primary-blue)">
              450+
            </h5>
            <p className="mt-2 font-semibold text-(--secondary-text)">
              Projects Completed
            </p>
          </div>

          <div>
            <h5 className="text-4xl font-semibold text-(--primary-blue)">
              20+
            </h5>
            <p className="mt-2 font-semibold text-(--secondary-text)">
              Happy clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
