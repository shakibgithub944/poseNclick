import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle';

const ReviewUpdate = () => {
    useTitle('Edit Review')
    const data = useLoaderData();
    // console.log(data._id);

    const [message, setMessage] = useState('')

    const handleReviewUpdate = (id) => {
        // e.preventDefault()
        // const form = e.target;

        // const message = form.name.value;
        console.log(message , id);

        // fetch(`http://localhost:5000/reviews/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(message),

        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })

    }

    const handleOnchange = (e) => {
        const message = e.target.value;
        setMessage(message)
    }

    return (
        <div className='grid grid-cols-3 gap-5 '>
            <div></div>
            <div>
                <form >
                    <div className="space-y-1 text-sm mt-12">
                        <label htmlFor="fullName" className="block dark:text-gray-400">Edit Your Review</label>
                        <input type="text" onChange={handleOnchange} defaultValue={data.message} name="name" id="fullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                    </div>
                    <button onClick={() => handleReviewUpdate(data._id)} className='btn mt-4 mb-4'>Update Review</button>
                </form>
            </div>
            <div></div>
        </div>
    );
};

export default ReviewUpdate;