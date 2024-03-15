import DivMotion from "@/components/DivMotion";
import { Metadata } from "next";

import { CiMail } from "react-icons/ci";
export const metadata: Metadata = {
  title: "Sonu Sahu - Contact Us",
  description:
    " I’m Sonu Sahu, an India based Frontend Engineer with over two years of experience in web development. ",
};
export default function Component() {
  return (
    <DivMotion>
      <div className="text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </div>
      <div className="flex items-center justify-between flex-wrap lg:mt-14">
        <div className="lg:w-[50%] hidden lg:block">
          <div className="">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Let&apos;s chat.</h1>
              <p className="mx-auto">
                We&apos;re here to help. Contact us with any questions you have.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <CiMail
                  size={50}
                  color="white"
                  className=" shadow-xl bg-gray-900 p-2 rounded-lg"
                />
                <div>
                  <h1>Mail me at </h1>
                  <p>sonusahu8930@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto border mt-10 lg:mt-0 p-4 rounded-lg border-[#343434] grid lg:w-[50%] gap-4 text-left md:px-6 lg:gap-10">
          <form
            action="https://formsubmit.co/sonusahu8930@gmail.com"
            method="POST"
          >
            <div className="space-y-4">
              <h1 className="text-2xl font-bold lg:text-3xl">
                Get In Touch 🚀
              </h1>
              <div className="space-y-2">
                <label
                  htmlFor="first-name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Fullname
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  required
                  className="flex h-12 bg-black text-white w-full rounded-md border border-[#343434] bg-background px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your fullname"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  className="flex bg-black text-white h-12 w-full rounded-md border border-[#343434] bg-background px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                  className="flex bg-black text-white min-h-[80px] w-full rounded-md border border-[#343434] bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="message"
                  name="message"
                  required
                  placeholder="Enter your message"
                />
              </div>
              <button className="bg-white text-black py-3 h-12 px-4 rounded-md text-sm  w-full">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </DivMotion>
  );
}
