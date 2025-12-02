import React from 'react';
import { Link } from 'react-router';

const Plant = ({ plant }) => {
    return (
        <div className="rounded-xl p-5 bg-white shadow-sm hover:shadow-xl transition transform hover:-translate-y-1">
            <img
                className="object-center rounded-xl"
                src={plant.image}
                alt=''
            />

            <h1 className="text-xl font-semibold py-4 ">{plant.plantName}</h1>

            <div className="flex justify-between items-center">
                <div className="text-primary text-lg rounded-3xl bg-[#DCFCE7] py-1 px-2">
                    <p>⭐ {plant.rating}</p>
                </div>
                <div className="font-bold">
                    <p className="pr-2 text-xl">
                       {`$ ${plant.price}`}
                    </p>
                </div>
            </div>

            <Link
                to={`/plant-details/${plant.plantId}#`}
                className="btn btn-primary rounded-3xl w-full my-3 text-white"
            >
                View Details
            </Link>
        </div>
    );
};

export default Plant;