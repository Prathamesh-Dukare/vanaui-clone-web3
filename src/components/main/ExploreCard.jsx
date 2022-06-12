import React from 'react'

export default function ExploreCard(props) {
    const { title, info, imgSrc, exploreLink, exploreLinkText } = props
    return (
        <div className="explore-card px-8">
            <div className="texual-info">
                <h2 className='text-2xl font-semibold '>{title}</h2>
                <p className='text-[#1e2f39]' >{info}</p>

               {exploreLinkText!=="" && <a href={exploreLink} className="border-[1px] text-secondary-light px-3 py-2 mb-7 rounded-lg inline-block my-2 hover:bg-[#ffebcd] font-medium border-secondary">{exploreLinkText}</a>}
            </div>
            <div>
                <img src={imgSrc} alt="Img" />
            </div>
        </div>
    )
}
