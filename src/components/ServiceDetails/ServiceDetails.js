import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/UseTitle';
import { authContext } from '../../UserContext/UserContext';


const ServiceDetails = () => {
    useTitle('Service Details')
    const [reviews, setReview] = useState([])
    const serviceDetails = useLoaderData();
    const { user } = useContext(authContext);

    useEffect(() => {
        fetch(`https://pose-n-click-server.vercel.app/all-reviews?service=${serviceDetails._id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [serviceDetails._id])

    const handleFormSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = user?.displayName || 'Name Not Found';
        const email = user?.email || 'Email N/A';
        const picture = user?.photoURL || 'N/A';
        const message = form.review.value;

        const review = {
            service: serviceDetails._id,
            email,
            name,
            picture,
            message
        }
        fetch('https://pose-n-click-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    const newReview = [...reviews, review]
                    console.log(newReview)
                    setReview(newReview)
                }
                form.reset()
                
            })
            .catch(err => console.log(err))

    }

    const notify = () => {
        toast.success('Thank for buying.....')
    };

    return (
        <div>
            <div>
                <div className="card lg:card-side bg-base-100 w-full p-12">
                    <figure><img src={serviceDetails.picture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{serviceDetails.name}</h2>
                        <p>{serviceDetails.details}</p>
                        <p>Duration:{serviceDetails.duration}</p>
                        <p>Price: <span className='font-bold'>{serviceDetails.price}</span> BDT</p>
                        <div className="card-actions justify-end">
                            <button onClick={notify} className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                user?.email ?
                    <div className='m-12 lg:grid grid-cols-2 gap-5'>
                        <div className='border grid grid-cols-2 gap-5'>
                            {
                                reviews.map(review => <div
                                    key={review._id}
                                    className='flex items-center p-3'
                                >
                                    <div className='h-8 w-8 m-3 '><img className='rounded-full' src={review.picture} alt="" /></div>
                                    <div>
                                        <p className='font-bold'>{review.name}</p>
                                        <p className=''>{review.message}</p>
                                    </div>
                                </div>)
                            }

                        </div>
                        <div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block dark:text-gray-400">Email</label>
                                    <input type="email" name="email" defaultValue={user?.email} id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" readOnly />
                                </div>
                                <div className="space-y-1 text-sm mt-4">
                                    <label htmlFor="" className="block dark:text-gray-400">Type Your Review</label>
                                    <textarea type="text" name="review" id="username" placeholder="Type your message" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" />
                                </div>
                                <button className='btn'>Send</button>
                            </form>
                        </div>
                    </div>
                    :

                    <div className='text-center m-24'>
                        <h1 className='text-4xl'> Please <Link className='underline text-blue-400' to='/login'>Login</Link>  to add a review</h1>
                    </div>
            }

        </div>
    );
};

export default ServiceDetails;