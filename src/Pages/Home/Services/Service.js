

import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {

    const [services, setServices] = useState([])
    // const  service = services.slice(0, 3)
    
    useEffect(() => {
        fetch('https://weadding-ltd-server.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

   

    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl font-semibold'>Our service area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla vero placeat vitae sequi aliquam laborum tenetur necessitatibus optio odio!</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
           
        </div>
    );
};

export default Service;