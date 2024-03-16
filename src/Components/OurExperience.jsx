import React, { useState, useEffect } from 'react'
import ExperienceRiverNearTrees from '../Assets/Images/webp/experience-mountains-trees-rivers.webp'
import ExperienceMountainWaterfall from '../Assets/Images/webp/Experience-waterfall-mountains.webp'
import { PinkStar } from './common/Icons';

const OurExperience = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        const slowInterval = setInterval(() => {
            setCounter1((prevCounter1) => Math.min(prevCounter1 + 1, 4));
        }, 1000);

        const fastInterval = setInterval(() => {
            setCounter2((prevCounter2) => Math.min(prevCounter2 + 1, 1000));
        }, 10);

        // Cleanup function to clear the intervals
        return () => {
            clearInterval(slowInterval);
            clearInterval(fastInterval);
        };
    }, []);

    return (
        <div className='pb-12 pt-12 xl:pb-[180px] relative'>
            <span className='absolute -top-7 left-9'><PinkStar /></span>
            <span className='absolute bottom-0 md:bottom-[11.5rem] right-9'><PinkStar /></span>
            <div className="container mx-auto lg:px-20.5 2xl:px-44">
                <div className="flex flex-wrap justify-center lg:justify-between">
                    <div className="lg:w-6/12">
                        <div className='flex gap-3.5 '>
                            <img className='rounded-3xl  w-[130px] sm:w-[210px] xl:w-[271px] ' width={271} height={412} src={ExperienceRiverNearTrees} alt="TressNearRiver" />
                            <img className='rounded-3xl lg:relative top-28 w-[130px] sm:w-[210px] xl:w-[271px] ' width={271} height={412} src={ExperienceMountainWaterfall} alt="WaterFallMountain" />
                        </div>
                    </div>
                    <div className='lg:w-[45%] pt-6 md:pt-[53px]'>
                        <p className='text-secondary font-jakarta font-bold text-base sm:text-xl text-center lg:text-start tracking-[5px] uppercase'>our experience</p>
                        <h3 className='font-jakarta text-black font-bold min-[576px]:text-3xl md:mt-3.5 text-center lg:text-start text-2xl  md:text-4xl md:leading-[45px] lg:text-4xl xl:text-5.5xl lg:leading-[130%]'>Open The Door to Your <br /> Dream Destination</h3>
                        <p className='font-inter font-normal text-base pt-4 px-9 md:px-10 lg:px-0 text-center lg:text-start'>Vitae mauris purus dui cras non quis morbi aliquet. Arcu porttitor ullamcorper ultrices arcu adipiscing pulvinar vel. Interdum quisque tempus non eu magna semper nulla. Vitae convallis enim amet non nec ac lectus aliquam. Pharetra sed sapien in est fringilla. </p>
                        <div className='flex flex-wrap-reverse sm:flex-wrap lg:flex-nowrap gap-2 md:gap-[51px] items-center justify-center mt-5'>
                            <div className='flex flex-col items-center md:items-start'>
                                <p className='gradient-text font-lato text-3xl md:text-[40px] md:leading-[64px] font-bold'>{counter1}K+</p>
                                <p className='font-inter font-medium text-xl w-[60%] md:w-3/12 pt-2.5 text-center lg:text-start'>Satisfied Customers</p>
                            </div>
                            <div className='flex flex-col items-center md:items-start'>
                                <p className='gradient-text font-lato text-3xl md:text-[40px] md:leading-[64px] font-bold'>{counter2}+</p>
                                <p className='font-inter font-medium text-xl w-[60%] md:w-3/12 pt-2.5 text-center lg:text-start'>Global Destinations</p>
                            </div>
                            <div className='flex flex-col items-center md:items-start'>
                                <p className='gradient-text font-lato text-3xl md:text-[40px] md:leading-[64px] font-bold'>24/7</p>
                                <p className='font-inter font-medium text-xl w-[60%] md:w-3/12 pt-2.5 text-center lg:text-start'>Customer Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurExperience