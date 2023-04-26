import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Shemil"
                className="w-full lg:hidden md:inline-block sm:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center ">
              <AnimatedText
                title={"Turning Vision Into Reality With Code And Design."}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href={"/dummy.pdf"}
                  target="_blank"
                  className="flex items-center p-2.5 px-6 text-lg font-semibold border-2 border-transparent rounded-lg bg-dark dark:bg-light dark:text-dark text-light hover:dark:text-light hover:bg-light hover:dark:bg-dark hover:text-black hover:border-dark hover:dark:border-light md:p-2 sm:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href={"mailto:abcd@gmail.com"}
                  className="ml-4 text-lg font-medium underline capitalize md:text-base text-dark dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute inline-block w-24 right-8 bottom-8 md:hidden">
          <Image src={lightBulb} alt="bulb" className="w-full h-auto " />
        </div>
      </main>
    </>
  );
}
