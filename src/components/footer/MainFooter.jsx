import React from 'react'
import VanaLogoWhite from "../../assets/Vana Logo white.svg"

export default function MainFooter() {
    return (
        <section className="footer bg-accent text-white p-10">
            <div className="sub-footer space-y-10">

                <div className="join-cta text-center space-y-3">
                    <div className="hero-img w-11 mx-auto"><a href="/"><img className='w-full' src={VanaLogoWhite} alt="vana logo" /></a></div>
                    <p className="join-info">Join our newsletter to stay up to date on features and releases.</p>

                    <form className="flex flex-col items-center w-full space-y-3 mx-auto" action="#">
                        <input type="email" id="cta-join-email" className="w-4/5 py-[18px] text-black border-solid border-black border-[1px] rounded-xl px-5 outline-[0.5px] outline-blue-300" placeholder="Enter your email" required />

                        <label htmlFor="cta-join-email" className="w-4/5"><button
                            className="text-white bg-secondary py-4 px-7 w-full rounded-xl font-bold" type="submit">Join Newsletter</button></label>
                    </form>
                    <p className="small-privacy-text text-xs text-accent-light">By subscribing you agree to with our privacy policy and provide consent to receive updates from our company.</p>
                </div>

                <div className="footer-navigation">
h
                </div>

            </div>

            <div className="policy"></div>
        </section>
    )
}