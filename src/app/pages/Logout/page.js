"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
    const router = useRouter()
    const Logout = () => {
        try {
            axios.get("api/users/LogoutRoute")
            console.log("Logout Successfully !!!");
            toast('Processing !!!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: "Bounce",
            })
            router.push("/pages/Login")

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
            <button
                onClick={Logout}
                type="submit">
                Logout
            </button>
        </>
    )
}

export default page
