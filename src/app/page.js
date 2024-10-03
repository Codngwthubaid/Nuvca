"use client"
import UserHook from '@/hooks/useUser';
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const page = () => {
  const { user, setUser } = UserHook()
  const [roomID, SetRoomID] = useState("")
  const router = useRouter()

  useEffect(() => {
    setUser("")
  }, [])

  const CurrentDate = () => {
    useEffect(() => {
      let date = new Date();
      console.log(date);
    }, []);
  }


  return (
    <>
      <main>
        <section>
          <article className='background-custom'>
            <div className='text-black flex justify-center items-center flex-col gap-y-4'>
              <nav className='border-2 border-red-700 flex justify-between items-center w-full'>
                <div>
                  <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-slate-600'>&#60;</span><span className="font-bold text-[#121b30]">NU-</span><span className="font-bold text-blue-500">VCA</span><span className='text-slate-600'>&#47;&#62;</span></div>
                </div>
                <div className='border-4 border-green-500 flex w-fit text-white justify-between'>
                  <div>{CurrentDate()}</div>
                  <div>UserName</div>
                  <div>
                    <Sheet>
                      <SheetTrigger>Open</SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Are you absolutely sure?</SheetTitle>
                          <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                          </SheetDescription>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </nav>
              <div>

<Link href="/pages/Profile">Profile</Link>

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
            </div>
          </article>
        </section>
      </main>

    </>
  )
}

export default page

// zustand = Dependencies, this a global state management system 