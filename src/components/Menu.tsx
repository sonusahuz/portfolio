import Link from "next/link";
import React from "react";
import { GoHome, GoProjectSymlink } from "react-icons/go";
import { CiPhone } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { TbBrandBlogger } from "react-icons/tb";
import { IoMailUnreadOutline } from "react-icons/io5";
export const navbarLink = [
  {
    id: "1",
    name: "Home",
    url: "/",
    icons: <GoHome size={21} />,
  },
  {
    id: "2",
    name: "About",
    url: "/about",
    icons: <AiOutlineUser size={21} />,
  },
  {
    id: "3",
    name: "Projects",
    url: "/projects",
    icons: <GoProjectSymlink size={21} />,
  },
  {
    id: "4",
    name: "Blogs",
    url: "/blogs",
    icons: <TbBrandBlogger size={21} />,
  },
  {
    id: "5",
    name: "Contact",
    url: "/contact",
    icons: <CiPhone size={21} />,
  },
  {
    id: "6",
    name: "Subscribe",
    url: "https://linktr.ee/sonusahuz",
    icons: <IoMailUnreadOutline size={21} />,
  },
];

function Menu({ onClick }: { onClick: () => void }) {
  return (
    <ul className="flex flex-col gap-6 text-xl tracking-wide font-light p-6">
      {navbarLink.map((item) => (
        <li key={item.id} className="flex items-center justify-start gap-3">
          <div className="text-3xl font-extralight">{item.icons}</div>
          <Link
            href={item.url}
            onClick={onClick}
            className="text-xl font-extralight"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
