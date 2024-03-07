import React from 'react';
import adventures from '../Assets/Images/webp/easy-and-fast-adventure.webp';
import exploring from '../Assets/Images/webp/easy-and-fast-exploring.webp';
import city_tour from '../Assets/Images/webp/easy-and-fast-city-tour.webp';
import camping from '../Assets/Images/webp/easy-and-fast-camping.webp';

const EasyAndFast = () => {
    return (
        <div className='py-[120px]'>
            <div className="container mx-auto md:px-20.5">
                <p className='text-secondary font-jakarta font-bold text-xl text-center'>Easy and Fast</p>
                <h1 className='font-jakarta sm:text-3xl md:text-5.5xl text-center font-bold mt-3.5'>Choose Tour & Travel Types</h1>
                <div className="flex flex-wrap xl:gap-6 pt-14">
                    <div className='w-full sm:w-6/12 xl:w-[23.4%]'>
                        <div className='pt-11 pb-10 px-16 flex flex-col items-center rounded-3xl cursor-pointer hover:bg-linear-gradient group transition-all duration-300 ease-in-out'>
                            <img src={adventures} width={43.5} height={45} className='' alt="adventures-bag" />
                            <h2 className='font-jakarta font-bold text-2xl pt-6 group-hover:text-white'>Adventures</h2>
                            <p className='font-inter text-base font-normal group-hover:text-white'>20 Destination</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-6/12 xl:w-[23.4%]'>
                        <div className='pt-11 pb-10 px-16 flex flex-col items-center rounded-3xl cursor-pointer hover:bg-linear-gradient group transition-all duration-300 ease-in-out'>
                            <img src={exploring} width={43.5} height={45} className='' alt="adventures-bag" />
                            <h2 className='font-jakarta font-bold text-2xl pt-6 group-hover:text-white'>Exploring</h2>
                            <p className='font-inter text-base font-normal group-hover:text-white'>25 Destination</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-6/12 xl:w-[23.4%]'>
                        <div className='pt-11 pb-10 px-16 flex flex-col items-center rounded-3xl cursor-pointer hover:bg-linear-gradient group transition-all duration-300 ease-in-out'>
                            <img src={city_tour} width={43.5} height={45} className='' alt="adventures-bag" />
                            <h2 className='font-jakarta font-bold text-2xl pt-6 group-hover:text-white'>City Tour</h2>
                            <p className='font-inter text-base font-normal group-hover:text-white'>15 Destination</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-6/12 xl:w-[23.4%]'>
                        <div className='pt-11 pb-10 px-16 flex flex-col items-center rounded-3xl cursor-pointer hover:bg-linear-gradient group transition-all duration-300 ease-in-out'>
                            <img src={camping} width={43.5} height={45} className='' alt="adventures-bag" />
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
