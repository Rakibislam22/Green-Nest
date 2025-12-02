import React from 'react';
import { Link } from 'react-router';

const Plant = ({ plant }) => {
    return (
        <div className="rounded-xl p-3 bg-white shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col min-h-[320px]">

            <img
                className="w-full h-48 object-cover object-center rounded-xl"
                src={plant.image}
                alt={plant.plantName}
            />

            <h1 className="text-xl font-semibold py-4 text-center">{plant.plantName}</h1>

            <div className="flex justify-between items-center mb-4">
                <div className="text-primary rounded-3xl bg-[#DCFCE7] py-1 px-2">
                    ⭐ {plant.rating}
                </div>
                <p className="font-bold text-xl">${plant.price}</p>
            </div>

            <Link
                to={`/plant-details/${plant.plantId}`}
                className="btn btn-primary rounded-3xl w-full text-white mt-3"
            >
                View Details
            </Link>
        </div>
    );
};

export default Plant;
