import React from 'react'
import ExperienceRiverNearTrees from '../Assets/Images/webp/experience-mountains-trees-rivers.webp'
import ExperienceMountainWaterfall from '../Assets/Images/webp/Experience-waterfall-mountains.webp'

const OurExperience = () => {
    return (
        <div className='pb-[120px]'>
            <div className="container mx-auto lg:px-20.5">
                <div className="flex flex-wrap justify-center lg:justify-between">
                    <div className="lg:w-6/12">
                        <div className='flex gap-3.5 '>
                            <img className='rounded-3xl  w-[130px] sm:w-[210px] xl:w-[271px] ' width={271} height={412} src={ExperienceRiverNearTrees} alt="" />
                            <img className='rounded-3xl lg:relative top-28 w-[130px] sm:w-[210px] xl:w-[271px] ' width={271} height={412} src={ExperienceMountainWaterfall} alt="" />
                        </div>
                    </div>
                    <div className='lg:w-[45%] pt-[53px]'>
                        <p className='text-secondary font-jakarta font-bold text-xl text-center tracking-widest uppercase'>our experience</p>
                        <h3 className='font-jakarta text-black font-bold mt-3.5 text-center text-2xl md:text-5.5xl leading-[130%]'>Open the Door to Your Dream Destination</h3>
                        <p className='font-inter font-normal text-base pt-4 px-9 md:pr-20 text-center'>Vitae mauris purus dui cras non quis morbi aliquet. Arcu porttitor ullamcorper ultrices arcu adipiscing pulvinar vel. Interdum quisque tempus non eu magna semper nulla. Vitae convallis enim amet non nec ac lectus aliquam. Pharetra sed sapien in est fringilla. </p>
                        <div className='flex flex-wrap lg:flex-nowrap gap-2 md:gap-[51px] items-center justify-center mt-5'>
                            <div className='flex flex-col items-center md:items-start'>
                                <p className='gradient-text font-lato text-[40px] font-bold'>4K+</p>
                                <p className='font-inter font-medium text-xl w-[60%] md:w-3/12 pt-2.5'>Satisfied Customers</p>
                            </div>
                            <div className='flex flex-col items-center md:items-start'>
                                <p className='gradient-text font-lato text-[40px] font-bold'>1000+</p>
                                <p className='font-inter font-medium text-xl w-[60%] md:w-3/12 pt-2.5'>Global Destinations</p>
                            </div>
                            <div className='flex flex-col items-center md:items-startr'>
                                <p className='gradient-text font-lato text-[40px] font-bold'>24/7</p>
                                <p className='font-inter font-medium text-xl w-[60%] md:w-3/12 pt-2.5'>Customer Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurExperience