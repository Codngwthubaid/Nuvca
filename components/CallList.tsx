"use client";
import { useGetCalls } from '@/hooks/useGetCalls'
import { CallRecording } from '@stream-io/node-sdk'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

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


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>



        </div>
    )
}

export default CallList