import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'

const MyReviewCard = ({ review, handleDelete }) => {
    const { _id, email, message, photo, name, serviceName } = review;

    return (
        <div className='border-4 rounded-lg p-4 mb-2'>
            <div className='flex flex-row justify-between mb-2'>
                <span className='flex flex-row justify-center align-middle gap-2'>
                    {photo ?
                        <img src={photo} alt="" className='rounded-3xl w-12 h-12' />
                        :
                        <AiOutlineUser></AiOutlineUser>}
                    <span>

                        <p className=''>Email : {email}</p>
                        <p>Service Name:{serviceName}</p>

                    </span>

                </span>
                <span>
                    <button className='px-5 btn btn-ghost' onClick={() => handleDelete(_id)}>X</button>
                    <button className='px-5 btn btn-ghost'>Update</button>
                </span>
            </div>
            <div>
                <p>{message}</p>
            </div>

        </div>
    );
};

export default MyReviewCard;