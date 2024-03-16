import React, { useState } from "react";
import close from "./close.svg";
import logo from "./logo.svg";
import { menu } from "../../assets";

const navLinks2 = [
  {
    id: "about",
    title: "about",
  },
  {
    id: "pricing",
    title: "pricing",
  },
  {
    id: "login",
    title: "login",
  },
  {
    id: "Dashboard",
    title: "Dashboard",
  },
];

const HomeNavbar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-360px pt-[50px] flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="pr-32 list-none sm:flex hidden  items-center ">
        {navLinks2.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks2.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 items-center pl-[180px] ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0  my-2  w-[202px]
          h-[600px] rounded-l-lg sidebar pb-[230px]`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks2.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks2.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;