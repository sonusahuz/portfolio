import Link from "next/link";
import DivMotion from "@/components/DivMotion";
export default function Home() {
  return (
    <div
      className={`flex text-left sm:text-center items-center justify-center mx-auto h-[78vh] lg:h-[80vh] w-full flex-wrap bg-black text-white`}
    >
      <DivMotion>
        <div>
          <h1 className="lg:text-7xl tracking-wide lg:font-bold font-semibold text-[45px] leading-tight">
            Sonu Sahu
          </h1>
          <h1 className="lg:text-6xl tracking-wide text-[43px] lg:font-bold font-semibold leading-tight mb-2">
            Exploring the World of Web
          </h1>
        </div>
        <div className="px-0 lg:px-36 lg:my-4">
          <p className="text-[16px] lg:text-xl md:leading-9 leading-7  font-light ">
            I&apos;m a{" "}
            <span className="font-semibold">Full-Stack Developer </span>
            focused on crafting clean & user-friendly experiences. I am
            passionate about building excellent software that improves the lives
            of those around me.
          </p>
        </div>
        <div className="flex items-center gap-6 sm:justify-center justify-start lg:mt-4 mt-4">
          <button className="bg-white text-black py-2.5 px-4 rounded-md text-sm md:hidden w-32">
            <a href="mailto: sonusahu8930@gmail.com">Get In Touch</a>
          </button>
          <button className="bg-white text-black py-2.5 px-4 rounded-md text-sm hidden md:block w-32">
            <Link href="/contact">Contact</Link>
          </button>
          <button className="bg-black text-white py-2.5 px-4 rounded-md border border-[#343434] text-sm w-32">
            <Link href={"/projects"}>Projects</Link>
          </button>
        </div>
      </DivMotion>
    </div>
  );
}
