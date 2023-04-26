import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "sping" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-64">
      <h1 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl md-text-4xl md:mb-16">
        Experience
      </h1>
      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-[4px] bg-dark dark:bg-light h-full left-9 top-0 origin-top
          md:w-[2px] md:left-[29px] xs:left-[19px]"
        />

        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            position={"Software Engineer"}
            company={"Google"}
            companyLink={"www.google.com"}
            time={"2022-Present"}
            address={"Mountain View, CA"}
            work={`Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization.`}
          />

          <Details
            position={"Software Developer"}
            company={"Amazon"}
            companyLink={"www.amazon.com"}
            time={"2020-2021"}
            address={"Seattle, WA."}
            work={`Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization.`}
          />

          <Details
            position={"Intern"}
            company={"Facebook"}
            companyLink={"www.facebook.com"}
            time={"Summer 2021"}
            address={"Menlo Park, CA."}
            work={`Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization.`}
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
