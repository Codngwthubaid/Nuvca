"use client"
import React from 'react'
import { useState } from 'react'
import Logout from "../Logout/page"
import axios from 'axios'
import Link from 'next/link'

const page = () => {
    const [user, setUser] = useState("Nothing")
    const getUserDetails = async () => {
        const response = await axios.get("/api/users/UserDetails")
        console.log(response);
        setUser(response.data.data._id)
    }

    return (
        <>
            <div className='text-black'>Im Profile</div>
            <h2 className='text-black'>{user === "Nothing" ? "Nothing" : <Link href={`/pages/Profile/${user}`}>{user}</Link>}</h2>
            <button
                className='text-black'
                onClick={getUserDetails}
                type="submit">
                Get Data
            </button>
            <Logout />
        </>
    )
}

export default page
