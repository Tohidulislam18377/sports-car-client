import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/elite-typo.png'

const Header = () => {
    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-[#02071a] mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-white hover:bg-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className="mr-5"><Link to={'/'}>Home</Link></li>
                            <li className="mr-5">
                                <Link to={'/allToys'}>AllToys</Link>
                            </li>
                            <li className="mr-5"><Link to={'/myToys'}>MyToys</Link></li>
                            <li className="mr-5"><Link to={'/addToys'}>AddToys</Link></li>
                            <li className=""><Link to={'/blogs'}>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'}><img className="w-36 h-12 ml-4" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 text-white pt-5 pb-5">
                        <li className="mr-5"><Link to={'/'}>Home</Link></li>
                        <li className="mr-5">
                            <Link to={'/allToys'}>AllToys</Link>
                        </li>
                        <li className="mr-5"><Link to={'/myToys'}>MyToys</Link></li>
                        <li className="mr-5"><Link to={'/addToys'}>AddToys</Link></li>
                        <li className=""><Link to={'/blogs'}>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end mr-5 text-white">
                    <Link className="bg-red-600 pt-1 pb-2 pl-5 pr-5 rounded-2xl hover:bg-red-400" to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;