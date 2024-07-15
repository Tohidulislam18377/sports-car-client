import { Link } from "react-router-dom";
import './ErrorPage.css'
import useTitle from "../../UseTitle/UseTitle";
const ErrorPage = () => {
    useTitle('ErrorPage')
    return (
        <div className="page-not-found flex justify-center items-center">
            <Link to={'/'} className="bg-red-600 pl-3 pr-3 pt-1 pb-1 rounded-2xl text-white hover:bg-red-400">Home</Link>
        </div>
    );
};

export default ErrorPage;