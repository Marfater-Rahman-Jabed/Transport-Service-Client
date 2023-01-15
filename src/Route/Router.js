import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home";
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
            }
        ]
    }
])