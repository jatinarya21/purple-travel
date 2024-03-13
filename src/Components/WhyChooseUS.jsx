import React from 'react'
import ChooseUsLocationIcon from '../Assets/Images/webp/choose-us-location-icon.webp'
import ChooseUsCreditCardIcon from '../Assets/Images/webp/choose-us-creditcard-icon.webp'
import ChooseUsAeroplaneIcon from '../Assets/Images/webp/choose-us-aeroplane-icon.webp'
import ChooseUsBoatNearHouse from '../Assets/Images/webp/choose-us-boat-near-house.webp'
import ChooseUsCardEllipse from '../Assets/Images/webp/choose-us-ongoing-ellipse.png'
import ChooseUsProgressBar from '../Assets/Images/webp/choose-us-progress-bar.webp'
import ChooseUsHeart from '../Assets/Images/svg/Choose-us-heart.svg'
import PinkStar from '../Assets/Images/svg/pink-star.svg'


const WhyChooseUS = () => {
    return (
        <div id='WhyChooseUs' className='pb-12 xl:pb-[120px] relative'>
            <img className='absolute left-0  top-56 md:top-72 md:left-9' src={PinkStar} alt="Star" />
            <div className='container mx-auto px-3 lg:px-20.5'>
                <div className="flex flex-wrap justify-center items-center lg:justify-between">
                    <div className="lg:w-5/12">
                        <h2 className='text-secondary font-jakarta font-bold text-xl uppercase  tracking-widest text-center lg:text-start'>Why Choose Us</h2>
                        <p className='font-jakarta font-bold text-xl md:text-4xl  xl:text-5.5xl pt-1 md:pt-3.5 text-center lg:text-start'>Book Your Next Trip In 3 Easy  Steps</p>
                        <div className='flex flex-col gap-6 pt-2  md:pt-8'>
                            <div className='flex gap-[18px]'>
                                <img width={70} height={70} className='w-[40px] h-[40px] md:w-[70px] md:h-[70px]' src={ChooseUsLocationIcon} alt="location-icon" />
                                <div className='flex flex-col'>
                                    <h3 className='font-jakarta text-black font-bold text-lg md:text-2xl'>Choose Destination</h3>
                                    <p className='font-inter text-base font-normal text-black pr-2'>Pellentesque mauris enim blandit amet. Et tincidunt et semper hac venenatis dolor.</p>
                                </div>
                            </div>
                            <div className='flex gap-[18px]'>
                                <img width={70} height={70} className='w-[40px] h-[40px] md:w-[70px] md:h-[70px]' src={ChooseUsCreditCardIcon} alt="credit-card-icon" />
                                <div className='flex flex-col'>
                                    <h3 className='font-jakarta text-black font-bold text-lg md:text-2xl'>Make Payment</h3>
                                    <p className='font-inter text-base font-normal text-black pr-2'>Pellentesque mauris enim blandit amet. Et tincidunt et semper hac venenatis dolor.</p>
                                </div>

                            </div>
                            <div className='flex gap-[18px]'>
                                <img width={70} height={70} className='w-[40px] h-[40px] md:w-[70px] md:h-[70px]' src={ChooseUsAeroplaneIcon} alt="DottedAeroplane" />
                                <div className='flex flex-col'>
                                    <h3 className='font-jakarta text-black font-bold text-lg md:text-2xl'>Reach Airport on Selected Date</h3>
                                    <p className='font-inter text-base font-normal text-black pr-2'>Pellentesque mauris enim blandit amet. Et tincidunt et semper hac venenatis dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-6/12 flex justify-center">
                        <div className='p-6 shadow-[0px_4px_16px_0px_#00000018] max-w-[412px]'>
                            <img className='rounded-[18px]' src={ChooseUsBoatNearHouse} alt="BoatNearHouse" />
                            <div className='relative pt-8'>
                                <h3 className='font-jakarta text-black text-xl  font-bold'>Trip To Greece</h3>
                                <p className='font-inter font-regular text-base'>14-29 June| by Robbin Jain</p>
                                <div className='flex gap-1 pt-3.5 pb-8'>
                                    <a href='#'>
                                        <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.75" width="31" height="31" rx="15.5" fill="#F6EFFF" />
                                            <g opacity="0.5">
                                                <path d="M19.459 13.0833C12.334 14.6667 10.6715 19.5513 9.02482 23.6442L10.5211 24.1667L11.2732 22.3458C11.6532 22.4804 12.049 22.5833 12.334 22.5833C21.0423 22.5833 23.4173 9.125 23.4173 9.125C22.6257 10.7083 17.084 10.9062 13.1257 11.6979C9.16732 12.4896 7.58398 15.8542 7.58398 17.4375C7.58398 19.0208 8.9694 20.4062 8.9694 20.4062C11.5423 13.0833 19.459 13.0833 19.459 13.0833Z" fill="#6A14DA" />
                                            </g>
                                        </svg>
                                    </a>
                                    <a href='#'>
                                        <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.75" width="31" height="31" rx="15.5" fill="#F6EFFF" />
                                            <g opacity="0.5" clip-path="url(#clip0_105_2003)">
                                                <path d="M24.2346 10.4361C24.6666 9.24109 23.5086 8.08309 22.3136 8.51609L7.70855 13.7981C6.50955 14.2321 6.36455 15.8681 7.46755 16.5071L12.1296 19.2061L16.2926 15.0431C16.4812 14.8609 16.7338 14.7601 16.996 14.7624C17.2582 14.7647 17.509 14.8699 17.6944 15.0553C17.8798 15.2407 17.9849 15.4915 17.9872 15.7537C17.9895 16.0159 17.8887 16.2685 17.7066 16.4571L13.5436 20.6201L16.2436 25.2821C16.8816 26.3851 18.5176 26.2391 18.9516 25.0411L24.2346 10.4361Z" fill="#6A14DA" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_105_2003">
                                                    <rect width="24" height="24" fill="white" transform="translate(4 4.75)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href='#'>
                                        <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.75" width="31" height="31" rx="15.5" fill="#F6EFFF" />
                                            <g opacity="0.5">
                                                <path d="M16 16.25C15.337 16.25 14.7011 15.9866 14.2322 15.5178C13.7634 15.0489 13.5 14.413 13.5 13.75C13.5 13.087 13.7634 12.4511 14.2322 11.9822C14.7011 11.5134 15.337 11.25 16 11.25C16.663 11.25 17.2989 11.5134 17.7678 11.9822C18.2366 12.4511 18.5 13.087 18.5 13.75C18.5 14.0783 18.4353 14.4034 18.3097 14.7067C18.1841 15.01 17.9999 15.2856 17.7678 15.5178C17.5356 15.7499 17.26 15.9341 16.9567 16.0597C16.6534 16.1853 16.3283 16.25 16 16.25ZM16 6.75C14.1435 6.75 12.363 7.4875 11.0503 8.80025C9.7375 10.113 9 11.8935 9 13.75C9 19 16 26.75 16 26.75C16 26.75 23 19 23 13.75C23 11.8935 22.2625 10.113 20.9497 8.80025C19.637 7.4875 17.8565 6.75 16 6.75Z" fill="#6A14DA" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <span>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.8">
                                                    <path d="M6.375 3.375V5.25H3.5625H0.75V14.625V24H12H23.25V14.625V5.25H20.4375H17.625V3.375V1.5H12H6.375V3.375ZM17.0625 12.75V23.4375H15.6563H14.25V20.9062C14.25 18.7875 14.2875 18.375 14.5313 18.375C14.6813 18.375 14.8125 18.2437 14.8125 18.0938C14.8125 17.85 14.3813 17.8125 12 17.8125C9.61875 17.8125 9.1875 17.85 9.1875 18.0938C9.1875 18.2437 9.31875 18.375 9.46875 18.375C9.7125 18.375 9.75 18.7875 9.75 20.9062V23.4375H8.34375H6.9375V12.75V2.0625H12H17.0625V12.75ZM6.375 12.75V19.6875H3.84375H1.3125V12.75V5.8125H3.84375H6.375V12.75ZM22.6875 12.75V19.6875H20.1562H17.625V12.75V5.8125H20.1562H22.6875V12.75ZM13.5 20.9062V23.4375H12H10.5V20.9062V18.375H12H13.5V20.9062ZM6.375 20.4375C6.375 20.55 5.4 20.625 3.84375 20.625C2.2875 20.625 1.3125 20.55 1.3125 20.4375C1.3125 20.325 2.2875 20.25 3.84375 20.25C5.4 20.25 6.375 20.325 6.375 20.4375ZM22.6875 20.4375C22.6875 20.55 21.7125 20.625 20.1562 20.625C18.6 20.625 17.625 20.55 17.625 20.4375C17.625 20.325 18.6 20.25 20.1562 20.25C21.7125 20.25 22.6875 20.325 22.6875 20.4375ZM6.375 21.375C6.375 21.4875 5.4 21.5625 3.84375 21.5625C2.2875 21.5625 1.3125 21.4875 1.3125 21.375C1.3125 21.2625 2.2875 21.1875 3.84375 21.1875C5.4 21.1875 6.375 21.2625 6.375 21.375ZM22.6875 21.375C22.6875 21.4875 21.7125 21.5625 20.1562 21.5625C18.6 21.5625 17.625 21.4875 17.625 21.375C17.625 21.2625 18.6 21.1875 20.1562 21.1875C21.7125 21.1875 22.6875 21.2625 22.6875 21.375ZM6.375 22.7812V23.4375H3.84375H1.3125V22.7812V22.125H3.84375H6.375V22.7812ZM22.6875 22.7812V23.4375H20.1562H17.625V22.7812V22.125H20.1562H22.6875V22.7812Z" fill="black" />
                                                    <path d="M7.6875 9.65625V16.5H12H16.3125V9.65625V2.8125H12H7.6875V9.65625ZM10.6875 4.03125V4.6875H9.46875H8.25V4.03125V3.375H9.46875H10.6875V4.03125ZM12.5625 4.03125C12.5625 4.63125 12.525 4.6875 12 4.6875C11.475 4.6875 11.4375 4.63125 11.4375 4.03125C11.4375 3.43125 11.475 3.375 12 3.375C12.525 3.375 12.5625 3.43125 12.5625 4.03125ZM15.75 4.03125V4.6875H14.5313H13.3125V4.03125V3.375H14.5313H15.75V4.03125ZM10.6875 5.90625V6.5625H9.46875H8.25V5.90625V5.25H9.46875H10.6875V5.90625ZM12.5625 5.90625C12.5625 6.50625 12.525 6.5625 12 6.5625C11.475 6.5625 11.4375 6.50625 11.4375 5.90625C11.4375 5.30625 11.475 5.25 12 5.25C12.525 5.25 12.5625 5.30625 12.5625 5.90625ZM15.75 5.90625V6.5625H14.5313H13.3125V5.90625V5.25H14.5313H15.75V5.90625ZM10.6875 7.78125V8.4375H9.46875H8.25V7.78125V7.125H9.46875H10.6875V7.78125ZM12.5625 7.78125C12.5625 8.38125 12.525 8.4375 12 8.4375C11.475 8.4375 11.4375 8.38125 11.4375 7.78125C11.4375 7.18125 11.475 7.125 12 7.125C12.525 7.125 12.5625 7.18125 12.5625 7.78125ZM15.75 7.78125V8.4375H14.5313H13.3125V7.78125V7.125H14.5313H15.75V7.78125ZM10.6875 9.65625V10.3125H9.46875H8.25V9.65625V9H9.46875H10.6875V9.65625ZM12.5625 9.65625C12.5625 10.2562 12.525 10.3125 12 10.3125C11.475 10.3125 11.4375 10.2562 11.4375 9.65625C11.4375 9.05625 11.475 9 12 9C12.525 9 12.5625 9.05625 12.5625 9.65625ZM15.75 9.65625V10.3125H14.5313H13.3125V9.65625V9H14.5313H15.75V9.65625ZM10.6875 11.5312V12.1875H9.46875H8.25V11.5312V10.875H9.46875H10.6875V11.5312ZM12.5625 11.5312C12.5625 12.1312 12.525 12.1875 12 12.1875C11.475 12.1875 11.4375 12.1312 11.4375 11.5312C11.4375 10.9312 11.475 10.875 12 10.875C12.525 10.875 12.5625 10.9312 12.5625 11.5312ZM15.75 11.5312V12.1875H14.5313H13.3125V11.5312V10.875H14.5313H15.75V11.5312ZM10.6875 13.4062V14.0625H9.46875H8.25V13.4062V12.75H9.46875H10.6875V13.4062ZM12.5625 13.4062C12.5625 14.0062 12.525 14.0625 12 14.0625C11.475 14.0625 11.4375 14.0062 11.4375 13.4062C11.4375 12.8062 11.475 12.75 12 12.75C12.525 12.75 12.5625 12.8062 12.5625 13.4062ZM15.75 13.4062V14.0625H14.5313H13.3125V13.4062V12.75H14.5313H15.75V13.4062ZM10.6875 15.2812V15.9375H9.46875H8.25V15.2812V14.625H9.46875H10.6875V15.2812ZM12.5625 15.2812C12.5625 15.8812 12.525 15.9375 12 15.9375C11.475 15.9375 11.4375 15.8812 11.4375 15.2812C11.4375 14.6812 11.475 14.625 12 14.625C12.525 14.625 12.5625 14.6812 12.5625 15.2812ZM15.75 15.2812V15.9375H14.5313H13.3125V15.2812V14.625H14.5313H15.75V15.2812Z" fill="black" />
                                                    <path d="M2.625 13.0312V18.9375H3.84375H5.0625V13.0312V7.125H3.84375H2.625V13.0312ZM4.5 8.34375C4.5 8.9625 4.4625 9 3.84375 9C3.225 9 3.1875 8.9625 3.1875 8.34375C3.1875 7.725 3.225 7.6875 3.84375 7.6875C4.4625 7.6875 4.5 7.725 4.5 8.34375ZM4.5 10.2188C4.5 10.8375 4.4625 10.875 3.84375 10.875C3.225 10.875 3.1875 10.8375 3.1875 10.2188C3.1875 9.6 3.225 9.5625 3.84375 9.5625C4.4625 9.5625 4.5 9.6 4.5 10.2188ZM4.5 12.0937C4.5 12.7125 4.4625 12.75 3.84375 12.75C3.225 12.75 3.1875 12.7125 3.1875 12.0937C3.1875 11.475 3.225 11.4375 3.84375 11.4375C4.4625 11.4375 4.5 11.475 4.5 12.0937ZM4.5 13.9688C4.5 14.5875 4.4625 14.625 3.84375 14.625C3.225 14.625 3.1875 14.5875 3.1875 13.9688C3.1875 13.35 3.225 13.3125 3.84375 13.3125C4.4625 13.3125 4.5 13.35 4.5 13.9688ZM4.5 15.8437C4.5 16.4625 4.4625 16.5 3.84375 16.5C3.225 16.5 3.1875 16.4625 3.1875 15.8437C3.1875 15.225 3.225 15.1875 3.84375 15.1875C4.4625 15.1875 4.5 15.225 4.5 15.8437ZM4.5 17.7188C4.5 18.3375 4.4625 18.375 3.84375 18.375C3.225 18.375 3.1875 18.3375 3.1875 17.7188C3.1875 17.1 3.225 17.0625 3.84375 17.0625C4.4625 17.0625 4.5 17.1 4.5 17.7188Z" fill="black" />
                                                    <path d="M18.9375 13.0312V18.9375H20.1562H21.375V13.0312V7.125H20.1562H18.9375V13.0312ZM20.8125 8.34375C20.8125 8.9625 20.775 9 20.1562 9C19.5375 9 19.5 8.9625 19.5 8.34375C19.5 7.725 19.5375 7.6875 20.1562 7.6875C20.775 7.6875 20.8125 7.725 20.8125 8.34375ZM20.8125 10.2188C20.8125 10.8375 20.775 10.875 20.1562 10.875C19.5375 10.875 19.5 10.8375 19.5 10.2188C19.5 9.6 19.5375 9.5625 20.1562 9.5625C20.775 9.5625 20.8125 9.6 20.8125 10.2188ZM20.8125 12.0937C20.8125 12.7125 20.775 12.75 20.1562 12.75C19.5375 12.75 19.5 12.7125 19.5 12.0937C19.5 11.475 19.5375 11.4375 20.1562 11.4375C20.775 11.4375 20.8125 11.475 20.8125 12.0937ZM20.8125 13.9688C20.8125 14.5875 20.775 14.625 20.1562 14.625C19.5375 14.625 19.5 14.5875 19.5 13.9688C19.5 13.35 19.5375 13.3125 20.1562 13.3125C20.775 13.3125 20.8125 13.35 20.8125 13.9688ZM20.8125 15.8437C20.8125 16.4625 20.775 16.5 20.1562 16.5C19.5375 16.5 19.5 16.4625 19.5 15.8437C19.5 15.225 19.5375 15.1875 20.1562 15.1875C20.775 15.1875 20.8125 15.225 20.8125 15.8437ZM20.8125 17.7188C20.8125 18.3375 20.775 18.375 20.1562 18.375C19.5375 18.375 19.5 18.3375 19.5 17.7188C19.5 17.1 19.5375 17.0625 20.1562 17.0625C20.775 17.0625 20.8125 17.1 20.8125 17.7188Z" fill="black" />
                                                </g>
                                            </svg>
                                        </span>
                                        <p className='font-inter text-black text-base'>24 people going</p>
                                    </div>
                                    <img src={ChooseUsHeart} alt="HeartIcon" />
                                </div>
                                <div className='flex gap-2.5 items-center p-[17px] relative  top-5 right-0 sm:absolute sm:top-1 sm:-right-24 shadow-[0px_4px_16px_0px_#00000018]'>
                                    <img width={49} height={49} src={ChooseUsCardEllipse} alt="ProfilePic" />
                                    <div className='flex flex-col'>
                                        <p className='font-inter font-normal text-xs text-black'>Ongoing</p>
                                        <h4 className='font-jakarta font-bold text-base text-black'>Trip To rome</h4>

                                        <div className='pt-4 '>
                                            <p className='font-inter font-normal text-base text-purple-custom'>40% <span className='text-black'>completed</span></p>
                                            <img width={131} height={8} className='mt-1' src={ChooseUsProgressBar} alt="ProgressBar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default WhyChooseUS