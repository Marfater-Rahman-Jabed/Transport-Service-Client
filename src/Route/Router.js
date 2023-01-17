import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home";
import Login from "../Page/Login/Login";
import LogIn from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import SeeALLSercice from "../Page/SeeALLSercice";
import ViewPage from "../Page/ViewPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allservices',
                element: <SeeALLSercice></SeeALLSercice>
            }, {
                path: '/Viewpage/:id',
                element: <ViewPage></ViewPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])