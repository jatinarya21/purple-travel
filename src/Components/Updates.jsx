import React from 'react'
import UpdatesMountainRiver from '../Assets/Images/webp/updates-mountain-river.webp'
import UpdatesTreeSun from '../Assets/Images/webp/updates-tree-sun.webp'
import UpdatesBeachCity from '../Assets/Images/webp/updates-beach-city.webp'
import UpdatesMountainRiverSun from '../Assets/Images/webp/updates-mountain-river-sun.webp'
import { PinkStar, PurpleStar, UpdatesAeroplane } from './common/Icons'


const UpdatesSection = () => {
    return (
        <div id='blog' className='relative'>
            <span className='absolute -top-20 sm:-top-10  md:left-16 md:-top-10 '>
                <UpdatesAeroplane />
            </span>
            <span className='absolute right-12 top-20'><PinkStar /></span>
            <span className='absolute left-12 bottom-20'><PurpleStar /></span>

            <div className="container mx-auto px-3 lg:px-20.5 2xl:px-44">
                <div className='flex flex-col items-center'>
                    <h2 className='font-jakarta text-secondary text-xl uppercase mb-3.5 font-bold  tracking-[5px]'>Updates</h2>
                    <p className='text-black font-jakarta xl:!leading-[55.5px] font-bold text-base sm:text-3xl sm:w-[70%] md:w-[60%] lg:text-4xl xl:text-5.5xl lg:w-[43%] text-center '>Read Our Latest Travel Blog & Tips Here</p>
                </div>
                <div className='flex flex-wrap justify-center items-center pt-5 md:pt-[52px] gap-0 lg:gap-6'>
                    <div className='sm:w-[47%] xl:w-[40%] md:ml-9 lg:ml-0 '>
                        <img className='rounded-3xl h-[507px]  cursor-pointer transition-all hover:scale-95 w-[460px] lg:ml-14  xl:ml-0' height={507} width={460} src={UpdatesMountainRiver} alt="Mountain-and-river" />
                    </div>
                    <div className='sm:w-[47%] xl:w-[23%] flex md:pt-0 pt-5 justify-center '>
                        <img className='rounded-3xl w-[314px]  cursor-pointer transition-all hover:scale-95 sm:w-[267px] h-[507px]' height={507} width={267} src={UpdatesTreeSun} alt="SunriseTree" />
                    </div>
                    <div className='w-[100%] xl:w-[32%] pt-5 md:pt-0 flex justify-start items-start md:justify-center md:ml-5 lg:ml-0 md:mt-8 lg:mt-0 '>
                        <div className='flex flex-col sm:flex-row gap-5 xl:gap-6 xl:flex-col'>
                            <div className="md:w-[47%] lg:w-full cursor-pointer transition-all hover:scale-95 "><img className='rounded-3xl h-[240px] w-[330px] lg:w-[365px]' width={365} height={240} src={UpdatesBeachCity} alt="City-near-beach" /></div>
                            <div className="md:w-[47%] lg:w-full cursor-pointer transition-all hover:scale-95 "><img className='rounded-3xl h-[240px]  w-[330px] lg:w-[365px]' width={365} height={240} src={UpdatesMountainRiverSun} alt="river-near-mountain" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatesSection