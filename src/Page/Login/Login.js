import React, { useContext } from 'react';
import '../Login/Login.css';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';


const Login = () => {

    const { SignIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        SignIn(email, password)
            .then(result => {
                const user = result.user;
                alert('successfully loog in');
                form.reset();
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => console.log(error))

    }

    return (

        <div className='bgcolor'>
            <div className='jabed'>


                <div className="content ">

                    <div>
                        <div className="text text-center">Please LogIn !!! </div>
                        <form onSubmit={handleSubmit}>

                            <div className="field">

                                <input type="email" name='email' placeholder='Email Id' required />

                            </div>
                            <div className="field mb-3">

                                <input type="password" name="password" id="" placeholder='Password' />
                            </div>
                            <span className='text-center' >New In This website? <Link to='/register' className=''>Register</Link> </span>
                            <button className='button'>Log in</button>
                        </form>
                        <div className="icon-button">


                            <button className='' onClick={handleGoogle} ><span className='ms-2 flex flex-row justify-center align-middle gap-2' >
                                <FaGoogle className='mt-1'></FaGoogle><p>Sign in with Google</p>

                            </span></button>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;