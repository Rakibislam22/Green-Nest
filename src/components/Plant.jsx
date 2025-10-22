import React from 'react';

const Plant = ({ plant }) => {
    return (
        <div className="rounded-xl p-4 bg-white shadow-sm">
            <img
                className="object-center rounded-xl"
                src={plant.image}
                alt=''
            />

            <h1 className="text-2xl font-semibold py-4 ">{plant.plantName}</h1>

            <div className="flex justify-between items-center">
                <div className="text-primary text-lg rounded-3xl bg-[#DCFCE7] py-2 px-3">
                    <p>☆ {plant.rating}</p>
                </div>
                <div className="font-bold">
                    <p className="pr-2 text-xl">
                       {`$ ${plant.price}`}
                    </p>
                </div>
            </div>

            <button
                
                className="btn btn-primary rounded-3xl w-full my-3 text-white"
            >
                View Details
            </button>
        </div>
    );
};

export default Plant;