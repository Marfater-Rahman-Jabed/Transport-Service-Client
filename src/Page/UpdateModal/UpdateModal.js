import React from 'react';
import { toast } from 'react-hot-toast';

const UpdateModal = ({ review, setModalItem }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        // console.log(message, reviewId)
        const updateElement = {
            message
        }

        fetch(`http://localhost:5000/updateReview/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateElement)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Successfully Updated your Review')
                    setModalItem(null)
                }
            })

    }
    return (
        <div>

            <input type="checkbox" id="UpdateModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="UpdateModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">Please Update Your Review here</h3>
                    <form className='text-center' onSubmit={handleSubmit}>
                        <textarea name='message' className="textarea textarea-secondary w-full max-w-md mb-2 h-56" placeholder="Text Here Your Message About Our Service" defaultValue={review.message}></textarea>
                        <input type="submit" value="Submit" className='btn btn-success ' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;