import { useLoaderData } from "react-router-dom";
import AllToysDetails from "../AllToysDetails/AllToysDetails";
import useTitle from "../../UseTitle/UseTitle";

const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys);
    useTitle('AllToys')
    return (
        <>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-5 ml-8 mr-4 mb-5">
            {
                toys.map(toy=><AllToysDetails
                key={toy._id}
                toy = {toy}
                ></AllToysDetails>)
            }
        </div>
        </>
    );
};

export default AllToys;