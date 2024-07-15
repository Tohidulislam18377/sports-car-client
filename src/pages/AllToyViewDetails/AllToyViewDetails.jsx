
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../UseTitle/UseTitle";

const AllToyViewDetails = () => {
    const data = useLoaderData();
    const {_id, details, email, price, name, photo, quantity, ratting,userName} = data;
    const navigate = useNavigate();
    console.log(data);
    useTitle('AllToyViewDetails')
    const handelCheckOut = (event)=>{
            event.preventDefault()
            const bookingRow = {
                toyName: name,
                custerName: userName,
                email,
                price: price,
                photo: photo,
                quantity: quantity,
                details: details,
                ratting: ratting,
                service_id: _id
            }
            fetch('https://sports-car-server.vercel.app/bookings',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(bookingRow)
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Booking added successfully",
                        icon: "success"
                      });
                }
              navigate('/myToys')
            })
    };

    return (
        <div className="ml-10 mr-5 mb-5">
            <form onSubmit={handelCheckOut}>
                <div className="sm:grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <label className="block mb-2" htmlFor="">Toy Name</label>
                        <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="name" defaultValue={name} id="" placeholder="Enter Toy Name" required />
                    </div>
                    <div>
                        <label className="block mb-2" htmlFor="">User Name</label>
                        <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="userName" id="" defaultValue={userName} placeholder="Enter User Name" required />
                    </div>
                    <div>
                        <label className="block mb-2" htmlFor="">Email</label>
                        <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="email" name="email" id="" defaultValue={email} placeholder="Enter Email" required />
                    </div>
                    <div>
                        <label className="block mb-2" htmlFor="">Price</label>
                        <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="price" id="" defaultValue={'$'+ price} placeholder="Enter Price" required />
                    </div>
                    <div>
                        <label className="block mb-2" htmlFor="">Ratting</label>
                        <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="ratting" id="" defaultValue={ratting} placeholder="Enter Ratting" required />
                    </div>
                    <div>
                        <label className="block mb-2" htmlFor="">Available Quantity</label>
                        <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="quantity" id="" defaultValue={quantity} placeholder="Available Quantity" required />
                    </div>

                </div>
                <div>
                    <label className="block mb-2" htmlFor="">Photo</label>
                    <input className="outline-none border-solid border-[1px] rounded w-[935px] border-[black] mb-2 pl-3 pt-1 pb-1" type="text" name="photo" id="" defaultValue={photo} placeholder="Photo Url" required />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="">Details Description</label>
                    <textarea className="outline-none border-solid border-[1px] rounded w-[935px] border-[black] pl-3 pt-1 pb-1 mb-4" name="details" id="" defaultValue={details} required placeholder="Details"></textarea>
                </div>
                <input className="w-[935px] bg-red-600 rounded hover:bg-red-500 text-white pt-1 pb-1" type="submit" value="Booking Toy" />
            </form>
        </div>
    );
};

export default AllToyViewDetails;