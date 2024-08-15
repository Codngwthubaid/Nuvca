import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="bg-white rounded-lg shadow dark:bg-gray-800 ">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex fixed bottom-0 md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 NU-VCA™ | All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link href="#" class="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

export default Footer
