import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <header>
                <nav class="bg-white border-gray-200 dark:bg-gray-900 h-auto sm:h-[12vh]">
                    <div class="flex flex-wrap justify-between items-center  min-w-full max-w-screen-xl p-4">
                        <div class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-slate-600'>&#60;</span><span className="font-bold">NU-</span><span className="font-bold text-blue-500">VCA</span><span className='text-slate-600'>&#47;&#62;</span></div>
                        <div class="flex items-center space-x-6 rtl:space-x-reverse">
                            <Link href="/" class="text-md  text-blue-400 dark:text-blue-500 hover:underline">Main</Link>
                            <Link href="/SignIn" class="text-md  text-blue-400 dark:text-blue-500 hover:underline">Sign In</Link>
                            <Link href="/Login" class="text-md  text-blue-400 dark:text-blue-500 hover:underline">Login</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
