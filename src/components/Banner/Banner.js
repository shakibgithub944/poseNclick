import React from 'react';
import { Link } from 'react-router-dom';
import love4 from '../asset/love4.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen">
                <img src={love4} className='w-full' style={{height:'100vh'}} alt="" />
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-4 text-5xl font-bold">Make Memory With <span className='text-yellow-300'>Pose-N-Click</span></h1>
                        <p className="mb-5">Premium Wedding Photography and Cinematography.</p>
                        <Link to='/services'><button className="btn btn-primary">Get Start</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;