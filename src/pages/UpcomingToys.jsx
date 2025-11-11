import React from 'react';
import new01 from "../assets/new01.jpg"
import new02 from "../assets/new02.jpg"
import new03 from "../assets/new03.jpg"
import new04 from "../assets/new04.jpg"

const UpcomingToys = () => {
    return (
        <div className='space-y-10'>
            <h2 className='my-8 text-lg font-bold'>Upcoming Toys</h2>
            <img className='w-full object-cover rounded-full' src={new01} alt="" />
            <img className='w-full object-cover rounded-full' src={new02} alt="" />
            <img className='w-full object-cover rounded-full' src={new03} alt="" />
            <img className='w-full object-cover rounded-full' src={new04} alt="" />
        </div>
    );
};

export default UpcomingToys;