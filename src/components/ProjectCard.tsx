import React from "react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

function ProjectCard({ item }: { item: Project }) {
  return (
    <div className="flex items-center justify-between text-left lg:gap-6 gap-4 mt-6 lg:flex-nowrap flex-wrap new">
      <div className="xl:w-[40%]">
        <Link href={item.link} target="_blank">
          <Image
            width={500}
            priority={true}
            height={500}
            src={item.image}
            alt={item.projectName}
            className="w-full h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>
      <div className="xl:w-[60%]">
        <Link href={item.link} target="_blank">
          <h3 className=" text-slate-100 text-2xl font-bold mb-2">
            {item.projectName}
          </h3>
        </Link>
        <div className="">
          <p>{item.description}</p>
        </div>
        <div className="mt-2">
          <ul className="flex items-center justify-start gap-3 flex-wrap">
            {item.skills.map((skill) => (
              <li className="skill text-xs" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-left gap-3 mt-4">
          <button className="bg-white text-black py-1.5 px-4 rounded-md text-sm flex items-center justify-center gap-2">
            <FiExternalLink size={18} />
            <Link href={item.link} target="_blank">
              Visit
            </Link>
          </button>
          <button className="bg-black text-white py-1.5 px-4 rounded-md border border-[#343434] text-sm flex items-center justify-center gap-2">
            <BsGithub size={18} />
            <Link href={item.github} target="_blank">
              GitHub
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
