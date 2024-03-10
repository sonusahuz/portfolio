import React from "react";
import Link from "next/link";
import Image from "next/image";

function BlogCard({ item }: { item: Blog }) {
  return (
    <div className="flex items-center justify-between text-left lg:gap-6 gap-4 mt-6 lg:flex-nowrap flex-wrap new">
      <div className="xl:w-[40%]">
        <Link href={item.link}>
          <Image
            width={500}
            height={500}
            src={item.image}
            priority={true}
            alt={item.title}
            className="w-full h-full rounded-lg transition duration-300 ease-in-out hover:scale-110"
          />
        </Link>
      </div>
      <div className="xl:w-[60%]">
        <Link href={item.link} target="_blank">
          <h1 className=" text-slate-100 md:text-2xl text-2xl font-bold mb-2">
            {item.title}
          </h1>
        </Link>
        <div className="flex items-center justify-start my-2 gap-5">
          <span className="text-[#96969e] text-xs lg:text-sm">{item.date}</span>
          <span className="text-[#96969e] text-xs lg:text-sm">{item.time}</span>
        </div>
        <div className="mb-3">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
