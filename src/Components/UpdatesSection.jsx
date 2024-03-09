import React from 'react'
import UpdatesMountainRiver from '../Assets/Images/webp/updates-mountain-river.webp'
import UpdatesTreeSun from '../Assets/Images/webp/updates-tree-sun.webp'
import UpdatesBeachCity from '../Assets/Images/webp/updates-beach-city.webp'
import UpdatesMountainRiverSun from '../Assets/Images/webp/updates-mountain-river-sun.webp'

const UpdatesSection = () => {
    return (
        <div>
            <div className="container mx-auto px-20.5">
                <div className='flex flex-col items-center'>
                    <h2 className='font-jakarta text-secondary text-xl font-bold  tracking-widest'>Updates</h2>
                    <p className='text-black font-jakarta font-bold text-5.5xl w-[43%] text-center '>Read Our Latest Travel Blog & Tips Here</p>
                </div>
                <div className='flex gap-6'>
                    <div className='lg:w-[40%]'>
                        <img className='rounded-3xl h-[507px] w-[460px]' height={507} width={460} src={UpdatesMountainRiver} alt="" />
                    </div>
                    <div className='lg:w-[23%]'>
                        <img className='rounded-3xl w-[267px] h-[507px]' height={507} width={267} src={UpdatesTreeSun} alt="" />
                    </div>
                    <div className='lg:w-[32%]'>
                        <img className='rounded-3xl h-[240px] w-[365px]' width={365} height={240} src={UpdatesBeachCity} alt="" />
                        <img className='rounded-3xl h-[240px] mt-[27px] w-[365px]' width={365} height={240} src={UpdatesMountainRiverSun} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatesSection