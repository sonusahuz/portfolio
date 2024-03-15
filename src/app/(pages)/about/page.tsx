import React from "react";
import { Metadata } from "next";
import { skills, skills2 } from "@/utils/constants";
import DivMotion from "@/components/DivMotion";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sonu Sahu - About Me",
  description:
    " I’m Sonu Sahu, an India based Frontend Engineer with over two years of experience in web development. ",
};
function AboutMe() {
  return (
    <DivMotion>
      <div className="flex items-center justify-center lg:mt-4">
        <div className="flex items-start justify-between lg:flex-nowrap flex-wrap gap-5">
          <div className="text-left lg:w-[65%] order-2 lg:order-1 lg:mt-2">
            <div>
              <h1 className="text-2xl font-bold ">About Me</h1>
            </div>
            <p className="py-1 leading-7 text-[16px] font-light">
              Hello!, I’m Sonu Sahu, an India-based{" "}
              <span className=" font-semibold">
                Full-Stack Software Engineer{" "}
              </span>{" "}
              with over two years of experience in web development. I specialize
              in developing responsive user interfaces for web-based
              applications, prioritizing a secure and seamless user experience.
            </p>
            <p className="py-1 leading-7 text-[16px] font-light">
              I utilize a variety of tools, libraries, frameworks, and languages
              such as HTML, CSS, JavaScript, TypeScript, Tailwind CSS, React.js,
              Node.js, Next.js, and Git.
            </p>

            <p className="py-1 leading-7 text-[16px] font-light">
              I&apos;ve worked on various projects, including social media
              sites, e-commerce sites, music streaming platforms, and more. Each
              project presents an opportunity for me to demonstrate my skills
              and craft something remarkable. If you have any questions or would
              like to collaborate with me, feel free to reach out.
            </p>
            <div className="my-3">
              <h1 className="text-2xl font-bold">Skills</h1>
            </div>
            <div className="">
              <div className="flex items-center flex-wrap gap-3">
                {skills.map((item) => (
                  <li
                    key={item.id}
                    className="text-[#96969e] text-xs list-none skill"
                  >
                    {item.name}
                  </li>
                ))}
              </div>
            </div>
            <div className="mb-6 lg:mb-0">
              <div className="mt-5">
                <h1 className="text-2xl font-bold mb-2">About this site</h1>
              </div>
              <li className="text-[#96969e] text-[16px] leading-7 font-light">
                Developed by me using{" "}
                <Link
                  href={"https://nextjs.org/"}
                  className=" font-semibold cursor-pointer"
                >
                  Next.js.
                </Link>
              </li>
              <li className="text-[#96969e] text-[16px] leading-7 font-light">
                Animated using{" "}
                <Link
                  href={"https://www.framer.com/motion/"}
                  className=" font-semibold cursor-pointer"
                >
                  Framer Motion.
                </Link>
              </li>
              <li className="text-[#96969e] text-[16px] leading-7 font-light">
                Styled using{" "}
                <Link
                  href={"https://tailwindcss.com/"}
                  className=" font-semibold cursor-pointer"
                >
                  Tailwind CSS.
                </Link>
              </li>
              <li className="text-[#96969e] text-[16px] leading-7 font-light">
                Hosted and Deployed on{" "}
                <Link
                  href={"https://vercel.com"}
                  className=" font-semibold cursor-pointer"
                >
                  Vercel.
                </Link>
              </li>
            </div>
          </div>
          <div className="lg:w-[40%] mx-auto block lg:mt-2">
            <Image
              width={500}
              priority={true}
              height={500}
              src="/sonu2.jpg"
              alt=""
              className=" rounded-lg lg:h-[600px] lg:w-[420px] w-[400px] h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </DivMotion>
  );
}

export default AboutMe;
