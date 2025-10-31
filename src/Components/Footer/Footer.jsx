import { useRef } from "react";
import { leftNav, rightNav } from "../../constants/contants";
import { IoIosSend } from "react-icons/io";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
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
    <footer className="rounded-t-4xl xl:px-32 lg:px-18 md:px-12 sm:px-8 px-4 py-8 bg-(--secondary-black)">
      {/* header part of footer  */}
      <div className="mt-8 flex-between">
        <h2 className="text-5xl font-semibold font-[lufgaBold] text-white">
          Lets Connect with me
        </h2>
        <button className="bg-(--primary-text) text-xl text-white px-12 rounded-full font-[lufgaRegular] cursor-pointer">
          Hire me
        </button>
      </div>

      {/* footer body  */}
      <div className="py-6 mt-22 border-t-2 border-b-2 border-gray-600 font-[lufgaRegular] flex-between flex-wrap">
        <div className="min-w-100 w-[45%]">
          {/* brand logo  */}
          <div
            ref={brandHolder}
            className="flex items-center gap-2 cursor-pointer w-40 text-white"
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
          <p className="text-gray-300 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>
        <div className="flex-between gap-8 w-[50%]">
          <ul>
            <p className="text-(--primary-text) font-[lufgaBold] mb-4 text-xl">
              Navigation
            </p>
            {leftNav.map((list, id) => (
              <li key={id} className="text-gray-300 capitalize my-1">
                {list}
              </li>
            ))}
            {rightNav.map((list, id) => (
              <li key={id} className="text-gray-300 capitalize my-2">
                {list}
              </li>
            ))}
          </ul>

          <ul>
            <p className="text-(--primary-text) font-[lufgaBold] mb-4 text-xl">
              Contact
            </p>
            <li className="text-gray-300 capitalize my-2">+91 232323232</li>
            <li className="text-gray-300 capitalize my-2">sankar@xyz.com</li>
            <li className="text-gray-300 capitalize my-2">
              Infocity rd, Bhubaneswar, India
            </li>
          </ul>

          <ul>
            <p className="text-(--primary-text) font-[lufgaBold] mb-4 text-xl">
              Subscribe to work
            </p>
            <form className="bg-white w-[18rem] rounded-lg flex overflow-hidden">
              <input
                className="px-2 py-3 w-full outline-none"
                type="email"
                placeholder="Email address"
              />
              <button className="bg-(--primary-text)">
                <p className="px-3 text-white text-2xl cursor-pointer">
                  <IoIosSend />
                </p>
              </button>
            </form>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
