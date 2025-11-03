import { useRef } from "react";
import { IoMail } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { expertise } from "../../constants/contants";
import star from "../../assets/star.svg";
import mailImg from "../../assets/email.png";

const Contact = () => {
  const form = useRef(null);
  const text = useRef(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: form.current,
        start: "top 55%",
      },
    });

    tl.to(text.current, {
      fontSize: "4rem",
      duration: 0.18,
      ease: "power1.out",
    })
      .to(text.current, {
        fontSize: "3rem",
        duration: 0.18,
        ease: "power1.out",
      })
      .to(
        form.current,
        {
          rotateX: 0,
          duration: 0.28,
          ease: "back.out(1)",
          transformOrigin: "top center",
        },
        "+=0.1"
      );
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="mt-18">
      <h2 className="text-5xl font-semibold font-[lufgaBold] text-center">
        Have an Awesome Project <br /> Idea?{" "}
        <span ref={text} className="text-(--primary-text) text-xs">
          Let's Discuss
        </span>{" "}
      </h2>

      <form
        ref={form}
        className="transform-gpu rotate-x-90 mt-5 border border-gray-400 p-2 rounded-full w-[40%] min-w-100 mx-auto flex"
      >
        <p className="text-2xl text-(--primary-text) p-2 rounded-full bg-[#FFEAD5]">
          <IoMail />
        </p>
        <input
          type="text"
          className="outline-none w-full mx-3 px-2 font-[lufgaRegular]"
          placeholder="Enter Email Address"
        />
        <button className="bg-[#FB6514] px-5 rounded-full text-white cursor-pointer font-[lufgaRegular]">
          Send
        </button>
      </form>

      {/* marquee effect  */}
      <div className="h-32 bg-(--primary-text) rounded-tr-4xl rounded-bl-4xl mt-18 relative overflow-hidden">
        <div className="marque-card h-16 bg-white w-full absolute-vertical-center left-0">
          <div id="movex" className="flex-center absolute-vertical-center">
            {expertise.map((exp, id) => (
              <div key={id} className="flex items-center">
                <p className="font-[lufgaRegular] text-5xl capitalize whitespace-nowrap">
                  {exp}
                </p>
                <img loading="lazy" src={star} alt="" className="w-10 h-10 ml-3 mr-12" />
              </div>
            ))}

            {/* duplicating the set of expertise in order to perfect marque effect  */}
            {expertise.map((exp, id) => (
              <div key={id} className="flex items-center">
                <p className="font-[lufgaRegular] text-5xl capitalize whitespace-nowrap">
                  {exp}
                </p>
                <img loading="lazy" src={star} alt="" className="w-10 h-10 ml-3 mr-12" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* contact form section  */}

      <div className="xl:px-32 lg:px-18 md:px-12 sm:px-8 px-4 my-12">
        <h3 className="font-[lufgaBold] text-3xl text-(--primary-blue)">
          Want To Reach <br /> out to me ?
        </h3>
        <p className="text-(--secondary-text) font-[lufgaSemibold] my-6">
          To request a quote or want to meet up for coffee, contact me directly{" "}
          <br />
          or fill out the form and I will get back to you promptly.
        </p>

        <div className="flex-between items-start gap-24" >
          {/* form section  */}
          <form className="w-[50%] font-[lufgaSemibold]">
            <fieldset className="border-2 border-(--secondary-text) rounded-lg mt-3 py-2">
              <legend className="px-2 mx-2 ">Name</legend>
              <input
                className="outline-none ml-4 w-full"
                type="text"
                placeholder="What should I call you"
              />
            </fieldset>

            <fieldset className="border-2 border-(--secondary-text) rounded-lg mt-3 py-2">
              <legend className="px-2 mx-2 ">Email</legend>
              <input
                className="outline-none ml-4 w-full"
                type="email"
                placeholder="Let me know ur email id"
              />
            </fieldset>

            <fieldset className="border-2 border-(--secondary-text) rounded-lg  mt-3 py-2">
              <legend className="px-2 mx-2">Your Message</legend>
              <textarea
                className="outline-none ml-4 w-full h-32"
                placeholder="What's on your mind?"
              />
            </fieldset>

            <button className="px-4 py-2 rounded-lg bg-(--primary-text) text-white mt-5">
              Send Message
            </button>
          </form>

          <div className="w-[50%]" >
            <img loading="lazy" className="min-w-[20rem] w-[26vw] mx-auto" src={mailImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
