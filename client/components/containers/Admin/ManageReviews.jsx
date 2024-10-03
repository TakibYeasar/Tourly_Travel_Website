import React from 'react';
import { FaStar, FaTrashAlt, FaCheckCircle } from 'react-icons/fa';

const ManageReviews = () => {
    // Sample data for reviews, ratings, and customer feedback
    const reviews = [
        {
            id: 1,
            username: 'John Doe',
            rating: 4,
            review: 'Amazing experience! The trip was well organized and the service was excellent.',
            status: 'Pending',
        },
        {
            id: 2,
            username: 'Jane Smith',
            rating: 5,
            review: 'Absolutely loved it! I would recommend this to anyone.',
            status: 'Approved',
        },
        {
            id: 3,
            username: 'Alex Johnson',
            rating: 3,
            review: 'Good service, but there were some minor issues with the accommodations.',
            status: 'Rejected',
        },
    ];

    // Function to approve a review
    const approveReview = (id) => {
        console.log(`Approved review with id ${id}`);
        // Add logic to handle approving a review in the backend
    };

    // Function to reject a review
    const rejectReview = (id) => {
        console.log(`Rejected review with id ${id}`);
        // Add logic to handle rejecting a review in the backend
    };

    // Function to delete a review
    const deleteReview = (id) => {
        console.log(`Deleted review with id ${id}`);
        // Add logic to handle deleting a review in the backend
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="px-4 py-5 text-center font-bold text-2xl border-b border-gray-600">
                    Manage Reviews
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                        All Reviews
                    </button>
                    <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                        Pending Reviews
                    </button>
                    <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                        Approved Reviews
                    </button>
                    <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                        Rejected Reviews
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-8 overflow-auto">
                <h1 className="text-2xl font-semibold mb-6">Customer Reviews</h1>

                <div className="space-y-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white shadow-md rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-lg font-bold text-gray-800">{review.username}</h2>
                                    <p className="text-sm text-gray-500">Rating:
                                        {[...Array(review.rating)].map((star, i) => (
                                            <FaStar key={i} className="text-yellow-500 inline-block ml-1" />
                                        ))}
                                    </p>
                                </div>
                                <div className="flex space-x-3">
                                    {review.status === 'Pending' && (
                                        <>
                                            <button
                                                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 flex items-center"
                                                onClick={() => approveReview(review.id)}
                                            >
                                                <FaCheckCircle className="mr-1" /> Approve
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 flex items-center"
                                                onClick={() => rejectReview(review.id)}
                                            >
                                                <FaTrashAlt className="mr-1" /> Reject
                                            </button>
                                        </>
                                    )}
                                    <button
                                        className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600 flex items-center"
                                        onClick={() => deleteReview(review.id)}
                                    >
                                        <FaTrashAlt className="mr-1" /> Delete
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-2">{review.review}</p>
                            <div className={`text-sm font-semibold ${review.status === 'Pending' ? 'text-yellow-500' :
                                    review.status === 'Approved' ? 'text-green-500' : 'text-red-500'
                                }`}>
                                Status: {review.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageReviews;
