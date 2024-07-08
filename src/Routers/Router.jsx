import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'allToys',
                element: <AllToys />
            },
            {
                path: 'myToys',
                element: <MyToys />
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
            }
        ]
    }
]);

export default router;