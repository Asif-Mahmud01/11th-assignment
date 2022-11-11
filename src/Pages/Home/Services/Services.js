import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])
    // const  service = services.slice(0, 3)
    
    useEffect(() => {
        fetch('https://weadding-ltd-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            // slice(0, 3))
    }, [])


    return (
        <div>
            <div className='text-center'>
                <div className='my-10'>
                <h2 className='text-5xl font-semibold '>Our services</h2>
                <p mb-5>We are one of the best photograpy team of Bangladesh. We have done many project. Take out services and make your weading enjoyable.</p>
                </div>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            {/* <Link to={`/checkout/${_id}`}> */}
            <button className="btn btn-primary mx-auto my-20 grid justify-center">
            <Link to='/service'>See all</Link>
            </button>
            {/* </Link> */}
        </div>
    );
};

export default Services;