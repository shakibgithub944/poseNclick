import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../UserContext/UserContext';

const MyReviews = () => {
    const [reviews, setReview] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        fetch(`http://localhost:5000/all-reviews/email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [user?.email])

    return (
        <div>
            <div className="overflow-x-auto p-12">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Your Comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => <tr
                                key={review._id}
                            >
                                <th>$</th>
                                <td>{review.name}</td>
                                <td>{review.message}</td>
                                <div className='flex items-center'>
                                    <p className='btn btn-outline'>Edit</p>
                                    <p className='btn btn-outline ml-2 text-red-500'>Delete</p>
                                </div>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;