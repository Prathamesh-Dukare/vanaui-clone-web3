import React from 'react'
import VanaLogoWhite from "../../assets/Vana Logo white.svg"
import fbLogo from "../../assets/Vana Logo white.svg"
import instaLogo from "../../assets/instagram-outline-icon.svg"
import twitterLogo from "../../assets/twitter-outline-icon.svg"
import tiktokLogo from "../../assets/tiktok icon.svg"

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
                    <div className="navigation-links">
                        <h3>Contact Us</h3>
                        <div className="links">
                            <a href="mailto:support@vana.xyz">support@vana.xyz</a>
                            <a href="mailto:careers@vana.xyz">careers@vana.xyz</a>
                            <a href="mailto:press@vana.xyz">press@vana.xyz</a>
                        </div>
                    </div>

                    <div className="navigation-links">
                        <h3>Company</h3>
                        <div className="links">
                            <a href="/about">About</a>
                            <a href="/careers">careers</a>
                        </div>
                    </div>

                    <div className="navigation-links">
                        <h3>Social</h3>
                        <div className="links">
                            <a href="/">
                                <img src={fbLogo} alt="fb logo" />
                                <span>Facebook</span>
                            </a>
                            <a href="/">
                                <img src={instaLogo} alt="insta logo" />
                                <span>Instagram</span>
                            </a>
                            <a href="/">
                                <img src={twitterLogo} alt="twitter logo" />
                                <span>Twitter</span>
                            </a>
                            <a href="/">
                                <img src={tiktokLogo} alt="tiktok logo" />
                                <span>TikTok</span>
                            </a>
                           
                        </div>
                    </div>
                </div>

            </div>

            <div className="policy"></div>
        </section>
    )
}