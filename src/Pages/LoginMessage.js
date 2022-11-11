import React from 'react';
import { Link } from 'react-router-dom';

const LoginMessage = () => {
    return (
        <div>
            <div className="card w-96 bg-orange-50 shadow-xl my-10 mx-auto">
                
                <div className="card-body bg-orange-50">
                    
                    <p>You are not logined. Please <Link className='text-primary' to='/login'>login.</Link></p>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginMessage;