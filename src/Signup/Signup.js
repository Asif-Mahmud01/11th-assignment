import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Sign in'/>
                            </div>
                        </form>
                        <p className='text-center'>Already have an account? <Link to='/login' className='text-orange-600 font-bold '>Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;