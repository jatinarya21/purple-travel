import React, { useState } from 'react'
import { AccordionCloseArrow, AccordionOpenArrow, FaqAeroplane, PurpleStar } from './common/Icons';

const FaqSection = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='pb-12  xl:pb-64 relative '>
            <span className='absolute right-0 xl:right-32 top-6 sm:-top-10 '><FaqAeroplane /></span>
            <span className='absolute left-10 top-14 md:top-24'><PurpleStar /></span>
            <span className='absolute right-16 bottom-[33%]'><PurpleStar /></span>
            <div className="max-w-[940px] mx-auto px-3">
                <h5 className='text-secondary font-jakarta font-bold text-xl text-center tracking-[0.2em] md:mb-3.5'>FAQ</h5>
                <h3 className='font-jakarta font-bold text-black text-xl lg:text-5.5xl text-center capitalize'>Still have any query?</h3>
                <div className='mt-[52px]'>
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
                                {openIndex === index ? (
                                    <AccordionCloseArrow />
                                ) : (
                                    <AccordionOpenArrow />
                                )}
                            </div>
                            <div
                                className={`overflow-hidden transition-max-height ease-linear duration-300 text-white ${openIndex === index ? 'max-h-screen ' : 'max-h-0'
                                    }  `}
                            >
                                <div className=' text-sm md:text-base font-inter text-white opacity-80 pt-2.5'>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;

