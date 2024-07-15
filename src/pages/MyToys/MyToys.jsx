import { useEffect, useState } from "react";
import BookingRow from "../BookingRow/BookingRow";
import useTitle from "../../UseTitle/UseTitle";

const MyToys = () => {
    const [bookings, setBookings] = useState([]);
    // console.log(bookings);
    useTitle('MyToys')
    const url = `https://sports-car-server.vercel.app/bookings`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [url]);

    return (
            <div className="overflow-x-auto mb-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Photo</th>
                            <th>Details</th>
                            <th>CustomerName</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                bookings={bookings}
                                setBookings={setBookings}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default MyToys;