import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, name, service, message, } = review;

    const [serviceData, setServiceData] = useState({});
    useEffect(() => {
        fetch(`https://pose-n-click-server.vercel.app/all-services/${service}`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data)
            })
    }, [service])



    return (
        <tr>
            <th>
                <span className='flex items-center'>
                    <img src={serviceData.picture} className='h-12 w-12 mr-2 rounded-lg' alt="" />
                    {serviceData.name}
                </span>
            </th>
            <td>{name}</td>
            <td>{message}</td>
            <div className='flex items-center'>
                <Link to={`/reviews/${_id}`}>
                    <p className='btn btn-outline'>Edit</p>
                </Link>
                <p onClick={() => handleDelete(_id)} className='btn btn-outline ml-2 text-red-500'>Delete</p>
            </div>
        </tr>
    );
};

export default ReviewRow;