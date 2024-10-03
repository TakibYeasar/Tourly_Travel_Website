import React, { useState } from 'react';
import { ManageListings, ServiceListingSubmission, SPAnalyticsDashboard, SPAvailabilityDashboard, SPDashboard, SPPromotionsDashboard } from '../../components';

const ServiceProviderDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('ServiceListingSubmission');

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    const renderContent = () => {
        switch (activeComponent) {
            case 'ServiceListingSubmission':
                return <ServiceListingSubmission />;
            case 'manageListings':
                return <ManageListings />;
            case 'ServiceProviderDashboard':
                return <SPDashboard />;
            case 'analytics':
                return <SPAvailabilityDashboard />;
            case 'reviews':
                return <SPAnalyticsDashboard />;
            case 'discounts':
                return <SPPromotionsDashboard />;
            default:
                return <ServiceListingSubmission />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="px-4 py-5 text-center font-bold text-2xl border-b border-gray-600">
                    Service Provider Dashboard
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('ServiceListingSubmission')}
                    >
                        Submit Listing
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('manageListings')}
                    >
                        Manage Listings
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('ServiceProviderDashboard')}
                    >
                        Booking Requests
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('analytics')}
                    >
                        Service Analytics
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('reviews')}
                    >
                        Customer Reviews
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('discounts')}
                    >
                        Manage Discounts
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


export default ServiceProviderDashboard;
