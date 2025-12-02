import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Plant from '../components/Plant';

const Plants = () => {
    const plants = useLoaderData();

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(200);

    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(5);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredPlants, setFilteredPlants] = useState(plants);

    const categoryOptions = [...new Set(plants.map(p => p.category))];

    useEffect(() => {
        let result = plants;

        result = result.filter(
            p => p.price >= minPrice && p.price <= maxPrice
        );

        result = result.filter(
            p => p.rating >= minRating && p.rating <= maxRating
        );

        if (selectedCategories.length > 0) {
            result = result.filter(p =>
                selectedCategories.includes(p.category)
            );
        }

        setFilteredPlants(result);
    }, [minPrice, maxPrice, minRating, maxRating, selectedCategories, plants]);

    // Toggle category
    const toggleCategory = (cat) => {
        setSelectedCategories(prev =>
            prev.includes(cat)
                ? prev.filter(c => c !== cat)
                : [...prev, cat]
        );
    };

    return (
        <div className="bg-green-50/25">
            <title>Green Nest - Plants</title>

            <div className="max-w-7xl mx-auto px-3 py-10 grid lg:grid-cols-4 gap-8 ">

                {/* FILTER SIDEBAR */}
                <div className="bg-white shadow p-5 rounded-lg h-max space-y-10 lg:sticky lg:top-20">

                    {/* PRICE INPUT FILTER */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Price Range</h2>

                        <div className="flex justify-between gap-3">
                            <input
                                type="number"
                                value={minPrice}
                                min="0"
                                max="200"
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className="border p-2 rounded w-24"
                            />

                            <input
                                type="number"
                                value={maxPrice}
                                min="0"
                                max="200"
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="border p-2 rounded w-24"
                            />
                        </div>
                    </div>

                    {/* RATING INPUT FILTER */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Rating</h2>

                        <div className="flex justify-between gap-3">
                            <input
                                type="number"
                                value={minRating}
                                min="0"
                                max="5"
                                step="0.1"
                                onChange={(e) => setMinRating(Number(e.target.value))}
                                className="border p-2 rounded w-24"
                            />

                            <input
                                type="number"
                                value={maxRating}
                                min="0"
                                max="5"
                                step="0.1"
                                onChange={(e) => setMaxRating(Number(e.target.value))}
                                className="border p-2 rounded w-24"
                            />
                        </div>
                    </div>

                    {/* CATEGORY FILTER */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Category</h2>

                        {categoryOptions.map(cat => (
                            <label key={cat} className="flex items-center gap-2 mb-1 text-sm">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => toggleCategory(cat)}
                                />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>

                {/* PLANTS GRID */}
                <div className="lg:col-span-3 relative">

                    <h1 className="text-2xl text-primary font-semibold mb-5">
                        Available Plants ({filteredPlants.length})
                    </h1>

                    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5 ">
                        {filteredPlants.length > 0 ? (
                            filteredPlants.map(plant => (
                                <Plant key={plant.plantId} plant={plant} />
                            ))
                        ) : (
                            <p className="text-center text-2xl text-primary col-span-full">
                                No plants match your filters
                            </p>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Plants;
