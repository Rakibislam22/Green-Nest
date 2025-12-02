import React from "react";
import { Link } from "react-router";

const PlantOfTheWeek = () => {
  const plant = {
    name: "Monstera Deliciosa",
    image: "https://i.ibb.co.com/pv3cKmh9/img6.webp",
    description:
      "Known as the Swiss Cheese Plant, Monstera Deliciosa brings a bold, tropical vibe to your home with its iconic split leaves and easygoing nature.",
    price: 35,
    rating: 4.9,
  };

  return (
    <section className="pb-15 pt-30 relative max-w-7xl mx-auto bg-green-50/30 px-3 rounded-2xl overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-transparent to-green-50 opacity-60"></div>

      <div className="relative flex flex-col lg:flex-row items-start justify-between gap-10">

        <div className="flex-1 text-center lg:text-left space-y-5">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2f6658]">
            Plant of the Week
          </h2>

          <h3 className="text-3xl font-semibold text-gray-800">
            {plant.name}
          </h3>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            {plant.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-lg text-gray-700">
            <p>
              <span className="font-semibold text-[#2f6658]">Price:</span> ${plant.price}
            </p>
            <p>
              <span className="font-semibold text-[#2f6658]">Rating:</span> ⭐ {plant.rating}
            </p>
          </div>

          <Link to={"/plant-details/6"} className="mt-5 bg-[#2f6658] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#28594d] transition">
            Learn More
          </Link>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
