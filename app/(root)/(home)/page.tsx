"use client"
import MeetingTypeList from '@/components/MeetingTypeList';
import React, { useState, useEffect } from 'react'
import { messages } from '@/constants/index';
const Home = () => {

  const now = new Date()
  const time = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  const date = (new Intl.DateTimeFormat("en-IN", { dateStyle: "full" })).format(now)
  const [message, setMessage] = useState("");

  const getDailyMessage = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return messages[dayOfWeek];
  };

  useEffect(() => {
    setMessage(getDailyMessage());
  }, []);


  return (
    <section className='flex flex-col text-white gap-10 size-full'>
      <div
        className='h-[300px] w-full rounded-2xl'
        style={{ backgroundImage: `url("/images/hero-background.png")` }}>
        <div className='flex flex-col h-full justify-between max-md:px-5 lg:p-11 max-md:py-8'>
          <h2 className='bg-slate-600 w-fit p-4 rounded text-center text-base font-normal'>
            {message}
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
            <p className='text-lg font-medium'>{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default Home