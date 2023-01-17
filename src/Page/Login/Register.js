import React, { useContext } from 'react';
import '../Login/Login.css';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';

const Register = () => {
    const { CreateUser } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.Photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password);

        CreateUser(email, password)
            .then(result => {
                const user = result.user;
                alert('successfully register');
                form.reset();
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (

        <div className='bgcolor'>
            <div className='jabed'>
                <div className="content ">
                    <div>
                        <div className="text text-center">Please Register !!!</div>
                        <form onSubmit={handleSubmit} >
                            <div className="field">
                                <input type="text" name='name' placeholder='Name' required />
                            </div>
                            <div className="field mb-3">
                                <input type="text" name='Photo' placeholder='Photo URL' required />
                            </div>
                            <div className="field mb-3">
                                <input type="email" name='email' placeholder='Email Id' required />
                            </div>
                            <div className="field mb-3">
                                <input type="password" name="password" id="" placeholder='Password' />
                            </div>
                            <span className='text-center' >Already Have an Account? <Link to='/login' className=''>Login</Link> </span>
                            <button className='button'>Register</button>
                        </form>
                        <div className="icon-button">
                            <button className='' ><span className='ms-2 flex flex-row justify-center align-middle gap-2' >
                                <FaGoogle className='mt-1'></FaGoogle><p>Sign Up with Google</p>
                            </span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;