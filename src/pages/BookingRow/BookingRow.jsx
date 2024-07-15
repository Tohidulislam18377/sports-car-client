import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../UseTitle/UseTitle";

const BookingRow = ({ booking, bookings, setBookings }) => {
    const {_id, custerName, details, photo, price, quantity, toyName, ratting } = booking;
        useTitle('BookingRow')
    const handelDelete = (_id)=>{
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-car-server.vercel.app/bookings/${_id}`,{
                    method:"DELETE"
                })
                .then(res =>res.json())
                .then(data=>{
                    if (data.deletedCount > 0) {
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              const remaining = bookings.filter(bk=>bk._id !== _id)
                              setBookings(remaining)
                    }
                }) 
            }
          });
    };

    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>handelDelete(_id)} className="bg-red-600 pl-3 pr-3 text-white pt-1 rounded-3xl pb-1 hover:bg-red-400">Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded h-20 w-28">
                            <img
                                src={photo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm">Quantity: {quantity}</div>
                        <div className="text-sm">Price: ${price}</div>
                        <div className="text-sm"><Rating
                            placeholderRating={ratting}
                            readonly
                            emptySymbol={<FaStarHalfAlt />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        /></div>
                    </div>
                </div>
            </td>
            <td>
                <div className="w-[200px] -ml-16">
                    {details}
                </div>
            </td>
            <td>{custerName}</td>
            <th>
                <Link to={`/update/${_id}`} className="bg-red-600 pl-3 pr-3 text-white pt-1 rounded-3xl pb-1 hover:bg-red-400">Update</Link>
            </th>
        </tr>

    );
};

export default BookingRow;
