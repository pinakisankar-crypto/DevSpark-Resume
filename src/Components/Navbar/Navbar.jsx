import React from "react";
import { leftNav, rightNav } from "../../constants/contants";
const Navbar = () => {
  return (
    <header className="absolute-horizontal-center z-10 w-[90%] bg-(--primary-black) text-white flex-between items-center m-auto py-2 px-1 rounded-full mt-9">
      <nav className="flex gap-[3vw]">
        {leftNav.map((ele, id) => (
          <p className="capitalize cursor-pointer px-4 py-2 rounded-full hover:bg-(--primary-text)" key={id}>
            {ele}
          </p>
        ))}
      </nav>
      <h2 className="text-xl font-bold">BRAND</h2>
      <nav className="flex gap-[3vw]">
        {rightNav.map((ele, id) => (
          <p className="capitalize cursor-pointer px-4 py-2 rounded-full hover:bg-(--primary-text)" key={id}>
            {ele}
          </p>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
