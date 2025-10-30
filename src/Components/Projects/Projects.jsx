import { useRef } from "react";
import projectBG from "../../assets/project-bg.svg";
import { GoArrowRight } from "react-icons/go";
import { projects } from "../../constants/contants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const linkArrow = useRef([]);
  const linkArrowBg = useRef([]);
  const projectCard = useRef([]);
  const projectImage = useRef([]);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    projectCard.current.forEach((_, i) => {
      const tl = gsap.timeline({ paused: true });

      tl.to(linkArrowBg.current[i], {
        backgroundColor: "var(--primary-text)",
        duration: 0.2,
      });

      tl.to(
        linkArrow.current[i],
        {
          transform: "rotateX(0deg)",
          duration: 0.2,
        },
        "-=0.1"
      );

      tl.to(
        projectCard.current[i],
        {
          backgroundColor: "var(--primary-text)",
        },
        "-=0.2"
      );

      tl.to(
        projectImage.current[i],
        {
          scale: 1.4,
          duration: 0.1,
        },
        "-=0.4"
      );

      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();

      linkArrowBg.current[i].addEventListener("mouseenter", onEnter);
      linkArrowBg.current[i].addEventListener("mouseleave", onLeave);
    });

    // Cleanup
    return () => {
      linkArrowBg.current.forEach((el, i) => {
        if (el) {
          el.removeEventListener("mouseenter", () => {});
          el.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  return (
    <section id="projects" className="relative">
      <div className="w-full h-160 rounded-t-[3rem] rounded-b-[3rem] overflow-hidden">
        <img className="w-full h-full object-cover" src={projectBG} alt="" />
      </div>

      <article className="absolute top-16 w-full">
        {/* heading */}
        <div className="xl:px-32 lg:px-18 md:px-12 sm:px-8 px-4 flex-between">
          <h2 className="text-white text-4xl font-semibold">
            My <span className="text-(--primary-text)">Projects</span>
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis <br />{" "}
            lacus nunc, posuere in justo vulputate, bibendum sodales{" "}
          </p>
        </div>

        {/* cards */}
        <div
          id="project-card"
          className="h-fit mt-20 mx-auto flex-between gap-[2vw] xl:px-32 lg:px-18 md:px-12 sm:px-8 px-4   "
        >
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (projectCard.current[i] = el)}
              className="w-full h-fit glass-card rounded-4xl overflow-hidden relative"
            >
              <div className="py-4 px-6">
                <p className="text-white text-xl">{project.projectName}</p>
              </div>

              <div className="relative mt-8 h-78 overflow-hidden">
                <img
                  ref={(el) => (projectImage.current[i] = el)}
                  className="w-full h-full object-cover"
                  src={project.projectImage}
                  alt=""
                />
              </div>

              <div
                ref={(el) => (linkArrowBg.current[i] = el)}
                className="bg-(--primary-blue) w-20 h-20 rounded-full absolute bottom-2 right-2 flex-center cursor-pointer"
              >
                <p
                  ref={(el) => (linkArrow.current[i] = el)}
                  className="text-white text-4xl -rotate-45"
                >
                  <GoArrowRight />
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Projects;
