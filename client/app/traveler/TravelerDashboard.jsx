import React, { useState } from 'react';
import { TDashboard, TravelerPaymentManagement, TravelerRecommendations, TravelerReviews } from '../../components';

const TravelerDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('TDashboard');

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    const renderContent = () => {
        switch (activeComponent) {
            case 'TDashboard':
                return <TDashboard />;
            case 'TravelerRecommendations':
                return <TravelerRecommendations />;
            case 'TravelerReviews':
                return <TravelerReviews />;
            case 'TravelerPaymentManagement':
                return <TravelerPaymentManagement />;
            default:
                return <TDashboard />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="px-4 py-5 text-center font-bold text-2xl border-b border-gray-600">
                    Traveler Dashboard
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('TDashboard')}
                    >
                        Browse Trips
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('TravelerRecommendations')}
                    >
                        My Bookings
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('TravelerReviews')}
                    >
                        Saved Trips
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('TravelerPaymentManagement')}
                    >
                        TravelerPaymentManagement
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-8 overflow-auto">
                {renderContent()}
            </div>
        </div>
    );
};

export default TravelerDashboard;
