"use client"
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({ setIsSetupCompleted }: { setIsSetupCompleted: (value: boolean) => void }) => {

  const call = useCall()
  const [isMicCamToggle, setIsMicCamToggle] = useState(false)


  if (!call) throw new Error("Call must be capture inside the StreamCall")

  useEffect(() => {
    if (isMicCamToggle) {
      call?.camera.disable()
      call?.microphone.disable()
    }
    else {
      call?.camera.enable()
      call?.microphone.enable()
    }
  }, [call?.microphone, call?.camera, isMicCamToggle])

  return (
    <div className='flex h-screen flex-col justify-center items-center text-white gap-3'>
      <h1 className='text-2xl sm:text-3xl lg:4xl font-bold'>Meeting Setup</h1>
      <VideoPreview />
      <div className='flex justify-center items-center gap-3 h-16'>
        <label className='flex justify-center items-center gap-2 font-medium'>
          <input

            type='checkbox'
            checked={isMicCamToggle}
            onChange={(e) => setIsMicCamToggle(e.target.checked)}
          />
          Join with mic and camera
        </label>
        <DeviceSettings />
      </div>
      <Button
        className='bg-green-500 px-4 rounded-md'
        onClick={() => {call.join(); setIsSetupCompleted(true)}}
      >Join Meeting</Button>
    </div>
  )
}

export default MeetingSetup