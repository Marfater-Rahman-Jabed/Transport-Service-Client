import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/Context';
import ReviewPage from './ReviewPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { toast } from 'react-hot-toast';

const ViewPage = () => {

    const details = useLoaderData();
    const location = useLocation();
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
        const message = form.message.value;

        console.log(name, message)

        const reviews = {
            serviceId: details._id,
            serviceName: details.name,
            email: user?.email,
            name,
            message,
            photo: user.photoURL

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
                    toast.success('thanks for reviews our service')
                    form.reset();
                    // const newArray = [...reviews, data.insertedId];

                    // setReviews(newArray);
                }
            })

    }

    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('delete data successfully');
                    const remainnig = reviews.filter(revi => revi._id !== _id)
                    // const newReview = [...reviews, remainnig];
                    setReviews(remainnig)
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


                    {user?.email ?
                        <form onSubmit={handleSubmit}>
                            <p className='text-center py-5 text-2xl font-semibold text-orange-600 '>Put Your  Review Here</p>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered input-secondary w-full max-w-md mb-2" /><br />
                            <textarea name='message' className="textarea textarea-secondary w-full max-w-md mb-2 h-56" placeholder="Text Here Your Message About Our Service"></textarea><br />
                            {/* <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-md mb-2" /> */}
                            {/* <span className='text-center '><button className="btn btn-secondary px-36 mx-4">Reviewed</button></span> */}
                            <button className='w-full max-w-md btn btn-secondary'><input type="submit" value="Reviewed" /></button>
                        </form> :
                        <div>
                            <p className='text-center py-12 text-3xl font-semibold shadow-xl'>Please Login first to  gives review. <br /> <Link to="/login" state={{ from: location }} replace>
                                <u>Login</u></Link></p>


                        </div>
                    }

                </div>
            </div>
            <div>
                <h1 className='text-center p-4 text-3xl font-semibold shadow-xl'>Our Reviews :{reviews.length}</h1>

                {
                    reviews.length > 0 ?
                        <div>
                            {
                                reviews.map(review => <ReviewPage

                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}

                                ></ReviewPage>)

                            }
                        </div>
                        :
                        <p className='text-white text-2xl py-12 border-2 bg-slate-400'>No Reviews yet...</p>}

            </div>
        </div>
    );
};

export default ViewPage;