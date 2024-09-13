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

                    <div className="flex flex-col gap-y-2 sm:flex-row sm:justify-between gap-x-5">
                        <button
                            type="submit"
                            onClick={handlerSignUp}
                            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-white">{buttonDisabled ? "Fill the entries first" : "Sign Up"}
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-white  flex justify-center items-center gap-x-1">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                            </svg>
                            <div>Sign in with Google</div>
                        </button>
                    </div>

                </form>
            </main >
        </>
    )
}

export default SignUpPage
