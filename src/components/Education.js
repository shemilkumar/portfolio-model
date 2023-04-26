import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "sping" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-64">
      <h1 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl md-text-4xl md:mb-16">
        Education
      </h1>
      <div
        ref={ref}
        className="relative mx-auto w-[75%]  lg:w-[90%] md:w-full "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-[4px] bg-dark dark:bg-light h-full left-9 top-0 origin-top
          md:w-[2px] md:left-[29px] xs:left-[19px]"
        />

        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            type={"Master Of Computer Science"}
            time={"2020-2022"}
            place={"Stanford University"}
            info={`Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.`}
          />
          <Details
            type={"Bachelor Of Science In Computer Science"}
            time={"2016-2020"}
            place={"Massachusetts Institute Of Technology (MIT)"}
            info={`Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.`}
          />
          <Details
            type={"Online Coursework"}
            time={"2015-2016"}
            place={"Coursera And EdX Completed coursework in advanced topics"}
            info={`such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.`}
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
