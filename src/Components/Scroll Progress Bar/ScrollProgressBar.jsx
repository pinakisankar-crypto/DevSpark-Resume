import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const ScrollProgressBar = () => {

  const scrollBar = useRef(null);

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

 useGSAP(() => {
    gsap.to(scrollBar.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return <div ref={scrollBar} className="fixed top-0 h-2 bg-red-600 w-0 z-50"></div>;
};

export default ScrollProgressBar;
