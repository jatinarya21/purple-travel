import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import Slider from 'react-slick'

import TestimonialJefrryMartin from '../Assets/Images/webp/Testimonials-jeffry-martin-profile.webp'
import TestimonialDrewSugarman from '../Assets/Images/webp/Testimonials-Drew-Sugarman-profile.webp'
import TestimonialJamesCart from '../Assets/Images/webp/Testimonials-james-cartprofile.webp'
import { PurpleStar, RatingStars } from './common/Icons'

const Testimonials = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };


    return (
        <div id='testimonials' className='pb-16 pt-12 xl:py-[120px] relative'>
            <span className='absolute right-10  md:top-28 lg:top-36 xl:top-36'><PurpleStar /></span>
            <div className="container mx-auto px-3 lg:px-20.5 2xl:px-40">
                <h3 className='text-secondary font-jakarta text-base sm:text-xl uppercase font-bold tracking-[5px] text-center'>Testimonials</h3>
                <p className='text-center text-black font-jakarta font-bold text-2xl md:text-5.5xl md:mt-3.5'>What Our Customers Say</p>
                <div className='testimonial-slider '>
                    <Slider className=''  {...settings}>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl w-[280px] sm:w-[364px] h-[350px] p-5 testimonial-box'>
                                <RatingStars />
                                <p className='font-inter italic text-base mt-3.5 '>"I'm always looking for the next technological advance. When I found this I had my concerns but had to at least try it out. I'm pleasantly surprised and had an almost immediate ROI. Planning on shifting a lot of my operations over to this."</p>
                                <span className='flex items-center gap-3.5 pt-10 sm:pt-[78px]'>
                                    <img width={54} height={54} src={TestimonialDrewSugarman} alt="UserProfile" />
                                    <p className='font-poppins text-lg font-semibold !leading-[27px]'>Drew Sugarman</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl w-[280px] sm:w-[364px] h-[350px] p-5 testimonial-box'>
                                <RatingStars />
                                <p className='font-inter italic text-sm sm:text-base mt-3.5 '>"This is going to change the insurance industry. The amount of time we are saving by not having to book these appointments is mind blowing. Now my guys are just sitting down for qualified appointments instead of having to book all of their own. Complete game changer."</p>
                                <span className='flex items-center gap-3.5 pt-10 sm:pt-[48px]'>
                                    <img width={54} height={54} src={TestimonialJamesCart} alt="UserProfile" />
                                    <p className='font-poppins text-lg font-semibold !leading-[27px]'>James Cart</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3x w-[280px] sm:w-[364px] h-[350px] p-5 testimonial-box'>
                                <RatingStars />
                                <p className='font-inter italic text-base mt-3.5 '>"I can't believe this technology actually exists. I've been hesitant with anything AI since it's all been a gimmick so far. This actually works. It calls my leads right away and converts better than my old setters."</p>
                                <span className='flex items-center gap-3.5 pt-14 sm:pt-[88px]'>
                                    <img width={54} height={54} src={TestimonialJefrryMartin} alt="UserProfile" />
                                    <p className='font-poppins text-lg font-semibold !leading-[27px]'>Jeffrey Martin</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl w-[280px] sm:w-[364px] h-[350px] p-5 testimonial-box'>
                                <RatingStars />
                                <p className='font-inter italic text-base mt-3.5 '>"I can't believe this technology actually exists. I've been hesitant with anything AI since it's all been a gimmick so far. This actually works. It calls my leads right away and converts better than my old setters."</p>
                                <span className='flex items-center gap-3.5 pt-14 sm:pt-[78px]'>
                                    <img width={54} height={54} src={TestimonialDrewSugarman} alt="UserProfile" />
                                    <p className='font-poppins text-lg font-semibold !leading-[27px]'>Drew Sugarman</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl w-[280px] sm:w-[364px] h-[350px] p-5 testimonial-box'>
                                <RatingStars />
                                <p className='font-inter italic text-base mt-3.5 '>"I can't believe this technology actually exists. I've been hesitant with anything AI since it's all been a gimmick so far. This actually works. It calls my leads right away and converts better than my old setters."</p>
                                <span className='flex items-center gap-3.5 pt-14 sm:pt-[78px]'>
                                    <img width={54} height={54} src={TestimonialJamesCart} alt="UserProfile" />
                                    <p className='font-poppins text-lg font-semibold !leading-[27px]'>James Cart</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl w-[280px] sm:w-[364px] h-[350px] p-5 testimonial-box'>
                                <RatingStars />
                                <p className='font-inter italic text-base mt-3.5 '>"I can't believe this technology actually exists. I've been hesitant with anything AI since it's all been a gimmick so far. This actually works. It calls my leads right away and converts better than my old setters."</p>
                                <span className='flex items-center gap-3.5 pt-14 sm:pt-[100px]'>
                                    <img width={54} height={54} src={TestimonialJefrryMartin} alt="UserProfile" />
                                    <p className='font-poppins text-lg font-semibold !leading-[27px]'>Jeffrey Martin</p>
                                </span>
                            </div>
                        </div>
                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default Testimonials