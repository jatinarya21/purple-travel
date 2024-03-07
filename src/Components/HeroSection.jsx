import React, { useState } from 'react'
import Navbar_logo from '../Assets/Images/svg/navbar-logo.svg'
import hero_mountain_img from '../Assets/Images/webp/hero-mountain-img.webp'
import hero_waterfall_mountain from '../Assets/Images/webp/hero-waterfall-mountain.webp'
import hero_waterfall from '../Assets/Images/webp/hero-waterfall.webp'
import hero_lady_in_boat from '../Assets/Images/webp/hero-lady-in-boat.webp'
import hero_tree_rocky_mountains from '../Assets/Images/webp/hero-tree-rocky-mountains.webp'
import hero_couple_near_river from '../Assets/Images/webp/hero-couple-near-river.webp'
import hero_top_mountain_forest from '../Assets/Images/webp/hero-top-mountain-forest.webp'
import hero_lady_boat_ellipse from '../Assets/Images/webp/hero-lady-boat-ellipse-future-text.png'
import aeroplane_with_dotted_lines from '../Assets/Images/svg/hero-aeroplane-with-dotted-lines.svg'
import purple_star from '../Assets/Images/svg/purple-star.svg'
import pink_star from '../Assets/Images/svg/pink-star.svg'

const HeroSection = () => {

    const [show, setShow] = useState(false);


    return (
        <div>
            {/* nav bar  */}
            <nav className='container mx-auto px-3 lg:px-20.5'>
                <div className='flex items-center justify-between py-5'>
                    {/* navbar logo */}
                    <a className='z-[11] relative' href="#">
                        <img className='' width={40} height={40} src={Navbar_logo} alt="NavBar-Logo" />
                    </a>
                    {/* nav links */}
                    <ul className={`${show ? "left-0" : ""} flex flex-col items-center justify-center z-10 w-full bg-white text-black fixed top-0 -left-full min-h-screen  gap-6 transition-all duration-500 md:flex-row md:bg-inherit md:text-black md:static md:w-auto md:min-h-full `}>
                        <li><a className='nav-links' href="#">Home</a></li>
                        <li><a className='nav-links' href="#">Destinations</a></li>
                        <li><a className='nav-links' href="#">Why choose us</a></li>
                        <li><a className='nav-links' href="#">Blog</a></li>
                        <li><a className='nav-links' href="#">Testimonials</a></li>
                        <a className='font-jakarta font-bold text-base leading-5 py-3.5 px-7.5 bg-purple_custom rounded-3xl text-white lg:hidden' href="#">Sign Up</a>
                    </ul>
                    {/* nav bar button */}
                    <a onClick={() => setShow(!show)} className='z-10  md:hidden ' href="#">{show ? <div className=''>
                        <span className='bg-black h-1.1 w-6 flex mt-0 rotate-[60deg] transition-all'></span>
                        <span className='bg-black h-1.1 w-6 flex mt-0 rotate-[120deg] transition-all'></span>
                    </div> : <div> <span className='bg-black h-1 w-6 flex mt-1 transition-all' ></span>
                        <span className='bg-black h-1.1 w-6  flex mt-1 transition-all' ></span>
                        <span className='bg-black h-1.1 w-6  flex mt-1 transition-all' ></span></div>}</a>
                    <a className='font-jakarta font-bold text-base leading-5 py-3.5 px-7.5 bg-purple_custom rounded-3xl text-white hidden lg:block' href="#">Sign Up</a>
                </div>
            </nav>
            {/* hero section */}
            <div className='pt-9'>
                <div className=" container mx-auto px-3 relative">
                    <img src={aeroplane_with_dotted_lines} className='absolute -right-2  -top-8 sm:right-10 lg:right-16 xl:right-24 sm:-top-12 w-[170px] md:w-[220px] lg:w-[310px]' width={310} height={138} alt="aeroplane-with-dotted-lines" />
                    <div className='flex  justify-center '>
                        <h1 className='font-jakarta font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl text-center  w-[80%] sm:w-[50%] lg:w-[60%] xl:w-[50%]'>From Southeast Asia <span className='text-secondary'>To The World</span></h1>
                    </div>
                    <div className="flex flex-wrap gap-5 xl:gap-0 justify-center items-center pt-12 relative">
                        <img src={purple_star} className='absolute right-0 top-5 2xl:right-5' alt="" />
                        <img src={pink_star} className='absolute -left-9 2xl:left-0 bottom-10' alt="" />

                        <div className='w-5/12 sm:w-3/12 md:w-1.5/12 xl:w-2/12 flex justify-end'>
                            <img width={171} height={186} className='rounded-lg' src={hero_mountain_img} alt="mountains-img" />
                        </div>
                        <div className='w-5/12 sm:w-3/12 md:w-1.5/12 xl:w-2/12 hidden sm:block'>
                            <div className='flex flex-col items-end gap-5'>
                                <img width={171} height={186} className='rounded-lg' src={hero_waterfall_mountain} alt="waterfall-and-mountains" />
                                <img width={171} height={186} className='rounded-lg' src={hero_waterfall} alt="waterfall-img" />
                            </div>
                        </div>
                        <div className='w-5/12 sm:w-3/12 md:w-3.5/12 xl:w-4/12 relative flex justify-center'>
                            <img src={hero_lady_boat_ellipse} width={140} height={140} className='absolute -left-3 md:-left-5 xl:left-2 -top-2 md:-top-7 2xl:left-5 w-[50px] md:w-[70px] lg:w-[105px]' alt="lady-in-boat-ellipse" />
                            <img className='rounded-3xl' width={370} height={466} src={hero_lady_in_boat} alt="lady-in-boat" />
                        </div>
                        <div className='w-5/12 sm:w-7/12 md:w-1.5/12 xl:w-2/12 sm:hidden md:block'>
                            <div className='flex flex-row md:flex-col justify-around   gap-4 md:gap-5'>
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