import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Contexts/Context';
import HeaderLogo from '../Image/HeaderLogo-2.png';
import { AiOutlineUser } from 'react-icons/ai'

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = event => {
        LogOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="navbar bg-sky-400 py-6">
                <div className="navbar-start">
                    <img src={HeaderLogo} className='w-24 h-full' alt="" />
                    <NavLink className=" normal-case mx-1 text-2xl font-bold text-rose-600 " to='/'>Travel Service</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <Link to='/blog' className='mx-3 font-semibold btn btn-ghost normal-case text-xl hover:text-orange-400 '>Blog</Link>
                    {user?.email &&
                        <>
                            <Link to='/myreview' className='mx-3 font-semibold btn btn-ghost normal-case text-xl hover:text-orange-400 '>My Review</Link>
                            <Link className='font-semibold btn btn-ghost normal-case text-xl hover:text-orange-400 ' to='/addservice'>Add Service</Link>
                            {user?.photoURL ? <img src={user?.photoURL} alt="" className='w-12 h-12 rounded-3xl' /> :
                                <AiOutlineUser></AiOutlineUser>}
                            <p className='mx-1  font-semibold normal-case '>{user?.displayName ? <p>{user.displayName.toUpperCase()}</p> : <p>{user.email.substring(0, user.email.lastIndexOf("@")).toUpperCase()}</p>}</p>


                        </>}


                </div>
                <div className="navbar-end">
                    <Link to='/register' className="font-semibold btn btn-ghost hover:bg-blue-700 mx-2">Register</Link>
                    {user?.email ? <Link className="font-semibold btn btn-ghost hover:bg-blue-700" onClick={handleLogOut}>LogOut</Link> :
                        <Link to='/login' className="font-semibold btn btn-ghost hover:bg-blue-700">Login</Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;