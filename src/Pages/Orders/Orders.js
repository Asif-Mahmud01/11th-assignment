import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';
import { toast } from 'react-toastify';

const Orders = () => {

    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://weadding-ltd-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure??')
        if(proceed){
            fetch(`https://weadding-ltd-server.vercel.app/orders/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    toast.success('deleted successfully')
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining)
                }
            })
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`https://weadding-ltd-server.vercel.app/orders/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id)
                const approving = orders.find(odr => odr._id !== id )
                approving.status = 'Approved'
                const newOrders = [ approving, ...remaining]
                setOrders(newOrders)
            }
        })
    }

    return (
        <div>
                  {
                            orders.map(order => <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                    
        </div>
    );
};

export default Orders;