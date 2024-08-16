"use client"
import React from 'react'
import Image from "next/image";
import picFirst from "../public/img/picFirst.jpg"
import picSecond from "../public/img/picSecond.jpg"
import picThird from "../public/img/picThird.jpg"
import picFourth from "../public/img/picFourth.jpg"
const MainPicture = () => {
    return (
        <>
            <div className="w-10/12 lg:w-[40vw] flex justify-center items-center flex-col gap-y-3">
                <div className='flex gap-x-2'>
                    <Image
                        className='
                        rounded-2xl
                        sm:w-[130px]'
                        src={picFirst}
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        className='
                        rounded-lg
                        sm:w-[230px]'
                        src={picSecond}
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
                        src={picFourth}
                        width={200}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image
                        className='
                        rounded-2xl
                        sm:w-[130px]'
                        src={picThird}
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
