import React, { useState } from 'react';
import Slider from 'react-slick';
import videos from '../Assets/videos/video-1.mp4';
import london_thumbnail from '../Assets/Images/webp/top-destination-london-slider-image.webp';
import pause_btn from '../Assets/Images/webp/pause-button-top-destination.png';
import play_btn from '../Assets/Images/webp/video-player-play-btn.png'
import { PurpleStar, PinkStar } from './common/Icons';

const TopDestinationSlider = () => {
    const [showPlayButton, setShowPlayButton] = useState(true);

    const togglePlayButton = () => {
        setShowPlayButton(!showPlayButton);
    };

    const playVideo = (videoId) => {
        const videoPlayer = document.getElementById(videoId);
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
            ><svg width="50" height="51" className='rotate-180 top-destination-arrow' viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-0.5" y="0.5" width="49" height="49" rx="24.5" transform="matrix(-1 0 0 1 49 0.625)" stroke="#872BFF" />
                    <path d="M31.4529 37.9726C30.6882 38.7373 29.4481 38.7373 28.6834 37.9726L19.1123 28.3918C17.584 26.8622 17.5846 24.3833 19.1134 22.8543L28.6905 13.2773C29.4552 12.5125 30.6952 12.5125 31.46 13.2773C32.2248 14.0421 32.2248 15.282 31.46 16.0468L23.2631 24.2437C22.4982 25.0084 22.4982 26.2484 23.2631 27.0132L31.4529 35.2031C32.2177 35.9679 32.2177 37.2077 31.4529 37.9726Z" fill="#872BFF" />
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
            ><svg width="50" height="51" className='top-destination-arrow' viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div id='destinations' className='relative pt-6 md:pt-0'>
            <span className='absolute right-9 bottom-20'>
                <PurpleStar />
            </span>
            <span className='absolute right-0 md:right-9 top-12'>
                <PinkStar />
            </span>
            <div className='container mx-auto px-8 lg:px-18 2xl:px-44  pb-3 xl:pb-[120px]'>
                <div className='flex flex-col lg:flex-row flex-wrap justify-between items-center'>
                    <div className='lg:w-6/12  xl:w-[48%]'>
                        <h3 className='text-secondary font-jakarta font-bold tracking-[4px] text-lg sm:text-xl text-center lg:text-start mb-3.5'>TOP DESTINATION</h3>
                        <h2 className='font-jakarta font-bold text-xl sm:text-3xl xl:text-5.5xl text-center lg:text-start capitalize'>Explore top destination</h2>
                    </div>
                    <div className='lg:w-6/12 xl:w-5/12'>
                        <p className='font-inter text-sm sm:text-base font-normal py-2.5 md:pr-20 text-center lg:text-start'>Pellentesque mauris enim blandit amet. Et tincidunt et semper hac venenatis dolor. Non eu arcu turpis molestie. Et integer eu malesuada quisque. </p>
                    </div>
                </div>
                <Slider {...settings} className='py-5 md:py-12  xl:pt-[57px]'>
                    <div className='relative'>
                        <video id='videoPlayer1' poster={london_thumbnail} className='rounded-3xl w-full' controls={true}>
                            <source src={videos} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        {showPlayButton && (
                            <button className='bg-primary text-black translate-x-[-50%] translate-y-[-50%] outline-none rounded-full absolute left-2/4 top-2/4' onClick={() => playVideo('videoPlayer1')}>
                                {showPlayButton ? (<img width={130} height={130} className='w-[40px] sm:w-[70px]  lg:h-[130px] lg:w-[130px]' src={play_btn} alt="video-player-btn" />) : (<img width={130} height={130} className='w-[40px] sm:w-[70px]  lg:h-[130px] lg:w-[130px]' src={pause_btn} alt="video-player-btn" />)}
                            </button>
                        )}
                    </div>
                    <div className='relative'>
                        <video id='videoPlayer2' poster={london_thumbnail} className='rounded-3xl w-full' controls={true}>
                            <source src={videos} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        {showPlayButton && (
                            <button className='bg-primary text-black translate-x-[-50%] translate-y-[-50%] outline-none rounded-full absolute left-2/4 top-2/4' onClick={() => playVideo('videoPlayer2')}>
                                <img width={130} height={130} className='w-[40px] sm:w-[70px]  lg:h-[130px] lg:w-[130px]' src={play_btn} alt="video-player-btn" />
                            </button>
                        )}
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default TopDestinationSlider;