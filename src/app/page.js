"use client"
import UserHook from '@/hooks/useUser';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LogOut from "@/Components/LogOut"
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
uuidv4();

const page = () => {
  const { user, setUser } = UserHook()
  const [roomID, SetRoomID] = useState("")
  const router = useRouter()

  useEffect(() => {
    setUser("")
  }, [])


  return (
    <>
      <section>
        <article className='background-custom'>
          <nav className='p-5 flex justify-between items-center w-full'>
            <div className='gap-x-1 flex justify-center items-center'>
              <div>
                <Image
                  src="/img/favicon.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-slate-600'>&#60;</span><span className="font-bold text-gray-300">NU-</span><span className="font-bold text-blue-500">VCA</span><span className='text-slate-600'>&#47;&#62;</span></div>
              </div>
            </div>
            <div><LogOut /></div>
          </nav>
          <main className='w-full flex justify-around items-center flex-col-reverse lg:flex-row p-10 gap-y-10'>
            <section className='lg:w-1/2 flex flex-col gap-y-5'>
              <div className='flex justify-center items-start flex-col gap-y-5'>
                <div className='text-4xl lg:text-5xl font-semibold text-center lg:text-start'>Video calls and meeting for everyone</div>
                <div className='text-xl text-center sm:text-start'>Connect, collaborate, and celebrate from anywhere with NU-VCA</div>
              </div>
              <div>
                <div>
                  <div className='flex  items-center flex-col gap-y-5'>
                    <div className=' flex gap-x-10 justify-center items-center flex-col gap-y-5 sm:flex-row'>
                      <div className='text-black'>
                        <input
                          className='p-2 rounded-xl'
                          type="text"
                          name="name"
                          id="name"
                          value={user}
                          onChange={(e) => setUser(e.target.value)}
                          placeholder='Enter Name' />
                      </div>
                      <div>
                        <div className='text-white'>
                          <input
                            className='p-2 rounded-xl'
                            type="text"
                            name="name"
                            id="roomID"
                            value={roomID}
                            onChange={(e) => SetRoomID(e.target.value)}
                            placeholder='Enter Room ID ' />
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <button
                        className='p-2 hover:cursor-pointer border-2 rounded-xl'
                        type="button"
                        disabled={!user}
                        onClick={() => router.push(`pages/Room/${roomID}`)}>Go to Room</button>
                    </div>
                  </div>
                  <div className='bg-white h-[1px] w-11/12 mx-auto my-6'></div>
                  <div>
                    <div className='text-center'>
                      <button className='text-blue-500 hover:underline' onClick={() => router.push(`pages/Room/${uuidv4()}`)}>
                        Or create a new meeting
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='flex justify-center items-center'>
              <video width="420" height="240" controls preload="none" autoPlay="on" muted>
                <source src="/video/main.mp4" type="video/mp4" />
                <track
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </section>
          </main>

        </article>
      </section >

    </>
  )
}

export default page

// zustand = Dependencies, this a global state management system 