import React, { useState } from 'react';
import { FaStar, FaPlaneDeparture, FaBookmark } from 'react-icons/fa';

const TravelerRecommendations = () => {
    // Sample data for personalized recommendations based on previous bookings
    const recommendations = [
        {
            id: 1,
            title: 'Romantic Getaway in Paris',
            description: 'Enjoy a romantic vacation in the City of Love with breathtaking views and fine dining.',
            image: 'https://via.placeholder.com/400x250?text=Paris',
            price: '$899',
            rating: 4.8,
        },
        {
            id: 2,
            title: 'Adventure Trip to the Rockies',
            description: 'Experience the great outdoors with hiking, camping, and breathtaking scenery in the Rockies.',
            image: 'https://via.placeholder.com/400x250?text=Rockies',
            price: '$599',
            rating: 4.5,
        },
        {
            id: 3,
            title: 'Cultural Tour of Tokyo',
            description: 'Immerse yourself in the vibrant culture of Japan with guided tours of historical sites.',
            image: 'https://via.placeholder.com/400x250?text=Tokyo',
            price: '$799',
            rating: 4.7,
        },
    ];

    return (
        <div className="bg-gray-100 p-8 h-full overflow-auto">
            <h1 className="text-2xl font-semibold mb-6">Personalized Recommendations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((recommendation) => (
                    <div key={recommendation.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={recommendation.image} alt={recommendation.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{recommendation.title}</h3>
                            <p className="text-gray-600 mt-1">{recommendation.description}</p>
                            <p className="text-xl font-semibold mt-2">{recommendation.price}</p>
                            <div className="flex items-center mt-2">
                                <FaStar className="text-yellow-500 mr-1" />
                                <span className="text-gray-700">{recommendation.rating}</span>
                            </div>
                            <button className="btn btn-primary mt-4">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TravelerRecommendations;
