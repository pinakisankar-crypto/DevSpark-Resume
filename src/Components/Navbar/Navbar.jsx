import { useRef } from "react";
import { leftNav, rightNav } from "../../constants/contants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const brandHolder = useRef(null);
  const upperText = useRef(null);
  const lowerText = useRef(null);
  const brandText = useRef(null);
  const creditText = useRef(null);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(brandText.current, {
      display: "none",
      duration: 0.1
    });

    tl.to(creditText.current, {
      display: "block",
      duration: 0.1
    })

    tl.to(upperText.current, {
      top: "10%",
      transform: "translateY(-10%)",
      duration:0.2
    })

    tl.to(lowerText.current, {
      top: "90%",
      transform: "translateY(-90%)",
      duration:0.2
    })

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    brandHolder.current.addEventListener("mouseenter", onEnter);
    brandHolder.current.addEventListener("mouseleave", onLeave);

    return () => {
      brandHolder.current.removeEventListener("mouseenter", onEnter);
      brandHolder.current.removeEventListener("mouseleave", onLeave);
      tl.kill();
    };
  }, []);

  return (
    <header className="absolute-horizontal-center z-10 w-[90%] bg-(--primary-black) text-white flex-between items-center m-auto py-2 px-1 rounded-full mt-9">
      <nav className="flex gap-[3vw]">
        {leftNav.map((ele, id) => (
          <p
            className="capitalize cursor-pointer px-4 py-2 rounded-full hover:bg-(--primary-text)"
            key={id}
          >
            {ele}
          </p>
        ))}
      </nav>
      <div
        ref={brandHolder}
        className="flex items-center gap-2 cursor-pointer w-40"
      >
        <h2 className="font-bold text-xl p-1 rounded-full bg-(--primary-text)">
          DS
        </h2>
        <h2 ref={brandText} className="text-xl font-bold">
          DEVSPARK
        </h2>
        <div ref={creditText} className="relative hidden h-8">
          <p
            ref={upperText}
            className="absolute top-[50%] translate-y-[-50%] leading-none text-sm font-bold font-[lufgaLight] whitespace-nowrap text-gray-200"
          >
            Made By
          </p>
          <p
            ref={lowerText}
            className="absolute top-[50%] translate-y-[-50%] leading-none text-sm font-bold font-[lufgaBold] whitespace-nowrap mt-0.5 text-gray-100"
          >
            Pinaki Sankar Ray
          </p>
        </div>
      </div>
      <nav className="flex gap-[3vw]">
        {rightNav.map((ele, id) => (
          <p
            className="capitalize cursor-pointer px-4 py-2 rounded-full hover:bg-(--primary-text)"
            key={id}
          >
            {ele}
          </p>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
