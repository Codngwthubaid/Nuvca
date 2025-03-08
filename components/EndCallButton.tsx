"use client"
import React from 'react'
import { Button } from './ui/button'
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'

const EndCallButton = () => {

    const call = useCall()
    const Router = useRouter()

    const { useLocalParticipant } = useCallStateHooks()
    const localParticipant = useLocalParticipant();

    const isMeetingOwner = localParticipant && call?.state.createdBy && localParticipant.userId === call?.state.createdBy.id;
    if (!isMeetingOwner) return null;
    return (
        <Button onClick={async () => { await call?.endCall(); Router.push("/") }} className='bg-red-500 hover:bg-red-600 cursor-pointer'>End Call For Everyone</Button>
    )
}

export default EndCallButton
