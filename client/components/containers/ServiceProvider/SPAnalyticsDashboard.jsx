import React, { useState } from 'react';

// Sample data for analytics
const sampleReviews = [
    {
        id: 1,
        travelerName: 'John Doe',
        rating: 5,
        comment: 'Amazing experience! Highly recommend.',
    },
    {
        id: 2,
        travelerName: 'Jane Smith',
        rating: 4,
        comment: 'Great service, but could improve on timing.',
    },
];

const sampleEarnings = [
    { month: 'January', amount: 1200 },
    { month: 'February', amount: 1500 },
    { month: 'March', amount: 1800 },
    { month: 'April', amount: 2000 },
];

const SPAnalyticsDashboard = () => {
    const [reviews] = useState(sampleReviews);
    const [earnings] = useState(sampleEarnings);
    const totalEarnings = earnings.reduce((acc, item) => acc + item.amount, 0);
    const totalBookings = reviews.length; // Example: Count of reviews as bookings

    return (
        <div className="bg-gray-100 p-8 h-full overflow-auto">
            <h1 className="text-2xl font-semibold mb-6">Service Analytics Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Earnings Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Earnings Overview</h2>
                    <p className="text-lg mb-2">Total Earnings: <span className="font-semibold">${totalEarnings}</span></p>
                    <h3 className="text-lg font-semibold">Earnings by Month</h3>
                    <ul className="space-y-2 mt-4">
                        {earnings.map((earning) => (
                            <li key={earning.month} className="flex justify-between">
                                <span>{earning.month}</span>
                                <span>${earning.amount}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Booking Performance Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Booking Performance</h2>
                    <p className="text-lg mb-2">Total Bookings: <span className="font-semibold">{totalBookings}</span></p>
                    <p className="text-gray-500">Track your booking performance over time.</p>
                    <div className="mt-4">
                        <button className="btn btn-secondary">View Detailed Report</button>
                    </div>
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
                {reviews.length > 0 ? (
                    <ul className="space-y-4">
                        {reviews.map((review) => (
                            <li key={review.id} className="border-b pb-2">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-semibold">{review.travelerName}</p>
                                        <p className="text-gray-500">Rating: {review.rating} ⭐</p>
                                    </div>
                                    <span className="text-gray-600">Review ID: {review.id}</span>
                                </div>
                                <p className="mt-1">{review.comment}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No reviews available.</p>
                )}
            </div>
        </div>
    );
};

export default SPAnalyticsDashboard;
