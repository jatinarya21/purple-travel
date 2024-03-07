import React, { useState } from 'react';
import Slider from 'react-slick';
import video from '../Assets/videos/video-1.mp4';
import london_thumbnail from '../Assets/Images/webp/top-destination-london-slider-image.webp';
import play_btn from '../Assets/Images/webp/video-player-play-btn.png'

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='container mx-auto px-20.5'>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='w-5/12'>
                    <h3 className='text-secondary font-jakarta font-bold text-xl'>TOP DESTINATION</h3>
                    <h2 className='font-jakarta text-5.5xl'>Explore top destination</h2>
                </div>
                <div className='w-4/12'>
                    <p className='font-inter text-base font-normal py-2.5 pr-1'>Pellentesque mauris enim blandit amet. Et tincidunt et semper hac venenatis dolor. Non eu arcu turpis molestie. Et integer eu malesuada quisque. </p>
                </div>
            </div>
            <Slider {...settings}>
                <div className='relative'>
                    <video id='videoPlayer' poster={london_thumbnail} className='rounded-3xl w-full' controls={false}>
                        <source src={video} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    {showPlayButton && (
                        <button className='bg-primary text-black translate-x-[-50%] translate-y-[-50%] outline-none rounded-full absolute left-2/4 top-2/4' onClick={playVideo}>
                            <img width={130} height={130} src={play_btn} alt="" />
                        </button>
                    )}
                </div>
                <div>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
};

export default TopDestinationSlider;