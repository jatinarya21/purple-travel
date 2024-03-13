import React from 'react'
import ExperienceRiverNearTrees from '../Assets/Images/webp/experience-mountains-trees-rivers.webp'
import ExperienceMountainWaterfall from '../Assets/Images/webp/Experience-waterfall-mountains.webp'
import PinkStar from '../Assets/Images/svg/pink-star.svg'

const OurExperience = () => {
    return (
        <div className='pb-12 xl:pb-[120px] relative'>
            <img src={PinkStar} className='absolute -top-7 left-9' alt="Star" />
            <img src={PinkStar} className='absolute bottom-0 md:bottom-[11.5rem] right-9' alt="Star" />
            <div className="container mx-auto lg:px-20.5">
                <div className="flex flex-wrap justify-center lg:justify-between">
                    <div className="lg:w-6/12">
                        <div className='flex gap-3.5 '>
                            <img className='rounded-3xl  w-[130px] sm:w-[210px] xl:w-[271px] ' width={271} height={412} src={ExperienceRiverNearTrees} alt="TressNearRiver" />
                            <img className='rounded-3xl lg:relative top-28 w-[130px] sm:w-[210px] xl:w-[271px] ' width={271} height={412} src={ExperienceMountainWaterfall} alt="WaterFallMountain" />
                        </div>
                    </div>
                    <div className='lg:w-[45%] pt-6 md:pt-[53px]'>
                        <p className='text-secondary font-jakarta font-bold text-xl text-center lg:text-start tracking-[0.2em] uppercase'>our experience</p>
                        <h3 className='font-jakarta text-black font-bold md:mt-3.5 text-center lg:text-start text-2xl md:text-5.5xl leading-[130%]'>Open the Door to Your Dream Destination</h3>
                        <p className='font-inter font-normal text-base pt-4 px-9 md:px-0 md:pr-20 text-center lg:text-start'>Vitae mauris purus dui cras non quis morbi aliquet. Arcu porttitor ullamcorper ultrices arcu adipiscing pulvinar vel. Interdum quisque tempus non eu magna semper nulla. Vitae convallis enim amet non nec ac lectus aliquam. Pharetra sed sapien in est fringilla. </p>
                        <div className='flex flex-wrap lg:flex-nowrap gap-2 md:gap-[51px] items-center justify-center mt-5'>
                            <div className='flex flex-col items-center md:items-start'>
                                <p className='gradient-text font-lato text-3xl md:text-[40px] font-bold'>4K+</p>
                                <p className='font-inter font-medium text-xl w-[60%] md:w-3/12 pt-2.5 text-center lg:text-start'>Satisfied Customers</p>
                            </div>
                            <div className='flex flex-col items-center md:items-start'>
                                <p className='gradient-text font-lato text-3xl md:text-[40px] font-bold'>1000+</p>
                                <p className='font-inter font-medium text-xl w-[60%] md:w-3/12 pt-2.5 text-center lg:text-start'>Global Destinations</p>
                            </div>
                            <div className='flex flex-col items-center md:items-start'>
                                <p className='gradient-text font-lato text-3xl md:text-[40px] font-bold'>24/7</p>
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