import React from 'react';
import img1 from '../assets/images/team/t-1.jpg'
import img2 from '../assets/images/team/t2.jpg'
import img3 from '../assets/images/team/t-2.jpg'
import img4 from '../assets/images/team/t-4.jpg'


const Team = () => {
    return (
       <div>
        <h1 className='text-center text-2xl font-bold'>Our team</h1>
         <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 my-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Adam Hobs</h2>
                    <p>Professional photographer.</p>
                    
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Merry quin</h2>
                    <p>Professional photographer</p>
                    
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Elezabeth Oelson</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>
        </div>
       </div>
    );
};

export default Team;