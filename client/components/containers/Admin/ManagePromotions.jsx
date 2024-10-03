import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaPlusCircle, FaChartBar } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const ManagePromotions = () => {
    const [promotions, setPromotions] = useState([
        {
            id: 1,
            title: 'Summer Getaway Sale',
            description: '20% off all summer travel bookings',
            startDate: '2024-06-01',
            endDate: '2024-07-31',
        },
        {
            id: 2,
            title: 'Winter Wonderland Deals',
            description: 'Book winter trips with a 15% discount!',
            startDate: '2024-12-01',
            endDate: '2025-01-15',
        },
    ]);

    const { register, handleSubmit, reset } = useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [currentPromotion, setCurrentPromotion] = useState(null);

    const onSubmit = (data) => {
        if (isEditing) {
            setPromotions(
                promotions.map((promo) =>
                    promo.id === currentPromotion.id ? { ...data, id: promo.id } : promo
                )
            );
            setIsEditing(false);
        } else {
            setPromotions([
                ...promotions,
                { ...data, id: promotions.length + 1 },
            ]);
        }
        reset();
    };

    const handleEdit = (promotion) => {
        setIsEditing(true);
        setCurrentPromotion(promotion);
        reset(promotion);
    };

    const handleDelete = (id) => {
        setPromotions(promotions.filter((promo) => promo.id !== id));
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="px-4 py-5 text-center font-bold text-2xl border-b border-gray-600">
                    Promotions
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                        All Promotions
                    </button>
                    <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                        Create Promotion
                    </button>
                    <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                        Campaign Analytics
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-8 overflow-auto">
                <h1 className="text-2xl font-semibold mb-6">Manage Promotions & Campaigns</h1>

                {/* Create / Edit Promotion Form */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-bold mb-4">
                        {isEditing ? 'Edit Promotion' : 'Create New Promotion'}
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Promotion Title
                            </label>
                            <input
                                type="text"
                                {...register('title')}
                                className="input input-bordered w-full"
                                placeholder="Enter promotion title"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Description
                            </label>
                            <textarea
                                {...register('description')}
                                className="textarea textarea-bordered w-full"
                                placeholder="Enter promotion description"
                            ></textarea>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    {...register('startDate')}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    {...register('endDate')}
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary w-full mt-4">
                            {isEditing ? 'Update Promotion' : 'Create Promotion'}
                        </button>
                    </form>
                </div>

                {/* Promotions List */}
                <h2 className="text-xl font-bold mb-4">Current Promotions</h2>
                <div className="space-y-4">
                    {promotions.map((promo) => (
                        <div
                            key={promo.id}
                            className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
                        >
                            <div>
                                <h3 className="text-lg font-bold">{promo.title}</h3>
                                <p className="text-gray-600">{promo.description}</p>
                                <p className="text-gray-500">
                                    {promo.startDate} - {promo.endDate}
                                </p>
                            </div>
                            <div className="flex space-x-3">
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => handleEdit(promo)}
                                >
                                    <FaEdit className="mr-1" /> Edit
                                </button>
                                <button
                                    className="btn btn-error btn-sm"
                                    onClick={() => handleDelete(promo.id)}
                                >
                                    <FaTrashAlt className="mr-1" /> Delete
                                </button>
                                <button className="btn btn-info btn-sm">
                                    <FaChartBar className="mr-1" /> View Analytics
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagePromotions;
