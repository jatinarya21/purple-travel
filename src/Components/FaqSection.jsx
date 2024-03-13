import React, { useState } from 'react'
import DottedAeroplane from '../Assets/Images/webp/Faq-dotted-aeroplane.webp'
import PurpleStar from '../Assets/Images/svg/purple-star.svg'

const FaqSection = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='pb-12  xl:pb-52 relative '>
            <img src={DottedAeroplane} width={258} height={67} className='absolute right-24 -top-10 w-[158px] md:w-[258px]' alt="DottedAeroplane" />
            <img src={PurpleStar} className='absolute left-10 top-14 md:top-24' alt="Star" />
            <img src={PurpleStar} className='absolute right-16 bottom-[33%]' alt="Star" />
            <div className="max-w-[940px] mx-auto px-3">
                <h5 className='text-secondary font-jakarta font-bold text-xl text-center tracking-[0.2em] md:mb-3.5'>FAQ</h5>
                <h3 className='font-jakarta font-bold text-black text-xl lg:text-5.5xl text-center capitalize'>Still have any query?</h3>
                <div className='mt-[25px]'>
                    {items.map((item, index) => (
                        <div key={index} className="mb-4 rounded-3xl mt-6 p-6 shadow-[0px_4px_16px_0px_#00000018] " style={{
                            background: openIndex === index ? 'linear-gradient(to bottom, #C82BFF, #660BDD)' : 'none',
                            color: openIndex === index ? '#fff' : '',
                        }}>
                            <div
                                className="flex items-center justify-between font-jakarta rounded-3xl text-base md:text-xl font-semibold cursor-pointer transition ease-out duration-300"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{item.title}</span>
                                <svg
                                    className={`w-5 h-5 text-gray-500  ${openIndex === index ? 'transform rotate-180' : ''
                                        } transition ease-out duration-300`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div
                                className={`overflow-hidden transition-max-height ease-linear duration-300 text-white ${openIndex === index ? 'max-h-screen ' : 'max-h-0'
                                    }  `}
                            >
                                <div className=' text-sm md:text-base font-inter text-white'>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default FaqSection