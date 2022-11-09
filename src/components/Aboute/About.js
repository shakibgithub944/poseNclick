import React from 'react';
import about from '../asset/about.jpg'

const About = () => {
    return (
        <div>
            <div className=" border w-full lg:grid grid-cols-2 gap-4 mt-5 card lg:card-side bg-base-100 p-5 ">
                <div>
                    <figure><img className='rounded ' src={about} alt="Album" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Aboute Me</h2>
                    <p>
                        Pose N Click was created by a group of young engineering students of Islamic University of Technology (IUT), lead by Jobayer Hossain Shuvo who chose their passion as their profession and this incident of their life have been pushing them constantly to expand their potentiality.

                        Right now Pose N Click has the highest number of fan following among Bangladeshi wedding photography Facebook pages. Among many other achievements we recognize this as the most important one as it directly indicates how many people are relating with us personally. Their likes and comments inspire us to do better every day.

                        In the last 6 years we have covered more than 6800+ events. Our team is now a strong team of 68 Photographers, cinematographers and Editors. All our photographers are highly educated, most of them are engineers. We have two dedicated branch in Dhaka and Chittagong to meet the demand of clients all over bangladesh. Recently we have taken Pose N Click to an international level by launching our oce in Singapore , Malaysia and Greece specially for the client who want their pre/post wedding abroad.
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;