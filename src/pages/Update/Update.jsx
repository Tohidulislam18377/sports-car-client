import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../UseTitle/UseTitle";

const Update = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    console.log(data);
    const {_id,price, quantity,details} = data;
        useTitle('Update')
    const handelUpdate = (event)=>{
        event.preventDefault();
        const target = event.target;
        const price = target.price.value;
        const quantity = target.quantity.value;
        const details = target.details.value;
        const updateData = {price,quantity,details};
        fetch(`https://sports-car-server.vercel.app/bookings/${_id}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Good job!",
                    text: "Coffee Updated Successfully",
                    icon: "success"
                });
                navigate('/myToys')
            }
        })
        .catch((error) => console.log(error.message)) 
    };

    return (
        <div className="ml-10 mr-5 mb-5">
        <form onSubmit={handelUpdate}>
            <div className="sm:grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <label className="block mb-2" htmlFor="">Price</label>
                    <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="price" id="" defaultValue={price} placeholder="Enter Price" required />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="">Available Quantity</label>
                    <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="quantity" id="" defaultValue={quantity} placeholder="Available Quantity" required />
                </div>
            </div>
            <div>
                <label className="block mb-2" htmlFor="">Details Description</label>
                <textarea className="outline-none border-solid border-[1px] rounded w-[935px] border-[black] pl-3 pt-1 pb-1 mb-4" name="details" id="" defaultValue={details} required placeholder="Details"></textarea>
            </div>
            <input className="w-[935px] bg-red-600 rounded hover:bg-red-500 text-white pt-1 pb-1" type="submit" value="Update Toy" />
        </form>
    </div>
    );
};

export default Update;