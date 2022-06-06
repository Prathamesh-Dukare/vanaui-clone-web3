import React from 'react'
import vanaLogo from "../assets/vana logo black.svg"

export default function Nav() {
    return (
        <div className='main-nav'>
            <a href="/" className="home-link"><img src={vanaLogo} alt="vana logo black" /></a>

            <nav className="navigation">
                <li><a href="/about" className="nav-lin">About</a></li>
                <li><a href="/careers" className="nav-lin">Careers</a></li>
            </nav>

            <div className="social">
                <a href="https://twitter.com" className="social-link"><img src="" alt="Twitter logo" /></a>
                <a href="https://instagram.com" className="social-link"><img src="" alt="Insta logo" /></a>
            </div>

        </div>
    )
}
