import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseDisplayCard = ({ course }) => {

    const { _id, picture, price, name, about, rating } = course;

    const handleDetails = (_id) => {
        console.log(_id);

    }

    return (

        <div className="card card-compact mt-5  bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={picture}>
                    <figure><img src={picture} alt="Shoes" className='h-52' /></figure>
                    {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <span className='flex flex-row justify-between'>
                    <p className='text-orange-500 font-bold text-xl' >Price: {price} Per KM</p>
                    <span className='flex flex-row gap-1 justify-center align-middle '>
                        <span className='flex flex-row mt-2 text-xl text-orange-600'><FaStar ></FaStar><FaStar ></FaStar><FaStar ></FaStar></span>
                        <p className='font-bold text-2xl text-orange-600 mt-1'>{rating}</p></span>
                </span>
                <p>{about.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/Viewpage/${_id}`}>
                        <button className="btn btn-primary" onClick={() => handleDetails(_id)}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default CourseDisplayCard;