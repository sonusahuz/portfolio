import { navbarLink } from "@/utils/constants";
import Link from "next/link";
import React from "react";

function Menu({ onClick }: { onClick: () => void }) {
  return (
    <ul className="flex flex-col gap-6 text-xl tracking-wide font-light p-10">
      {navbarLink.map((item) => (
        <li key={item.id}>
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
