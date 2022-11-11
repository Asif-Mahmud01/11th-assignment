import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import photographyLogo from '../../assets/images/logo/photography-logo.jpg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/Firebase-config';
import { FaGoogle, FaSignOutAlt } from 'react-icons/fa';

const auth = getAuth(app)

const Header = () => {

    const googleProvider = new GoogleAuthProvider()

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(err => console.log(err))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

        {
            user?.email ?
                <>
                    <li><Link to='/orders'>Review</Link></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
        {/* <li><Link to='/login'>Login</Link></li> */}
        <li><Link to='/service'>service</Link></li>
        <li><Link to='/gallary'>Gallary</Link></li>
    </>

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="navbar h-20 mb-20 pt-12  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl w-40">
                        <img className='rounded-full w-24' src={photographyLogo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className='grid grid-cols-1 gap-4 ml-20'>
                <div className="navbar-end">
                    <button onClick={handleGoogleSignIn} className="btn btn-warning lg:w-60 w-40 gap-2">Sign in with Google <FaGoogle/></button>
                </div>
                <div className="navbar-end">
                    <button onClick={handleLogout} className="btn btn-warning w-52 g-3">Log out <FaSignOutAlt/></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;