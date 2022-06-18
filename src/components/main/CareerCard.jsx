import React from 'react'
import sunAnsMountImg from "../../assets/sun & mountain.png"
import arrowImg from "../../assets/cta-wavy-arrow.svg"

export default function CareerCard() {
    return (
        <div className='career-card relative bg-accent text-white px-10 py-10 text-center mb-9' >
            <h3 className='text-4xl font-bold'>Build with Purpose</h3>
            <p className='font-normal text-lg my-4'>At Vana, we’re building for a more prosperous world — within our organization and with other organizations around the world.</p>

            <a href="/" className="open-positions font-bold text-lg bg-secondary px-9 py-3 my-4 mb-16 rounded-lg inline-block">View Open Roles <span><img className='inline' src={arrowImg} alt="arrow" /></span> </a>

            <div className="sun absolute bottom-0"><img className='w-full' src={sunAnsMountImg} alt="sun & mountain" /></div>
        </div>
    )
}
