import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const CourseDisplayCard = ({ course }) => {

    const { picture, price, name, about, rating } = course;

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
                <p>{about.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default CourseDisplayCard;