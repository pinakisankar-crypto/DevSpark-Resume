import React from "react";
import { experiences } from "../../constants/contants";

const Experience = () => {
  return (
    <section className="xl:px-32 lg:px-18 md:px-12 sm:px-8 px-4 my-18">
      <h2 className="text-(--primary-blue) text-5xl font-semibold text-center">
        My <span className="text-(--primary-text)">Work Experience</span>
      </h2>

      {/* work experience cards */}
      <article className="mt-18 relative">
        {/* work experience card  */}
        {experiences.map((exp, id) => (
          <div key={id} className="flex-between items-start my-10">
            <div>
              <h4 className="text-3xl font-semibold capitalize">
                {exp.company}, {exp.location}
              </h4>
              <p className="mt-3 text-(--secondary-text)">
                {exp.startYear} - {exp.endYear}
              </p>
            </div>

            <div className="w-[30%]">
              <h4 className="text-3xl font-semibold capitalize">
                {exp.position}
              </h4>
              <p className="mt-3 text-(--secondary-text)">{exp.description}</p>
            </div>
          </div>
        ))}


        {/* timeline section  */}
        <div className="absolute-horizontal-center h-[85%] z-20 top-0 border-2 border-dashed border-(--primary-blue)">
          <span
            id="start"
            className="absolute-horizontal-center absolute -top-3 w-7 h-7 rounded-full bg-(--primary-text) border-2 border-dashed"
          ></span>

          <span
            id="start"
            className="absolute-center -top-3 w-7 h-7 rounded-full bg-(--primary-blue)"
          ></span>

          <span
            id="start"
            className="absolute-horizontal-center -bottom-3 w-7 h-7 rounded-full bg-(--primary-text) border-2 border-dashed"
          ></span>
        </div>

        {/* timeline wrap section  */}
        {/* <div className="absolute-horizontal-center h-[85%] top-0 border-2 border-dashed border-red-600">

        </div> */}
      </article>
    </section>
  );
};

export default Experience;
