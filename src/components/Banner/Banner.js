import React from 'react';
import banner from '../asset/banner.jpg';

const Banner = () => {
    return (
        <div className=''>
            <div className="relative w-full h-screen">
                {/* <img
                    src={banner}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                /> */}
                <img
                    src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75 h-screen flex items-center justify-center">
                    <h1 className='text-white me-auto text-6xl'>this is header</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;