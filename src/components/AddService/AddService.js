import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/UseTitle';

const AddService = () => {
    useTitle('Add service')
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const duration = form.duration.value;
        const picture = form.photourl.value;
        const price = form.price.value;
        const details = form.details.value;
        const service = {
            name,
            duration,
            picture,
            price,
            details
        }
        fetch('https://pose-n-click-server.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Service Successfully Added.')
                }
                console.log(data)
                form.reset()
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='grid grid-cols-3 gap-5 m-12'>
            <div></div>
            <div>
                <form onSubmit={handleAddService}>
                    <div className="">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-400">Package Name</label>
                            <input type="text" name="name" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-400">Working time</label>
                            <input type="text" name="duration" id="username" placeholder="duration" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-400">Picture</label>
                            <input type="text" name="photourl" id="username" placeholder="PhotoUrl" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-400">Price</label>
                            <input type="number" name="price" id="username" placeholder="Price" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                        </div>
                    </div>
                    <div className="space-y-1 text-sm mt-4">
                        <label htmlFor="" className="block dark:text-gray-400">Service details</label>
                        <textarea type="text" name="details" id="username" placeholder="Type service details" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                    </div>
                    <button className='btn mt-3 mb-3'>add to database</button>
                </form>
            </div>
            <div></div>
        </div>
    );
};

export default AddService;