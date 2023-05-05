import React from 'react'
import MovieBox from '../Components/movieBox';

const page = async () => {

    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '91564d1c48msh0a30e163cc73d73p15ce91jsn5a66dcc317f6',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();


    return (
        <>
            <div className="displayMoviesContainer">
                <h1>Movies</h1>
                <div className='showMovies'>
                    {data.titles.map((item, index) => (
                        <MovieBox key={index} movie={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default page