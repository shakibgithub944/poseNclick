import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllSurvices = () => {
    const allServices = useLoaderData();

    return (
        <div>
            <div className='text-center text-4xl m-5 text-gray-400'><h1>-------------All Service Here------------</h1></div>
            <div className='m-12 grid grid-cols-3 gap-5'>

                {
                    allServices.map(service => <div
                        className="card w-96 glass"
                        key={service._id}
                    >
                        <figure><img src={service.picture} alt="" className='h-72 w-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.name}</h2>
                            <p>Duration:{service.duration}</p>
                            <p>Details: {service.details.slice(0, 100) + '...'}</p>
                            <p>Price: <span className='font-bold'>{service.price}</span> BDT</p>
                            <div className="card-actions justify-end">
                                <Link to={`/service/${service._id}`} ><button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllSurvices;