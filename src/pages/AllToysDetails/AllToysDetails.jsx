import { Link } from "react-router-dom";
import useTitle from "../../UseTitle/UseTitle";


const AllToysDetails = ({ toy }) => {
    const {_id,name,photo,price,userName,quantity,subCategory} = toy;
    console.log(toy);
    useTitle('AllToysDetails')
    return (
        <div>
            <div className="card card-compact bg-base-100 w-[300px] shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="ml-5 mt-2 mr-5">
                    <h2 className="text-2xl font-medium ">{userName}</h2>
                    <p>Toy Name : {name}</p>
                    <p>Sub-Category : {subCategory}</p>
                    <p>Price : ${price}</p>
                   <p>Available Quantity : {quantity}</p>
                </div>
                   <Link to={`/allToyViewDetails/${_id}`} style={{borderRadius:'0px 0px 15px 15px'}} className="bg-red-600 w-full text-center mt-2 bottom-0 p-1 text-white hover:bg-red-500">View Details</Link>
            </div>
        </div>
    );
};

export default AllToysDetails;