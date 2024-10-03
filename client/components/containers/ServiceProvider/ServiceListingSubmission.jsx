import React, { useState } from 'react';

const ServiceListingSubmission = () => {
    const [serviceDetails, setServiceDetails] = useState({
        title: '',
        description: '',
        price: '',
        availability: '',
        photos: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setServiceDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setServiceDetails((prev) => ({
            ...prev,
            photos: [...prev.photos, ...files],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., API call)
        console.log('Service submitted:', serviceDetails);
        // Reset form after submission
        setServiceDetails({
            title: '',
            description: '',
            price: '',
            availability: '',
            photos: [],
        });
    };

    return (
        <div className="bg-gray-100 p-8 h-full overflow-auto">
            <h1 className="text-2xl font-semibold mb-6">Submit Service Listing</h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="title">
                        Service Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={serviceDetails.title}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter service title"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={serviceDetails.description}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        placeholder="Enter service description"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="price">
                        Price ($)
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={serviceDetails.price}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter service price"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="availability">
                        Availability
                    </label>
                    <input
                        type="text"
                        name="availability"
                        id="availability"
                        value={serviceDetails.availability}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter availability (e.g., Mon-Fri, 9am - 5pm)"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="photos">
                        Upload Photos
                    </label>
                    <input
                        type="file"
                        name="photos"
                        id="photos"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="file-input file-input-bordered w-full"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit Listing
                </button>
            </form>
        </div>
    );
};

export default ServiceListingSubmission;
