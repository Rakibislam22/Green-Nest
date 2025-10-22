import React, { use, useEffect, useState } from 'react';

const dataPromis = fetch('/plants.json').then(res => res.json());


const EcoDecorIdeas = () => {
    const plants = use(dataPromis);
    const [ecoIdeas, setRatedPlants] = useState([]);

    useEffect(() => {
        const filteredPlants = plants.filter(plant => plant.rating > 4.7)
        setRatedPlants(filteredPlants);
    }, [plants])
    return (
        <section className="pt-30">
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-primary">
                    Eco Decor Ideas
                </h2>
                <p className="text-secondary mt-3 text-lg max-w-2xl mx-auto">
                    Style your space with nature’s touch — from cozy corners to vibrant
                    workspaces, plants make every area feel alive.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-3">
                {ecoIdeas.map((idea) => (
                    <div
                        key={idea.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                    >
                        <img
                            src={idea.image}
                            alt={idea.title}
                            className="w-full h-56 object-cover rounded-t-xl"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-primary mb-2">
                                {idea.title}
                            </h3>
                            <p className="text-secondary text-sm">{idea.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EcoDecorIdeas;