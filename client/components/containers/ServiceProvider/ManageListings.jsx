import React, { useState } from 'react';

// Sample data for service listings and bookings
const sampleListings = [
    {
        id: 1,
        title: 'Luxury Beach Resort',
        description: 'Enjoy a luxurious stay at our beach resort with stunning ocean views.',
        price: 250,
        bookings: [
            { id: 1, travelerName: 'John Doe', status: 'Pending' },
            { id: 2, travelerName: 'Jane Smith', status: 'Confirmed' },
        ],
    },
    {
        id: 2,
        title: 'Mountain Adventure Tour',
        description: 'Explore the beautiful mountains with our guided adventure tour.',
        price: 150,
        bookings: [
            { id: 3, travelerName: 'Alice Johnson', status: 'Pending' },
        ],
    },
];

const ManageListings = () => {
    const [listings, setListings] = useState(sampleListings);

    const handleBookingResponse = (listingId, bookingId, response) => {
        setListings((prevListings) =>
            prevListings.map((listing) =>
                listing.id === listingId
                    ? {
                        ...listing,
                        bookings: listing.bookings.map((booking) =>
                            booking.id === bookingId ? { ...booking, status: response } : booking
                        ),
                    }
                    : listing
            )
        );
    };

    return (
        <div className="bg-gray-100 p-8 h-full overflow-auto">
            <h1 className="text-2xl font-semibold mb-6">Manage Listings</h1>

            <div className="grid grid-cols-1 gap-6">
                {listings.map((listing) => (
                    <div key={listing.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold">{listing.title}</h2>
                        <p className="text-gray-700 mt-2">{listing.description}</p>
                        <p className="text-lg font-semibold mt-4">Price: ${listing.price}</p>

                        <h3 className="text-lg font-semibold mt-4">Booking Requests:</h3>
                        {listing.bookings.length > 0 ? (
                            <ul className="mt-2">
                                {listing.bookings.map((booking) => (
                                    <li key={booking.id} className="flex justify-between items-center p-2 border-b">
                                        <span>{booking.travelerName}</span>
                                        <span className={`badge ${booking.status === 'Pending' ? 'badge-warning' : 'badge-success'}`}>
                                            {booking.status}
                                        </span>
                                        {booking.status === 'Pending' && (
                                            <div>
                                                <button
                                                    className="btn btn-primary btn-sm mr-2"
                                                    onClick={() => handleBookingResponse(listing.id, booking.id, 'Confirmed')}
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    className="btn btn-error btn-sm"
                                                    onClick={() => handleBookingResponse(listing.id, booking.id, 'Declined')}
                                                >
                                                    Decline
                                                </button>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 mt-2">No booking requests at this time.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageListings;
