import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ViewPage = () => {

    const details = useLoaderData();
    console.log(details);

    return (
        <div>
            <div>
                <div className="card card-compact mt-5  bg-base-100 shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={details.picture}>
                            <figure><img src={details.picture} alt="Shoes" className='h-52' /></figure>
                            {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                        </PhotoView>
                    </PhotoProvider>

                    <div className="card-body">
                        <h2 className="card-title">{details.name}</h2>
                        <span className='flex flex-row '>
                            <p className='text-orange-500 font-bold text-xl' >Price: {details.price} Per KM</p>
                            <span className='flex flex-row gap-1 justify-center align-middle '><span className='flex flex-row mt-2 text-2xl text-orange-600'><FaStar ></FaStar><FaStar ></FaStar><FaStar ></FaStar></span><p className='font-bold text-4xl text-orange-600'>{details.rating}</p></span>
                        </span>
                        <p>{details.about}</p>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ViewPage;