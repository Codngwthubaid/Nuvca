"use client"
import React from 'react'
import "../SignUp/SignUp.css"
import { useState } from 'react'
import { useRouter } from "next/navigation"
import axios from "axios"
// import { signIn } from '@/auth'

const Login = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    userName: "",
    email: "",
    tel: "",
    password: ""
  })

  // const [buttonDisable, setButtonDisable] = useState(false)
  // const Login = async () => {
  //     try {
  //         const response = await axios.post("/api/users/SignUpRoute", user)
  //         console.log("SignUp Successfull", response.data);
  //         router.push("/Login")

  //     } catch (error) {
  //         console.log("SignUp Failed !!!");
  //     }
  // }


  // const loginHandler = async (formData) => {
  //   const email = formData.get("email")
  //   const password = formData.get("password")

  //   if (!email || !password) {
  //     throw new Error("Please fill all the fields");
  //   }
  //   else {
  //     try {
  //       await signIn("credentials", {
  //         email,
  //         password,
  //         redirect: true,
  //         redirectTo: "/"
  //       })
  //     } catch (error) {
  //       throw new Error("Invalid Email and Password");
  //     }
  //   }
  // }


  return (
    <>
      <main>
        <form className="w-[80vw] mt-[10vh] sm:w-1/2 mx-auto">
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
              onClick={Login}
              className="bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-white">Sign Up
            </button>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-white  flex justify-center items-center gap-x-1">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
              </svg>
              <div>Sign in with Google</div>++
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Login