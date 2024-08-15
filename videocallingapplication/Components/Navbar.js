import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <header>
                <nav class="bg-white border-gray-200 dark:bg-gray-900">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <div class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NU - VCA</div>
                        <div class="flex items-center space-x-6 rtl:space-x-reverse">
                            <Link href="/SignIn" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Sign In</Link>
                            <Link href="/Login" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
