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

            const user = await axios.post("/api/users/VerifyEmail", { Token })
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
        setToken(urlToken || " ")
    }, [])

    return (
        <>
            <div className="bg-black flex flex-col justify-center items-center">
                <h1 className="text-4xl text-blue-600">Verify Email</h1>
                <h2>{Token ? `${Token}` : "No Token"}</h2>

                {verified && (
                    <div>
                        <h2 className="text-2xl">Email Verify</h2>
                        <Link href="/pages/Login" className="text-green-600 font-bold">Login</Link>
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


