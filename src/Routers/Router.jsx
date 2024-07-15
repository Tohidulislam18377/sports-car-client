import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import MiniFire from "../pages/MIniFire/MiniFire";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import MiniPolice from "../pages/MiniPolice/MiniPolice";
import PoliceDetails from "../pages/PoliceDetails/PoliceDetails";
import SubSportsCar from "../pages/SubSportsCar/SubSportsCar";
import SportsDetails from "../pages/SportsDetails/SportsDetails";
import PrivateRouter from "./PrivateRouter";
import AllToyViewDetails from "../pages/AllToyViewDetails/AllToyViewDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'allToys',
                element: <AllToys />,
                loader: () => fetch('https://sports-car-server.vercel.app/sports')
            },
            {
                path: 'myToys',
                element: <PrivateRouter><MyToys /></PrivateRouter>
            },
            {
                path: 'addToys',
                element: <AddToys />
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'singUp',
                element: <SingUp />
            },
            {
                path: 'miniFireTruck',
                element: <MiniFire />,
                loader: () => fetch('https://sports-car-server.vercel.app/trucks')
            },
            {
                path: 'viewDetails/:id',
                element: <PrivateRouter><ViewDetails /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://sports-car-server.vercel.app/trucks/${params.id}`)
            },
            {
                path: 'miniPolice',
                element: <MiniPolice />,
                loader: () => fetch('https://sports-car-server.vercel.app/polices')
            },
            {
                path: 'PoliceDetails/:id',
                element: <PrivateRouter><PoliceDetails /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://sports-car-server.vercel.app/polices/${params.id}`)
            },
            {
                path: 'subSportsCar',
                element: <SubSportsCar />,
                loader: () => fetch('https://sports-car-server.vercel.app/subSports')
            },
            {
                path: 'sportsDetails/:id',
                element: <PrivateRouter><SportsDetails /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://sports-car-server.vercel.app/subSports/${params.id}`)
            },
            {
                path: 'allToyViewDetails/:id',
                element: <PrivateRouter><AllToyViewDetails /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://sports-car-server.vercel.app/sports/${params.id}`)
            },
            {
                path: 'update/:id',
                element: <Update />,
                loader: ({ params }) => fetch(`https://sports-car-server.vercel.app/bookings/${params.id}`)
            }            
          
        ]
    }
]);

export default router;