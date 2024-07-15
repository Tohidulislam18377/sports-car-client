import { useLoaderData } from "react-router-dom";
import Police from "../Police/Police";
import useTitle from "../../UseTitle/UseTitle";


const MiniPolice = () => {
    const polices = useLoaderData();
    useTitle('MiniPolice')
    console.log(polices);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[800px] mx-auto gap-x-5">
            {
                polices.map(police =><Police
                    key={police._id}
                    police={police}
                ></Police>)
            }
        </div>
    );
};

export default MiniPolice;