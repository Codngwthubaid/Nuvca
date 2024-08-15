"use client"
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-blue-800 h-[89vh]">
        <div className="flex border">
          <div className="w-1/2">

          </div>
          <div className="w-1/2">
            <div className="text-black">
              Experience seamless, high-quality video communication with NU - VCA. Our state-of-the-art platform, built with Next.js and Tailwind CSS, delivers crystal-clear video and audio, ensuring that your virtual meetings are as productive as they are reliable. Whether for business or personal use, NU - VCA offers a secure, user-friendly interface that elevates your video calling experience to the next level.
            </div>
            <div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Started</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
