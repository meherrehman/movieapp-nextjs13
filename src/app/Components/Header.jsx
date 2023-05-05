import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="headerContainer">
            <h1>Netflix</h1>
            <div>
                <Link href="/" className='link'>Home</Link>
                <Link href="/about" className='link'>About</Link>
                <Link href="/movie" className='link'>Movies</Link>
                <Link href="/contact" className='link'>Contact</Link>
            </div>
        </div>
    )
}

export default Header