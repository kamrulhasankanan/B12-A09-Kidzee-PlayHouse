import React from 'react';
import { Link } from 'react-router';

const ToyDetailsCard = ({toys}) => {
   
    return (
        <div className='space-y-5'>
            <img className='w-[300px] h-[300px] mx-auto rounded-full' src={toys.pictureURL} alt="" />
            <h2 className='text-2xl font-bold'>{toys.toyName}</h2>
            <h2 className='text-lg font-semibold'>Seller Name: <span className='text-indigo-800'>{toys.sellerName}</span> </h2>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>Email: <span className='text-amber-800'>{toys.sellerEmail}</span></p>
                <p className='font-semibold'>Price- ${toys.price}</p>
                <p className='font-semibold'>Rating: {toys.rating}</p>
                <p className='font-semibold'>Available Qty: {toys.availableQuantity}</p>
            </div>
            <h3 className='font-semibold'>Sub-Category: {toys.subCategory}</h3>
            <p className='text-sm text-gray-500'>{toys.description}</p>
            <Link to="/" className='btn btn-warning hover:btn-success'>Back</Link>
        </div>
    );
};

export default ToyDetailsCard;