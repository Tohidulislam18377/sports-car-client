import { useLoaderData } from "react-router-dom";
import Sports from "../Sports/Sports";
import useTitle from "../../UseTitle/UseTitle";

const SubSportsCar = () => {
    const sportsCar = useLoaderData()
    console.log(sportsCar);
    useTitle('SubSportsCar')
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[800px] mx-auto gap-x-5">
            {
                sportsCar.map(Sport => <Sports
                    key={Sport._id}
                    sport = {Sport}
                ></Sports>)
            }
        </div>
    );
};

export default SubSportsCar;