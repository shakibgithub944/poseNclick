import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../UserContext/UserContext';
import ReviewRow from '../ReviewRow/ReviewRow';

const MyReviews = () => {
    const [reviews, setReview] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        fetch(`http://localhost:5000/all-reviews/email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                console.log(data);
            })
    }, [user?.email])

    return (
        <div>
            <div className="overflow-x-auto p-12">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Name</th>
                            <th>Your Comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                            ></ReviewRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;