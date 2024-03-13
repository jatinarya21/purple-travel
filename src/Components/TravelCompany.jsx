import React from 'react'
import traveloka_company from '../Assets/Images/webp/traveloka-company.webp'
import tiket_com from '../Assets/Images/webp/tiket.com.png'
import booking_company from '../Assets/Images/webp/Booking-company.webp'
import trip_advisor from '../Assets/Images/webp/Tripadvisor.webp'
import airbnb_company from '../Assets/Images/webp/Airbnb-company.webp'

const TravelCompany = () => {
    return (
        <div>
            <div className='container mx-auto px-3 md:px-20.5'>
                <div className='company-slider  whitespace-nowrap overflow-hidden md:overflow-auto'>
                    <div className='flex items-center gap-20 justify-center py-16 company-slides'>
                        <img width={140} height={32} className='cursor-pointer' src={traveloka_company} alt="Traveloka-company" />
                        <img width={150} height={32} className='cursor-pointer' src={tiket_com} alt="Ticket.com" />
                        <img width={188.6} height={32} className='cursor-pointer' src={booking_company} alt="Booking.com" />
                        <img width={212} height={32} className='cursor-pointer' src={trip_advisor} alt="Tripadvisor-company" />
                        <img width={102} height={32} className='cursor-pointer' src={airbnb_company} alt="Airbnb-company" />
                        <img width={140} height={32} className='md:hidden cursor-pointer' src={traveloka_company} alt="Traveloka-company" />
                        <img width={150} height={32} className='md:hidden cursor-pointer' src={tiket_com} alt="Ticket.com" />
                        <img width={188.6} height={32} className='md:hidden cursor-pointer' src={booking_company} alt="Booking.com" />
                        <img width={212} height={32} className='md:hidden cursor-pointer' src={trip_advisor} alt="Tripadvisor-company" />
                        <img width={102} height={32} className='md:hidden cursor-pointer' src={airbnb_company} alt="Airbnb-company" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelCompany