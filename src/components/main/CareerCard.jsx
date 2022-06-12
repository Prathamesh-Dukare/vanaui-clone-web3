import React from 'react'

export default function CareerCard() {
    return (
        <div className='career-card bg-accent text-white px-10 py-10 text-center' >
            <h3 className='text-4xl font-bold'>Build with Purpose</h3>
            <p className='font-normal text-lg my-4'>At Vana, we’re building for a more prosperous world — within our organization and with other organizations around the world.</p>
            <a href="/" className="open-positions font-bold text-lg bg-secondary px-9 py-3 my-4 rounded-lg inline-block">View Open Roles</a>
        </div>
    )
}
