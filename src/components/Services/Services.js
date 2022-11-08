import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div className='m-12'>
            <div className='text-center text-4xl m-5 text-gray-400'>------------------Services---------------</div>
            <div className=' grid grid-cols-3 gap-3'>
                {
                    services.map(service => <div
                        className="card w-96 glass"
                        key={service._id}
                    >
                        <figure><img src={service.picture} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.name}</h2>
                            <p>Duration:{service.duration}</p>
                            <p>Details: {service.details.slice(0,100)+'...'}</p>
                            <p>Price: <span className='font-bold'>{service.price}</span> BDT</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='text-center m-5'>
                <Link className='btn btn-ghost' to='/'>See All </Link>
            </div>

        </div>
    );
};

export default Services;