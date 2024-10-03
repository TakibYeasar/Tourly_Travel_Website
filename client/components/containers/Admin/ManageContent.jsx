import React, { useState } from 'react';
import { FaClipboardList, FaCheck, FaTimes, FaCalendarAlt } from 'react-icons/fa';

const ManageContent = () => {
    const [activeTab, setActiveTab] = useState('services');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'services':
                return <ServiceProviderRequests />;
            case 'bookings':
                return <ManageBookings />;
            default:
                return <ServiceProviderRequests />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="px-4 py-5 text-center font-bold text-2xl border-b border-gray-600">
                    Admin Content Manager
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    <button
                        className={`block w-full text-left py-2 px-4 flex items-center hover:bg-gray-700 rounded ${activeTab === 'services' ? 'bg-gray-700' : ''
                            }`}
                        onClick={() => handleTabChange('services')}
                    >
                        <FaClipboardList className="mr-2" /> Service Requests
                    </button>
                    <button
                        className={`block w-full text-left py-2 px-4 flex items-center hover:bg-gray-700 rounded ${activeTab === 'bookings' ? 'bg-gray-700' : ''
                            }`}
                        onClick={() => handleTabChange('bookings')}
                    >
                        <FaCalendarAlt className="mr-2" /> Bookings
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-8 overflow-auto">
                {renderTabContent()}
            </div>
        </div>
    );
};

// Service Provider Requests Component
const ServiceProviderRequests = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Service Provider Requests</h1>
            <p>Approve or reject service provider requests for listing services on the platform.</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Provider</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luxury City Tour</td>
                            <td>Jane Smith</td>
                            <td>Pending Approval</td>
                            <td>
                                <button className="btn btn-sm btn-success flex items-center">
                                    <FaCheck className="mr-1" /> Approve
                                </button>
                                <button className="btn btn-sm btn-error ml-2 flex items-center">
                                    <FaTimes className="mr-1" /> Reject
                                </button>
                            </td>
                        </tr>
                        {/* More service provider requests */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Manage Bookings Component
const ManageBookings = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Manage Bookings</h1>
            <p>Oversee all bookings on the platform and manage their statuses.</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Traveler</th>
                            <th>Service</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#BK-00123</td>
                            <td>John Doe</td>
                            <td>Luxury City Tour</td>
                            <td>Confirmed</td>
                            <td>
                                <button className="btn btn-sm btn-error flex items-center">
                                    <FaTimes className="mr-1" /> Cancel Booking
                                </button>
                            </td>
                        </tr>
                        {/* More bookings */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageContent;
