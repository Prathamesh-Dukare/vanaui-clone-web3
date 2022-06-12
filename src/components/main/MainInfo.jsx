import React from 'react'
import ExploreCard from './ExploreCard'
import card1Img from "../../assets/store data illus new-p-500.png"
import card2Img from "../../assets/enhance premium value-p-500.png"
import card3Img from "../../assets/Earn more blob desktop-p-500.png"

export default function MainInfo() {
    return (
        <div>
            <div className="motivation text-center px-5 py-10">
                <h1 className='text-4xl font-semibold pb-4'>Build The New Data Ecosystem</h1>
                <p className='text-xl leading-9'>Vana’s data vault gives people ownership of their data with security, privacy, and regulation in mind. Users control their data with private keys, bringing it across the internet however they choose. Users can grant permissions to data scientists, contributing their data towards training machine learning models to create more knowledge. Unlocking data creates new value for organizations while directly paying the users who generate and own the data.</p>
            </div>

            <div className="explore space-y-8 text-center bg-accent-bg">
                <ExploreCard title="Users Reappropriate Data using a Secure Vault"
                    info="Users reappropriate their personal data to a data vault in their control. This makes their data portable across the digital world. For example, users can bring their data to a marketplace to rent and sell their data."
                    imgSrc={card1Img}
                    exploreLink="" exploreLinkText="" />

                <ExploreCard title="Data Scientists Train Models With Their Dream Datasets"
                    info="Data scientists partner with users who grant access to their data to train machine learning models. Together, they increase competition and unleash the predictive value of data that is siloed within just a few large companies today."
                    imgSrc={card2Img}
                    exploreLink="" exploreLinkText="Explore The Data" />

                <ExploreCard title="Users Augment the value of data"
                    info="Users augment the value of their data by answering questions to created labeled training datasets. These labeled datasets can be used for supervised machine learning models outside of the platform where the original data was generated. Users earn more by multiplying the value of their data through labeling."
                    imgSrc={card3Img}
                    exploreLink="" exploreLinkText="" />

            </div>
        </div>
    )
}
