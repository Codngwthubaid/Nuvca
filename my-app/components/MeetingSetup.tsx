"use client"
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import { error } from 'console'
import React, { useEffect, useState } from 'react'

const MeetingSetup = () => {
  
  const call = useCall()
  const [isMicCamToggle, setIsMicCamToggle] = useState(false)


  if(!call) throw new Error("Call must be capture inside the StreamCall")

  useEffect(() => {
    if(isMicCamToggle){
      call?.camera.disable()
      call?.microphone.disable()
    }
    else {
      call?.camera.enable()
      call?.microphone.enable()
    }
  }, [call?.microphone , call?.camera, isMicCamToggle])
  
  return (
    <div className='h-screen w-full flex justify-center items-center text-white gap-3'>
      <h1 className='text-2xl font-bold'>Meeting Setup</h1>
      <VideoPreview />
      <div className='flex justify-center items-center gap-3 h-16'>
        <label className='flex justify-center items-center gap-2 font-medium'>
          <input 
          type='checked' 
          checked={isMicCamToggle}
          onChange={(e) => setIsMicCamToggle(e.target.checked)}
          />
        </label>

      </div>
      <DeviceSettings />
    </div>
  )
}

export default MeetingSetup