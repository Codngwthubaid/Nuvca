"use client"
import React, { useState } from 'react'
import { HomeCard } from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModel from './MeetingModel'

const MeetingTypeList = () => {
    const router = useRouter()
    const [meetState, setMeetState] = useState<"isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined>()


    const createMeeting = () => {
        
    }

    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                desc="Start an instant meeting"
                handleClick={() => setMeetState("isInstantMeeting")}
                className="bg-orange-500"
            />
            <HomeCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                desc="via invitation link"
                handleClick={() => setMeetState("isJoiningMeeting")}
                className="bg-green-500"
            />
            <HomeCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                desc="Plan your meeting"
                handleClick={() => setMeetState("isScheduleMeeting")}
                className="bg-blue-500"
            />
            <HomeCard
                img="/icons/recordings.svg"
                title="View Recordings"
                desc="Check your recordings"
                handleClick={() => router.push("/recordings")}
                className="bg-purple-500"
            />

            <MeetingModel
                isOpen={meetState === "isInstantMeeting"}
                onClose={() => setMeetState(undefined)}
                title="Start a instant meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </section>
    )
}

export default MeetingTypeList