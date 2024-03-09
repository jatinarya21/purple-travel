import React from 'react'
import NewsletterEmailButton from '../Assets/Images/webp/Newsletter-email-submit-button.webp'
import NewsletterDottedButton from '../Assets/Images/webp/Newsletter-dotted-aeroplane.webp'

const SpecialOffersMailCard = () => {
    return (
        <div className='-translate-y-36'>
            <div className="max-w-[1140px] mx-auto px-3 ">
                <div className='bg-newsletter bg-no-repeat bg-cover bg-center py-11 md:py-[83px] flex flex-col items-center rounded-3xl relative'>
                    <img src={NewsletterDottedButton} width={441} height={180} className='absolute left-0 top-0 w-[155px] md:w-[441px]' alt="DottedButton" />
                    <h4 className='text-white font-jakarta font-bold text-base sm:text-xl tracking-widest'>Let’s Explore The World</h4>
                    <h3 className='text-white font-jakarta text-xl text-center sm:text-5.5xl font-bold'>Get Special Offers in your inbox</h3>
                    <div className='bg-white rounded-[44px] py-1 pr-1 pl-[34px] flex items-center justify-between w-[285px] sm:w-[415px] lg:w-[618px] mt-8 '>
                        <input type="email" placeholder='SUBMIT YOUR EMAIL' className=' outline-none text-[#BBBBBB] text-base font-semibold placeholder:text-[#BBBBBB]' />
                        <button type="button"><img width={66} height={66} src={NewsletterEmailButton} className='w-[33px] md:w-[66px] md:h-[66px]' alt="EmailSubmitButton" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffersMailCard