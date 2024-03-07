import React, { useState } from 'react'
import Navbar_logo from '../Assets/Images/svg/navbar-logo.svg'

const HeroSection = () => {

    const [show, setShow] = useState(false);


    return (
        <div>
            {/* nav bar  */}
            <nav className='custom-container container mx-auto px-36'>
                <div className='flex items-center justify-between pt-5'>
                    {/* navbar logo */}
                    <a href="#">
                        <img className='z-1' width={40} height={40} src={Navbar_logo} alt="NavBar-Logo" />
                    </a>
                    {/* nav links */}
                    <ul className={`${show ? "" : ""} flex flex-col items-center justify-center w-full bg-linear-gradient text-white fixed top-0 left-0 min-h-screen  gap-6 lg:flex-row lg:bg-none lg:text-black lg:static lg:w-auto lg:min-h-full `}>
                        <li><a className='nav-links' href="#">Home</a></li>
                        <li><a className='nav-links' href="#">Destinations</a></li>
                        <li><a className='nav-links' href="#">Why choose us</a></li>
                        <li><a className='nav-links' href="#">Blog</a></li>
                        <li><a className='nav-links' href="#">Testimonials</a></li>
                    </ul>
                    {/* nav bar button */}
                    <a className='font-jakarta font-bold text-base leading-5 py-3.5 px-7.5 bg-purple_custom rounded-3xl text-white' href="#">Sign Up</a>
                </div>
            </nav>
        </div>
    )
}

export default HeroSection