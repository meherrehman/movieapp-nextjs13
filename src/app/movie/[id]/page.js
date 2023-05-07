import Image from 'next/image';
import React from 'react'

const page = async ({ params }) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();

    const { title, type, synopsis, backgroundImage } = data[0].details

    return (
        <div className='movieDetail'>
            <div className="imageContainer">
                <Image src={backgroundImage.url} className='movieImage' alt={title} width={500} height={500} />
            </div>
            <div className="movieTitle">{title}</div>
            <div className="movieCategory">Type - {type}</div>
            <div className="movieDescription">{synopsis}</div>
        </div>
    )
}

export default page