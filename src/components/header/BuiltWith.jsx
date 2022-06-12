import React from 'react'
import celoIcon from "../../assets/Celo logo.svg"
import metaMaskIcon from "../../assets/Metamask logo medium.svg"
import IPFSIcon from "../../assets/IPFS logo.svg"

export default function BuiltWith() {
    return (
        <div className="built-with bg-accent flex flex-col py-8 space-y-4 items-center justify-center mobile:rounded-3xl mobile:mx-4 mobile:my-3">
            <h2 className="mobile:hidden text-white font-semibold text-xl">BUILT WITH</h2>
            <h2 className="hidden mobile:block text-white font-semibold text-xl">PARTERNERSHIPS</h2>
            <div className="service">
                <img src={celoIcon} alt="Celo icon" />
            </div>
            <div className="service">
                <img src={metaMaskIcon} alt="Meta Mask icon" />
            </div>
            <div className="service">
                <img src={IPFSIcon} alt="IPFS icon" />
            </div>
        </div>
    )
}
