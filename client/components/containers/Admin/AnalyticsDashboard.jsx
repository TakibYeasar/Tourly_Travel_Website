import React from 'react';
import { FaUsers, FaChartLine, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AnalyticsDashboard = () => {
    // Sample data for analytics
    const userActivityData = [
        { month: 'Jan', users: 400 },
        { month: 'Feb', users: 700 },
        { month: 'Mar', users: 650 },
        { month: 'Apr', users: 800 },
        { month: 'May', users: 900 },
    ];

    const bookingTrendData = [
        { month: 'Jan', bookings: 50 },
        { month: 'Feb', bookings: 120 },
        { month: 'Mar', bookings: 90 },
        { month: 'Apr', bookings: 130 },
        { month: 'May', bookings: 200 },
    ];

    const financialData = [
        { month: 'Jan', revenue: 4000 },
        { month: 'Feb', revenue: 7000 },
        { month: 'Mar', revenue: 6000 },
        { month: 'Apr', revenue: 8000 },
        { month: 'May', revenue: 10000 },
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="px-4 py-5 text-center font-bold text-2xl border-b border-gray-600">
                    Admin Analytics
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    <button className="block w-full text-left py-2 px-4 flex items-center hover:bg-gray-700 rounded">
                        <FaUsers className="mr-2" /> User Activity
                    </button>
                    <button className="block w-full text-left py-2 px-4 flex items-center hover:bg-gray-700 rounded">
                        <FaChartLine className="mr-2" /> Booking Trends
                    </button>
                    <button className="block w-full text-left py-2 px-4 flex items-center hover:bg-gray-700 rounded">
                        <FaDollarSign className="mr-2" /> Financial Reports
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-8 overflow-auto">
                {/* Section for Platform Analytics */}
                <h1 className="text-2xl font-semibold mb-6">Platform Analytics</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Total Users */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Total Users</h2>
                        <div className="text-4xl font-bold text-primary-color">2,500</div>
                        <div className="text-sm text-gray-500">Active Users this month</div>
                    </div>

                    {/* Total Bookings */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Total Bookings</h2>
                        <div className="text-4xl font-bold text-secondary-color">850</div>
                        <div className="text-sm text-gray-500">Completed Bookings</div>
                    </div>

                    {/* Total Revenue */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Total Revenue</h2>
                        <div className="text-4xl font-bold text-tertiary-color">$120,000</div>
                        <div className="text-sm text-gray-500">Revenue This Month</div>
                    </div>
                </div>

                {/* Analytics Graphs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* User Activity Graph */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">User Activity</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={userActivityData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="users" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Booking Trends Graph */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Booking Trends</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={bookingTrendData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="bookings" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Financial Reports Graph */}
                    <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Financial Reports</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={financialData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="revenue" stroke="#28a745" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
