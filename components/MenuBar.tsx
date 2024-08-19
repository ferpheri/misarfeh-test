"use client";
import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import ServicesIcon from "./icons/ServicesIcon";
import AboutIcon from "./icons/AboutIcon";
import ContactIcon from "./icons/ContactIcon";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  {
    name: "home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "services",
    path: "/services",
    icon: <ServicesIcon />,
  },
  {
    name: "about",
    path: "/about",
    icon: <AboutIcon className="icon" />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <ContactIcon />,
  },
];

const MenuBar = () => {
  const path = usePathname();
  useEffect(() => {
    const handelResize = () => {
      if (
        window.innerHeight < 520 ||
        path === "/services" ||
        path === "/about"
      ) {
        document.body.classList.remove("overflow-hidden");
      } else {
        document.body.classList.add("overflow-hidden");
      }
    };
    handelResize();
    window.addEventListener("resize", handelResize);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handelResize);
    };
  }, [path]);
  return (
    <nav className="bg-neutral-neutral20  bottom-3 sticky  mt-5 py-4 rounded-rounded-6 flex flex-row justify-around xl:mx-[29rem] 2xl:mx-[30rem] sm:mx-28 md:mx-64 lg:mx-72 mx-16 z-20">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`py-1 px-3 flex justify-center items-center  ${path === link.path ? "text-primary-primary70 bg-neutral-neutral30 rounded-rounded-4 shadow-lg" : "text-white"} hover:text-primary-primary70`}
        >
          {link.icon}
        </Link>
      ))}
    </nav>
  );
};

export default MenuBar;
