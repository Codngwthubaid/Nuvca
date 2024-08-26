"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const Logout = () => {
        try {
            axios.get("api/users/LogoutRoute")
            console.log("Logout Successfully !!!");
            router.push("/Login")

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <button
                onClick={Logout}
                type="submit">
                {Logout ? "Logout" : "Processing"}
            </button>
        </>
    )
}

export default page
