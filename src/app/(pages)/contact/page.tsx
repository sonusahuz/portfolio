import DivMotion from "@/components/DivMotion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonu Sahu - Contact Us",
  description:
    " I’m Sonu Sahu, an India based Frontend Engineer with over two years of experience in web development. ",
};
export default function Component() {
  return (
    <DivMotion>
      <div className="flex items-center justify-center h-[80vh] ">
        <div className="container border md:border-none p-4 rounded-lg border-[#343434] grid w-full items-center justify-center gap-4 text-left md:px-6 lg:gap-10">
          <div className="space-y-3 text-center">
            <h2 className="text-4xl font-bold mb-1">Contact Us</h2>
            <p className="mx-auto max-w-[700px] text-[#96969e] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We&apos;re here to help. Contact us with any questions you have.
            </p>
          </div>
          <form
            action="https://formsubmit.co/sonusahu8930@gmail.com"
            method="POST"
          >
            <div className="space-y-4">
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
