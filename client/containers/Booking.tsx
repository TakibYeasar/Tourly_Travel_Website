import React from 'react';

const Booking = () => {
    return (
        <section className="bg-primary-color">
            <div className="container p-8">
                <form action="" className="flex justify-evenly p-8">

                    <div className="grid">
                        <label htmlFor="destination" className="text-base font-normal text-font-light">Search Destination*</label>
                        <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                            className="bg-bg-color py-2 px-4 rounded-full"/>
                    </div>

                    <div className="grid">
                        <label htmlFor="people" className="text-base font-normal text-font-light">Pax Number*</label>
                        <input type="number" name="people" id="people" required placeholder="No.of People" className="bg-bg-color py-2 px-4 rounded-full"/>
                    </div>

                    <div className="grid">
                        <label htmlFor="checkin" className="text-base font-normal text-font-light">Checkin Date**</label>
                        <input type="date" name="checkin" id="checkin" required className="bg-bg-color py-2 px-4 rounded-full"/>
                    </div>

                    <div className="grid">
                        <label htmlFor="checkout" className="text-base font-normal text-font-light">Checkout Date*</label>
                        <input type="date" name="checkout" id="checkout" required className="bg-bg-color py-2 px-4 rounded-full"/>
                    </div>

                    <button type="submit" className="secondary-btn">Inquire now</button>
                </form>

            </div>
        </section>
    )
}

export default Booking