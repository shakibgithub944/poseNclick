import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();

    return (
        <div>
            <div>
                <div className="card lg:card-side bg-base-100 w-full p-12">
                    <figure><img src={serviceDetails.picture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{serviceDetails.name}</h2>
                        <p>{serviceDetails.details}</p>
                        <p>Duration:{serviceDetails.duration}</p>
                        <p>Price: <span className='font-bold'>{serviceDetails.price}</span> BDT</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;