"use client"
import { Button } from '@/components/ui/button'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/nextjs'
import { useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'



const Table = ({ title, desc }: { title: string, desc: string }) => {
  return (
    <div className='flex flex-col gap-2 items-start xl:flex-row'>
      <h1 className='text-base font-medium text-white lg:text-xl xl:min-w-32'>{title} : </h1>
      <h1 className='truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl'>{desc}</h1>
    </div>
  )
}

const PersonalRoom = () => {
  const { user } = useUser()
  const meetingID = user?.id
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingID}?personal=true`
  const { call } = useGetCallById(meetingID!)
  const client = useStreamVideoClient()
  const router = useRouter()

  const StartMeeting = async () => {

    if (!client || !user) return
    if (!call) {
      const newCall = client.call("default", meetingID!)
      await newCall.create({
        data: {
          starts_at: new Date().toISOString()
        }
      })
    }

    router.push(`meeting/${meetingID}?personal=true`)

  }


  return (
    <section className='flex flex-col text-white gap-10 size-full'>
      <h1 className='text-3xl font-boldl'>Personal Room</h1>

      <div className='flex w-full flex-col gap-8 lg:max-w-[900px]'>
        <Table title='Topic' desc={`${user?.username}'s meeting room`} />
        <Table title='Meeting ID' desc={meetingID!} />
        <Table title='Invite link' desc={meetingLink} />
        <div className='flex gap-5'>
          <Button onClick={StartMeeting} className="w-fit rounded bg-blue-500 hover:bg-blue-600 cursor-pointer px-6">Start Meeting</Button>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(meetingLink);
              toast.success("Copied to clipboard")
            }}
            className="bg-[#1E1E1E] cursor-pointer px-6 w-fit"
          >Copy Invitation</Button>
        </div>
      </div>
    </section>
  )
}

export default PersonalRoom