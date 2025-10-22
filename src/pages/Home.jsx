import React, { use, useEffect, useState } from 'react';
import ImageSlider from '../components/ImageSlider';
import Plant from '../components/Plant';
import PlantCareTips from '../components/PlantCareTips';
import PlantsExperts from '../components/PlantsExperts';
import EcoDecorIdeas from '../components/EcoDecorIdeas';

const dataPromis = fetch('/plants.json').then(res => res.json());

const Home = () => {
    const plants = use(dataPromis);
    const [ratedPlants, setRatedPlants] = useState([]);

    useEffect(() => {
        const filteredPlants = plants.filter(plant => plant.rating > 4.8)
        setRatedPlants(filteredPlants);
    }, [plants])


    return (
        <div>
            <ImageSlider></ImageSlider>
            <div className='bg-green-50/25'>
                <div className='max-w-7xl mx-auto p-3'>
                    <h1 className='text-4xl sm:text-5xl text-primary text-center font-semibold pt-30'>Our Top Rated Indoor Plants</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-18'>
                        {
                            ratedPlants.map(plant => <Plant key={plant.id} plant={plant}></Plant>)
                        }
                    </div>
                    <div>
                        <PlantCareTips></PlantCareTips>
                    </div>
                    <div>
                        <PlantsExperts></PlantsExperts>
                    </div>
                    <div>
                        <EcoDecorIdeas></EcoDecorIdeas>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;