import React, { useState } from 'react';
import { FaHotel, FaPlane, FaBriefcase, FaStar, FaUserFriends, FaCaravan } from 'react-icons/fa';

const TDashboard = () => {
    const [activeTab, setActiveTab] = useState('trips');

    const trips = [
        {
            id: 1,
            title: 'Paris City Tour',
            description: 'Explore the beautiful streets of Paris with guided tours.',
            price: '$299',
            rating: 4.8,
        },
        {
            id: 2,
            title: 'Beach Getaway in Cancun',
            description: 'Enjoy a relaxing week on the beautiful beaches of Cancun.',
            price: '$599',
            rating: 4.6,
        },
        {
            id: 3,
            title: 'Mountain Hiking Adventure',
            description: 'Join us for an adventurous hiking trip in the Rockies.',
            price: '$399',
            rating: 4.9,
        },
    ];

    const accommodations = [
        {
            id: 1,
            name: 'Luxury Hotel in New York',
            location: 'New York, USA',
            price: '$150 per night',
            rating: 4.7,
        },
        {
            id: 2,
            name: 'Beach Resort in Maldives',
            location: 'Maldives',
            price: '$300 per night',
            rating: 4.9,
        },
    ];

    const tours = [
        {
            id: 1,
            title: 'Cultural Tour of Rome',
            description: 'Discover the rich history and culture of Rome.',
            price: '$150',
            rating: 4.8,
        },
        {
            id: 2,
            title: 'Safari in Kenya',
            description: 'Experience the wildlife of Kenya with a thrilling safari.',
            price: '$1200',
            rating: 4.9,
        },
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="px-4 py-5 text-center font-bold text-2xl border-b border-gray-600">
                    Traveler Dashboard
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('trips')}
                        className={`flex items-center p-2 rounded-lg w-full text-left ${activeTab === 'trips' ? 'bg-gray-700' : 'hover:bg-gray-700'
                            }`}
                    >
                        <FaPlane className="mr-2" /> Trips
                    </button>
                    <button
                        onClick={() => setActiveTab('accommodations')}
                        className={`flex items-center p-2 rounded-lg w-full text-left ${activeTab === 'accommodations' ? 'bg-gray-700' : 'hover:bg-gray-700'
                            }`}
                    >
                        <FaHotel className="mr-2" /> Accommodations
                    </button>
                    <button
                        onClick={() => setActiveTab('tours')}
                        className={`flex items-center p-2 rounded-lg w-full text-left ${activeTab === 'tours' ? 'bg-gray-700' : 'hover:bg-gray-700'
                            }`}
                    >
                        <FaBriefcase className="mr-2" /> Tours
                    </button>
                    <button
                        onClick={() => setActiveTab('services')}
                        className={`flex items-center p-2 rounded-lg w-full text-left ${activeTab === 'services' ? 'bg-gray-700' : 'hover:bg-gray-700'
                            }`}
                    >
                        <FaCaravan className="mr-2" /> Other Services
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-8 overflow-auto">
                <h1 className="text-2xl font-semibold mb-6">Browse Services</h1>

                {/* Conditional Rendering Based on Active Tab */}
                {activeTab === 'trips' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trips.map((trip) => (
                            <div key={trip.id} className="bg-white shadow-md rounded-lg p-4">
                                <h3 className="text-xl font-bold">{trip.title}</h3>
                                <p className="text-gray-600">{trip.description}</p>
                                <p className="text-lg font-semibold mt-2">{trip.price}</p>
                                <div className="flex items-center mt-2">
                                    <FaStar className="text-yellow-500 mr-1" />
                                    <span>{trip.rating}</span>
                                </div>
                                <button className="btn btn-primary mt-4">Book Now</button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'accommodations' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {accommodations.map((accommodation) => (
                            <div key={accommodation.id} className="bg-white shadow-md rounded-lg p-4">
                                <h3 className="text-xl font-bold">{accommodation.name}</h3>
                                <p className="text-gray-600">{accommodation.location}</p>
                                <p className="text-lg font-semibold mt-2">{accommodation.price}</p>
                                <div className="flex items-center mt-2">
                                    <FaStar className="text-yellow-500 mr-1" />
                                    <span>{accommodation.rating}</span>
                                </div>
                                <button className="btn btn-primary mt-4">Book Now</button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'tours' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tours.map((tour) => (
                            <div key={tour.id} className="bg-white shadow-md rounded-lg p-4">
                                <h3 className="text-xl font-bold">{tour.title}</h3>
                                <p className="text-gray-600">{tour.description}</p>
                                <p className="text-lg font-semibold mt-2">{tour.price}</p>
                                <div className="flex items-center mt-2">
                                    <FaStar className="text-yellow-500 mr-1" />
                                    <span>{tour.rating}</span>
                                </div>
                                <button className="btn btn-primary mt-4">Book Now</button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'services' && (
                    <div className="text-gray-600">
                        <h3 className="text-lg font-bold">Other Services</h3>
                        <p>Manage additional services you might be interested in.</p>
                        {/* Add additional services or a form for new services here in the future */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TDashboard;
