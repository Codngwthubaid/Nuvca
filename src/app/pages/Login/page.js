"use client"
import "../SignUp/SignUp.css"
import "./Login.css"
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "@/Components/Navbar";

const Login = () => {
  const router = useRouter()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [user, setUser] = useState({
    userName: "",
    password: ""
  })

  const Login = async () => {
    try {
      const response = await axios.post("/api/users/LoginRoute", user);
      console.log("Login Successful", response.data);

      toast('Login Successful! Redirecting to your profile...', {
        position: "bottom-right",
        autoClose: 3000,  // Shorten the duration since it's a success message
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "Bounce",
      });

      router.push("/");
    } catch (error) {
      console.log("Login Failed!!!", error);  // Log the error object for better debugging
      toast('Login Failed! Please check your credentials and try again.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "Bounce",
      });
    }

  }

  const handlerLogin = (e) => {
    e.preventDefault()
    Login()
  }

  useEffect(() => {
    if (user.userName.length > 0 && user.password.length > 0) {
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
        <form className="w-[80vw] mt-[20vh] sm:w-1/2 mx-auto">
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
          
          <button
            type="submit"
            onClick={handlerLogin}
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-white">
            {buttonDisabled ? "Fill the entries first" : "Login"}
          </button>
        </form>
      </main>
    </>
  )
}

export default Login