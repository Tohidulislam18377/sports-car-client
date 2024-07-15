import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../UseTitle/UseTitle";


const ViewDetails = () => {
    const view = useLoaderData();
    const { name, price, rating, img2 } = view;
    const navigate = useNavigate();
    useTitle('ViewDetails')
    console.log(view);
    return (
        <div className="border-solid border-2 border-[red] rounded-xl mb-5 m-5">
        <img className="w-[95%] ml-6 mt-4 rounded " src={img2} alt="" />
        <div className="text-center">
            <p className="text-3xl font-medium">{name}</p>
            <p>Price $: {price}</p>
            {/* <p>{ratting}</p> */}
            <Rating className="mb-3" 
                placeholderRating={rating}
                readonly
                emptySymbol={<FaStarHalfAlt />}
                placeholderSymbol={ <FaStar />}
                fullSymbol={<FaStar />}
            />
            <Link onClick={navigate(-1)} className='block bg-[red] text-white rounded-2xl] view-details bottom-0'>Go Back</Link>
        </div>
    </div>
    );
};

export default ViewDetails;