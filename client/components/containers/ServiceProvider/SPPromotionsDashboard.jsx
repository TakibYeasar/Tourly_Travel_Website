import React, { useState } from 'react';

const SPPromotionsDashboard = () => {
    const [discounts, setDiscounts] = useState([]);
    const [promotionCode, setPromotionCode] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(0);

    const handleAddDiscount = (e) => {
        e.preventDefault();
        const newDiscount = {
            code: promotionCode,
            percentage: discountPercentage,
            id: discounts.length + 1, // Unique ID for the discount
        };
        setDiscounts([...discounts, newDiscount]);
        setPromotionCode('');
        setDiscountPercentage(0);
    };

    return (
        <div className="bg-gray-100 p-8 h-full overflow-auto">
            <h1 className="text-2xl font-semibold mb-6">Manage Discounts and Promotions</h1>

            {/* Add New Promotion Form */}
            <form onSubmit={handleAddDiscount} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-xl font-bold mb-4">Add New Promotion</h2>
                <div className="mb-4">
                    <label htmlFor="promotionCode" className="block mb-1">
                        Promotion Code
                    </label>
                    <input
                        type="text"
                        id="promotionCode"
                        value={promotionCode}
                        onChange={(e) => setPromotionCode(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="discountPercentage" className="block mb-1">
                        Discount Percentage
                    </label>
                    <input
                        type="number"
                        id="discountPercentage"
                        value={discountPercentage}
                        onChange={(e) => setDiscountPercentage(Number(e.target.value))}
                        className="input input-bordered w-full"
                        min="1"
                        max="100"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Promotion
                </button>
            </form>

            {/* Existing Discounts Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Current Discounts</h2>
                {discounts.length > 0 ? (
                    <ul className="space-y-4">
                        {discounts.map((discount) => (
                            <li key={discount.id} className="flex justify-between items-center border-b pb-2">
                                <div>
                                    <p className="font-semibold">{discount.code}</p>
                                    <p className="text-gray-500">Discount: {discount.percentage}%</p>
                                </div>
                                <button className="btn btn-secondary btn-sm">Edit</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No discounts available.</p>
                )}
            </div>
        </div>
    );
};

export default SPPromotionsDashboard;
