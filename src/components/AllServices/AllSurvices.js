import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';
import useTitle from '../../Hooks/UseTitle';
import Loader from '../Loader/Loader';

const AllSurvices = () => {
    useTitle('Services')
    // const allServices = useLoaderData();
    const [isLoading, setIsLoading] = useState(false);

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        setIsLoading(true);

        fetch('https://pose-n-click-server.vercel.app/all-services')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                console.log(data)
                setAllServices(data)
            })

    }, [])

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div className='text-center text-4xl m-5 text-gray-400'><h1>-------------All Service Here------------</h1></div>
            <div className='m-12 lg:grid grid-cols-3 gap-5'>

                {
                    allServices.map(service => <div
                        className="card w-96 glass shadow-lg"
                        key={service._id}
                    >
                        <PhotoView key={service._id} src={service.picture}>
                            <img className='h-72 w-full' src={service.picture} alt="car!" />
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
        </div>
    );
};

export default AllSurvices;