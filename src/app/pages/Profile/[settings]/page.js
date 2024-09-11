import React from 'react'

const page = ({params}) => {
    return (
        <div className='text-black'>
            I'm inner profile {params.settings}
        </div>
    )
}

export default page
