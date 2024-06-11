
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";



export const router = createBrowserRouter([ 
    {
        element: <Layout />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '*',
                // element: < />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])