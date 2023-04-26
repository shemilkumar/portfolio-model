import { motion } from "framer-motion";
import React from "react";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
      // delayChildren: 0.5,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
};

function AnimatedText({ title, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center w-full mx-auto py-2 sm:py-0 overflow-hidden text-center`}
    >
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {title.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
