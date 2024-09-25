"use client"
import UserHook from '@/hooks/useUser';
import React, { useState, useEffect } from 'react'
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


  return (
    <>

      <div className='text-black flex justify-center items-center flex-col gap-y-4 background-custom '>
        <nav>
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
        </nav>
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
      </div>
    </>
  )
}

export default page

// zustand = Dependencies, this a global state management system 