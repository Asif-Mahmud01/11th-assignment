import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { serviceName, customer, price, email, service, img, _id, status, message } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://weadding-ltd-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])


    return (
        <div>
            <div className=" my-10 bg-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                <th >
                    <label >
                        <div className='grid grid-cols-1'>
                        <button onClick={() => handleDelete(_id)} className='btn btn-warning text-2xl my-3 w-60 mt-2'>Delete review</button>
                        <button className='btn btn-warning text-2xl w-60'>Edit review</button>
                        </div>
                    </label>
                </th>
                    <div className="max-w-md">
                        <h1 className="text-2xl">Name: {customer}</h1>
                        <h1 className="text-2xl">Email: {email}</h1>
                        <p className="py-6 text-2xl">Review: {message}</p>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default OrderRow;