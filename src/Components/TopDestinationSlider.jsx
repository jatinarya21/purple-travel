import React, { useState } from 'react';
import Slider from 'react-slick';
import video from '../Assets/videos/video-1.mp4';
import london_thumbnail from '../Assets/Images/webp/top-destination-london-slider-image.webp';
import play_btn from '../Assets/Images/webp/video-player-play-btn.png'
import NextSliderBtn from '../Assets/Images/svg/pink-star.svg'

const TopDestinationSlider = () => {
    const [showPlayButton, setShowPlayButton] = useState(true);

    const togglePlayButton = () => {
        setShowPlayButton(!showPlayButton);
    };

    const playVideo = () => {
        const videoPlayer = document.getElementById('videoPlayer');
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            ><svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.625" width="50" height="50" rx="25" fill="#872BFF" />
                    <path d="M18.5471 37.9726C19.3118 38.7373 20.5519 38.7373 21.3166 37.9726L30.8877 28.3918C32.416 26.8622 32.4154 24.3833 30.8866 22.8543L21.3095 13.2773C20.5448 12.5125 19.3048 12.5125 18.54 13.2773C17.7752 14.0421 17.7752 15.282 18.54 16.0468L26.7369 24.2437C27.5018 25.0084 27.5018 26.2484 26.7369 27.0132L18.5471 35.2031C17.7823 35.9679 17.7823 37.2077 18.5471 37.9726Z" fill="white" />
                </svg>
            </div>
        );
    };
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            ><svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-0.5" y="0.5" width="49" height="49" rx="24.5" transform="matrix(-1 0 0 1 49 0.625)" stroke="#872BFF" />
                    <path d="M31.4529 37.9726C30.6882 38.7373 29.4481 38.7373 28.6834 37.9726L19.1123 28.3918C17.584 26.8622 17.5846 24.3833 19.1134 22.8543L28.6905 13.2773C29.4552 12.5125 30.6952 12.5125 31.46 13.2773C32.2248 14.0421 32.2248 15.282 31.46 16.0468L23.2631 24.2437C22.4982 25.0084 22.4982 26.2484 23.2631 27.0132L31.4529 35.2031C32.2177 35.9679 32.2177 37.2077 31.4529 37.9726Z" fill="#872BFF" />
                </svg>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='container mx-auto px-8 lg:px-20.5 pb-[120px]'>
            <div className='flex flex-col lg:flex-row flex-wrap justify-between items-center'>
                <div className='lg:w-6/12  xl:w-5/12'>
                    <h3 className='text-secondary font-jakarta font-bold text-lg sm:text-xl text-center lg:text-start'>TOP DESTINATION</h3>
                    <h2 className='font-jakarta text-xl sm:text-3xl xl:text-5.5xl text-center lg:text-start'>Explore top destination</h2>
                </div>
                <div className='lg:w-6/12 xl:w-4/12'>
                    <p className='font-inter text-sm sm:text-base font-normal py-2.5 md:pr-1 text-center lg:text-start'>Pellentesque mauris enim blandit amet. Et tincidunt et semper hac venenatis dolor. Non eu arcu turpis molestie. Et integer eu malesuada quisque. </p>
                </div>
            </div>
            <Slider {...settings} className='py-12  lg:pt-[57px]'>
                <div className='relative'>
                    <video id='videoPlayer' poster={london_thumbnail} className='rounded-3xl w-full' controls={false}>
                        <source src={video} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    {showPlayButton && (
                        <button className='bg-primary text-black translate-x-[-50%] translate-y-[-50%] outline-none rounded-full absolute left-2/4 top-2/4' onClick={playVideo}>
                            <img width={130} height={130} className='w-[40px] sm:w-[70px]  lg:h-[130px] lg:w-[130px]' src={play_btn} alt="" />
                        </button>
                    )}
                </div>
                <div className='relative'>
                    <video id='videoPlayer' poster={london_thumbnail} className='rounded-3xl w-full' controls={false}>
                        <source src={video} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    {showPlayButton && (
                        <button className='bg-primary text-black translate-x-[-50%] translate-y-[-50%] outline-none rounded-full absolute left-2/4 top-2/4' onClick={playVideo}>
                            <img width={130} height={130} className='w-[40px] sm:w-[70px]  lg:h-[130px] lg:w-[130px]' src={play_btn} alt="" />
                        </button>
                    )}
                </div>
                <div className='relative'>
                    <video id='videoPlayer' poster={london_thumbnail} className='rounded-3xl w-full' controls={false}>
                        <source src={video} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    {showPlayButton && (
                        <button className='bg-primary text-black translate-x-[-50%] translate-y-[-50%] outline-none rounded-full absolute left-2/4 top-2/4' onClick={playVideo}>
                            <img width={130} height={130} className='w-[40px] sm:w-[70px]  lg:h-[130px] lg:w-[130px]' src={play_btn} alt="" />
                        </button>
                    )}
                </div>
                <div className='relative'>
                    <video id='videoPlayer' poster={london_thumbnail} className='rounded-3xl w-full' controls={false}>
                        <source src={video} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    {showPlayButton && (
                        <button className='bg-primary text-black translate-x-[-50%] translate-y-[-50%] outline-none rounded-full absolute left-2/4 top-2/4' onClick={playVideo}>
                            <img width={130} height={130} className='w-[40px] sm:w-[70px]  lg:h-[130px] lg:w-[130px]' src={play_btn} alt="video-player-btn" />
                        </button>
                    )}
                </div>
            </Slider>
        </div>
    );
};

export default TopDestinationSlider;