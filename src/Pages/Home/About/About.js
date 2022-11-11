import React from 'react';
import box1 from '../../../assets/images/banner/box1.jpeg'
// import box2 from '../../../assets/images/banner/3 (1).jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className='w-1/2 relative'>
                    <img src={box1} className="w-4/5 h-full rounded-lg shadow-2xl" />
                    
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Know about our project</h1>
                        <p className="py-6">We are one of the best photograpy team of Bangladesh. We have done many project.
                        Here are some photos.</p>
                        <button className="btn btn-primary">Click here</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;