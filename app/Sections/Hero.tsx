import React from 'react'
import '../Styles/hero.css'
import Image from 'next/image'
import TopLeft from "@/public/Icons/top-left.svg"
import TopRight from "@/public/Icons/top-right.svg"
import BottomLeft from "@/public/Icons/bottom-left.svg"
import BottomRight from "@/public/Icons/bottom-right.svg"
import Image1 from "@/public/Images/Image1.png"
import Image2 from "@/public/Images/Image2.png"
import Image3 from "@/public/Images/Image3.png"
import Image4 from "@/public/Images/Image4.png"
import Image5 from "@/public/Images/Image5.png"

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-container">
                <div className='hero-content-wrapper'>
                    <Image src={TopLeft} alt='Hero Icon' height={24} width={24} className='hero-icon top-left' />
                    <Image src={TopRight} alt='Hero Icon' height={24} width={24} className='hero-icon top-right' />
                    <Image src={BottomLeft} alt='Hero Icon' height={24} width={24} className='hero-icon bottom-left' />
                    <Image src={BottomRight} alt='Hero Icon' height={24} width={24} className='hero-icon bottom-right' />
                    <div className='hero-title-wrapper'>
                        <h1 className='hero-title'>Hey, <br />I'm <span className=''>Musharraff Maliq</span></h1>
                    </div>
                    <div className='hero-subtitle-wrapper'>
                        <p className='hero-subtitle'>A Professional Actor Committed To Delivering Compelling Performances. I Bring Depth And Technical Skill To Every Role, Ensuring Each Performance Resonates With Audiences And Serves The Creative Vision.</p>
                    </div>
                </div>
                <div className='hero-image-wrapper'>
                    <Image src={Image1} alt='Hero Image' height={440} width={322} className='hero-card-image card1' />
                    <Image src={Image2} alt='Hero Image' height={440} width={322} className='hero-card-image card2' />
                    <Image src={Image3} alt='Hero Image' height={440} width={322} className='hero-card-image card3' />
                    <Image src={Image4} alt='Hero Image' height={440} width={322} className='hero-card-image card4' />
                    <Image src={Image5} alt='Hero Image' height={440} width={322} className='hero-card-image card5' />
                </div>

            </div>
            <div className='hero-button-wrapper'>
                <div className='hero-btn'>
                    <p className='hero-btn-text'>GET IN TOUCH</p>
                </div>
                <div className='hero-btn-filled'>
                    <p className='hero-filled-btn'>Download Resume</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
