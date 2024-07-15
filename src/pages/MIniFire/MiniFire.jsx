import { useLoaderData } from "react-router-dom";
import Truck from "../Truck/Truck";
import useTitle from "../../UseTitle/UseTitle";

const MiniFire = () => {
    const trucks = useLoaderData();
    useTitle('MiniFire')
    console.log(trucks);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[800px] mx-auto gap-x-5 mb-5">
            {
                trucks.map(truck => <Truck
                    key={truck._id}
                    truck={truck}
                ></Truck>)
            }
        </div>
    );
};

export default MiniFire;