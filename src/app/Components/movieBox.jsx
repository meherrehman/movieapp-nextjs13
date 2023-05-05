import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const movieBox = ({ movie }) => {

    const { id, title, type, synopsis } = movie.jawSummary

    return (
        <div className="movieBox">
            <div className="imageSection">
                <Image src={movie.jawSummary.backgroundImage.url} className='movieImage' alt={title} width={500} height={500} loading='lazy' />
            </div>
            <div className="movieTitle">{title} - {type}</div>
            <div className="movieDescription">{synopsis}</div>
            <Link className='link' href={`/movie/${id}`}>
                <button>View</button>
            </Link>
        </div>
    )
}

export default movieBox