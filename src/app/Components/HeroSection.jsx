import Image from 'next/image'
import React from 'react'

const HeroSection = ({ title, imgUrl }) => {
    return (
        <div className="heroSectionContainer">
            <Image src={imgUrl} alt='pageImage' width={500} height={500} />
            <h1>Netflix - {title}</h1>
        </div>
    )
}

export default HeroSection