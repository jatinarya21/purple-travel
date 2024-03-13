import React from 'react';
import adventures from '../Assets/Images/webp/easy-and-fast-adventure.webp';
import exploring from '../Assets/Images/webp/easy-and-fast-exploring.webp';
import city_tour from '../Assets/Images/webp/easy-and-fast-city-tour.webp';
import camping from '../Assets/Images/webp/easy-and-fast-camping.webp';
import DottedAeroplane from '../Assets/Images/webp/easy-and-fast-dotted-aeroplane.webp';
import PurpleStar from '../Assets/Images/svg/purple-star.svg'

const EasyAndFast = () => {
    return (
        <div className='py-1 md:py-12 xl:py-[120px] relative'>
            <img src={PurpleStar} className='absolute left-11 top-[40%]' alt="Star" />
            <div className="container mx-auto px-3 md:px-20.5 relative">
                <img className='absolute right-0 -top-28' width={441} height={199} src={DottedAeroplane} alt="DottedAeroplane" />
                <p className='text-secondary font-jakarta font-bold text-xl text-center uppercase tracking-widest'>Easy and Fast</p>
                <h1 className='font-jakarta sm:text-3xl md:text-5.5xl text-center font-bold mt-3.5'>Choose Tour & Travel Types</h1>
                <div className="flex flex-wrap xl:gap-6 pt-4 md:pt-10 xl:pt-14">
                    <div className='w-full sm:w-6/12 mt-4 md:mt-0 lg:mt-4 lg:px-3 xl:px-0 xl:mt-0 xl:w-[23.4%]'>
                        <div className='pt-11 pb-10 px-16 flex flex-col items-center rounded-3xl cursor-pointer hover:bg-linear-gradient group transition-all duration-300 ease-in-out shadow-[0px_4px_16px_0px_#00000018]'>
                            <img src={adventures} width={43.5} height={45} alt="adventures-bag" />
                            <h2 className='font-jakarta font-bold text-2xl pt-6 group-hover:text-white'>Adventures</h2>
                            <p className='font-inter text-base font-normal group-hover:text-white'>20 Destination</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-6/12 mt-4 md:mt-0 lg:mt-4 lg:px-3 xl:px-0 xl:mt-0 xl:w-[23.4%]'>
                        <div className='pt-11 pb-10 px-16 flex flex-col items-center rounded-3xl cursor-pointer hover:bg-linear-gradient group transition-all duration-300 ease-in-out shadow-[0px_4px_16px_0px_#00000018]'>
                            <img src={exploring} width={43.5} height={45} alt="adventures-bag" />
                            <h2 className='font-jakarta font-bold text-2xl pt-6 group-hover:text-white'>Exploring</h2>
                            <p className='font-inter text-base font-normal group-hover:text-white'>25 Destination</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-6/12 mt-4 md:mt-0 lg:mt-4 lg:px-3 xl:px-0 xl:mt-0 xl:w-[23.4%]'>
                        <div className='pt-11 pb-10 px-16 flex flex-col items-center rounded-3xl cursor-pointer hover:bg-linear-gradient group transition-all duration-300 ease-in-out shadow-[0px_4px_16px_0px_#00000018]'>
                            <img src={city_tour} width={43.5} height={45} alt="adventures-bag" />
                            <h2 className='font-jakarta font-bold text-2xl pt-6 group-hover:text-white'>City Tour</h2>
                            <p className='font-inter text-base font-normal group-hover:text-white'>15 Destination</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-6/12 mt-4 md:mt-0 lg:mt-4 lg:px-3 xl:px-0 xl:mt-0 xl:w-[23.4%]'>
                        <div className='pt-11 pb-10 px-16 flex flex-col items-center rounded-3xl cursor-pointer hover:bg-linear-gradient group transition-all duration-300 ease-in-out shadow-[0px_4px_16px_0px_#00000018]'>
                            <img src={camping} width={43.5} height={45} alt="adventures-bag" />
                            <h2 className='font-jakarta font-bold text-2xl pt-6 group-hover:text-white'>Camping</h2>
                            <p className='font-inter text-base font-normal group-hover:text-white'>35 Destination</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasyAndFast;
