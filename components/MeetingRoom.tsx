import { cn } from '@/lib/utils'
import { CallControls, CallingState, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutList, UsersIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import EndCallButton from './EndCallButton'
import Loader from './Loader'


type CallLayoutTypes = 'speaker-left' | 'speaker-right' | 'grid'

export default function MeetingRoom () {
  const searchParams = useSearchParams()
  const isPersonalRoom = !!searchParams.get('personal')
  const [layout, setLayout] = useState<CallLayoutTypes>('speaker-left')
  const [showPaticipants, setShowParticipants] = useState(false)
  const { useCallCallingState } = useCallStateHooks()
  const callingState = useCallCallingState()
  const Router = useRouter()

  if (callingState !== CallingState.JOINED) return <Loader />

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />

      case 'speaker-left':
        return <SpeakerLayout participantsBarPosition="right" />

      default:
        return <SpeakerLayout participantsBarPosition="left" />
    }
  }

  return (
    <section className='relative h-screen w-full overflow-hidden text-white px-4'>
      <div className='relative flex justify-center items-center size-full'>
        <div className='flex items-center size-full'>
          <CallLayout />
        </div>
        <div className={cn('h-[calc(100vh-100px)] hidden ml-2', { "block": showPaticipants })}>
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
        <div className='fixed bottom-0 w-full flex justify-center items-center gap-3 flex-wrap'>
          <CallControls onLeave={() => { Router.push("/") }} />

          <DropdownMenu>
            <div>
              <DropdownMenuTrigger className='rounded-2xl cursor-pointer p-2 bg-[#19232c] hover:bg-[#3a424b]'>
                <LayoutList size={20} className='text-white' />
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent className='border-[#19232c] bg-[#19232c] text-white'>
              {["Grid", "Speaker Left", "Speaker Right"].map((layout, index) => (
                <div key={index}>
                  <DropdownMenuItem
                    className='cursor-pointer hover:bg-[#3a424b]'
                    onClick={() => setLayout(layout.toLowerCase() as CallLayoutTypes)}
                  >{layout}
                  </DropdownMenuItem>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <CallStatsButton />
          <button
            className='rounded-2xl cursor-pointer p-2 bg-[#19232c] hover:bg-[#3a424b]'
            onClick={() => setShowParticipants(!showPaticipants)}>
            <UsersIcon size={20} className='text-white' />
          </button>

          {!isPersonalRoom && <EndCallButton />}
        </div>
      </div>
    </section>
  )
}
