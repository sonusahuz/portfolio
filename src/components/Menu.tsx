import { navbarLink } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Menu({ onClick }: { onClick: () => void }) {
  return (
    <ul className="flex flex-col gap-6 text-xl tracking-wide font-light p-10">
      {navbarLink.map((item) => (
        <motion.li
          key={item.url}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Link
            href={item.url}
            onClick={onClick}
            className="text-xl font-extralight"
          >
            {item.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default Menu;
