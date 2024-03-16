import React from 'react'
import { NewsletterAeroplane, NewsletterSubmitButton } from './common/Icons'

const SpecialOffersMailCard = () => {
    return (
        <div className='-translate-y-36'>
            <div className="max-w-[1140px] mx-auto px-3 md:px-7 lg:px-3 ">
                <div className='bg-newsletter bg-no-repeat bg-cover bg-center mt-28 lg:mt-0 py-11 lg:py-[83px] flex flex-col items-center rounded-3xl overflow-hidden relative'>
                    <span className='absolute left-0 top-[-86px] sm:top-[-50px] md:top-[-50px] lg:top-0  '><NewsletterAeroplane /></span>
                    <h4 className='text-white font-jakarta font-bold text-base sm:text-xl tracking-widest sm:tracking-[5px] uppercase'>Let’s Explore The World</h4>
                    <h3 className='text-white font-jakarta text-xl text-center sm:text-3xl lg:text-5.5xl  font-bold capitalize pt-1.5'>Get Special Offers in your inbox</h3>
                    <div className='bg-white rounded-[44px]  pr-4 md:pr-1 pl-3 h-[50px] md:h-[70px]  md:pl-[34px] flex items-center justify-between w-[255px] sm:w-[350px] lg:w-[618px] mt-8 '>
                        <input type="email" placeholder='SUBMIT YOUR EMAIL' className=' outline-none text-[#BBBBBB] bg-transparent w-auto text-sm  md:text-base font-semibold placeholder:text-[#BBBBBB]' />
                        <button type="button" className='w-[33px] md:w-[66px] md:h-[66px]' ><NewsletterSubmitButton /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffersMailCard