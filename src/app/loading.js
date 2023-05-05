import Image from 'next/image'
import React from 'react'

const loading = () => {
    return (
        <div className="loaderContainer">
            <Image src="/Images/loader.gif" width={50} height={50} alt='loader' />
        </div>
    )
}

export default loading