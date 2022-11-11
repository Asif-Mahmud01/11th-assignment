import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price, Details, images } = useLoaderData()
    const { user } = useContext(AuthContext)
    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lasstName.value}`
        const email = user?.email || 'undefined'
        const phone = form.phone.value
        const message = form.message.value

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        fetch('https://weadding-ltd-server.vercel.app/orders/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('review added successfully')
                    
                    form.reset()
                    
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl mt-32 mb-10'>Details{title}</h2>
                <div className="hero min-h-screen" ><img src={images} alt="" />
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="mt-60">
                        <div className="max-w-md">
                            <p className="mb-5 text-white">{Details}</p>
                        </div>
                    </div>
                </div>
                <h4 className='text-center text-2xl font-bold my-10'>Add review</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full " />
                    <input name='lasstName' type="text" placeholder="Last name" className="input input-bordered w-full " />
                    <input name='phone' type="text" placeholder="Your phone" className="input input-bordered w-full " />
                    <input name='email' type="email" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                    <input type="text-area"/>
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                <input  type="submit" value='Add review' className='btn' />
                
            </form>
        </div>
    );
};

export default CheckOut;