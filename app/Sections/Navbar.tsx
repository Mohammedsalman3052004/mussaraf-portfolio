import React from 'react'
import '../Styles/navbar.css'
import Image from 'next/image'
import navbarLogo from "@/public/Images/nav-logo-ellipse-1.png"
import Instagram from "@/public/Icons/instagram.svg"
import Facebook from "@/public/Icons/facebook.svg"
import LinkedIN from "@/public/Icons/linkedIn.svg"
import Youtube from "@/public/Icons/youtube.svg"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='nav-logo-wrapper'>
                    <div className='nav-logo-title'>
                       musharraff
                    </div>
                    <div className='nav-logo-bottom'>
                        <div className='nav-logo-subtitle'>
                            maliq
                        </div>
                        <div className='nav-logo-image'>
                            <Image src={navbarLogo} alt='Navbar Logo' height={28} width={28} />
                        </div>
                    </div>
                </div>
                <div className='nav-links-wrapper'>
                    <a href="#home" className='nav-link active'>Home</a>
                    <a href="#about" className='nav-link'>About</a>
                    <a href="#head-photos" className='nav-link'>Head photos</a>
                    <a href="#monologue" className='nav-link'>Monologue</a>
                    <a href="#look-book" className='nav-link'>Look book</a>
                    <a href="#contact" className='nav-link'>Contact</a>
                </div>
                <div className='nav-icons-wrapper'>
                    <Image src={Instagram} alt='Navbar Logo' height={18} width={18} />
                    <Image src={Facebook} alt='Navbar Logo' height={18} width={18} />
                    <Image src={LinkedIN} alt='Navbar Logo' height={18} width={18} />
                    <Image src={Youtube} alt='Navbar Logo' height={18} width={18} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
