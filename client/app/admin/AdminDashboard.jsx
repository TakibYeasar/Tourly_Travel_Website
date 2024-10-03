import React, { useState } from 'react';
import { AnalyticsDashboard, ManageContent, ManagePromotions, ManageReviews } from '../../components';

const AdminDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('ManageContent');

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    const renderContent = () => {
        switch (activeComponent) {
            case 'ManageContent':
                return <ManageContent />;
            case 'AnalyticsDashboard':
                return <AnalyticsDashboard />;
            case 'ManageReviews':
                return <ManageReviews />;
            case 'ManagePromotions':
                return <ManagePromotions />;
            default:
                return <ManageContent />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="px-4 py-5 text-center font-bold text-2xl border-b border-gray-600">
                    Admin Dashboard
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('ManageContent')}
                    >
                        ManageContent
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('AnalyticsDashboard')}
                    >
                        User Management
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('ManageReviews')}
                    >
                        Service Listings
                    </button>
                    <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => handleComponentChange('ManagePromotions')}
                    >
                        ManagePromotions
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

export default AdminDashboard;
