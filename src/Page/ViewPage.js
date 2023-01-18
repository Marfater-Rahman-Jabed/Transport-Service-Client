import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/Context';

const ViewPage = () => {

    const details = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(details);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review/${details._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [details._id])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const serviceName = form.serviceName.value;
        const message = form.message.value;

        console.log(name, email, serviceName, message)

        const reviews = {
            serviceId: details._id,
            serviceName,
            email,
            name,
            message

        }

        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('thanks for reviews our service')
                    form.reset();
                }
            })

    }

    return (
        <div>
            <div className='flex flex-row  gap-5'>
                <div className='w-1/2'>
                    <div className="card card-compact mt-5  bg-base-100 shadow-xl">
                        <PhotoProvider>
                            <PhotoView src={details.picture}>
                                <figure><img src={details.picture} alt="Shoes" className='h-52 w-full' /></figure>
                                {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                            </PhotoView>
                        </PhotoProvider>

                        <div className="card-body">
                            <h2 className="card-title">{details.name}</h2>
                            <span className='flex flex-row justify-between'>
                                <p className='text-orange-500 font-bold text-xl' >Price: {details.price} Per KM</p>
                                <span className='flex flex-row gap-1 justify-center align-middle '><span className='flex flex-row mt-2 text-2xl text-orange-600'><FaStar ></FaStar><FaStar ></FaStar><FaStar ></FaStar></span><p className='font-bold text-4xl text-orange-600 mt-1'>{details.rating}</p></span>
                            </span>
                            <p>{details.about}</p>

                        </div>
                    </div>
                </div>
                <div className='w-1/2  gap-3 mt-5'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered input-secondary w-full max-w-md mb-2" /><br />
                        <input type="text" name='email' defaultValue={user?.email} readOnly className="input input-bordered input-secondary w-full max-w-md mb-2" /><br />
                        <input type="text" name='serviceName' defaultValue={details.name}
                            readOnly className="input input-bordered input-secondary w-full max-w-md mb-2" /><br />
                        <textarea name='message' className="textarea textarea-secondary w-full max-w-md mb-2 h-56" placeholder="Text Here Your Message About Our Service"></textarea><br />
                        {/* <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-md mb-2" /> */}
                        {/* <span className='text-center '><button className="btn btn-secondary px-36 mx-4">Reviewed</button></span> */}
                        <button className='w-full'><input type="submit" value="Reviewed" className='btn btn-secondary ' /></button>
                    </form>

                </div>
            </div>
            <div>
                <h1>Our Reviews :{reviews.length}</h1>

            </div>
        </div>
    );
};

export default ViewPage;