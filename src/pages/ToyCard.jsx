import React from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const {toyName, pictureURL, rating, availableQuantity, price, toyId} = toy;
  return (
    <div className="card bg-base-100 w-64 shadow-sm">
      <figure>
        <img className="w-[150px] h-[150px] rounded-full"
          src={pictureURL}
          alt="thumbnail"
        />
      </figure>
      <div className="space-y-3 p-5">
        <h2 className="card-title">{toyName}</h2>
        <div className="flex justify-between">
            <p className="flex items-center gap-1 font-semibold"><FcRating /> {rating}</p>
            <p className="text-indigo-700 font-semibold"><span className="text-indigo-900">Available Qty:</span> {availableQuantity}</p>
        </div>
        <p className="text-indigo-700 font-bold">$ {price}</p>        
        <div className="card-actions justify-center">
          <Link to={`/card-details/${toyId}`} className="btn btn-warning">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
