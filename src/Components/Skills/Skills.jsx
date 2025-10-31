import React from "react";
import { skills } from "../../constants/contants";
const Skills = () => {
  return (
    <section
      className="xl:px-32 lg:px-18 md:px-12 sm:px-8 px-4 my-18 py-14 bg-(--secondary-bg)"
      id="skills"
    >
      <h2 className="text-5xl font-semibold font-[lufgaBold]">
        My <span className="text-(--primary-text)">Skills</span>
      </h2>

      <div className="mt-12 grid md:grid-rows-4 lg:grid-rows-3 sm:grid-rows-6 grid-flow-col md:p-3 lg:p-3 sm:p-0 p-5 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white w-full px-8 py-2 flex items-center justify-center rounded-md border drop-shadow-lg border-transparent hover:border-green-800 cursor-pointer hover:font-semibold transition-all duration-200"
          >
            <h2 className="lg:text-lg md:text-base text-sm text-center">
              {skill}
            </h2>
          </div>
        ))}
      </div>
    </section>

  );
};

export default Skills;
