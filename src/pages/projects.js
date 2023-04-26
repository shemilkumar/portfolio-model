import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border shadow-2xl rounded-3xl border-dark bg-light dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
      >
        <Image
          src={img}
          alt="project"
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:pl-0 lg:pt-6 lg:w-full">
        <span className="text-xl font-medium xs:text-base text-primary dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left sm:text-lg dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center mt-2">
          <Link
            href={github}
            target="_blank"
            className="w-10 h-auto dark:text-light"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 font-semibold rounded-lg dark:text-dark dark:bg-light text-light bg-dark sm:text:base sm:px-4"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border shadow-2xl rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <Image src={img} alt="project" className="w-full h-auto" />
      </Link>

      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl sm:text-lg">
            {title}
          </h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2">
          <Link
            href={link}
            target="_blank"
            className="font-semibold underline text-dark dark:text-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10 h-auto md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects() {
  return (
    <>
      <Head>
        <title>Shemil | Project Page</title>
        <meta name="description" content="any desc" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className={"pt-16"}>
          <AnimatedText
            title={"Imagination Trumps Knowledge!"}
            className="lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 mt-16 sm:mt-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                title={" Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
                summary={`A feature-rich Crypto Screener App  using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.`}
              />
            </div>
            <div className="col-span-6 xs:col-span-12">
              <Project
                title={" Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 xs:col-span-12">
              <Project
                title={" Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title={" Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
                summary={`A feature-rich Crypto Screener App  using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.`}
              />
            </div>
            <div className="col-span-6 xs:col-span-12">
              <Project
                title={" Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 xs:col-span-12">
              <Project
                title={" Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
