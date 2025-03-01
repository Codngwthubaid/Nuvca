import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#1C1F2E] fixed z-50 w-full px-6 py-4 lg:px-10'>
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
        <p className='text-2xl font-extrabold text-white max-md:hidden'>NUVCA</p>
      </Link>
      <div className='flex justify-between gap-5 items-center'>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar