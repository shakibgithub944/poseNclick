import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://pose-n-click-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


    return (
        <>
            <div className='m-12'>
                <div className='text-center text-4xl m-5 text-gray-400'>------------------Services---------------</div>


                    <div className=' lg:grid grid-cols-3 gap-3'>
                        {
                            services.map(service => <div
                                className="card w-96 glass shadow-lg"
                                key={service._id}
                            >
                                <PhotoView key={service._id} src={service.picture}>
                                <img className='h-80' src={service.picture} alt="car!" />                                  
                                </PhotoView>
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





                <div className='text-center m-5'>
                    <Link to='/services' className='btn btn-ghost'>See All </Link>
                </div>
            </div>

        </>
    );
};

export default Services;