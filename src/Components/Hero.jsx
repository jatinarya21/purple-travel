import React, { useState } from 'react'
import Navbar_logo from '../Assets/Images/svg/navbar-logo.svg'
import hero_mountain_img from '../Assets/Images/webp/hero-mountain-img.webp'
import hero_waterfall_mountain from '../Assets/Images/webp/hero-waterfall-mountain.webp'
import hero_waterfall from '../Assets/Images/webp/hero-waterfall.webp'
import hero_lady_in_boat from '../Assets/Images/webp/hero-lady-in-boat.webp'
import hero_tree_rocky_mountains from '../Assets/Images/webp/hero-tree-rocky-mountains.webp'
import hero_couple_near_river from '../Assets/Images/webp/hero-couple-near-river.webp'
import hero_top_mountain_forest from '../Assets/Images/webp/hero-top-mountain-forest.webp'
import { HeaderDottedAeroplane, HeaderPinkEllipse, PinkStar, PurpleStar } from './common/Icons'

const HeroSection = () => {

    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow_hidden");
    }
    else {
        document.body.classList.remove("overflow_hidden");
    }

    return (
        <div className='relative'>
            <span className='absolute left-0'>
                <HeaderPinkEllipse />
            </span>
            {/* nav bar  */}
            <nav className='container mx-auto px-3 lg:px-20.5 2xl:px-44'>
                <div className='flex items-center justify-between py-5'>
                    {/* navbar logo */}
                    <a className='z-[11] relative flex items-center font-jakarta text-2xl font-bold gap-3' href="#">
                        <img className='' width={40} height={40} src={Navbar_logo} alt="NavBar-Logo" />
                        Travel
                    </a>
                    {/* nav links */}
                    <div className='flex lg:gap-12 xl:gap-32 2xl:gap-0 justify-between 2xl:w-[62%]'>
                        <ul className={`${show ? "left_0" : ""} flex flex-col items-center justify-center z-10 w-full bg-white text-black fixed top-0 -left-full min-h-screen  gap-6 transition-all duration-500 lg:flex-row lg:bg-inherit lg:text-black lg:static lg:w-auto lg:min-h-full `}>
                            <li><a className='nav-links' onClick={() => setShow(!show)} href="#home">Home</a></li>
                            <li><a className='nav-links' onClick={() => setShow(!show)} href="#destinations">Destinations</a></li>
                            <li><a className='nav-links' onClick={() => setShow(!show)} href="#WhyChooseUs">Why choose us</a></li>
                            <li><a className='nav-links' onClick={() => setShow(!show)} href="#blog">Blog</a></li>
                            <li><a className='nav-links' onClick={() => setShow(!show)} href="#testimonials">Testimonials</a></li>
                            <a className='font-jakarta font-bold text-base leading-5 py-3.5 px-7.5 bg-purple_custom border-2 transition-all border-[#872BFF]  hover:bg-transparent hover:text-[#872BFF] rounded-3xl text-white lg:hidden' href="#">Sign Up</a>
                        </ul>
                        {/* nav bar button */}
                        <a onClick={() => setShow(!show)} className='z-10  lg:hidden ' href="#">{show ? <div className=''>
                            <span className='bg-black h-1.1 w-6 flex mt-0 rotate-[60deg] transition-all'></span>
                            <span className='bg-black h-1.1 w-6 flex mt-0 rotate-[120deg] transition-all'></span>
                        </div> : <div> <span className='bg-black h-1 w-6 flex mt-1 transition-all' ></span>
                            <span className='bg-black h-1.1 w-6  flex mt-1 transition-all' ></span>
                            <span className='bg-black h-1.1 w-6  flex mt-1 transition-all' ></span></div>}</a>
                        <a className='font-jakarta font-bold text-base leading-5 py-[13px] px-7 bg-purple_custom border-2 transition-all border-[#872BFF] rounded-3xl text-white hidden lg:block hover:bg-transparent hover:text-[#872BFF]' href="#">Sign Up</a>
                    </div>
                </div>
            </nav>
            {/* hero section */}
            <div id='home' className='pt-9'>
                <div className=" container mx-auto px-3 2xl:px-28 relative">
                    <div className='absolute right-0 -top-20  lg:right-5 lg:-top-8 xl:right-24 xl:-top-12'>
                        <HeaderDottedAeroplane />
                    </div>
                    <div className='flex  justify-center '>
                        <h1 className='font-jakarta font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-center xl:!leading-[80.6px] w-[80%] sm:w-[50%] lg:w-[50%] xl:w-[57%]'>From Southeast Asia <span className='text-secondary'>To The World</span></h1>
                    </div>
                    <div className="flex flex-wrap gap-5 xl:gap-0 justify-center items-center pt-12 relative">
                        <span className='absolute right-0 top-0'><PurpleStar /></span>
                        <span className='absolute -left-7 bottom-10'><PinkStar /></span>
                        <div className='w-5/12 sm:w-3/12 md:w-1.5/12 xl:w-2/12 flex justify-end'>
                            <img width={171} height={186} className='rounded-lg' src={hero_mountain_img} alt="mountains-img" />
                        </div>
                        <div className='w-5/12 sm:w-3/12 md:w-1.5/12 xl:w-2/12 hidden sm:block'>
                            <div className='flex flex-col items-end xl:mr-2 gap-4 xl:gap-9'>
                                <img width={171} height={186} className='rounded-lg' src={hero_waterfall_mountain} alt="waterfall-and-mountains" />
                                <img width={171} height={186} className='rounded-lg' src={hero_waterfall} alt="waterfall-img" />
                            </div>
                        </div>
                        <div className='w-5/12 sm:w-3/12 md:w-3.5/12 xl:w-4/12 relative flex justify-center'>
                            <div className='bg-[#872BFF] rounded-full absolute -top-8 left-0   2xl:-top-8   2xl:left-5 overflow-hidden'>
                                <span className='absolute z-5 left-[26px] top-[15px] sm:left-[37px]  sm:top-[37px]'><svg className='w-[17px]  sm:w-[26px]' width="26" height="30" viewBox="0 0 26 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6639 2.52417C14.6639 1.59607 13.9116 0.843697 12.9835 0.843697C12.0554 0.843697 11.303 1.59607 11.303 2.52417L14.6639 2.52417ZM11.7952 37.934C12.4515 38.5903 13.5155 38.5903 14.1717 37.934L24.8662 27.2396C25.5225 26.5833 25.5225 25.5193 24.8662 24.863C24.2099 24.2067 23.1459 24.2067 22.4896 24.863L12.9835 34.3692L3.47727 24.863C2.82101 24.2068 1.75699 24.2068 1.10073 24.863C0.44446 25.5193 0.44446 26.5833 1.10073 27.2396L11.7952 37.934ZM11.303 2.52417L11.303 36.7458L14.6639 36.7458L14.6639 2.52417L11.303 2.52417Z" fill="#FFFEFE" />
                                </svg>
                                </span>
                                <svg id="rotatingText" className='fill-white w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]' viewBox="0 0 200 200" width="140" height="140">
                                    <defs>
                                        <path id="circle" d="M 100, 100
                m -75, 0
                a 75, 75 0 0, 0 150, 0
                a 75, 75 0 0, 0 -150, 0
                ">
                                        </path>
                                    </defs>

                                    <text width="400">
                                        <textPath alignment-baseline="middle" href="#circle" class="text-lg tracking-[5px] font-semibold font-inter">
                                            TRAVELING FOR THE FUTURE MAKE
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <img className='rounded-3xl' width={370} height={466} src={hero_lady_in_boat} alt="lady-in-boat" />
                        </div>
                        <div className='w-5/12 sm:w-7/12 md:w-1.5/12 xl:w-2/12 sm:hidden  md:block'>
                            <div className='flex flex-row md:flex-col justify-around xl:ml-2  gap-4 xl:gap-9'>
                                <img width={171} height={186} className='rounded-lg' src={hero_tree_rocky_mountains} alt="tree-under-rocky-mountains" />
                                <img width={171} height={186} className='rounded-lg' src={hero_couple_near_river} alt="couple-near-river-mountains" />
                            </div>
                        </div>
                        <div className='w-5/12 sm:w-4/12 md:w-1.5/12 xl:w-2/12 hidden md:block'>
                            <img width={171} height={186} className='rounded-lg' src={hero_top_mountain_forest} alt="top-mountain-forest" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection