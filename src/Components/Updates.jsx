import React from 'react'
import UpdatesMountainRiver from '../Assets/Images/webp/updates-mountain-river.webp'
import UpdatesTreeSun from '../Assets/Images/webp/updates-tree-sun.webp'
import UpdatesBeachCity from '../Assets/Images/webp/updates-beach-city.webp'
import UpdatesMountainRiverSun from '../Assets/Images/webp/updates-mountain-river-sun.webp'
import { PinkStar, PurpleStar, UpdatesAeroplane, UpdatesClock, UpdatesFile, UpdatesMessage } from './common/Icons'


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
                    <p className='text-black font-jakarta xl:!leading-[55.5px] font-bold text-xl sm:text-3xl w-[80%] sm:w-[60%] md:w-[50%] lg:text-4xl xl:text-5.5xl lg:w-[48%] text-center '>Read Our Latest Travel Blog & Tips Here</p>
                </div>
                {/* <div className='flex flex-wrap justify-center items-center pt-5 md:pt-[52px] gap-0 lg:gap-6'>
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
                </div> */}
                <div className='flex flex-wrap justify-center gap-6 pt-5 md:pt-[52px]'>
                    <div className='relative overflow-hidden rounded-3xl cursor-pointer  group'>
                        <img src={UpdatesMountainRiver} className='rounded-3xl transition-all group-hover:scale-110 w-[350px] h-[400px] lg:h-[507px] lg:w-[460px]' width={460} height={507} alt="mountain-river" />
                        <div className='absolute bottom-10 md:bottom-8 lg:bottom-10  pl-[18px]'>
                            <div className='flex flex-wrap gap-3.5'>
                                <span className='flex gap-2.5'><UpdatesFile />
                                    <p className='text-white font-inter font-medium text-base '>Adventure</p>
                                </span>
                                <span className='flex gap-2.5'>
                                    <UpdatesClock /> <p className='text-white font-inter font-medium text-base '>Fab 12,2024</p>
                                </span>
                                <span className='flex gap-2.5'>
                                    <UpdatesMessage /> <p className='text-white font-inter font-medium text-base '>22</p>
                                </span>
                            </div>
                            <p className='text-white font-jakarta text-xl font-bold pt-1.5'>Off the Beaten Path Travel Adventures</p>
                        </div>
                    </div>
                    <div className='relative overflow-hidden rounded-3xl cursor-pointer  group'>
                        <img src={UpdatesTreeSun} className='rounded-3xl transition-all group-hover:scale-110 w-[339px] md:w-[267px] h-[400px] lg:h-[507px]' width={267} height={507} alt="mountain-river" />
                        <div className='absolute bottom-10  pl-[18px]'>
                            <span className='flex flex-wrap gap-2.5'><UpdatesFile />
                                <p className='text-white font-inter font-medium text-base '>Adventure</p>
                            </span>
                            <p className='text-white font-jakarta text-xl font-bold pt-1.5'>Off the Beaten Path Travel Adventures</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row xl:flex-col gap-6'>
                        <div className='relative overflow-hidden rounded-3xl cursor-pointer  group'>
                            <img src={UpdatesBeachCity} className='rounded-3xl transition-all group-hover:scale-110 md:w-[310px] lg:w-[365px]' width={365} height={240} alt="mountain-river" />
                            <div className='absolute bottom-10  pl-[18px]'>
                                <span className='flex flex-wrap gap-2.5'><UpdatesFile />
                                    <p className='text-white font-inter font-medium text-base '>Adventure</p>
                                </span>
                                <p className='text-white font-jakarta text-xl font-bold pt-1.5'>Off the Beaten Path Travel Adventures</p>
                            </div>
                        </div>
                        <div className='relative overflow-hidden rounded-3xl cursor-pointer  group'>
                            <img src={UpdatesMountainRiverSun} className='rounded-3xl transition-all group-hover:scale-110 md:w-[310px] lg:w-[365px]' width={365} height={240} alt="mountain-river" />
                            <div className='absolute bottom-10  pl-[18px]'>
                                <span className='flex gap-2.5'><UpdatesFile />
                                    <p className='text-white font-inter font-medium text-base '>Adventure</p>
                                </span>
                                <p className='text-white font-jakarta text-xl font-bold pt-1.5'>Off the Beaten Path Travel Adventures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatesSection