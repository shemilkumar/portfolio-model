import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

function HireMe() {
  return (
    <div className="fixed flex justify-center overflow-hidden items- center md:absolute left-4 bottom-4 md:left-auto md:bottom-auto md:top-0 md:right-8">
      <div className="relative flex items-center justify-center w-48 h-auto md:w-24">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow"}
        />
        <Link
          href="mailto:abcd@gmail.com"
          className="absolute flex items-center justify-center w-20 h-20 font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-lg border-dark left-1/2 top-1/2 bg-dark dark:bg-light dark:text-dark text-light bo rder-dark hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:h-12 md:w-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
