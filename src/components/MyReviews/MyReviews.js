import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/UseTitle';
import { authContext } from '../../UserContext/UserContext';
import ReviewRow from '../ReviewRow/ReviewRow';

const MyReviews = () => {
    useTitle('My Reviews')
    const [reviews, setReview] = useState([]);
    const { user } = useContext(authContext);
    // console.log(reviews)
    useEffect(() => {
        fetch(`http://localhost:5000/all-reviews/email?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReview(data)
                console.log(data);
            })
    }, [user?.email])

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id);
                    setReview(remaining)
                    toast.success('delete success')
                }
            })


    }

    return (
        <div>
            {
                reviews.length ?
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
                                        handleDelete={handleDelete}
                                    ></ReviewRow>)
                                }

                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='text-center m-24 h-screen'><h1 className='text-4xl'>No reviews were added.</h1></div>
            }

        </div>
    );
};

export default MyReviews;