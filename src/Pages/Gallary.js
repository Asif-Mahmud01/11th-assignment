import React from 'react';
import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
import img6 from '../assets/images/banner/6.jpg'
import img7 from '../assets/images/banner/7.jpg'

const Gallary = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
            <div className="card w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={img4} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={img5} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={img6} alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={img7} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default Gallary;