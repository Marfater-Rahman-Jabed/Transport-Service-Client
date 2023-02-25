import React from 'react';
import { toast } from 'react-hot-toast';

const AddService = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const picture = form.picture.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const message = form.message.value;

        console.log(serviceName, picture, price, rating, message)

        const serviceItem = {
            name: serviceName,
            picture,
            price,
            rating,
            about: message
        }

        fetch(`http://localhost:5000/service`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(serviceItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('successfully Added');
                    form.reset();
                }
            })

    }
    return (
        <div className='text-center pb-4 pt-4 bg-sky-500'>
            <p className='text-center py-4 mb-2 text-3xl font-semibold shadow-xl'>Add New Service Here...</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name='serviceName' placeholder="Service Name" className="input input-bordered input-secondary w-full max-w-md mb-2" /><br />
                <input type="text" name='picture' placeholder='Photo' className="input input-bordered input-secondary w-full max-w-md mb-2" /><br />
                <input type="text" name='price' placeholder='Price' className="input input-bordered input-secondary w-full max-w-md mb-2" /><br />
                <input type="text" name='rating' placeholder='Rating' className="input input-bordered input-secondary w-full max-w-md mb-2" /><br />

                <textarea name='message' className="textarea textarea-secondary w-full max-w-md mb-2 h-56" placeholder="Text Here Your Message About Our Service"></textarea><br />

                <button className='w-full max-w-md btn btn-secondary '><input type="submit" value="Reviewed" /></button>
            </form>
        </div>
    );
};

export default AddService;