"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname()

    return (
        <section className='sticky top-0 left-0 h-screen w-fit flex flex-col justify-between bg-[#1C1F2E] p-6 pt-28 text-white max-sm:hidden lg:w-[265px]'>
            <div className='flex flex-1 flex-col gap-6'>
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn("flex flex-1 justify-start h-fit items-center gap-3 px-4", { 'bg-blue-900 rounded-lg': isActive })}
                        >
                            <Image
                                src={link.imageUrl}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Sidebar