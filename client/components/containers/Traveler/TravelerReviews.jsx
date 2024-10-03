import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const TravelerReviews = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            service: 'Luxury Hotel Stay',
            rating: 4,
            review: 'Had an amazing experience! The staff was incredibly helpful and the amenities were top-notch.',
        },
        {
            id: 2,
            service: 'City Tour',
            rating: 5,
            review: 'The city tour was fantastic! Our guide was very knowledgeable and made the experience enjoyable.',
        },
    ]);

    const [newReview, setNewReview] = useState({
        service: '',
        rating: 0,
        review: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRatingChange = (value) => {
        setNewReview((prev) => ({
            ...prev,
            rating: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.service && newReview.review && newReview.rating > 0) {
            setReviews((prev) => [
                ...prev,
                { id: prev.length + 1, ...newReview },
            ]);
            setNewReview({ service: '', rating: 0, review: '' });
        }
    };

    return (
        <div className="bg-gray-100 p-8 h-full overflow-auto">
            <h1 className="text-2xl font-semibold mb-6">Leave a Review</h1>

            <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="service">
                        Service Used
                    </label>
                    <input
                        type="text"
                        name="service"
                        id="service"
                        value={newReview.service}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter the service name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Rating</label>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                type="button"
                                key={star}
                                onClick={() => handleRatingChange(star)}
                                className={`text-2xl ${newReview.rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                            >
                                <FaStar />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="review">
                        Review
                    </label>
                    <textarea
                        name="review"
                        id="review"
                        value={newReview.review}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full h-24"
                        placeholder="Write your review here"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit Review
                </button>
            </form>

            <h2 className="text-xl font-semibold mb-4">Your Reviews</h2>
            <div className="space-y-4">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-bold">{review.service}</h3>
                        <div className="flex items-center mb-2">
                            {[...Array(review.rating)].map((_, index) => (
                                <FaStar key={index} className="text-yellow-500" />
                            ))}
                            {[...Array(5 - review.rating)].map((_, index) => (
                                <FaStar key={index} className="text-gray-400" />
                            ))}
                        </div>
                        <p className="text-gray-600">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TravelerReviews;
