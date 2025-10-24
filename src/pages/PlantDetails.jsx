import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../components/Loading";


const PlantDetails = () => {
    const plants = useLoaderData();
    const { id } = useParams();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        const foundPlant = plants.find(p => p.plantId === parseInt(id));
        setPlant(foundPlant);
    }, [id, plants]);

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Consultation booked successfully!");
        e.target.reset();
    };

    if (!plant) {
        return <Loading></Loading>;
    }

    return (
        <div className="pt-10">
            <div className="max-w-4xl mx-auto p-4 bg-green-50/25">

                <div className="flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-lg p-6">
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className="w-full md:w-1/2 h-full object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-center gap-2">
                        <h2 className="text-3xl font-bold text-primary">{plant.plantName}</h2>
                        <p className="text-secondary mt-2">{plant.description}</p>

                        <div className="mt-4 space-y-1 text-primary font-bold text-lg">
                            <p><span className="text-secondary font-semibold pr-1">Price:</span> ${plant.price}</p>
                            <p><span className="text-secondary font-semibold pr-1">Rating:</span> ⭐ {plant.rating}</p>
                            <p><span className="text-secondary font-semibold pr-1">Available Stock:</span> {plant.availableStock}</p>
                            <p><span className="text-secondary font-semibold pr-1">Category:</span> {plant.category}</p>
                            <p><span className="text-secondary font-semibold pr-1">Care Level:</span> {plant.careLevel}</p>
                            <p><span className="text-secondary font-semibold pr-1">Provider:</span> {plant.providerName}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 bg-white shadow-md rounded-lg py-10 px-6 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                        Book Consultation
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 w-full max-w-md"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="bg-[#2f6658] text-white py-2 rounded-lg font-semibold hover:bg-[#28594d] transition duration-200"
                        >
                            Book Now
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default PlantDetails;
