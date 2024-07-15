import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useTitle from "../../UseTitle/UseTitle";

const Police = ({police}) => {
    const { _id, name, price, rating, img1 } = police;
    useTitle('Police')
    return (
             <div className="border-solid border-2 border-[red] rounded-xl mb-5">
            <img className="h-48 ml-10 mt-2 rounded" src={img1} alt="" />
            <div className="text-center">
                <p className="text-3xl font-medium">{name}</p>
                <p>Price $: {price}</p>
                {/* <p>{ratting}</p> */}
                <Rating 
                    placeholderRating={rating}
                    readonly
                    emptySymbol={<FaStarHalfAlt />}
                    placeholderSymbol={ <FaStar />}
                    fullSymbol={<FaStar />}
                />
                <Link to={`/PoliceDetails/${_id}`} className='block bg-[red] text-white rounded-2xl] view-details bottom-0'>View Details</Link>
            </div>
        </div>
    );
};

export default Police;