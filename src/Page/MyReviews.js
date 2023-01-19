import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/Context';
import { AiOutlineUser } from 'react-icons/ai'
import ReviewPage from './ReviewPage';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('delete data successfully');
                    const remainnig = reviews.filter(revi => revi._id !== _id)
                    // const newReview = [...reviews, remainnig];
                    setReviews(remainnig)
                }
            })
    }
    return (
        <div>
            <p className='text-center py-12 text-3xl font-semibold shadow-xl text-fuchsia-600'>You reviewed in our {reviews.length} service</p>
            <div>
                {
                    reviews.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></MyReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;