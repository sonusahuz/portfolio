import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sonu Sahu - Frontend Engineer",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Frontend",
    "Full Stack Developer",
    "Sonu Sahu",
    "Sonu Sahu Portfolio",
    "Sonu Sahu Projects",
    "Sonu Sahu Blogs",
  ],
  description:
    "I'm a Frontend Engineer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="sm:px-4 lg:px-10 xl:px-40 px-3">
          <Header>{children}</Header>
        </main>
      </body>
    </html>
  );
}
