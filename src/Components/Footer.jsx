import React from 'react'
import FooterCompanyLogo from '../Assets/Images/svg/navbar-logo.svg'
import SpecialOffersMailCard from './SpecialOffersMailCard'
import { FooterCall, FooterFacebook, FooterInstagram, FooterLinkedin, FooterLocation, FooterMail, FooterTwitter } from './common/Icons'

const FooterSection = () => {
    const year = new Date().getFullYear();
    return (
        <div >
            <div className='bg-footer bg-no-repeat bg-center bg-cover pb-[52px] ' >
                <SpecialOffersMailCard />
                <div className="container mx-auto px-3 lg:px-20.5 2xl:px-44 -mt-[80px] ">
                    <div className="flex flex-wrap md:justify-center  lg:justify-between">
                        <div className='lg:w-[40.5%] flex flex-col justify-center md:items-center lg:items-start'>
                            <div className='flex flex-col justify-center items-start md:items-center lg:items-start'>
                                <span className='flex items-center  gap-5'>
                                    <a href="#"><img width={70} height={70} src={FooterCompanyLogo} alt="Company-logo" /></a>
                                    <p className='font-jakarta font-bold text-[42px] text-white '>Travel</p>
                                </span>
                                <p className='text-white font-inter text-base font-normal pt-3 md:text-center lg:text-start w-[90%] md:w-[70%] lg:w-full opacity-80 '>Enim pretium tincidunt sit mattis rhoncus aliquam. Nunc massa id euismod amet. Enim eu cras dolor vitae sit euismod. Elementum fringilla neque auctor elementum vestibulum et adipiscing. </p>
                            </div>
                            <div className='mt-[18px]'>
                                <p className='text-white font-opensans font-semibold text-base md:text-center lg:text-start uppercase'>Follow us</p>
                                <div className='flex items-center  gap-3.5 mt-3.5'>
                                    <a href="#" className='transition-all duration-500 hover:-translate-y-1'><FooterLinkedin /> </a>
                                    <a href="#" className='transition-all duration-500 hover:-translate-y-1' ><FooterInstagram /></a>
                                    <a href="#" className='transition-all duration-500 hover:-translate-y-1' > <FooterFacebook /> </a>
                                    <a href="#" className='transition-all duration-500 hover:-translate-y-1' > <FooterTwitter /> </a>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-5/12 flex flex-col justify-center  lg:justify-end sm:flex-row mt-5  '>
                            <div className="sm:w-5/12">
                                <h3 className='text-white font-jakarta text-base font-bold '>Main Links</h3>
                                <ul className='pt-1 md:pt-4 flex flex-col gap-2'>
                                    <li><a className='footer-links opacity-80' href="#">Home</a></li>
                                    <li><a className='footer-links opacity-80' href="#">Destinations</a></li>
                                    <li><a className='footer-links opacity-80' href="#">Why choose us</a></li>
                                    <li><a className='footer-links opacity-80' href="#">Blog</a></li>
                                    <li><a className='footer-links opacity-80' href="#">Testimonials</a></li>
                                </ul>
                            </div>
                            <div className="  sm:w-6/12 pt-3 md:pt-0">
                                <h3 className='text-white font-jakarta text-base font-bold '>Contacts</h3>
                                <ul className='pt-1 md:pt-4 flex flex-col gap-3.5'>
                                    <li className='flex gap-4 items-center'> <FooterCall />  <a className='footer-links opacity-80' href="#">+44 7496 688 516</a></li>
                                    <li className='flex gap-4 items-center'> <FooterMail />  <a className='footer-links opacity-80' href="#">jean@Travel.com</a></li>
                                    <li className='flex gap-4 items-center'> <FooterLocation /><a className='footer-links opacity-80' href="#">5 Elm St, Danvers, MA 01923, United States</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative bg-black py-6 after:absolute after:bg-[#872BFF] after:opacity-80 after:h-1 after:w-full after:-top-2' >
                <div className="container mx-auto px-3 items-center  lg:px-20.5 2xl:px-44 flex flex-col sm:flex-row justify-between ">
                    <a href='#' className='text-white font-inter text-sm opacity-80'>Terms & Conditions/ Privacy Policy</a>
                    <p className='text-white font-inter text-sm'>© {year} TRAVEL . All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterSection