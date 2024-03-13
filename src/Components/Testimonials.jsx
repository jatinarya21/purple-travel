import React from 'react'
import Slider from 'react-slick'
import TestimonialStars from '../Assets/Images/webp/Testimonials-stars.webp'
import TestimonialJefrryMartin from '../Assets/Images/webp/Testimonials-jeffry-martin-profile.webp'
import TestimonialDrewSugarman from '../Assets/Images/webp/Testimonials-Drew-Sugarman-profile.webp'
import TestimonialJamesCart from '../Assets/Images/webp/Testimonials-james-cartprofile.webp'
import PurpleStar from '../Assets/Images/svg/purple-star.svg'

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
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div id='testimonials' className='pb-16 pt-12 xl:py-[120px] relative'>
            <img className='absolute right-10 top-36' src={PurpleStar} alt="RatingStars" />
            <div className="container mx-auto px-3 lg:px-20.5">
                <h3 className='text-secondary font-jakarta text-xl uppercase font-bold tracking-widest text-center'>Testimonials</h3>
                <p className='text-center text-black font-jakarta font-bold text-xl md:text-5.5xl mt-3.5'>What People Say About Us</p>
                <div className='testimonial-slider mt-[52px]'>
                    <Slider  {...settings}>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl max-w-[364px] p-5 testimonial-box'>
                                <img width={93} src={TestimonialStars} alt="RatingStars" />
                                <p className='font-inter italic text-base mt-3.5 pr-7'>"I'm always looking for the next technological advance. When I found this I had my concerns but had to at least try it out. I'm pleasantly surprised and had an almost immediate ROI. Planning on shifting a lot of my operations over to this."</p>
                                <span className='flex items-center gap-3.5 mt-[78px]'>
                                    <img width={54} height={54} src={TestimonialDrewSugarman} alt="UserProfile" />
                                    <p>Drew Sugarman</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl max-w-[364px] p-5 testimonial-box'>
                                <img width={93} src={TestimonialStars} alt="RatingStars" />
                                <p className='font-inter italic text-base mt-3.5 pr-7'>"This is going to change the insurance industry. The amount of time we are saving by not having to book these appointments is mind blowing. Now my guys are just sitting down for qualified appointments instead of having to book all of their own. Complete game changer."</p>
                                <span className='flex items-center gap-3.5 mt-[78px]'>
                                    <img width={54} height={54} src={TestimonialJamesCart} alt="UserProfile" />
                                    <p>James Cart</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl max-w-[364px] p-5 testimonial-box'>
                                <img width={93} src={TestimonialStars} alt="RatingStars" />
                                <p className='font-inter italic text-base mt-3.5 pr-7'>"I can't believe this technology actually exists. I've been hesitant with anything AI since it's all been a gimmick so far. This actually works. It calls my leads right away and converts better than my old setters."</p>
                                <span className='flex items-center gap-3.5 pt-[78px]'>
                                    <img width={54} height={54} src={TestimonialJefrryMartin} alt="UserProfile" />
                                    <p>Jeffrey Martin</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl max-w-[364px] p-5 testimonial-box'>
                                <img width={93} src={TestimonialStars} alt="RatingStars" />
                                <p className='font-inter italic text-base mt-3.5 pr-7'>"I can't believe this technology actually exists. I've been hesitant with anything AI since it's all been a gimmick so far. This actually works. It calls my leads right away and converts better than my old setters."</p>
                                <span className='flex items-center gap-3.5 mt-[78px]'>
                                    <img width={54} height={54} src={TestimonialDrewSugarman} alt="UserProfile" />
                                    <p>Drew Sugarman</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl max-w-[364px] p-5 testimonial-box'>
                                <img width={93} src={TestimonialStars} alt="RatingStars" />
                                <p className='font-inter italic text-base mt-3.5 pr-7'>"I can't believe this technology actually exists. I've been hesitant with anything AI since it's all been a gimmick so far. This actually works. It calls my leads right away and converts better than my old setters."</p>
                                <span className='flex items-center gap-3.5 mt-[78px]'>
                                    <img width={54} height={54} src={TestimonialJamesCart} alt="UserProfile" />
                                    <p>James Cart</p>
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className='shadow-[0px_4px_16px_0px_#00000018] rounded-3xl max-w-[364px] p-5 testimonial-box'>
                                <img width={93} src={TestimonialStars} alt="RatingStars" />
                                <p className='font-inter italic text-base mt-3.5 pr-7'>"I can't believe this technology actually exists. I've been hesitant with anything AI since it's all been a gimmick so far. This actually works. It calls my leads right away and converts better than my old setters."</p>
                                <span className='flex items-center gap-3.5 pt-[120px]'>
                                    <img width={54} height={54} src={TestimonialJefrryMartin} alt="UserProfile" />
                                    <p>Jeffrey Martin</p>
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