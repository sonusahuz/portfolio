"use client";
import { IoMenu, IoClose } from "react-icons/io5";
import { navbarLink } from "../utils/constants";
import { useState } from "react";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import Menu from "./Menu";
import Footer from "./Footer";

const inter = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Header({ children }: { children: React.ReactNode }) {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const handlerClose = () => {
    setShowMenuBar(false);
  };
  return (
    <>
      {/* desktop navbar  */}
      <header
        className={`flex w-full items-center justify-between z-20 py-4 bg-black text-white `}
      >
        <div>
          <Link href="/">
            <h1
              className={` text-2xl font-bold cursor-pointer text-white ${inter.className}`}
            >
              Sonu Sahu
            </h1>
          </Link>
        </div>
        <div className="hidden lg:block ml-20">
          <ul className="flex items-center justify-center gap-10 text-white">
            {navbarLink.map((nav) => (
              <li key={nav?.id} className="text-[#95959d]">
                <Link href={nav?.url} className="active">
                  {nav?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden flex items-center justify-center gap-3">
          {showMenuBar ? (
            <IoClose
              size={30}
              className="cursor-pointer "
              onClick={handlerClose}
            />
          ) : (
            <IoMenu
              size={30}
              className="cursor-pointer "
              onClick={() => setShowMenuBar(true)}
            />
          )}
        </div>
        <div className="lg:block hidden">
          <Footer />
        </div>
      </header>

      {/* mobile navbar menu  */}
      {showMenuBar && (
        <div className="flex w-full items-start flex-col justify-start z-20  fixed text-white pt-0 h-screen bg-black">
          <div className="flex items-center justify-center h-[80vh] w-full text-center">
            <Menu onClick={handlerClose} />
          </div>
        </div>
      )}
      {children}
    </>
  );
}
