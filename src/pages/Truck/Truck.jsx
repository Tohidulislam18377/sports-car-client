import Rating from 'react-rating';
import './Truck.css'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../UseTitle/UseTitle';
const Truck = ({ truck }) => {
    const { _id, name, price, rating, img1 } = truck;
    useTitle('Truck')
    // console.log(truck);
    return (
        <div className="border-solid border-2 border-[red] rounded-xl">
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
                <Link to={`/viewDetails/${_id}`} className='block bg-[red] text-white rounded-2xl] view-details bottom-0'>View Details</Link>
            </div>
        </div>
    );
};

export default Truck;