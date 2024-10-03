import React, { useState } from 'react';

const TravelerPaymentManagement = () => {
    const [paymentMethods, setPaymentMethods] = useState([
        {
            id: 1,
            cardHolder: 'John Doe',
            cardNumber: '**** **** **** 1234',
            expirationDate: '12/24',
            isDefault: true,
        },
        {
            id: 2,
            cardHolder: 'Jane Smith',
            cardNumber: '**** **** **** 5678',
            expirationDate: '01/26',
            isDefault: false,
        },
    ]);

    const [newPayment, setNewPayment] = useState({
        cardHolder: '',
        cardNumber: '',
        expirationDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPayment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddPaymentMethod = (e) => {
        e.preventDefault();
        if (newPayment.cardHolder && newPayment.cardNumber && newPayment.expirationDate) {
            setPaymentMethods((prev) => [
                ...prev,
                {
                    id: prev.length + 1,
                    ...newPayment,
                    cardNumber: `**** **** **** ${newPayment.cardNumber.slice(-4)}`,
                    isDefault: false,
                },
            ]);
            setNewPayment({ cardHolder: '', cardNumber: '', expirationDate: '' });
        }
    };

    const handleSetDefault = (id) => {
        setPaymentMethods((prev) =>
            prev.map((method) =>
                method.id === id ? { ...method, isDefault: true } : { ...method, isDefault: false }
            )
        );
    };

    return (
        <div className="bg-gray-100 p-8 h-full overflow-auto">
            <h1 className="text-2xl font-semibold mb-6">Payment Management</h1>

            <form onSubmit={handleAddPaymentMethod} className="mb-8 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Add New Payment Method</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="cardHolder">
                        Card Holder Name
                    </label>
                    <input
                        type="text"
                        name="cardHolder"
                        id="cardHolder"
                        value={newPayment.cardHolder}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter card holder name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
                        Card Number
                    </label>
                    <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        value={newPayment.cardNumber}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter card number"
                        maxLength={16}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="expirationDate">
                        Expiration Date (MM/YY)
                    </label>
                    <input
                        type="text"
                        name="expirationDate"
                        id="expirationDate"
                        value={newPayment.expirationDate}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="MM/YY"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Payment Method
                </button>
            </form>

            <h2 className="text-xl font-semibold mb-4">Saved Payment Methods</h2>
            <div className="space-y-4">
                {paymentMethods.map((method) => (
                    <div key={method.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <h3 className="font-bold">{method.cardHolder}</h3>
                            <p className="text-gray-600">{method.cardNumber}</p>
                            <p className="text-gray-600">Expires: {method.expirationDate}</p>
                        </div>
                        <div>
                            <button
                                className={`btn ${method.isDefault ? 'btn-success' : 'btn-outline'}`}
                                onClick={() => handleSetDefault(method.id)}
                            >
                                {method.isDefault ? 'Default Payment' : 'Set as Default'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TravelerPaymentManagement;
