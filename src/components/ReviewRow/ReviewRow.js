import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review }) => {
    const { name, service, message, } = review;
    const [serviceData, setServiceData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/all-services/${service}`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data)
            })
    }, [service])

    return (
        <tr>
            <th>
                <div className='flex items-center'>
                    <img src={serviceData.picture} className='h-12 w-12 mr-2 rounded-lg' alt="" />
                    {serviceData.name}
                </div>
            </th>
            <td>{name}</td>
            <td>{message}</td>
            <div className='flex items-center'>
                <p className='btn btn-outline'>Edit</p>
                <p className='btn btn-outline ml-2 text-red-500'>Delete</p>
            </div>
        </tr>
    );
};

export default ReviewRow;