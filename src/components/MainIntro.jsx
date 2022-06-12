import React from "react"
import heroEmailImg from "../assets/hero-email-signup.svg"

export default function MainIntro() {
    return (
        <section className="main-intro text-center">
            <h1 className="text-[40px] font-bold leading-[44px] mt-4 mb-2">Unlock The Value <br />Of Data</h1>

            <p className="text-[18px] font-normal leading-8 px-7 mb-4">Vana is a data ecosystem for users to reappropriate their data and data scientists to train machine learning models on previously siloed datasets</p>

            <div className="cta-container">
                <form className="flex flex-col items-center max-w-[408px] mx-auto space-y-[-5px]" action="#">
                    <input type="text" id="cta-email" className="w-4/5 py-[18px] border-solid border-black border-[1px] rounded-xl px-10 pl-16 outline-[0.5px] outline-blue-300" placeholder="Enter your email" required />
                    <img className="relative bottom-[2.6em] right-[32%]" src={heroEmailImg} alt="mail" />
                    <label htmlFor="cta-email" className="w-4/5"><button 
                    className=" text-white bg-[#ff7f32] py-4 px-7 w-full rounded-xl font-semibold" type="submit">Reserve My Spot</button></label>
                </form>

            </div>
        </section>
    )
}