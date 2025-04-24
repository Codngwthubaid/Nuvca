"use client"
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModel from './MeetingModel'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { toast } from "sonner"
import DatePicker from "react-datepicker";
import { Input } from "@/components/ui/input"


export default function MeetingTypeList () {
    const router = useRouter()
    const [meetState, setMeetState] = useState<"isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined>()
    const { user } = useUser();
    const client = useStreamVideoClient()
    const [callValues, setCallValues] = useState({
        dateTime: new Date(),
        desc: "",
        link: ""
    })
    const [callDetails, setCallDetails] = useState<Call>()



    const createMeeting = async () => {
        if (!callValues.dateTime) toast("Please select a date and time");
        if (!user || !client) return;

        try {
            const id = crypto.randomUUID();
            const call = client.call("default", id);

            if (!call) throw new Error("Fail to create call");

            const startsAt = callValues.dateTime.toISOString() || new Date().toISOString();
            const desc = callValues.desc || "Instant message";

            await call.create({
                data: {
                    starts_at: startsAt,
                    custom: { desc }
                }
            })

            setCallDetails(call);

            if (!callValues.desc) router.push(`/meeting/${call.id}`)
            toast("Meeting created successfully")

        } catch (error) {
            console.log(error);
            toast("failed to crearte meeting call")
        }
    }

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`

    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                desc="Start an instant meeting"
                handleClick={() => setMeetState("isInstantMeeting")}
                className="bg-orange-500/80 hover:bg-orange-600"
            />
            <HomeCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                desc="via invitation link"
                handleClick={() => setMeetState("isJoiningMeeting")}
                className="bg-green-500/80 hover:bg-green-600"
            />
            <HomeCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                desc="Plan your meeting"
                handleClick={() => setMeetState("isScheduleMeeting")}
                className="bg-yellow-500/80 hover:bg-yellow-600"
            />
            <HomeCard
                img="/icons/recordings.svg"
                title="View Recordings"
                desc="Check your recordings"
                handleClick={() => router.push("/recordings")}
                className="bg-purple-500/80 hover:bg-purple-600"
            />

            {!callDetails ? (
                <MeetingModel
                    isOpen={meetState === "isScheduleMeeting"}
                    onClose={() => setMeetState(undefined)}
                    title="Create Meeting"
                    handleClick={createMeeting}
                >
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-base font-normal text-white'>
                            Add a description
                        </label>
                        <textarea
                            rows={3}
                            className='w-full rounded-md border-none bg-[#19232c] p-2 text-base'
                            onChange={(e) => { setCallValues({ ...callValues, desc: e.target.value }) }}
                        />
                    </div>
                    <div className='flex flex-col w-full gap-3'>
                        <label className='text-base font-normal text-white'>
                            Select date and time
                        </label>
                        <DatePicker
                            showTimeSelect
                            timeFormat='HH:mm'
                            dateFormat='yyyy-MM-dd h:mm aa'
                            className='w-full rounded-md border-none bg-[#19232c] p-2'
                            timeIntervals={15}
                            selected={callValues.dateTime}
                            onChange={(date) => setCallValues({ ...callValues, dateTime: date! })} />
                    </div>
                </MeetingModel>
            ) : (
                <MeetingModel
                    isOpen={meetState === "isScheduleMeeting"}
                    onClose={() => setMeetState(undefined)}
                    title="Meeting created"
                    className="text-center"
                    buttonText="Copy meeting link"
                    image="/icons/check.svg"
                    buttonIcon="/icons/copy.svg"
                    handleClick={() => { navigator.clipboard.writeText(meetingLink); toast("Meeting link copied") }}
                />
            )}

            <MeetingModel
                isOpen={meetState === "isInstantMeeting"}
                onClose={() => setMeetState(undefined)}
                title="Start a instant meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />

            <MeetingModel
                isOpen={meetState === "isJoiningMeeting"}
                onClose={() => setMeetState(undefined)}
                title="Type link to join meeting"
                className="text-center"
                buttonText="Join Meeting"
                handleClick={() => { router.push(callValues.link) }}
            >
                <Input
                    placeholder='Meeting Link'
                    className='bg-[#19232c] text-white'
                    onChange={(e) => setCallValues({ ...callValues, link: e.target.value })}
                />
            </MeetingModel>
        </section>
    )
}
