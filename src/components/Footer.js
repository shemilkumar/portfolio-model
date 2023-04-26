import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full font-medium border-t-2 dark:border-light border-dark dark:text-light sm:text-base">
      <Layout
        className={
          "py-8 flex items-center justify-between xl:py-6 lg:flex-col lg:py-6 lg:gap-2"
        }
      >
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link href={"/"}>Shemil</Link>
        <Link href={"/"}>Say Hello</Link>
      </Layout>
    </footer>
  );
}

export default Footer;
