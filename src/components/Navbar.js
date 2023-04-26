import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo.js";
import { useRouter } from "next/router.js";
import {
  TwitterIcon,
  GithubIcon,
  PinterestIcon,
  DribbbleIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons.js";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher.js";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
      h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
      h-[1px] inline-block bg-light dark:bg-dark  absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function Navbar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-10 flex items-center justify-between w-full px-32 py-10 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleMenuClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm 
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-100 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm
         ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>
      </button>

      {/* Desktop Menu */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <nav>
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
        </nav>

        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 rounded-full sm:mx-1 bg-light"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className={`flex items-center justify-center ml-3 rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg min-w-[70vw] fixed z-30 flex flex-col items-center justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 py-32 dark:bg-light/75 backdrop-blur-md"
        >
          <nav className="flex flex-col items-center justify-between gap-4 my-4">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              toggle={handleMenuClick}
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              toggle={handleMenuClick}
            />
            <CustomMobileLink
              href={"/projects"}
              title={"Projects"}
              toggle={handleMenuClick}
            />
          </nav>

          <nav className="flex flex-wrap items-center justify-center">
            <motion.a
              href={"/"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href={"/"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 rounded-full sm:mx-1 bg-light dark:bg-dark"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href={"/"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href={"/"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 rounded-full sm:mx-1 bg-light"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href={"/"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <DribbbleIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className={`flex items-center justify-center ml-3 rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "light" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      {/* <div className="min-w-[70vw] fixed z-30 flex flex-col items-center justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 backdrop-blur-md">
        <nav className="flex flex-col items-center justify-between">
          <CustomMobileLink
            href={"/"}
            title={"Home"}
            toggle={handleMenuClick}
          />
          <CustomMobileLink
            href={"/about"}
            title={"About"}
            toggle={handleMenuClick}
          />
          <CustomMobileLink
            href={"/projects"}
            title={"Projects"}
            toggle={handleMenuClick}
          />
        </nav>

        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 rounded-full sm:mx-1 bg-light"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className={`flex items-center justify-center ml-3 rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div> */}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar;
