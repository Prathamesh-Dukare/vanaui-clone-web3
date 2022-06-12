import React from "react"
import heroEmailImg from "../assets/hero-email-signup.svg"
import checkImg from "../assets/CircleWavyCheck.svg"
import orgImgMobile from "../assets/hero mobile illustration new.png"
import orgImg_500 from "../assets/Vana vibe shift illtration new-p-500.png"

export default function MainIntro() {
    return (
        <>
            <section className="main-intro text-center">
                <h1 className="text-[40px] font-bold leading-[44px] mt-4 mb-2">Unlock The Value <br />Of Data</h1>

                <p className="text-[18px] font-normal leading-8 px-7 mb-4">Vana is a data ecosystem for users to reappropriate their data and data scientists to train machine learning models on previously siloed datasets</p>

                <div className="cta-container">
                    <form className="flex flex-col items-center max-w-[408px] mx-auto space-y-[-5px]" action="#">
                        <input type="text" id="cta-email" className="w-4/5 py-[18px] border-solid border-black border-[1px] rounded-xl px-10 pl-16 outline-[0.5px] outline-blue-300" placeholder="Enter your email" required />
                        <img className="relative bottom-[2.6em] right-[32%]" src={heroEmailImg} alt="mail" />
                        <label htmlFor="cta-email" className="w-4/5"><button
                            className=" text-white bg-secondary py-4 px-7 w-full rounded-xl font-semibold" type="submit">Reserve My Spot</button></label>
                    </form>
                    <div className="stats-info flex items-center justify-center mt-3">
                        <img className="w-6 mx-2" src={checkImg} alt="Check mark" />
                        <p className="text-sm">15000+ people reserved their spot</p>
                    </div>
                </div>

                <div className="organization px-3 py-6">
                    <img className="mobile:hidden ww-full" src={orgImgMobile} alt="Organization and data scientists" />
                    <img className="ww-full" src={orgImg_500} alt="Organization and data scientists" />
                </div>
            </section>
        </>
    )
}