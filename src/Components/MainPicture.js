"use client"
import React from 'react'
import Image from "next/image";
const MainPicture = () => {
    return (
        <>
            <div className="w-10/12 lg:w-[40vw] flex justify-center items-center flex-col gap-y-3">
                <div className='flex gap-x-2'>
                    <Image
                        className='
                        rounded-2xl
                        sm:w-[130px]'
                        src="/img/picFirst.jpg"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        className='
                        rounded-lg
                        sm:w-[230px]'
                        src="/img/picSecond.jpg"
                        width={200}
                        height={100}
                        alt="Picture of the author"
                    />
                </div>
                <div className='flex gap-x-2'>
                    <Image
                        className='
                        rounded-lg
                        sm:w-[230px]'
                        src="/img/picFourth.jpg"
                        width={200}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        className='
                        rounded-2xl
                        sm:w-[130px]'
                        src="/img/picThird.jpg"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </>
    )
}

export default MainPicture
