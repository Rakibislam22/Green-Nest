import React from 'react';
import { useLoaderData } from 'react-router';
import Plant from '../components/Plant';

const Plants = () => {
    const plants = useLoaderData();

    return (
        <div className='bg-green-50/25'>
            <title>Green Nest - Plants</title>
            <div className='max-w-7xl mx-auto px-3 '>
                <h1 className='text-3xl text-primary font-semibold py-10'>Available Plants ({plants.length})</h1>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>

                        {
                            plants.map(plant => <Plant key={plant.plantId} plant={plant}></Plant>)
                        }

                </div>

            </div>
        </div>

    );
};

export default Plants;