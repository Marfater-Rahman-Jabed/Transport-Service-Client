import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/Context';
import { AiOutlineUser } from 'react-icons/ai'
import ReviewPage from './ReviewPage';

const MyReviews = () => {
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            <p>You reviewed in our {reviews.length} service</p>
            <div>
                {
                    reviews.map(review => <ReviewPage

                        key={review._id}
                        review={review}
                    ></ReviewPage>)
                }
            </div>
        </div>
    );
};

export default MyReviews;