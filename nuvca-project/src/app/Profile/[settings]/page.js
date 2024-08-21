import React from 'react'

const page = ({params}) => {
    return (
        <div>
            I'm inner profile {params.settings}
        </div>
    )
}

export default page
