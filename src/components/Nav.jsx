import React from 'react'
import vanaLogo from "../assets/vana logo black.svg"
import instaLogo from "../assets/instagram-outline-icon.svg"
import twitterLogo from "../assets/twitter-outline-icon.svg"


export default function Nav() {
    return (
        <div className='main-nav flex justify-around items-center px-3 py-4'>
            <a href="/" className="home-link"><img src={vanaLogo} alt="vana logo black" /></a>

            <nav className="navigation flex px-3 py-2 rounded-xl gap-1 font-medium">
                <li className='list-none hover:bg-secondary px-4 font-medium py-2 hover:rounded-md hover:text-white'><a href="/about" className="nav-lin">About</a></li>
                <li className='list-none hover:bg-secondary px-4 py-2 hover:rounded-md hover:text-white'><a href="/careers" className="nav-lin">Careers</a></li>
            </nav>
            <div className="social flex gap-4">
                <a href="https://twitter.com" className="social-link"><img className='hover:opacity-80' src={twitterLogo} alt="Twitter logo" /></a>
                <a href="https://instagram.com" className="social-link"><img className='hover:opacity-80' src={instaLogo} alt="Insta logo" /></a>
            </div>

        </div>
    )
}
