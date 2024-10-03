import React, { useState } from 'react';

// Sample data for bookings and service pricing
const sampleBookings = [
    {
        id: 1,
        travelerName: 'John Doe',
        serviceTitle: 'Luxury Beach Resort',
        bookingDate: '2024-09-15',
        status: 'Confirmed',
    },
    {
        id: 2,
        travelerName: 'Jane Smith',
        serviceTitle: 'Mountain Adventure Tour',
        bookingDate: '2024-09-18',
        status: 'Pending',
    },
];

const SPDashboard = () => {
    const [price, setPrice] = useState(250); // Sample initial price for a service
    const [message, setMessage] = useState('');
    const [bookings, setBookings] = useState(sampleBookings);

    const handleMessageSend = () => {
        // Here you would handle sending the message to the traveler (not implemented)
        alert(`Message sent: ${message}`);
        setMessage('');
    };

    return (
        <div className="bg-gray-100 p-8 h-full overflow-auto">
            <h1 className="text-2xl font-semibold mb-6">Service Provider Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bookings Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Bookings</h2>
                    {bookings.length > 0 ? (
                        <ul className="space-y-4">
                            {bookings.map((booking) => (
                                <li key={booking.id} className="flex justify-between items-center p-4 border-b">
                                    <div>
                                        <p className="font-semibold">{booking.travelerName}</p>
                                        <p className="text-gray-500">{booking.serviceTitle}</p>
                                        <p className="text-gray-500">Date: {booking.bookingDate}</p>
                                    </div>
                                    <span className={`badge ${booking.status === 'Pending' ? 'badge-warning' : 'badge-success'}`}>
                                        {booking.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No bookings at this time.</p>
                    )}
                </div>

                {/* Pricing Adjustment Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Adjust Pricing</h2>
                    <div className="flex items-center">
                        <label htmlFor="price" className="mr-2">Service Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="input input-bordered w-24 mr-2"
                        />
                        <span className="text-gray-700">USD</span>
                    </div>
                    <button className="btn btn-primary mt-4">Update Price</button>
                </div>
            </div>

            {/* Messaging Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                <h2 className="text-xl font-bold mb-4">Communicate with Travelers</h2>
                <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                    className="btn btn-primary mt-4"
                    onClick={handleMessageSend}
                >
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default SPDashboard;
