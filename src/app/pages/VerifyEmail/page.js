"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function VerifyEmail() {

    const [Token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)

    const verifyUserEmail = async () => {
        try {

            await axios.post("/api/users/VerifyEmail", { Token })
            setVerified(true)
        } catch (error) {
            setError(true)
            console.log(error.response.data);

        }
    }

    useEffect(() => {
        if (Token.length > 0) {
            verifyUserEmail()
        }
    }, [Token])

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")
    }, [])

    return (
        <>
            <div className="flex flex-col justify-center items-center text-black">
                <h1 className="text-4xl">Verify Email</h1>
                <h2>{Token ? `${Token}` : "No Token"}</h2>

                {verified && (
                    <div>
                        <h2 className="text-2xl">Email Verify</h2>
                        <Link href="/pages/Login" className="text-blue-100 font-bold">Login</Link>
                    </div>
                )}
                {error && (
                    <div>
                        <h2 className="text-2xl text-red-600">Error</h2>
                    </div>
                )}
            </div>
        </>
    )

}