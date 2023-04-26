import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer text-light bg-dark dark:bg-light dark:text-dark shadow-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      // transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h1 className="mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32">
        Skills
      </h1>
      <div
        className="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center w-20 h-20 p-8 font-semibold rounded-full cursor-pointer text-light bg-dark shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2 sm:w-16 sm:h-16"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name={"CSS"} x={"-5vw"} y={"-10vw"} />
        <Skill name={"HTML"} x={"-20vw"} y={"2vw"} />
        <Skill name={"Javascript"} x={"20vw"} y={"6vw"} />
        <Skill name={"React"} x={"0vw"} y={"12vw"} />
        <Skill name={"Node"} x={"-20vw"} y={"-15vw"} />
        <Skill name={"MongoDB"} x={"15vw"} y={"-12vw"} />
        <Skill name={"Typescript"} x={"32vw"} y={"-5vw"} />
        <Skill name={"TailwindCSS"} x={"0vw"} y={"-20vw"} />
        <Skill name={"Express"} x={"-25vw"} y={"18vw"} />
        <Skill name={"Firebase"} x={"18vw"} y={"18vw"} />
        <Skill name={"Redux"} x={"-35vw"} y={"4vw"} />
      </div>
    </>
  );
}

export default Skills;
