import { navbarLink } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

function Menu({ onClick }: { onClick: () => void }) {
  return (
    <div>
      <ul className="flex flex-col gap-6 text-xl tracking-wide font-light">
        {navbarLink.map((item) => (
          <motion.li
            key={item.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Link href={item.url} onClick={onClick} className="text-2xl">
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -20 }}
        className="pt-10"
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default Menu;
