import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="flex items-center justify-center text-center flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">
          Oops! This Page Isn&apos;t Available{" "}
        </h1>
        <button className="bg-white text-black py-2.5 px-4 rounded-md text-sm w-32 mx-auto cursor-pointer">
          <Link href="/" className="mx-auto">
            Home
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
