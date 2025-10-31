import React from "react";
import { leftNav, rightNav } from "../../constants/contants";
import { IoIosSend } from "react-icons/io";


const Footer = () => {
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
          <h6 className="text-white text-2xl font-[lufgaBold]">Brand</h6>
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
                <input className="px-2 py-3 w-full outline-none" type="email" placeholder="Email address" />
                <button className="bg-(--primary-text)" >
                    <p className="px-3 text-white text-2xl cursor-pointer" ><IoIosSend/></p>
                </button>
            </form>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
