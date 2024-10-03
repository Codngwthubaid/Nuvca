"use client"
import UserHook from '@/hooks/useUser';
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
uuidv4();

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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
          <div className='text-black flex justify-center items-center flex-col gap-y-4'>
            <nav className='p-5 border-2 border-red-700 flex justify-between items-center w-full'>
              <div className='gap-x-1 flex justify-center items-center border-2 border-red-500'>
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
              <div className='gap-x-4 border-4 border-green-500 flex w-fit text-white justify-between'>
                <div>day and date</div>
                <div>
                  <Link href="/pages/Profile">Profile</Link>
                </div>
              </div>
            </nav>
            <main className='border-2 border-pink-500 w-full flex justify-around items-center'>
              <section>
                <div>
                  <div className=''>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      placeholder='Enter Your Name :' />
                  </div>
                  <div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="roomID"
                        value={roomID}
                        onChange={(e) => SetRoomID(e.target.value)}
                        placeholder='Enter Room ID :' />
                    </div>
                    <div>
                      <button
                        className='border p-2'
                        type="button"
                        disabled={!user}
                        onClick={() => router.push(`pages/Room/${roomID}`)}>Go to Room</button>
                    </div>
                    <div>
                      <div>
                        <button className='text-blue-500 hover:underline' onClick={() => router.push(`pages/Room/${uuidv4()}`)}>
                          Or create a new meeting
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </section>
            </main>
          </div>
        </article>
      </section>

    </>
  )
}

export default page

// zustand = Dependencies, this a global state management system 