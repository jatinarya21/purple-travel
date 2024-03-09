import React from 'react'
import FooterCompanyLogo from '../Assets/Images/svg/navbar-logo.svg'
import SpecialOffersMailCard from './SpecialOffersMailCard'
import LinkedId from '../Assets/Images/webp/Footer-linkedIn-Icon.webp'
import Instagram from '../Assets/Images/webp/Footer-instagram-Icon.webp'
import Facebook from '../Assets/Images/webp/Footer-facebook-icon.webp'
import Twitter from '../Assets/Images/webp/Footer-twitter-icon.webp'
import PhoneIcon from '../Assets/Images/svg/phone-call-icon.svg'
import MailIcon from '../Assets/Images/svg/mail-icon.svg'
import LandmarkIcon from '../Assets/Images/svg/location-landmark-icon.svg'

const FooterSection = () => {
    return (
        <div >
            <div className='bg-footer bg-no-repeat bg-center bg-cover pb-[52px] ' >
                <SpecialOffersMailCard />
                <div className="container mx-auto px-3 lg:px-20.5 -mt-[80px] ">
                    <div className="flex flex-wrap md:justify-center  lg:justify-between">
                        <div className='lg:w-4/12 flex flex-col justify-center md:items-center lg:items-start'>
                            <div className='flex flex-col justify-center items-start md:items-center lg:items-start'>
                                <span className='flex items-center  gap-5'>
                                    <a href="#"><img width={70} height={70} src={FooterCompanyLogo} alt="Company-logo" /></a>
                                    <p className='font-jakarta font-bold text-[42px] text-white '>Travel</p>
                                </span>
                                <p className='text-white font-inter text-base font-normal pt-3 md:text-center lg:text-start'>Enim pretium tincidunt sit mattis rhoncus aliquam. Nunc massa id euismod amet. Enim eu cras dolor vitae sit euismod. Elementum fringilla neque auctor elementum vestibulum et adipiscing. </p>
                            </div>
                            <div className='mt-[18px]'>
                                <p className='text-white font-opensans font-semibold text-base md:text-center lg:text-start'>Follow us</p>
                                <div className='flex items-center  gap-3.5 mt-3.5'>
                                    <a href="#"><img width={30} height={30} className='transition-all duration-500 hover:-translate-y-1' src={LinkedId} alt="LinkedIn" /> </a>
                                    <a href="#"><img width={30} height={30} className='transition-all duration-500 hover:-translate-y-1' src={Instagram} alt="Instagram" /> </a>
                                    <a href="#"><img width={30} height={30} className='transition-all duration-500 hover:-translate-y-1' src={Facebook} alt="Facebook" /> </a>
                                    <a href="#"><img width={30} height={30} className='transition-all duration-500 hover:-translate-y-1' src={Twitter} alt="Twitter" /> </a>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-4/12 flex flex-col justify-center md:items-center sm:flex-row mt-5  '>
                            <div className="sm:w-6/12">
                                <h3 className='text-white font-jakarta text-base font-bold '>Main Links</h3>
                                <ul className='pt-4 flex flex-col gap-2'>
                                    <li><a className='footer-links' href="#">Home</a></li>
                                    <li><a className='footer-links' href="#">Destinations</a></li>
                                    <li><a className='footer-links' href="#">Why choose us</a></li>
                                    <li><a className='footer-links' href="#">Blog</a></li>
                                    <li><a className='footer-links' href="#">Testimonials</a></li>
                                </ul>
                            </div>
                            <div className="  sm:w-6/12 ">
                                <h3 className='text-white font-jakarta text-base font-bold '>Contacts</h3>
                                <ul className='pt-4 flex flex-col gap-2'>
                                    <li className='flex gap-4'> <img src={PhoneIcon} alt="PhoneIcon" /> <a className='footer-links' href="#">+44 7496 688 516</a></li>
                                    <li className='flex gap-4'> <img src={MailIcon} alt="MailIcon" /> <a className='footer-links' href="#">jean@Travel.com</a></li>
                                    <li className='flex gap-4'> <img src={LandmarkIcon} alt="LandmarkICon" /> <a className='footer-links' href="#">5 Elm St, Danvers, MA 01923, United States</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative bg-black py-6 after:absolute after:bg-[#872BFF] after:opacity-80 after:h-1 after:w-full after:-top-2' >
                <div className="container mx-auto px-3 items-center  lg:px-20.5 flex flex-col sm:flex-row justify-between ">
                    <p className='text-white font-inter text-sm'>Terms & Conditions/ Privacy Policy</p>
                    <p className='text-white font-inter text-sm'>© 2024 TRAVEL . All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterSection