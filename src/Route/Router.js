import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Page/AddService";
import Blog from "../Page/Blog/Blog";
import Home from "../Page/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import MyReviews from "../Page/MyReviews";
import SeeALLSercice from "../Page/SeeALLSercice";
import ViewPage from "../Page/ViewPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            },
            {
                path: '/myreview',
                element: <PrivateRoute> <MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }, {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])