"use client"
import "./SignUp.css"
import "../Login/Login.css"
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/Components/Navbar"

const SignUpPage = () => {
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const router = useRouter()
    const [user, setUser] = useState({
        userName: "",
        email: "",
        tel: "",
        password: ""
    })

    const signUp = async () => {
        try {
            const response = await axios.post("/api/users/SignUpRoute", user)
            console.log("SignUp Successfull", response.data);
            toast('Processing !!!', {
                position: "bottom-right",
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
            console.log("SignUp Failed !!!");
        }
    }

    const handlerSignUp = (e) => {
        e.preventDefault()
        signUp()
    }

    useEffect(() => {
        if (user.userName.length > 0 && user.email.length > 0 && user.tel.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [user])


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
            <Navbar />
            <main>
                <form className="mt-[20vh] w-[80vw] sm:w-1/2 mx-auto">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input
                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                            value={user.userName}
                            name="name"
                            type="name"
                            id="name"
                            placeholder="John Aliya"
                            className="bg-[#374151] border border-[#374151] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            value={user.email}
                            name="email"
                            type="name"
                            id="email"
                            className="bg-[#374151] border border-[#374151] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            placeholder="johnaliya@gmail.com" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                        <input onChange={(e) => setUser({ ...user, tel: e.target.value })}
                            value={user.tel}
                            name="tel"
                            type="tel"
                            id="phone"
                            className="bg-[#374151] border border-[#374151] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            placeholder="+91-xxxxx-xxxxx" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            value={user.password}
                            name="password" type="password" id="password"
                            className="bg-[#374151] border border-[#374151] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            placeholder="********" />
                    </div>

                    <button
                        type="submit"
                        onClick={handlerSignUp}
                        className="bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-white">{buttonDisabled ? "Fill the entries first" : "Sign Up"}
                    </button>
                </form>
            </main >
        </>
    )
}

export default SignUpPage
