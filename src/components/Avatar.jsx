import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router';


const Avatar = () => {
    const { user } = useContext(AuthContext);

    const handleLogOut = () => {
        signOut(auth).then(() => {toast.success('Logout successful!');}).catch(err => {toast.error(err)});
    }
    return (
        <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src={user.photoURL} />
                </div>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow">
                <li className='text-primary font-bold'><Link to={"/myprofile"}>{user.displayName}</Link></li>
                <li className='text-red-400 font-semibold' onClick={handleLogOut}><a>Logout</a></li>
            </ul>
            <ToastContainer />
        </div>
    );
};

export default Avatar;