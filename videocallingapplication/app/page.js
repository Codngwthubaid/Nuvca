"use client"
import React from "react";
import MainPicture from "@/Components/MainPicture";

export default function Home() {
  return (
    <>
      <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 min-h-full lg:h-[88vh] ">
        <div className="flex flex-col lg:flex-row gap-y-3 py-[5vh] justify-center items-center container mx-auto ">
        <MainPicture/>
          <div className="w-10/12 lg:w-1/2 flex justify-center mb-[8vh] items-center lg:items-start  flex-col gap-y-4 ">
            <div>
              <div className="font-bold text-xl">NU-VCA</div>
              Introducing NU - VCA, your ultimate video calling solution designed for seamless communication. Whether for personal or professional use, our platform offers crystal-clear video and audio quality, ensuring every conversation is as natural as in-person. Built with cutting-edge technology, NU - VCA provides a secure, reliable, and intuitive interface, allowing you to connect effortlessly anytime, anywhere. Experience the future of communication with NU - VCA, where clarity meets convenience.
              Experience seamless, high-quality video communication with NU - VCA. Our state-of-the-art platform, built with Next.js and Tailwind CSS, delivers crystal-clear video and audio, ensuring that your virtual meetings are as productive as they are reliable. Whether for business or personal use, NU - VCA offers a secure, user-friendly interface that elevates your video calling experience to the next level.
            </div>
            <div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">let's Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
