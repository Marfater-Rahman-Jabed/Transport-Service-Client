import React, { useContext, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { AuthContext } from '../Contexts/Context';
import UpdateModal from './UpdateModal/UpdateModal';

const ReviewPage = ({ review, handleDelete }) => {
    const { user } = useContext(AuthContext)
    const { _id, email, message, photo, name, serviceName } = review;
    const [modalItem, setModalItem] = useState(null);

    return (
        <div className='border-4 rounded-lg p-4 mb-2'>
            <div className='flex flex-row justify-between mb-2'>
                <span className='flex flex-row justify-center align-middle gap-2'>
                    {photo ?
                        <img src={photo} alt="" className='rounded-3xl w-12 h-12' />
                        :
                        <AiOutlineUser></AiOutlineUser>}
                    <span>
                        <p>Name:{name}</p>
                        <p className=''>Email : {email}</p>


                    </span>

                </span>
                <span>
                    <p>Service Name:{serviceName}</p>
                    {user?.email === email ?
                        <span><button className='btn btn-outline btn-sm mx-4' onClick={() => handleDelete(_id)}>Delete</button>
                            <label htmlFor="UpdateModal" className="btn btn-outline btn-sm" onClick={() => setModalItem('x')} >Update</label></span>

                        :
                        <></>}
                </span>
            </div>
            <div>
                <p>{message}</p>
            </div>
            {modalItem && <UpdateModal
                review={review}

                setModalItem={setModalItem}
            ></UpdateModal>}
        </div>
    );
};

export default ReviewPage;