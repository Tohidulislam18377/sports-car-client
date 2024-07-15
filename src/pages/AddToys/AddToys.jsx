import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../UseTitle/UseTitle";


const AddToys = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('AddToys')
    const handelAddToy = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = target.name.value;
        const userName = target.userName.value;
        const email = user.email;
        const subCategory = target.category.value;
        const price = target.price.value;
        const ratting = target.ratting.value;
        const quantity = target.quantity.value;
        const details = target.details.value;
        const photo = target.photo.value;
        console.log(name, userName, email, subCategory, price, quantity, ratting, details, photo);
        const addSports = { name, userName, email, subCategory, price, quantity, ratting, details, photo }
        fetch('https://sports-car-server.vercel.app/sports', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addSports)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Sports car added successfully",
                        icon: "success"
                    });
                }
                navigate('/allToys')
            })
    };

    return (
            <div className="ml-8 mr-5 mb-5">
                <form onSubmit={handelAddToy}>
                    <div className="sm:grid grid-cols-1 lg:grid-cols-2">
                        <div>
                            <label className="block mb-2" htmlFor="">Toy Name</label>
                            <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="name" id="" placeholder="Enter Toy Name" required />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="">User Name</label>
                            <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="userName" defaultValue={user?.displayName} id="" placeholder="Enter User Name" required />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="">Email</label>
                            <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="email" name="email" defaultValue={user?.email} id="" placeholder="Enter Email" required />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="">Sub-Category</label>
                            <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1 " type="text" name="category" id="" placeholder="Sub-Category" required />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="">Price</label>
                            <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="price" id="" placeholder="Enter Price" required />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="">Ratting</label>
                            <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="ratting" id="" placeholder="Enter Ratting" required />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="">Available Quantity</label>
                            <input className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] mb-1 pl-3 pt-1 pb-1" type="text" name="quantity" id="" placeholder="Available Quantity" required />
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="">Details Description</label>
                            <textarea className="outline-none border-solid border-[1px] rounded w-[450px] border-[black] pl-3 pt-1 pb-1" name="details" id="" required placeholder="Details"></textarea>
                        </div>
                        <div>
                            <label className="block mb-2" htmlFor="">Photo</label>
                            <input className="outline-none border-solid border-[1px] rounded w-[935px] border-[black] mb-5 pl-3 pt-1 pb-1" type="text" name="photo" id="" placeholder="Photo Url" required />
                        </div>
                    </div>
                    <input className="w-[935px] bg-red-600 rounded hover:bg-red-500 text-white pt-1 pb-1" type="submit" value="Add Toy" />
                </form>
            </div>
    );
};

export default AddToys;