"use client"
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const MobileNav = () => {

    const pathname = usePathname()

    return (
        <section className='w-full max-w-[265px] '>
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        className='cursor-pointer sm:hidden'
                        src={"/icons/hamburger.svg"}
                        alt='hamburger'
                        width={24}
                        height={24}
                    />
                </SheetTrigger>
                <SheetContent side='left' className='border-none bg-gray-900 p-4'>
                    <SheetHeader>
                        <SheetTitle>
                            <Link
                                href={"/"}
                                className='flex items-center gap-1'
                            >
                                <Image
                                    src={"/icons/logo.svg"}
                                    alt={"Logo"}
                                    width={40}
                                    height={40}
                                />
                                <p className='text-2xl font-extrabold text-white '>NUVCA</p>
                            </Link>
                        </SheetTitle>

                        <div className='flex flex-col justify-between overflow-y-auto h-[calc(100vh-72px)]'>
                            <SheetClose asChild>
                                <section className='flex h-fit flex-col gap-6 text-white pt-10'>
                                    {sidebarLinks.map((link) => {
                                        const isActive = pathname === link.route
                                        return (
                                            <SheetClose asChild key={link.route}>
                                                <Link
                                                    href={link.route}
                                                    key={link.label}
                                                    className={cn("flex flex-1 justify-start items-center gap-3 p-4", { 'bg-blue-900 rounded-lg': isActive })}
                                                >
                                                    <Image
                                                        src={link.imageUrl}
                                                        alt={link.label}
                                                        width={24}
                                                        height={24}
                                                    />
                                                    <p className='font-semibold text-xl'>{link.label}</p>
                                                </Link>
                                            </SheetClose>
                                        )
                                    })}
                                </section>
                            </SheetClose>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav