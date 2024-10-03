import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SPAvailabilityDashboard = () => {
    const [date, setDate] = useState(new Date());
    const [blockedDates, setBlockedDates] = useState([]);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    const handleBlockDate = () => {
        const formattedDate = date.toLocaleDateString();
        if (!blockedDates.includes(formattedDate)) {
            setBlockedDates([...blockedDates, formattedDate]);
        }
    };

    return (
        <div className="bg-gray-100 p-8 h-full overflow-auto">
            <h1 className="text-2xl font-semibold mb-6">Manage Availability</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Calendar Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Select a Date</h2>
                    <Calendar
                        onChange={handleDateChange}
                        value={date}
                        tileClassName={({ date }) =>
                            blockedDates.includes(date.toLocaleDateString()) ? 'bg-red-200' : null
                        }
                    />
                    <button
                        onClick={handleBlockDate}
                        className="btn btn-danger mt-4 w-full"
                    >
                        Block Selected Date
                    </button>
                </div>

                {/* Blocked Dates Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Blocked Dates</h2>
                    {blockedDates.length > 0 ? (
                        <ul className="space-y-2">
                            {blockedDates.map((blockedDate, index) => (
                                <li key={index} className="flex justify-between items-center border-b pb-2">
                                    <span>{blockedDate}</span>
                                    <button
                                        onClick={() => setBlockedDates(blockedDates.filter(date => date !== blockedDate))}
                                        className="btn btn-secondary btn-sm"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No blocked dates available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SPAvailabilityDashboard;
