import React from 'react'

const page = ({params}) => {
    return (
        <div className='text-black'>
            I&apos;m inner profile {params.settings}
        </div>
    )
}

export default page
