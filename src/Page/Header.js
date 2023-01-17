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
                    {user?.email &&
                        <>
                            <Link to='/myreview' className='mx-3  text-orange-200 font-bold btn btn-ghost normal-case text-xl hover:text-orange-400 '>My Review</Link>
                            <Link className=' text-orange-200 font-bold btn btn-ghost normal-case text-xl hover:text-orange-400 ' to='/addservice'>Add Service</Link>
                            <AiOutlineUser></AiOutlineUser>
                            <p className='mx-1 text-orange-200 font-semibold normal-case '>{user?.displayName ? <p>{user.displayName.toUpperCase()}</p> : <p>{user.email.substring(0, user.email.lastIndexOf("@")).toUpperCase()}</p>}</p>


                        </>}

                </div>
                <div className="navbar-end">
                    <NavLink to='/register' className="btn mx-2">Register</NavLink>
                    {user?.email ? <NavLink className="btn" onClick={handleLogOut}>LogOut</NavLink> :
                        <NavLink to='/login' className="btn">Login</NavLink>
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;