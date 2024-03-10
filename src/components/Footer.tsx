import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaHashnode, FaXTwitter } from "react-icons/fa6";
export const socialMediaLink = [
  {
    id: "1",
    icons: (
      <a href="https://www.linkedin.com/in/sonusahu" target="_blank">
        <AiFillLinkedin
          className="cursor-pointer  hover:text-blue-600 text-[#96969e]"
          size={24}
        />
      </a>
    ),
  },
  {
    id: "2",
    icons: (
      <a href="https://www.instagram.com/sonusahu.js" target="_blank">
        <AiFillInstagram
          className="cursor-pointer  hover:text-pink-500 text-[#96969e]"
          size={24}
        />
      </a>
    ),
  },
  {
    id: "3",
    icons: (
      <a href="https://sonusahu.hashnode.dev/" target="_blank">
        <FaHashnode
          className="cursor-pointer  hover:text-blue-900 text-[#96969e]"
          size={21}
        />
      </a>
    ),
  },
  {
    id: "4",
    icons: (
      <a href="https://github.com/sonusahuz" target="_blank" className="">
        <AiFillGithub
          className="cursor-pointer hover:text-gray-400 text-[#96969e]"
          size={23}
        />
      </a>
    ),
  },
  {
    id: "5",
    icons: (
      <a href="https://twitter.com/sonusahuz" target="_blank" className="">
        <FaXTwitter
          className="cursor-pointer hover:text-gray-400 text-[#96969e]"
          size={21}
        />
      </a>
    ),
  },
];

export default function Footer() {
  return (
    <div className="flex items-center justify-left gap-6">
      {socialMediaLink.map((item) => (
        <div key={item.id}>{item.icons}</div>
      ))}
    </div>
  );
}
