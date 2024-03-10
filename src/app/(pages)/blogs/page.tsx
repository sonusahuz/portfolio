import BlogCard from "@/components/BlogCard";
import DivMotion from "@/components/DivMotion";
import { blogList } from "@/utils/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sonu Sahu - Blogs",
};
function Blogs() {
  return (
    <DivMotion>
      <div className="mb-10">
        <div className="mt-0 text-center">
          <div>
            <h1 className="text-4xl font-bold mb-3">Blogs</h1>
          </div>
          <div className="w-full">
            {blogList.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </DivMotion>
  );
}

export default Blogs;
