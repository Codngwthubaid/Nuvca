"use client";
import { useGetCalls } from '@/hooks/useGetCalls'
import { CallRecording } from '@stream-io/node-sdk'
import { Call } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import MeetingCard from './MeetingCard';
import Loader from './Loader';

const CallList = ({ type }: { type: "upcoming" | "recordings" | "ended" }) => {

    const { endedCalls, upComingCalls, isLoading, callRecordings } = useGetCalls()
    const Router = useRouter()
    const [recordingds, setRecordings] = useState<CallRecording[]>([])

    const getCalls = () => {
        switch (type) {
            case "upcoming":
                return upComingCalls;
            case "recordings":
                return callRecordings;
            case "ended":
                return endedCalls;
            default:
                return [];
        }
    }
    const getNoCallsMessage = () => {
        switch (type) {
            case "upcoming":
                return "No Up Coming Calls";
            case "recordings":
                return "No Previous Call Recordings";
            case "ended":
                return "No Previous Calls";
            default:
                return "";
        }
    }

    const calls = getCalls();
    const noCallsMessage = getNoCallsMessage();

    if(isLoading) return <Loader />

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {calls && calls.length > 0 ? calls.map((meeting: Call | CallRecording) => (
                <MeetingCard
                    key={(meeting as Call).id}
                    icon={
                        type === "ended"
                            ? "/icons/previous.svg"
                            : type === "upcoming"
                                ? "/icons/upcoming.svg"
                                : "/icons/recordings.svg"
                    }
                    title={(meeting as Call).state.custom?.desc}
                    date={(meeting as Call).state.startsAt?.toLocaleString() || "N/A"} 
                    isPreviousMeeting={}
                    buttonIcon1={}
                    handleClick={}
                    link={}
                    buttonText={}
                />
            )) : (
                "No Calls"
            )
            }
        </div>
    )
}

export default CallList