import "./SignUp.css"
import React from 'react'
import { User } from "@/models/userModel"
import { hash } from "bcryptjs"
import { redirect } from "next/navigation"
import mongoose from "mongoose"

const SignUp = () => {

    const dbConnection = async () => {
        "use server"
        try {
            if (mongoose.connections && mongoose.connections[0].readyState) {
                return User;
            } else {
                const { connection } = await mongoose.connect(
                    process.env.MONGO_URI,
                    {
                        dbName: "SignUpData"
                    }
                );
                console.log(`Connection with DB ${connection.host}`);
            }
        } catch (error) {
            throw new Error("Error Connection with DB !!!");
        }
    };

    const SignUp = async (formData) => {
        "use server"
        const name = formData.get("name")
        const email = formData.get("email")
        const tel = formData.get("tel")
        const password = formData.get("password")

        // Checking the fields are filled or not
        if (!name || !email || !tel || !password) {
            throw new Error("Please fill all the fields");
        }

        // Connection with DB
        await dbConnection()
        const user = await User.findOne({ email })
        const hashPassword = await hash(password, 10)
        if (user) {
            throw new Error("User is already exist !!!");
        }
        else {
            User.create({
                name,
                email,
                tel,
                password: hashPassword
            })
            redirect("/Login")
        }
    }


    return (
        <>
            <main>
                <form action={SignUp} className="mt-[5vh] w-[80vw] sm:w-1/2 mx-auto">
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input name="name" type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Aliya" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input name="email" type="name" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="johnaliya@gmail.com" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                        <input name="tel" type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+91-xxxxx-xxxxx" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input name="password" type="new-password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="********" />
                    </div>

                    <div className="flex flex-col gap-y-2 sm:flex-row sm:justify-between gap-x-5">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                        <button type="submit" className="text-white flex justify-center items-center gap-x-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

export default SignUp
